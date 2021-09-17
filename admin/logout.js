const logout = ()=>{
    const userOpt =  confirm("Logout of admin panel")

    if(userOpt){
        document.cookie = "bari_token=;path=/";
        location.href = "http://localhost/wordpress/admin-login/"
    }
}

let logoutBtn = document.getElementById('logout_btn')
logoutBtn.onclick = logout