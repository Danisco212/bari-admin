var user_id = document.getElementById("user_id").innerText

var user_id = document.getElementById("user_id").innerText

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

}