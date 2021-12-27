let loading = false;

function login() {
    var username = document.getElementById('username')
    var password = document.getElementById('password')
    var terms = document.getElementById("terms")
    var err = document.getElementById("error_msg")
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
                    var expireDate = new Date(new Date().getTime() + 1 * 60 * 1000)
                    document.cookie = `bari_token=${data.obj.accessToken};expires=${expireDate};path=/`
                    document.cookie = `bari_id=${data.userId};expires=${expireDate};path=/`
                    location.href = "http://localhost:8888/Bari/admin-users/"
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

document.getElementById("password").addEventListener("keyup", e=>{
    console.log(e.key)
    if(e.key === "Enter"){
        login()
    }
})

// check if the user is already logged in
if (cookies.bari_token && cookies.bari_token.length > 0) {
    location.href = "http://localhost:8888/Bari/admin-users/"
}