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

function createProgram() {

    var duration = document.getElementById('duration').value
    var name = document.getElementById('wName').value
    var fileHolrder = document.getElementById('media').files
    console.log(fileHolrder)

    var workout = {
        "duration": parseFloat(duration),
        "name": name,
        "dataUrl": "",
        "videoUrl": "",
        "workoutCategory": {
            "id": catId
        }
    }

    console.log(workout)

    saveImage(fileHolrder[0])

    // fetch(`${baseUrl}workout/add`, {
    //     method: 'POST',
    //     headers: {
    //         "Authorization": "Bearer " + cookies.bari_token
    //     },
    //     body: JSON.stringify(workout)
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
}

async function saveImage(file) {
    var formData = new FormData()
    formData.append("content", file)

    fetch(`${baseUrl}auth/upload`, {
        method: 'POST',
        headers: {
            "Authorization": "Bearer " + cookies.bari_token
        },
        body: formData
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
}