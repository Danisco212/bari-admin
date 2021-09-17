function getUsers() {
    fetch(`${baseUrl}user/getAllUsers`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${cookies.bari_token}`
        }
    })
        .then(res => res.json())
        .then(data => {
            // allUsers = data
            console.log(data)

            data.forEach(user => {
                // if(user.role == "ADMIN"){
                //     admin += 1
                // }else if(user.role = "GOLD"){
                //     gold += 1
                // }else{
                //     regular += 1
                // }
                document.getElementsByClassName('users_list')[0].appendChild(userCard(user))
            });

            // adminUsers.innerText = admin
            // goldUsers.innerText = gold
            // regularUsers.innerText = regular
            // document.getElementById('user_total').innerText = `All Users (${allUsers.length})`
        })
        .catch(err => {
            // show error
        })
}

function userCard(user) {
    var card = document.createElement('div')
    card.className = "user"

    var dets = document.createElement('div')
    dets.className = "dets"

    var img = document.createElement('img')
    img.src = user.userDetail.profileImgUrl ?? "http://localhost/wordpress/wp-content/themes/Final%20Theme/images/new-logo.png"

    var name = document.createElement('p')
    name.className = "name"
    name.innerText = user.userDetail.fullName ?? "No Name"

    var email = document.createElement('p')
    email.className = "email"
    email.innerText = user.email

    dets.appendChild(img)
    dets.appendChild(name)
    dets.appendChild(email)

    var role_holder = document.createElement('div')
    role_holder.className = "role_holder"
    var role = document.createElement('p')
    role.className = "role"
    role.innerText = user.role
    role_holder.appendChild(role)

    var weight = document.createElement('p')
    weight.className = "weight"
    weight.innerText = user.userDetail.weight + " KG"

    var username = document.createElement('p')
    username.className = "username"
    username.innerText = "@"+user.username

    card.appendChild(dets)
    card.appendChild(role_holder)
    card.appendChild(weight)
    card.appendChild(username)

    card.addEventListener('click', function(){
        location.href = "http://localhost/wordpress/user-detail?id="+user.userId
    })

    return card
}

getUsers()