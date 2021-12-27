var workoutId = document.getElementById("cat_id").innerText

document.getElementById("add_btn").addEventListener('click', ()=>{
    location.href = "http://localhost:8888/Bari/admin-create-workout/"
})

function getSubWorkouts(){
    fetch(`${baseUrl}workout/getWorkoutSubCategories?subCatId=${workoutId}`, {
        method: "GET",
        headers: {
            "Authorization": "Bearer "+cookies.bari_token
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data.data)
        document.getElementById("workoutTitle").innerText = data.data.plan.name
        document.getElementById("workoutDescription").innerText = data.data.plan.description ?? ""

        data.data.plan.workout.forEach(plan=>{
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
    title.innerText = workout.name
    var workoutSize = document.createElement('p')
    workoutSize.innerText = workout.duration + " " + (workout.type == "TIMED" ? " Seconds" : " Reps")

    detailsHolder.appendChild(title)
    detailsHolder.appendChild(workoutSize)


    var image = document.createElement('img')
    image.src = workout.dataUrl

    card.appendChild(image)
    card.appendChild(detailsHolder)

    card.addEventListener('click', ()=>{
        
    })

    return card;
}