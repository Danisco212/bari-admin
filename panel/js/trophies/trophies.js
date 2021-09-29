function getTrophies() {
    fetch(`${baseUrl}trophies/allTrophies`, {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + cookies.bari_token
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.runingTrophies.forEach(tro => {
                document.getElementsByClassName("runningHolder")[0].appendChild(trophyCard(tro))
            });

            data.workoutTrophies.forEach(tro => {
                document.getElementsByClassName("workoutHolder")[0].appendChild(trophyCard(tro))
            });
        })
        .catch(err => {
            console.log(err)
        })
}

getTrophies()

function trophyCard(trophy) {
    var defImag = "http://localhost/wordpress/wp-content/themes/Bari%20Theme/panel/images/badge.png"
    var card = document.createElement('div')
    card.className = "trophie"

    var img = document.createElement('img')
    img.src = trophy.image ? trophy.image.length > 0 ? trophy.image : defImag : defImag
    var details = document.createElement('div')
    details.className = "details"

    var name = document.createElement('h3')
    name.innerText = trophy.name
    var req = document.createElement('p')
    req.innerText = trophy.target + " steps"
    details.appendChild(name)
    details.appendChild(req)

    card.appendChild(img)
    card.appendChild(details)

    return card
}