function login(){
    var username = document.getElementById('username')
    var password = document.getElementById('password')

    fetch(baseUrl + "auth/admin/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            if (data.status == "SUCCESS") {
                // get posts
                var token = data.obj.accessToken
                document.cookie = `bari_token=${token};path=/`
                location.href = "http://localhost/wordpress/userlist"
            } else {
                // // failed
                // progresHolder.style.display = "none"
                // element.style.display = "block"
                errLabel.style.display = "block"
                errLabel.innerText = "Invalid Username or password"
            }
        })
        .catch(err => {
            console.log(err)
            progresHolder.style.display = "none"
            element.style.display = "block"
            errLabel.style.display = "block"
            errLabel.innerText = "Could not connect to servers please try again"
        })
}
