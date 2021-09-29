var regUsers = 0
var adminUsers = 0
var goldUsers = 0


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
        })
        .catch(err => {
            // show error
        })
}

getUsers()

function drawGraph(data = [0, 0, 0]) {
    var ctx = document.getElementById('user_type_chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Regular', 'Gold', "Admin"],
            datasets: [{
                label: 'User Types',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
    });
}

