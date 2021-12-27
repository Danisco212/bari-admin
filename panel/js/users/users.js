var allUsers = []

function getUsers() {
    fetch(`${baseUrl}user/getAllUsers`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${cookies.bari_token}`
        }
    })
        .then(res => res.json())
        .then(data => {
            allUsers = data
            allUsers.forEach(user => {
                document.getElementsByClassName('user_list')[0].appendChild(userCard(user))
            });
        })
        .catch(err => {
            // show error
        })
}

getUsers()

function userCard(user) {
    var card = document.createElement('div')
    card.className = "user"

    var userProf = document.createElement('div')
    userProf.className = "user_prof"

    var img = document.createElement('img')
    img.src = user.userDetail.profileImgUrl ?? "http://localhost:8888/Bari/wp-content/themes/Final%20Theme/images/new-logo.png"

    var dets = document.createElement('div')
    dets.className = "dets"

    var name = document.createElement('a')
    name.innerText = user.userDetail.fullName
    name.href = "http://localhost:8888/Bari/admin-user?id=" + user.userId

    var username = document.createElement('p')
    username.innerText = "@" + user.username
    username.style.cursor = "pointer"
    username.addEventListener('click', e=>{
        location.href = "http://localhost:8888/Bari/admin-user?id=" + user.userId
    })

    dets.appendChild(name)
    dets.appendChild(username)

    userProf.appendChild(img)
    userProf.appendChild(dets)

    var role = document.createElement('p')
    role.className = "list_role"
    role.innerText = user.role

    var plan = document.createElement('p')
    plan.className ="list_plan"
    plan.innerText = "-"

    var email = document.createElement('p')
    email.className = "list_email"
    email.innerText = user.email

    var weight = document.createElement('p')
    weight.className = "list_weight"
    weight.innerText = user.userDetail.weight + " KG"
    weight.style.fontWeight = 500

    if (parseInt(user.userDetail.weight) > 90) {
        weight.style.color = "red"
    } else {
        weight.style.color = "#25b5c5"
    }

    var action = document.createElement('i')
    action.classList.add("fa", "fa-ellipsis-v")

    card.appendChild(userProf)
    card.appendChild(email)
    card.appendChild(role)
    card.appendChild(plan)
    card.appendChild(weight)
    // card.appendChild(action)

    return card
}

// search functionalitu


document.getElementById("search_user").addEventListener('input', function (e) {
    filterSearch()
})

function filterSearch() {
    var term = document.getElementById("search_user").value
    document.getElementsByClassName('user_list')[0].innerHTML = ""
    if (term == "") {
        allUsers.forEach(user => {
            document.getElementsByClassName('user_list')[0].appendChild(userCard(user))
        })
    } else {
        allUsers.forEach(user => {
            if (user.userDetail.fullName) {
                if (user.userDetail.fullName.toLowerCase().includes(term.toLowerCase())) {
                    document.getElementsByClassName('user_list')[0].appendChild(userCard(user))
                }
            }
        })
    }

}

console.log(new Date(new Date().getTime() + 15 * 60 * 1000))