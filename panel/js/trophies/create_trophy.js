document.getElementById("mFile").addEventListener('change', function (e) {
    var reader = new FileReader()

    reader.onload = function (e) {
        document.getElementById("image_trophy").src = e.target.result
        document.getElementById("image_trophy").style.display = "block"
    }
    reader.readAsDataURL(document.getElementById("mFile").files[0])
})

document.getElementById("mType").disbled = true
var mName = document.getElementById('name')
var req = document.getElementById('req')

var loading = false

function createTrophy() {
    if (loading) { return }
    // validate fields

    if (mName.value.length > 0 && req.value.length > 0) {
        saveImage(document.getElementById("mFile").files[0])
    } else {
        alert("Fill all fields to create workout")
    }
}

function saveImage(file) {
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
            var trophy = {
                "image": data,
                "name": mName.value,
                "target": parseInt(req.value)
            }
            postTrophy(trophy)
        })
        .catch(err => {
            console.log(err)
            loading = false
        })
}

function postTrophy(trophy) {
    fetch(`${baseUrl}trophies/add/runingTrophy`, {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + cookies.bari_token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(trophy)
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                alert("Added new trophie")
                location.href = "http://localhost:8888/Bari/admin-trophies/"
            }
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => { loading = false })
}