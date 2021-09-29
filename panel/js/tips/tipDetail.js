var postId = document.getElementById("post_id").innerText

function getTip() {
    fetch(`${baseUrl}post/${postId}`, {
        method: 'GET',
        headers: {
            "user_id": cookies.bari_id,
            "Authorization": `Bearer ${cookies.bari_token}`
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.tips) {
                // fill tip info
                fillInformation(data.tips[0])
            }
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {

        })
}

getTip()

// disable all fields
document.getElementById("title").disabled = true
document.getElementById("mBody").disabled = true

function fillInformation(tip) {
    document.getElementById("image_tip").src = tip.postMediaUrl
    document.getElementById("image_tip").style.display = "block"
    document.getElementById('title').value = tip.title
    document.getElementById('mBody').value = tip.body.split("<br/>").join("\n")
}

var loading = false

function deleteTip() {
    if (loading) {
        return
    }
    var conf = confirm("Delete this tip for all users")

    if (conf) {
        loading = true
        // delete
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                loading = false
                alert("Tip Deleted")
                console.log(this.responseText);
            }
        });

        xhr.open("DELETE", `${baseUrl}post/${postId}`);
        xhr.setRequestHeader("user_id", cookies.bari_id);
        xhr.setRequestHeader("Authorization", `Bearer ${cookies.bari_token}`);

        xhr.send();
        // fetch(`${baseUrl}post/${postId}`, {
        //     method: 'DELETE',
        //     headers: {
        //         "user_id": cookies.bari_id,
        //         "Authorization": `Bearer ${cookies.bari_token}`
        //     }
        // }).then(res => {
        //     if (res.status == 200) {
        //         alert("Tip Deleted")
        //         location.href = "http://localhost/wordpress/tips"
        //     }
        // }).catch(err => {
        //     console.log(err)
        // }).finally(() => {
        //     loading = false
        // })
    }
}