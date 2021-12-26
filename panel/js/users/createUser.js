var loading = false

function createUser() {
    if (loading) {
        return false
    }

    var email = document.getElementById("uEmail").value
    var password = document.getElementById("uPassword").value
    var fullname = document.getElementById("uFullname").value
    var username = document.getElementById("uUsername").value
    var gender = document.getElementById("uGender").value
    var role = document.getElementById("uRole").value

    var user = {
        email: email,
        password: password,
        role: role,
        username: username,
        userDetail: {
            fullName: fullname,
            gender: gender
        }
    }

    console.log(user)
    // validate fields
    if (email.length > 0 && username.length > 0 && fullname.length > 0) {
        if (password.length >= 6) {
            loading = true
            fetch(`${baseUrl}user/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
                .then(res => {
                    return res.text()
                })
                .then(data => {
                    if (data.includes("UserId")) {
                        // worked
                        alert("User has been created")
                        location.href = "http://localhost:8888/Bari/admin-user?id=" + data.split(": ")[1]
                    } else if (data.includes("not available")) {
                        alert("Username not available")
                    } else {
                        alert("Email address not available")
                    }
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