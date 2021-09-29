document.getElementById("mFile").addEventListener('change', function (e) {
    var reader = new FileReader()

    reader.onload = function (e) {
        document.getElementById("image_trophy").src = e.target.result
        document.getElementById("image_trophy").style.display = "block"
    }
    reader.readAsDataURL(document.getElementById("mFile").files[0])
})

document.getElementById("mType").disbled = true

var loading = false

function createTrophy() {
    if (loading) { return }
    // validate fields
    var name = document.getElementById('name').value
    var req = document.getElementById('req').value

    if (name.length > 0 && req.length > 0) {
        var trophy = {
            "image": "",
            "name": name,
            "target": parseInt(req)
        }
        postTrophy(trophy)
        // console.log(trophy)
    } else {
        alert("Fill all fields to create workout")
    }
}

function postTrophy(trophy) {
    loading = true
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
                location.href = "http://localhost/wordpress/trophies/"
            }
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => { loading = false })
}