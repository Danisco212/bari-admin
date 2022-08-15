// get the sub categories of the workout
var workoutId = document.getElementById("cat_id").innerText

function getSubCategories(){
    fetch(`${baseUrl}programs/days/${workoutId}`, {
        method: "GET",
        headers: {
            "Authorization": "Bearer "+cookies.bari_token
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data.data)
        // document.getElementById("workoutTitle").innerText = data.data.workout.name
        // document.getElementById("workoutDescription").innerText = data.data.workout.description

        data.data.forEach(plan=>{
            document.getElementById("plan-list").appendChild(createSessionCard(plan))
        })
    })
    .catch(err=>{
        console.log("The error that i can see is this", err)
    })
}

getSubCategories()

function createSessionCard(plan){

    var card = document.createElement('div')
    card.className = "workout"

    var detailsHolder = document.createElement('div')
    detailsHolder.className = "dets"
    var title = document.createElement('h3')
    title.innerText = plan.day
    var workoutSize = document.createElement('p')
    // workoutSize.innerText = plan.workout.length + " Exercise(s)"

    detailsHolder.appendChild(title)
    detailsHolder.appendChild(workoutSize)


    var image = document.createElement('img')

    var deleteHolder = document.createElement('div')
    deleteHolder.style.display = "flex"
    deleteHolder.style.flex = 1
    deleteHolder.style.alignItems = "center"
    deleteHolder.style.justifyContent = "flex-end"

    var clone = document.createElement('p')
    clone.innerHTML = 'Clone'
    deleteHolder.appendChild(clone)

    clone.addEventListener('click', function (){
        // ask to clone day
        if(loading) return;
        var conf = confirm('Clone this day?')
        if(conf){
            // clone the day
            fetch(`${baseUrl}day-activity/copy/` +plan.id, {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer " + cookies.bari_token
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.success){
                    location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                loading = false;
            })
        }
    })
    
    var deleteImg = document.createElement('img')
    deleteImg.src = "https://barilifestyle.com/wp-content/themes/BariAdmin/panel/images/delete.png"
    deleteHolder.appendChild(deleteImg)

    deleteImg.addEventListener('click', function(){
        if(loading){
            return
        }
        loading = true
        var conf = confirm('Delete this sub category?')
        if(conf){
            fetch(`${baseUrl}programs/delete-day/${plan.id}`, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer "+cookies.bari_token
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

    card.appendChild(image)
    card.appendChild(detailsHolder)
    card.appendChild(deleteHolder)

    image.addEventListener('click', ()=>{
        location.href = "https://barilifestyle.com/admin-workout-subcategory?id="+plan.id + "&catId=" +workoutId
    })

    detailsHolder.addEventListener('click', ()=>{
        location.href = "https://barilifestyle.com/admin-workout-subcategory?id="+plan.id + "&catId=" +workoutId
    })

    return card;
}

var loading = false

function createSession(){
    if(document.getElementById("newName").value == ""){
        return
    }
    var newSession = {
        day: document.getElementById("newName").value,
        programId: workoutId,
        dayImg: '',
    }
    loading = true
    fetch(`${baseUrl}programs/save-day`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+cookies.bari_token
        },
        body: JSON.stringify(newSession)
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

function getWorkoutInfo() {
    fetch(`${baseUrl}programs/${workoutId}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + cookies.bari_token,
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log("workout data is", data)
        document.getElementById("workoutName").value = data.data.name
        document.getElementById("workoutDesc").value = data.data.description
    })
    .catch(err => {
        console.log(err)
    })
}

getWorkoutInfo()

function updateWorkout(){
    if(document.getElementById("workoutName").value == ""){
        alert('Please fill all fields')
        return
    }

    if(document.getElementById("workoutDesc").value == ""){
        alert('Please fill all fields')
        return
    }

    var updateInfo = {
        name: document.getElementById("workoutName").value,
        description: document.getElementById("workoutDesc").value,
        id: workoutId,
    }

    loading = true
    fetch(`${baseUrl}programs/save`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+cookies.bari_token
        },
        body: JSON.stringify(updateInfo)
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