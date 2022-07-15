
    var loading = false
    var workoutName = document.getElementById("workoutName")
    var workoutImage = document.getElementById("workoutImage")
    var workoutDescription = document.getElementById("workoutDescription")

    var size = 0;

function getCategories() {
    fetch(`${baseUrl}programs`, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + cookies.bari_token
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data.data)
            size = data.data.length;
            document.getElementsByClassName("progHolder")[0].innerHTML = ""
            data.data.forEach(program => {
                document.getElementsByClassName("progHolder")[0].appendChild(programCard(program))
            });
        })
        .catch(err => {
            console.log(err)
        })
}

getCategories()

function programCard(program) {
    var card = document.createElement('div')
    card.className = "program"

    var img = document.createElement('img')
    img.src = program.programImg

    var name = document.createElement('p')
    name.innerText = program.name

    var deleteHolder = document.createElement('div')
    deleteHolder.style.flex = 1
    deleteHolder.style.display = "flex"
    deleteHolder.style.flexDirection = 'row'
    deleteHolder.style.alignItems = 'center'
    deleteHolder.style.justifyContent="flex-end"

    var cloneIcon = document.createElement('h3')
    cloneIcon.innerHTML = 'Clone'
    cloneIcon.style.marginRight = "10px"

    cloneIcon.addEventListener('click', function(){
        cloneWorkout(program.id)
    })

    var deleteIcon = document.createElement('img')
    deleteIcon.src = "https://barilifestyle.com/wp-content/themes/BariAdmin/panel/images/delete.png"

    deleteIcon.addEventListener('click', function(){
        // delete the workout
        if(loading){
            return
        }
        var conf = confirm("Delete this workout?")
        if(conf){
            loading = true
            fetch(`${baseUrl}programs/delete?id=${program.id}`,{
                method: "POST",
                headers: {
                    "Authorization":"Bearer "+cookies.bari_token
                }
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.success){
                    location.reload()
                }
            })
            .catch(err=>{
                console.log(err)
            })
            .finally(()=>{
                loading = false
            })
        }
    })

    deleteHolder.appendChild(cloneIcon)
    deleteHolder.appendChild(deleteIcon)
    card.appendChild(img)
    card.appendChild(name)

    card.appendChild(deleteHolder)

    name.addEventListener('click', function (e) {
        location.href = "https://barilifestyle.com/admin-workout-category?id=" + program.id 
    })

    img.addEventListener('click', function (e) {
        location.href = "https://barilifestyle.com/admin-workout-category?id=" + program.id
    })

    return card
}


function uploadImage(){
    // check inputs
    if(workoutName.value.length<=0){
        alert("Please enter a valid workout name")
        return
    }
    if(workoutImage.files.length<=0){
        alert("Please select a workout image")
        return
    }

    loading = true
    var formData = new FormData()
    formData.append("content", workoutImage.files[0])

    fetch(`${baseUrl}auth/upload`, {
        method: 'POST',
        headers: {
            "Authorization": "Bearer " + cookies.bari_token
        },
        body: formData
    })
        .then(res => res.text())
        .then(data => {
            addBaseWorkout(data)
        })
        .catch(err=>{
            loading = false
            console.log("error uploading file")
        })
}

function addBaseWorkout(imageUrl){
    var reqBody = {
        programImg: imageUrl,
        name: workoutName.value,
        orderPosition: size,
        description: workoutDescription.value,
    }

    fetch(`${baseUrl}programs/save`, {
        method: "POST",
        headers: {
            "Authorization": "Bearer "+cookies.bari_token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody)
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        if(data.success){
            location.reload()
        }
    })
    .catch(err=>{
        console.log(err)
    })
    .finally(()=>{
        loading = false
    })
}

function cloneWorkout(programId) {
    let agree = confirm('Are you sure you want to clone this workout and all its contents?')

    if(agree){
        fetch(`${baseUrl}programs/copy/${programId}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+cookies.bari_token,
            }
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            alert('Workout has been cloned')
            location.reload()
        })
        .catch(err => {
            console.error(err)
        })
    }
}