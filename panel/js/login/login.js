let loading = false;
var username = document.getElementById('username')
var password = document.getElementById('password')
var terms = document.getElementById("terms")
var err = document.getElementById("error_msg")

function login() {

    err.style.display = "none"

    if (!terms.checked) {
        err.innerText = "Please accept terms"
        err.style.display = "block"
        return;
    }

    if (!loading) {
        loading = true
        fetch(`${baseUrl}auth/admin/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status == 'SUCCESS') {
                    getUserDetails(data.userId, data.obj.accessToken)
                } else if (data.status == 403) {
                    err.innerText = "Invalid Credentials"
                    err.style.display = "block"
                }
            })
            .catch(err => {
                console.log(err)
            })
            .finally(err => {
                console.log(err)
                loading = false
            })
    }

}

function getUserDetails(id, token) {
    fetch(`${baseUrl}user/user/${id}`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data.role === "ADMIN") {
                var expireDate = new Date(new Date().getTime() + 1 * 60 * 1000)
                document.cookie = `bari_token=${token};expires=${expireDate};path=/`
                document.cookie = `bari_id=${id};expires=${expireDate};path=/`
                location.href = "http://localhost:8888/Bari/admin-users/"
            } else {
                err.innerText = "You are not an admin"
                err.style.display = "block"
            }
            // console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
}

document.getElementById("password").addEventListener("keyup", e => {
    if (e.key === "Enter") {
        login()
    }
})

// check if the user is already logged in
if (cookies.bari_token && cookies.bari_token.length > 0) {
    location.href = "http://localhost:8888/Bari/admin-users/"
}