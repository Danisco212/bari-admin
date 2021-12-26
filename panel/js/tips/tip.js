document.getElementById("mFile").addEventListener('change', function (e) {
    var reader = new FileReader()

    reader.onload = function (e) {
        document.getElementById("image_tip").src = e.target.result
        document.getElementById("image_tip").style.display = "block"
    }
    reader.readAsDataURL(document.getElementById("mFile").files[0])
})

var loading = false

function postTip() {
    if (loading) {
        return
    }

    var title = document.getElementById('title').value
    var body = document.getElementById('mBody').value
    // validate fields
    if (document.getElementById("mFile").files.length <= 0) {
        // no files
        alert("Please Select an image")
        return
    }
    if (title.length <= 0 || body.length <= 0) {
        alert("Please fill all fields")
        return
    }

    console.log(body.split("\n").join("<br/>"))

    // make post
    loading = true
    var formData = new FormData()
    formData.append("content", document.getElementById("mFile").files[0])
    formData.append("postData", `{\n  \n  \"body\": \"${body.split("\n").join("<br/>")}\",\n  \"contentType\": \"TIP\",\n  \"createdBy\": ${cookies.bari_id},\n  \"title\": \"${title}\"\n}`)
    fetch(`${baseUrl}add`, {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + cookies.bari_token,
            "user_id": cookies.bari_id
        },
        body: formData
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.tips){
                // go to details page
                alert("Tip has beem added")
                location.href = "http://localhost:8888/Bari/admin-tip-detail?id=" + data.tips[0].postId
            }
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            loading = false
        })
}