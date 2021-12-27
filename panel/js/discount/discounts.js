var loading = false;

function getAllDiscounts() {
    fetch(`${baseUrl}discount/all`, {
        headers: {
            "Authorization": "Bearer " + cookies.bari_token
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.push({
                "code": "",
                "expireDate": null,
                "totalUsesAllowed": 0,
                "amount": 0,
                "type": "FIXED",
                "active": true
            })
            data.forEach(discount => {
                document.getElementById("discount_holder").appendChild(discountCard(discount))
            });
        })
        .catch(err => {
            console.log(err)
        })
}


// {
//     "id": 1,
//     "code": "KLIOUP9890",
//     "expireDate": null,
//     "totalUsesAllowed": 1000,
//     "amount": 20,
//     "type": "FIXED",
//     "active": true
// }

function discountCard(discount) {
    var card = document.createElement('div')
    card.className = "discount"

    var codeLabel = document.createElement('p')
    codeLabel.innerText = "Code *"

    var code = document.createElement('input')
    code.type = "text"
    code.value = discount.code

    var amountLabel = document.createElement('p')
    amountLabel.innerText = "Amount *"

    var amount = document.createElement('input')
    amount.type = "number"
    amount.value = discount.amount

    var expiryLabel = document.createElement('p')
    expiryLabel.innerText = "Expiry Date"

    var expiry = document.createElement('input')
    expiry.type = "datetime-local"
    expiry.value = discount.expireDate

    var statLabel = document.createElement('p')
    statLabel.innerText = "Active Status *"

    var active = document.createElement('input')
    active.id = "active"
    active.type = "radio"
    active.checked = discount.active
    active.name = "active_status"+discount.id

    var activeLabel = document.createElement('label')
    activeLabel.for = "active"
    activeLabel.innerText = "Active"

    var inactive = document.createElement('input')
    inactive.type = "radio"
    inactive.id = "inactive"
    inactive.checked = !discount.active
    inactive.name = "active_status"+discount.id

    var inactiveLabel = document.createElement('label')
    inactiveLabel.for = "inactive"
    inactiveLabel.innerText = "Inactive"

    var activeStatusholder = document.createElement('div')
    activeStatusholder.appendChild(active)
    activeStatusholder.appendChild(activeLabel)
    activeStatusholder.appendChild(document.createElement('br'))
    activeStatusholder.appendChild(inactive)
    activeStatusholder.appendChild(inactiveLabel)

    var dTypeLabel = document.createElement('p')
    dTypeLabel.innerText = "Discount type *"

    var percent = document.createElement('input')
    percent.id = "percent"
    percent.type = "radio"
    percent.checked = (discount.type === "PERCENT")
    percent.name = "discount_type"+discount.id

    var percentLabel = document.createElement('label')
    percentLabel.for = "percent"
    percentLabel.innerText = "Percentage"

    var specific = document.createElement('input')
    specific.type = "radio"
    specific.id = "specific"
    specific.checked = (discount.type === "FIXED")
    specific.name = "discount_type"+discount.id

    var specificLabel = document.createElement('label')
    specificLabel.for = "specific"
    specificLabel.innerText = "Fixed Price"

    var discountTypeHolder = document.createElement('div')
    discountTypeHolder.appendChild(percent)
    discountTypeHolder.appendChild(percentLabel)
    discountTypeHolder.appendChild(document.createElement('br'))
    discountTypeHolder.appendChild(specific)
    discountTypeHolder.appendChild(specificLabel)

    var numOfUseLabel = document.createElement('p')
    numOfUseLabel.innerText = "Number of uses *"

    var numUse = document.createElement('input')
    numUse.type = "number"
    numUse.value = discount.amount
    numUse.disabled = true

    var totalUseLabel = document.createElement('p')
    totalUseLabel.innerText = "Total allowed uses *"

    var totalUse = document.createElement('input')
    totalUse.type = "number"
    totalUse.value = discount.totalUsesAllowed

    var saveBtn = document.createElement('button')
    saveBtn.innerText = "Save"

    var deleteBtn = document.createElement('button')
    deleteBtn.innerText = "Delete"

    card.appendChild(codeLabel)
    card.appendChild(code)
    card.appendChild(amountLabel)
    card.appendChild(amount)
    card.appendChild(expiryLabel)
    card.appendChild(expiry)
    card.appendChild(statLabel)
    card.appendChild(activeStatusholder)
    card.appendChild(dTypeLabel)
    card.appendChild(discountTypeHolder)
    card.appendChild(numOfUseLabel)
    card.appendChild(numUse)
    card.appendChild(totalUseLabel)
    card.appendChild(totalUse)
    card.appendChild(saveBtn)
    if(discount.id){
        card.appendChild(deleteBtn)
    }

    deleteBtn.addEventListener('click', function(){
        if(loading){return}
        var conf = confirm("Are you sure you want to delete this discount")
        if(!conf){
            return
        }

        loading = true
        fetch(`${baseUrl}discount/delete/${discount.id}`,{
            method: "POST",
            headers: {
                "Authorization": "Bearer "+cookies.bari_token
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                location.reload()
            }
            // console.log(data);
        })
        .catch(err=>{
            console.log(err)
        })
        .finally(()=>{
            loading = false
        })
    })

    saveBtn.addEventListener('click', function () {
        if(loading){
            return
        }
        var newDiscount =
        {
            "code": code.value,
            "expireDate": expiry.value,
            "totalUsesAllowed": totalUse.value,
            "amount": amount.value,
            "type": percent.checked ? "PERCENT" : "FIXED",
            "active": active.checked,
            "limited": totalUse.value >0
        }
        if (discount.id) {
            newDiscount.id = discount.id
        }
        loading = true
        fetch(`${baseUrl}discount/save`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + cookies.bari_token
            },
            body: JSON.stringify(newDiscount)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                loading = false
            })
    })

    return card;
}

getAllDiscounts()