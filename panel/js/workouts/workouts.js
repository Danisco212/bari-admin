function getCategories() {
    fetch(`${baseUrl}workout/getAllWorkoutsCategories`, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + cookies.bari_token
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.forEach(program => {
                document.getElementsByClassName("progHolder")[0].appendChild(programCard(program))
            });
        })
        .catch(err => {
            console.log(err)
        })
}

getCategories()

function programCard(program) {
    var card = document.createElement('div')
    card.className = "program"

    var img = document.createElement('img')
    img.src = program.image

    var name = document.createElement('p')
    name.innerText = program.name

    card.appendChild(img)
    card.appendChild(name)

    card.addEventListener('click', function (e) {
        location.href = "http://localhost/wordpress/program?id=" + program.id
    })

    return card
}