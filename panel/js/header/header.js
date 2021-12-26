function showMenu(show) {
    if (show) {
        document.getElementsByClassName("side_menu")[0].style.left = "0px";
        document.getElementById("cover").style.display = "block";
    } else {
        document.getElementsByClassName("side_menu")[0].style.left = "-270px";
        document.getElementById("cover").style.display = "none";
    }
}

function logout() {
    const userOpt = confirm("Logout of admin panel")

    if (userOpt) {
        document.cookie = "bari_token=;path=/";
        document.cookie = "bari_id=;path=/";
        location.href = "http://localhost:8888/Bari/admin-login/"
    }
}

// check if the user is logged in

if (cookies.bari_token) {
    getUserDetails()
} else {
    // logout user
    location.href = "http://localhost:8888/Bari/admin-login/"
}

// get the user profile
function getUserDetails() {
    fetch(`${baseUrl}user/user/${cookies.bari_id}`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${cookies.bari_token}`
        }
    })
        .then(res => res.json())
        .then(data => {
            document.getElementById("admin_name").innerText = data.userDetail.fullName
            document.getElementById("admin_img").src = data.userDetail.profileImgUrl ?? "http://localhost/wordpress/wp-content/themes/Final%20Theme/images/new-logo.png"
        })
        .catch(err => {
            console.log(err)
        })
}