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
            fillInformation(data)
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
            data.forEach(friend => {
                document.getElementsByClassName("friends_list")[0].appendChild(userFriend(friend))
            });
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
            // console.log(data.posts)
            data.posts.forEach(post => {
                document.getElementsByClassName("post_list")[0].appendChild(postItem(post))
            })
        })

}

getUserPosts()

getFriendsList()

getUserDetails()

function postItem(post){
    var card = document.createElement('div')
    card.className = "m_post"

    var title = document.createElement('p')
    title.innerText = post.title

    var body = document.createElement('p')
    body.innerText = post.body

    var time = document.createElement('p')
    time.innerText = post.createdOn

    card.appendChild(title)
    card.appendChild(body)
    card.appendChild(time)

    return card
}

function fillInformation(data) {
    document.getElementById("user_email").innerText = data.email
    document.getElementById("user_gender").innerText = data.userDetail.gender
    document.getElementById("m_id").innerText = data.userId
    document.getElementsByClassName("name")[0].innerText = data.userDetail.fullName
    document.getElementsByClassName("username")[0].innerText = data.username

    document.getElementById("user_img").src = data.userDetail.profileImgUrl ?? "http://localhost/wordpress/wp-content/themes/Final%20Theme/images/new-logo.png"
}

function userFriend(friend) {
    var card = document.createElement('div')
    card.className = "friend"

    var img = document.createElement('img')
    img.src = friend.profileImgUrl ?? "http://localhost/wordpress/wp-content/themes/Final%20Theme/images/new-logo.png"

    var name = document.createElement('p')
    name.innerText = friend.name

    var username = document.createElement('p')
    username.innerText = friend.username

    var friendDet = document.createElement('div')
    friendDet.className = "friend_det"
    friendDet.appendChild(name)
    friendDet.appendChild(username)

    card.appendChild(img)
    card.appendChild(friendDet)

    card.addEventListener('click', function () {
        location.href = "http://localhost/wordpress/user-detail?id=" + friend.friendId
    })

    return card;
}
