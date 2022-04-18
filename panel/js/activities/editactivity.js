let activityId = document.getElementById('activity_id').innerHTML
var nameF = document.getElementById('activName')
var descripF = document.getElementById('activDesc')
var imageF = document.getElementById('activImg')

var mImage = document.getElementById('activityImg')

const deleteActivity = () => {
    var conf = confirm("Are you sure you want to delete this activity?")
    if(!conf){
        return
    }

    fetch(`${baseUrl}activity/delete/${activityId}`, {
        method: "POST",
        headers: {
            "Authorization": "Bearer "+cookies.bari_token
        }
    })
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        location.href = "/admin-activities"
    })
    .catch(err=>{
        console.log(err)
    })
}

const getActivity = () => {
    fetch(`${baseUrl}activity/${activityId}`, {
        headers: {
            "Authorization": "Bearer " + cookies.bari_token
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.success){
                nameF.value = res.data.name
                descripF.value = res.data.description
                mImage.src = res.data.contentImg
            }
        })
        .catch(err => {
            console.log(err)
        })
}

getActivity();

const checkFields = () => {
    //name
    if (nameF.value === '') {
        alert("Please enter a valid name")
        return
    }

    // description
    if (descripF.value === '') {
        alert("Please enter a valid name")
        return
    }

    // image
    if (imageF.files.length <= 0) {
        // there is no image
        editActivity(null)
    }else{
        uploadImage()
    }
}

const editActivity = (res) => {
    var body = {
        id: activityId,
        name :nameF.value,
        description: descripF.value,
        contentImg: mImage.src
    }
    if(res!=null){
        body.contentImg = res
    }
    fetch(`${baseUrl}activity/save`, {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + cookies.bari_token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

// upload image
const uploadImage = () => {
    var formData = new FormData()
    formData.append("content", imageF.files[0])
    fetch(`${uploadUrl}upload`, {
        method: "POST",
        body: formData
    })
        .then(res => res.text())
        .then(res => {
            console.log(res)
            editActivity(res)
        })
        .catch(err => {
            console.log(err)
        })
}