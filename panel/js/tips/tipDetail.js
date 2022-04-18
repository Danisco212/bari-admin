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
// document.getElementById("title").disabled = true
// document.getElementById("mBody").disabled = true

function fillInformation(tip) {
    document.getElementById("image_tip").src = tip.postMediaUrl
    document.getElementById("image_tip").style.display = "block"
    document.getElementById('title').value = tip.title
    document.getElementById('mBody').value = tip.body.split("<br/>").join("\n")
}

var loading = false

async function uploadImage() {
    var formData = new FormData();
    formData.append('content', document.getElementById("mFile").files[0]);

    var imageUrl = await fetch(`https://bariadmin.barilifestyle.com:2222/uploader/upload`, {
        method: 'POST',
        body: formData,
    });

    var parsedData = await imageUrl.text();
    return parsedData;
}

function deleteTip() {
    if (loading) {
        return
    }
    var conf = confirm("Delete this tip for all users")

    if (conf) {
        loading = true
        fetch(`${baseUrl}deleteTip/${postId}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+cookies.bari_token
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.success){
                location.href = "https://barilifestyle.com/admin-tips"
            }
        })
        .catch(err=>{
            console.log("The error is:=====", err)
        })
        .finally(()=>{
            loading = false
        })
    }
}

async function updateTip(){
    if(loading){
        return
    }

    var conf = confirm("Update this tip for all users")
    if(!conf){
        return
    }

    var formData = new FormData();

    var mImage = document.getElementById("image_tip").src
    if(document.getElementById("mFile").files.length >0){
        mImage = await uploadImage();
    }
    
    var title = document.getElementById('title').value;
    var body = document.getElementById('mBody').value;
    formData.append("postData", `{\n  \"postId\": ${postId},\n  \"body\": \"${body.split("\n").join("<br/>")}\",\n \"postMediaUrl\": \"${mImage}\",\n  \"contentType\": \"TIP\",\n  \"createdBy\": ${cookies.bari_id},\n  \"title\": \"${title}\"\n}`)
    fetch(`${baseUrl}add`, {
        method: 'POST',
        headers: {
            "Authorization": "Bearer " + cookies.bari_token,
            "user_id": cookies.bari_id
        },
        body: formData
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        alert("Tip has been succesfully Updated")
    })
    .catch(err=>{
        console.log(err)
    })
}