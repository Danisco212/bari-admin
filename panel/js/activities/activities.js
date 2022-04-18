// alert("this is alert")

const getActivites = () => {
    fetch(`${baseUrl}activity/all`, {
        headers: {
            "Authorization": "Bearer " + cookies.bari_token
        }
    })
    .then(res=>{
        return res.json()
    })
    .then(res=>{
        console.log(res)
        document.getElementById('activityHolder').innerHTML = ""
        res.data.forEach(item=>{
            document.getElementById('activityHolder').appendChild(activityItem(item))
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

const activityItem = (item) => {
    let card = document.createElement('div')
    card.className = 'activity_card'

    let image = document.createElement('img')
    image.className = "activity_image"
    image.src = item.contentImg

    let detailsHolder = document.createElement('div')
    detailsHolder.className = 'detailHolder'

    let name = document.createElement('h2')
    name.innerHTML = item.name

    let description = document.createElement('p')
    description.innerHTML = item.description.split("\n").join("<br/><br/>")

    detailsHolder.appendChild(name)
    detailsHolder.appendChild(description)

    card.appendChild(image)
    card.appendChild(detailsHolder)

    card.addEventListener('click', ()=>{
        location.href = "/admin-edit-activities?id=" + item.id
        // alert("this is a click")
    })

    return card;
}

getActivites()

const uploadImage = (file, body) => {
    var formData = new FormData()
    formData.append('content', file)
    fetch(`${uploadUrl}upload`, {
        method: 'POST',
        body: formData
    })
    .then(res=>res.text())
    .then(res=>{
        body.contentImg = res
        saveActivity(body)
    })
    .catch(err=>{
        console.log(err)
    })
}

const verifyFields = () => {
    var nameF = document.getElementById('activName')
    var descrF = document.getElementById('activDesc')
    var imageF = document.getElementById('activImg')
    // name
    if(nameF.value === ''){
        alert("Please enter a valid name")
        return
    }
    //description
    if(descrF.value === ''){
        alert("Please enter a valid description")
        return
    }

    // file
    if(imageF.files.length <=0 ){
        alert("Please select an image for the activity")
        return
    }

    var body = {
        name: nameF.value,
        description: descrF.value,
    }

    uploadImage(imageF.files[0], body)
}

const saveActivity = (body) => {
    fetch(`${baseUrl}activity/save`,{
        method: "POST",
        headers: {
            "Authorization": "Bearer "+ cookies.bari_token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
    .then(res=>{
        return res.json()
    })
    .then(res=>{
        console.log(res)
        getActivites()
    })
    .catch(err=>{
        console.log(err)
    })
}