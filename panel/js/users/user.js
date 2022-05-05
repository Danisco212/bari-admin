var user_id = document.getElementById("user_id").innerText

// fill the forms details
let biceps = document.getElementById("biceps")
let chest = document.getElementById("chest")
let hips = document.getElementById("hips")
let neck = document.getElementById("neck")
let shoulders = document.getElementById("shoulders")
let wrist = document.getElementById("wrist")
let waist = document.getElementById("waist")
let targetWaist = document.getElementById("targetWaist")
let targetWater = document.getElementById("targetWater")
let targetCalories = document.getElementById("targetCalories")
let targetWeight = document.getElementById("weightTarget")
let stepTarget = document.getElementById("targetStep")

let resetBtn = document.getElementById("reset_password")

resetBtn.addEventListener('click', function(){
    var conf = confirm('Reset User Password')

    if(conf){
        fetch(`${baseUrl}user/admin-reset-password?userId=${user_id}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${cookies.bari_token}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                alert("User password has been reset successfully and sent to their email.");
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
})


function getUserDetails() {
    fetch(`${baseUrl}user/user/${user_id}`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${cookies.bari_token}`
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            fillDetails(data)
        })
        .catch(err => {
            console.log(err)
        })
}

function getFriendsList() {
    fetch(`${baseUrl}friends/`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${cookies.bari_token}`,
            "user_id": parseInt(user_id)
        }
    })
        .then(res => res.json())
        .then(data => {
            // data.forEach(friend => {
            //     document.getElementsByClassName("friends_list")[0].appendChild(userFriend(friend))
            // });
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
}

function getUserPosts() {
    fetch(`${baseUrl}myposts`, {
        method: 'GET',
        headers: {
            "user_id": parseInt(user_id),
            "Authorization": `Bearer ${cookies.bari_token}`
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data.posts)
            // data.posts.forEach(post => {
            //     document.getElementsByClassName("post_list")[0].appendChild(postItem(post))
            // })
        })

}

getUserPosts()

getFriendsList()

getUserDetails()

function fillDetails(user) {
    document.getElementById("fullName").innerText = user.userDetail.fullName
    document.getElementById("email").innerText = user.email
    document.getElementById("prof_img").src = user.userDetail.profileImgUrl ?? "http://localhost/wordpress/wp-content/themes/Final%20Theme/images/new-logo.png"

    document.getElementById("userName").innerText = user.username
    document.getElementById("weight").innerText = user.userDetail.weight
    document.getElementById("height").innerText = user.userDetail.height
    document.getElementById("targetWeight").innerText = user.userDetail.targetWeight

    document.getElementById("s_userType").value = user.role

    document.getElementById('block_user').innerText = user.active ? "Block User" : "Unblock User"
    document.getElementById('block_user').addEventListener('click', blockUnblockUser.bind(this, user.active ? "Block User" : "Unblock User"))

    biceps.value = user.userDetail.circumferenceBiceps
    chest.value = user.userDetail.circumferenceChest
    hips.value = user.userDetail.circumferenceHips
    neck.value = user.userDetail.circumferenceNeck
    shoulders.value = user.userDetail.circumferenceShoulders
    wrist.value = user.userDetail.circumferenceWrist
    waist.value = user.userDetail.circumferenceWaist

    targetWater.value = user.userDetail.targetWater
    targetWaist.value = user.userDetail.targetWaist
    targetCalories.value = user.userDetail.targetCalories
    targetWeight.value = user.userDetail.targetWeight
    stepTarget.value = user.userDetail.stepTarget

    // {
    //     "userDetailId"= 6,
    //     "profileImgUrl"= "string",
    //     "fullName"= "Daniel Isaac",
    //     "gender"= "MALE",
    //     "weight"= 60,
    //     "height"= 187,
    //     "circumferenceNeck"= 12,
    //     "circumferenceShoulders"= 32,
    //     "circumferenceWaist"= 234,
    //     "circumferenceWrist"= 21,
    //     "circumferenceChest"= 0,
    //     "circumferenceHips"= 235,
    //     "circumferenceBiceps"= 12,
    //     "stepTarget"= 10000,
    //     "targetWaist"= 234,
    //     "targetWeight"= 60,
    //     "targetWater"= 5,
    //     "targetCalories"= 0,
    //     "dob"= "2021-09-26"
    // }

}

function saveUserDetails() {
    fetch(`${baseUrl}user/updateUserDetails`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + cookies.bari_token
        },
        body: JSON.stringify({
            "userDetailId": user_id,
            "circumferenceNeck": neck.value,
            "circumferenceShoulders": shoulders.value,
            "circumferenceWaist": waist.value,
            "circumferenceWrist": wrist.value,
            "circumferenceChest": chest.value,
            "circumferenceHips": hips.value,
            "circumferenceBiceps": biceps.value,
            "stepTarget": stepTarget.value,
            "targetWaist": targetWaist.value,
            "targetWeight": targetWeight.value,
            "targetWater": targetWater.value,
            "targetCalories": targetCalories.value,
        })
    })
        .then(res => {
            if(res.status === 200){
                location.reload()
            }
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {

        })
}

function blockUnblockUser(message) {
    var conf = confirm(message)

    if (conf) {
        fetch(`${baseUrl}admin/activateOrDeactivateUser?userid=${user_id}`, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + cookies.bari_token
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

}

function updateUserType(){
    loading = true
    var type = document.getElementById("s_userType").value
    fetch(`${baseUrl}user/changeUserType?userId=${user_id}&role=${type}`, {
        method: "GET",
        headers: {
            "Authorization": "Bearer" + cookies.bari_token
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.success){
            location.reload()
        }
    })
    .catch(err=>{
        console.log(err)
    })
    .finally(()=>{
        loading = false
    })
}