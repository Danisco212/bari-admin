var workoutId = document.getElementById("cat_id").innerText

// document.getElementById("add_btn").addEventListener('click', ()=>{
//     location.href = "http://localhost:8888/Bari/admin-create-workout/"
// })

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

    var deleteImg = document.createElement('img')
    deleteImg.src = ""
    deleteImg.style.marginRight = "20px"

    card.appendChild(image)
    card.appendChild(detailsHolder)
    // card.appendChild(deleteImg)

    deleteImg.addEventListener('click', ()=>{
        var conf = confirm("Delete this workout")
        if(conf){
            fetch(`${baseUrl}workout`, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer "+cookies.bari_token
                }
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
            .catch(err=>{
                console.log(err)
            })
            .finally(()=>{

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

function createWorkout(dataUrl){
    var newWorkout = {
        name: document.getElementById("newName").value,
        description: document.getElementById("newDesc").value,
        dataUrl: dataUrl,
        duration: document.getElementById("newDuration").value,
        subCategory: {
            subCatId: workoutId
        }
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