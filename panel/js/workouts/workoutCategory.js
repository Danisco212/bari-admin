// get the sub categories of the workout
var workoutId = document.getElementById("cat_id").innerText

function getSubCategories(){
    fetch(`${baseUrl}workout/getWorkoutCategory?categoryId=${workoutId}`, {
        method: "GET",
        headers: {
            "Authorization": "Bearer "+cookies.bari_token
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data.data)
        document.getElementById("workoutTitle").innerText = data.data.workout.name
        document.getElementById("workoutDescription").innerText = data.data.workout.description

        data.data.plans.forEach(plan=>{
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
    title.innerText = plan.name
    var workoutSize = document.createElement('p')
    workoutSize.innerText = plan.workout.length + " Exercise(s)"

    detailsHolder.appendChild(title)
    detailsHolder.appendChild(workoutSize)


    var image = document.createElement('img')

    card.appendChild(image)
    card.appendChild(detailsHolder)

    card.addEventListener('click', ()=>{
        location.href = "http://localhost:8888/Bari/admin-workout-subcategory?id="+plan.subCatId
    })

    return card;
}