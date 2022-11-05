const expirationSelect = document.querySelector("[data-expiration-year]")
const logo = document.querySelector("[data-logo]")

const currentYear = new Date().getFullYear()
for (let i = currentYear; i < currentYear + 10; i++) {
    const option = document.createElement("option")
    option.value = i
    option.innerText = i
    expirationSelect.append(option)
}

document.addEventListener("keydown", e => {
    switch(e.key) {
        default: {
            onInputChange(e.target)
        }
    }
})

function onInputChange(input) {
    const firstFour = input.closest("[data-connected-inputs]").querySelector("input").value

    document.getElementById("logo").style.visibility = "visible"

    if (firstFour.startsWith("2")) {
        logo.src = "diners-svgrepo-com.svg"
    }
    else if (firstFour.startsWith("3")) {
        logo.src = "American_Express-Logo.wine.svg"
    }
    else if (firstFour.startsWith("4")) {
        logo.src = "visa.svg"
    }
    else if (firstFour.startsWith("5") || firstFour.startsWith("6")) {
        logo.src = "mastercard.svg"
    }
    else {
        document.getElementById("logo").style.visibility = "hidden"
    }
}