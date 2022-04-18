var workoutId = document.getElementById("cat_id").innerText
var activityId = document.getElementById("activityId").innerText

// document.getElementById("add_btn").addEventListener('click', ()=>{
//     location.href = "https://barilifestyle.com/admin-create-workout/"
// })

function getWorkouts(){
    fetch(`${baseUrl}activity/all`, {
        method: "GET",
        headers: {
            "Authorization": "Bearer "+cookies.bari_token
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data.data)
        data.data.forEach(workout => {
            var option = document.createElement('option')
            option.innerHTML = workout.name
            option.value = workout.id
            document.getElementById("workout_select").appendChild(option);
        })
    })
    .catch(err=>{
        console.log("The error that i can see is this", err)
    })
}

getWorkouts();

function getSubWorkouts(){
    fetch(`${baseUrl}day-activity/days/${workoutId}`, {
        method: "GET",
        headers: {
            "Authorization": "Bearer "+cookies.bari_token
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data.data)
        // document.getElementById("workoutTitle").innerText = data.data.plan.name
        // document.getElementById("workoutDescription").innerText = data.data.plan.description ?? ""

        data.data.forEach(plan=>{
            document.getElementById("plan-list").appendChild(createSessionCard(plan))
        })
    })
    .catch(err=>{
        console.log("The error that i can see is this", err)
    })
}

getSubWorkouts()

function createSessionCard(workout){

    var card = document.createElement('div')
    card.className = "workout"

    var detailsHolder = document.createElement('div')
    detailsHolder.className = "dets"
    var title = document.createElement('h3')
    title.innerText = workout.activity.name
    var workoutSize = document.createElement('p')
    workoutSize.innerText = workout.duration + " " + (workout.type == "TIMED" ? " Seconds" : " Reps")

    detailsHolder.appendChild(title)
    detailsHolder.appendChild(workoutSize)

    detailsHolder.addEventListener('click', ()=>{
        // go to screen to edit
        location.href = "/admin-edit-dayactivity?id=" + workout.id
    })


    var image = document.createElement('img')
    image.src = workout.activity.contentImg

    var deleteImg = document.createElement('img')
    deleteImg.src = "https://barilifestyle.com/wp-content/themes/BariAdmin/panel/images/delete.png"
    deleteImg.style.marginRight = "20px"

    card.appendChild(image)
    card.appendChild(detailsHolder)
    card.appendChild(deleteImg)

    deleteImg.addEventListener('click', ()=>{
        if(loading){
            return
        }
    
        var conf = confirm("Delete this day activity")
        if(conf){
            loading = true
            fetch(`${baseUrl}day-activity/delete/${workout.id}`, {
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

    return card;
}

var loading = false

function uploadImage(){
    if(document.getElementById("newImage").files.length <= 0){
        return
    }

    loading = true
    var formData = new FormData()
    formData.append("content", document.getElementById("newImage").files[0])

    fetch(`${baseUrl}auth/upload`, {
        method: 'POST',
        headers: {
            "Authorization": "Bearer " + cookies.bari_token
        },
        body: formData
    })
        .then(res => res.text())
        .then(data => {
            createWorkout(data)
        })
        .catch(err=>{
            console.log(err)
        })

}

function createDayActivity(){
    var activity = {
        restDuration: parseInt(document.getElementById("restDuration").value, 10),
        duration: document.getElementById("newDuration").value,
        type: document.getElementById("reps").checked ? "REPS" : "TIMED",
        activityId: parseInt(document.getElementById("workout_select").value, 10),
        dayId: workoutId,
    }
    loading = true
    fetch(`${baseUrl}day-activity/save`, {
        method :"POST",
        headers: {
            "Authorization": "Bearer "+cookies.bari_token,
            "Content-Type":"application/json"
        },
        body: JSON.stringify(activity)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.success){
            location.reload()
        }
        // console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })
    .finally(()=>{
        loading = false
    })
}

function createWorkout(dataUrl){
    var newWorkout = {
        name: document.getElementById("newName").value,
        description: document.getElementById("newDesc").value,
        dataUrl: dataUrl,
        duration: document.getElementById("newDuration").value,
        subCategory: {
            subCatId: workoutId
        },
        type: document.getElementById("reps").checked ? "REPS" : "TIMED"
    }

    loading = true
    fetch(`${baseUrl}workout/add`, {
        method :"POST",
        headers: {
            "Authorization": "Bearer "+cookies.bari_token,
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newWorkout)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.success){
            location.reload()
        }
        // console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })
    .finally(()=>{
        loading = false
    })
}

// get day
function getDay(){
    fetch(`${baseUrl}programs/day/${workoutId}`, {
        headers: {
            "Authorization": "Bearer "+ cookies.bari_token
        }
    })
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        document.getElementById('dayName').innerHTML = res.data.day
    })
    .catch(err=>{
        console.log(err)
    })
}

getDay()