var activityId = document.getElementById("activityId").innerText

var durationF = document.getElementById("newDuration")
var timedF = document.getElementById("timed")
var repsF = document.getElementById("reps")

var dayId = 0

// get day activity
function getDayActivity(){
    fetch(`${baseUrl}day-activity/${activityId}`, {
        headers: {
            "Authorization": "Bearer "+ cookies.bari_token
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        dayId = data.data.dayId
        durationF.value = data.data.duration
        if(data.data.type === 'TIMED'){
            timedF.checked = true
        }else{
            repsF.checked = true
        }
        document.getElementById("restDuration").value = data.data.restDuration ?? 0
        document.getElementById("workout_select").value = data.data.activityId
    })
    .catch(err=>{
        console.log(err)
    })
}

// get all activities
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
        getDayActivity()
    })
    .catch(err=>{
        console.log("The error that i can see is this", err)
    })
}

getWorkouts()

// update day activity
function updateDayActivity(){
    // check fields
    if(document.getElementById("newDuration").value === ''){
        alert("Please enter valid duration")
        return
    }
    if(document.getElementById("restDuration").value === ''){
        alert("Please enter valid rest duration")
        return
    }

    var activity = {
        restDuration: parseInt(document.getElementById("restDuration").value, 10),
        id: activityId,
        dayId: dayId,
        duration: document.getElementById("newDuration").value,
        type: document.getElementById("reps").checked ? "REPS" : "TIMED",
        activityId: parseInt(document.getElementById("workout_select").value, 10),
    }
    console.log("the activity is this", activity)
    fetch(`${baseUrl}day-activity/save`, {
        method: "POST",
        headers: {
            "Authorization" : "Bearer " + cookies.bari_token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(activity)
    })
    .then(res=>res.json())
    .then(data=>{
        alert("Updated successfully")
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })
}
