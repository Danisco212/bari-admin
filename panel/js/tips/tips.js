function createTip(tip) {

    var card = document.createElement('div')
    card.className = "tip"

    var img = document.createElement('img')
    img.className = "tip_img"
    img.src = tip.postMediaUrl

    var details = document.createElement('div')
    details.className = "details"

    var title = document.createElement('h3')
    title.innerText = tip.title

    var information = document.createElement('div')
    information.className = "information"

    var name = document.createElement('p')
    name.innerText = tip.fullName
    var date = document.createElement('p')
    date.innerText = tip.createdOn

    var body = document.createElement('p')
    body.innerHTML = tip.body
    body.className = "tip_body"


    var actions = document.createElement('div')
    actions.className = "actions"

    var commentHolder = document.createElement('div')
    commentHolder.className = "comment_holder"

    var commentCount = document.createElement('p')
    commentHolder.appendChild(commentCount)
    commentCount.innerText = tip.postCommentCount + " Comments"

    var readMore = document.createElement('a')
    readMore.innerText = "Read More"
    readMore.href = "https://barilifestyle.com/admin-tip-detail?id=" + tip.postId

    details.appendChild(title)

    information.appendChild(name)
    information.appendChild(date)
    details.appendChild(information)

    details.appendChild(body)

    actions.appendChild(commentHolder)
    actions.appendChild(readMore)
    details.appendChild(actions)

    card.appendChild(img)
    card.appendChild(details)

    return card
}


function getTips() {
    fetch(`${baseUrl}allTips`, {
        method: 'GET',
        headers: {
            "user_id": parseInt(7),
            "Authorization": `Bearer ${cookies.bari_token}`
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data) {
                data.reverse().forEach(tip => {
                    document.getElementsByClassName('tip_list')[0].appendChild(createTip(tip))
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {

        })
}

getTips()
