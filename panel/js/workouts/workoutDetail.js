var mName = document.getElementById('wName')
var duration = document.getElementById('duration')
var catName = document.getElementById("catName")
var wId = document.getElementById("w_id").innerText

mName.disabled = true
duration.disabled = true
catName.disabled = true

function getWorkoutDetails() {
    fetch(`${baseUrl}workout/getAllWorkouts`, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + cookies.bari_token
        }
    })
        .then(res => res.json())
        .then(data => {
            for (var i = 0; i < data.length; i++) {
                if (data[i].id == wId) {
                    fillDetails(data[i])
                    console.log(data[i])
                    getCateDetails(data[i].category_id)
                    break;
                }
            }
        })
        .catch(err => {
            console.log(err)
        })
}

function getCateDetails(id) {
    fetch(`${baseUrl}workout/getWorkoutCategory?categoryId=${id}`, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + cookies.bari_token
        }
    })
        .then(res => res.json())
        .then(data => {
            catName.value = data.name
        })
        .catch(err => {
            console.log(err)
        })
}

function fillDetails(workout) {
    mName.value = workout.name
    duration.value = workout.duration
}

getWorkoutDetails()
