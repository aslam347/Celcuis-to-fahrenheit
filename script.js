newFunction()

function newFunction() {
    let celuis = Number(document.getElementById("box").value)
    let fahrenheit = (celuis * 9 / 5) + 32
    let result = document.getElementById("result")
    result.innerHTML = fahrenheit + "  " + "Fahrenheit"
}
