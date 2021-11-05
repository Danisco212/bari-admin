var catId = document.getElementById("cat_id").innerText

document.getElementById('add_btn').addEventListener('click', function (e) {
    location.href = "http://localhost/wordpress/create-workout?id=4"
})

function getCateDetails() {
    fetch(`${baseUrl}workout/getWorkoutCategory?categoryId=${catId}`, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + cookies.bari_token
        }
    })
        .then(res => res.json())
        .then(data => {
            document.getElementById("programName").innerText = data.name
            getProgramWorkouts()
        })
        .catch(err => {
            console.log(err)
        })
}

getCateDetails()

function getProgramWorkouts() {
    fetch(`${baseUrl}workout/getWorkoutsByCategory?categoryId=${catId}&userId=${cookies.bari_id}`, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + cookies.bari_token
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.forEach(workout => {
                document.getElementsByClassName('workout_list')[0].appendChild(workoutCard(workout))
            });
        })
        .catch(err => {
            console.log(err)
        })
}

function workoutCard(workout) {
    var card = document.createElement('div')
    card.className = "workout"

    var img = document.createElement('img')
    img.src = workout.dataUrl ? workout.dataUrl : "http://localhost/wordpress/wp-content/themes/Bari%20Theme/images/new-logo.png"

    var dets = document.createElement('div')
    dets.className = "dets"

    var name = document.createElement('h4')
    name.innerText = workout.name

    var duration = document.createElement('p')
    duration.innerText = workout.duration + " minutes"

    dets.appendChild(name)
    dets.appendChild(duration)

    card.appendChild(img)
    card.appendChild(dets)


    card.addEventListener('click', function (e) {
        location.href = "http://localhost/wordpress/workout-detail/?id=" + workout.id
    })
    return card
}