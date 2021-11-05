function getPlans() {
    fetch(`${baseUrl}subscription/view/AllPlans`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${cookies.bari_token}`
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data) {
                // document.getElementsByClassName("plan_list")[0].innerHTML=""
                data.forEach(plan => {
                    document.getElementsByClassName("plan_list")[0].appendChild(planCard(plan))
                });
            }
        })
        .catch(err => {
            console.log(err)
        })
}

getPlans()

function planCard(plan) {
    var card = document.createElement('div')
    card.className = "plan"

    var circle = document.createElement('div')
    circle.className = "green_circle"

    var main = document.createElement('div')
    main.className = "main"

    var details = document.createElement('div')
    details.className = "details"

    var name = document.createElement('p')
    name.innerText = plan.planName
    var desc = document.createElement('p')
    desc.innerText = plan.planValidity.split(" ")[0] + " months"

    details.appendChild(name)
    details.appendChild(desc)

    var price = document.createElement('p')
    price.className = "price"
    price.innerText = "$" + plan.planCost

    var activate = document.createElement('button')
    activate.innerText = "Activate"
    activate.addEventListener('click', activatePlan.bind(this, plan.planId))

    var deleteBtn = document.createElement('button')
    deleteBtn.innerText = "Delete"
    deleteBtn.className = "red"
    deleteBtn.addEventListener('click', deletePlan.bind(this, plan.planId))

    var actionHolder = document.createElement('div')
    actionHolder.className = "actionHolder"

    if (!plan.active) {
        actionHolder.appendChild(activate)
    }
    actionHolder.appendChild(deleteBtn)


    main.appendChild(details)
    main.appendChild(price)
    main.appendChild(actionHolder)

    card.appendChild(circle)
    card.appendChild(main)


    return card
}

var loading = false
function deletePlan(planId) {
    var conf = confirm("Delete this plan?")
    if (conf) {
        loading = true
        fetch(`${baseUrl}subscription/delete/plan/${planId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer " + cookies.bari_token,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                loading = false
            })
    }

}

function activatePlan(planId) {
    var conf = confirm("Activate this plan?")
    if (conf) {
        loading = true
        fetch(`${baseUrl}subscription/activatePlan/${planId}`, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + cookies.bari_token,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                loading = false
            })
    }

}

function addPlan() {
    var planName = document.getElementById("planName")
    var planValidity = document.getElementById("planValidity")
    var planCost = document.getElementById("planCost")

    if (planName.value.length > 0 && planValidity.value.length > 0 && planCost.value.length > 0) {
        // add the plan
        fetch(`${baseUrl}subscription/plan/add`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${cookies.bari_token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "planCost": parseFloat(planCost.value),
                "planName": planName.value,
                "planValidity": planValidity.value
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    alert("Plan has been added")
                    planName.innerHTML = ""
                    planValidity.innerHTML = ""
                    planCost.innerHTML = ""
                    getPlans()
                }
            })
            .catch(err => {
                console.log(err)
            })
    } else {
        alert("Please enter valid values")
    }
}