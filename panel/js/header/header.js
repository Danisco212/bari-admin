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
        // location.href = "/Bari/admin-login/"
        location.href = "https://barilifestyle.com/admin-login/"
    }
}

// check if the user is logged in

if (cookies.bari_token) {
    getUserDetails()
    console.log(cookies.bari_token)
} else {
    // logout user
    // location.href = "/Bari/admin-login/"
    location.href = "https://barilifestyle.com/admin-login/"
}

var getUrl = location.href;
if(getUrl.includes('admin-tips') || getUrl.includes('create-tip') || getUrl.includes('tip-detail')){
    // thats fine
} else {
    if (cookies.bari_role === 'SUBADMIN') {
        alert('You do not have access to this page')
        window.open(location.protocol + "//" + location.host + "/admin-tips", "_self")
    }
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
            document.getElementById("admin_role").innerText = cookies.bari_role
            document.getElementById("admin_img").src = data.userDetail.profileImgUrl ?? "http://localhost/wordpress/wp-content/themes/Final%20Theme/images/new-logo.png"
        })
        .catch(err => {
            console.log(err)
        })
}

try {
    if(cookies.bari_role === 'SUBADMIN'){
        // remove tabs
        const menuHolder = document.getElementsByClassName('menu_list')[0]
        var tipIndex = 0;
        menuHolder.childNodes.forEach((menu, index) => {
            console.log(menu)
            if(menu.nodeName !== '#text'){
                tipIndex += 1;
                if(tipIndex !== 3){
                    menu.style.display = 'none'
                }
            }
        })
    }
} catch (error) {
    console.log(error)
}