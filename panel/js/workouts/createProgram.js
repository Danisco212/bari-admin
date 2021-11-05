var catId = document.getElementById("cat_id").innerText


function getCateDetails() {
    fetch(`${baseUrl}workout/getWorkoutCategory?categoryId=${catId}`, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + cookies.bari_token
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById("catName").disabled = true
            document.getElementById("catName").value = data.name
        })
        .catch(err => {
            console.log(err)
        })
}
getCateDetails()

var loading = false
var duration = document.getElementById('duration')
var mName = document.getElementById('wName')

function createProgram() {
    var fileHolrder = document.getElementById('media').files
    console.log(fileHolrder)

    if (duration.value.length > 0 && mName.value.length > 0) {
        saveImage(fileHolrder[0])
    } else {
        alert("Please fill all fields")
    }
}

function addWorkout(workout) {
    fetch(`${baseUrl}workout/add`, {
        method: 'POST',
        headers: {
            "Authorization": "Bearer " + cookies.bari_token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(workout)
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                alert(data.message)
                location.href = "http://localhost/wordpress/program/?id=" + catId
            } else {
                alert("Something went wrong, try again later")
            }
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => { loading = false })
}

async function saveImage(file) {
    loading = true
    var formData = new FormData()
    formData.append("content", file)

    fetch(`${baseUrl}auth/upload`, {
        method: 'POST',
        headers: {
            "Authorization": "Bearer " + cookies.bari_token
        },
        body: formData
    })
        .then(res => res.text())
        .then(data => {
            var workout = {
                "duration": parseFloat(duration.value),
                "name": mName.value,
                "dataUrl": data,
                "videoUrl": "",
                "workoutCategory": {
                    "id": catId
                }
            }
            addWorkout(workout)
        })
        .catch(err => {
            console.log(err)
            loading = false
        })
}