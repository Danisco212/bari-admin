var loading = false

function createUser() {
    if (loading) {
        return false
    }

    var email = document.getElementById("uEmail").value
    var password = document.getElementById("upassword").value
    var fullname = document.getElementById("uFullname").value
    var username = document.getElementById("uUsername").value
    var gender = document.getElementById("uGender").value
    var role = document.getElementById("uRole").value

    // validate fields
    if (email.length > 0 && username.length > 0 && fullname.length > 0) {
        if (password.length >= 6) {
            loading = true
            fetch(`${baseUrl}user/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    role: role,
                    username: username,
                    userDetail: {
                        fullName: fullname,
                        gender: gender
                    }
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                    loading = false
                })
        } else {
            alert("Password must be at least 6 characters")
        }
    } else {
        alert("Please Fill all fields")
    }


}