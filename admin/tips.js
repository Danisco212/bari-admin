function getTips(){
    fetch(`${baseUrl}myposts`, {
        method: 'GET',
        headers: {
            "user_id": parseInt(7),
            "Authorization": `Bearer ${cookies.bari_token}`
        }
    })
        .then(res => res.json())
        .then(data => {
            // console.log(data.posts)
            data.tips.forEach(post => {
                document.getElementsByClassName("tip_list")[0].appendChild(postItem(post))
            })
        })
}

function postItem(post){
    var card = document.createElement('div')
    card.className = "m_tip"

    var title = document.createElement('p')
    title.innerText = post.title

    var body = document.createElement('p')
    body.innerHTML = post.body

    var time = document.createElement('p')
    time.innerText = post.createdOn

    card.appendChild(title)
    card.appendChild(body)
    card.appendChild(time)

    return card
}

getTips()


// document.cookie = `bari_token=${"3g7Ykzp2gURJslBU38kqBouR3B+MfgwMOe/6o6Cw1axIRmZTk2EPjE/4JrzaDG2M6D2VnbLsLzXYDlC12F149d9ujZwmoBlE2Tqrab64Rik7WGt0EleS2iZxAU4EbUeHkIZTXfOvT5rBY38Lwf+aR8XEe8xt17S3rbPLYIMueXMAXHkFNG3ICUcrmtBg3w07npgwWrkk3calIxFSjki1plKpbsvQZe8Zok6P+sfc0WK9hlZeXSdWe0U6AzaAYv1aZPjR3+356hLBqonz2zwJRw=="};path=/`