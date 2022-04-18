var regUsers = 0
var adminUsers = 0
var goldUsers = 0

function getDashboard(){
    fetch(`${baseUrl}admin/dashboard`,{
        method: "GET",
        headers: {
            "Authorization": "Bearer "+cookies.bari_token
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        fillData(data.data.userTypes)
        var userGraph = []
        userGraph.push(data.data.userTypes.regular)
        userGraph.push(data.data.userTypes.pro)
        userGraph.push(data.data.userTypes.admin)
        userGraph.push(data.data.userTypes.premium)
        drawGraph(userGraph)

        var userGender = []
        userGender.push(parseFloat(data.data.genderPercentage.male *100).toFixed(2))
        userGender.push(parseFloat(data.data.genderPercentage.female *100).toFixed(2))
        userGender.push(parseFloat(data.data.genderPercentage.other *100).toFixed(2))
        drawGenderPercentage(userGender)

    })
    .catch(err=>{
        console.log(err)
    })
}

function fillData(userTypes){
    document.getElementById("a_user").innerText = userTypes.admin
    document.getElementById("prem_user").innerText = userTypes.premium
    document.getElementById("p_user").innerText = userTypes.pro
    document.getElementById("r_user").innerText = userTypes.regular
}

getDashboard()

function getUsers() {
    fetch(`${baseUrl}user/getAllUsers`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${cookies.bari_token}`
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById("user_count").innerText = data.length
            data.forEach(user => {
                if (user.role == "ADMIN") {
                    adminUsers += 1
                } else if (user.role == "GOLD") {
                    goldUsers += 1
                } else {
                    regUsers += 1
                }
            })

            drawGraph([regUsers, goldUsers, adminUsers])
            document.getElementById("g_user").innerText = goldUsers
            document.getElementById("r_user").innerText = regUsers
            document.getElementById("a_user").innerText = adminUsers
        })
        .catch(err => {
            // show error
        })
}

// getUsers()

function drawGraph(data = [0, 0, 0,0]) {
    var ctx = document.getElementById('user_type_chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Regular', 'Pro', "Admin", "Premium"],
            datasets: [{
                label: 'User Types',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(187,254,255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
    });
}

function drawGenderPercentage(userGender=[0,0,0]){
    const data = {
        labels: ["Male", "Female", "Others"],
        datasets: [{
          label: 'Gender Percentage',
          data: userGender,
          backgroundColor: [
            'rgba(187,254,255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgb(200,200,243, 0.2)'
          ],
          borderColor: [
            'rgb(187,254,255)',
            'rgb(255, 159, 64)',
            'rgb(200,200,243)'
          ],
          borderWidth: 1
        }]
      };
      var ctx = document.getElementById('user_gender_chart').getContext('2d');
      var myChar = new Chart(ctx, {
          type: "bar",
          data: data
      })
}

