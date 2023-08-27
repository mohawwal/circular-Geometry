// Get DOM elements
const radiusInput = document.getElementById("radius");
const calculateButton = document.getElementById("calculateButton");
const areaResultElement = document.getElementById("areaResult");
const perimeterResultElement = document.getElementById("perimeterResult")
const diameterResultElement = document.getElementById("diameterResult")
const ErrorMessage = document.getElementById("ErrorMessage")


//add a function that calculate the area of the circle
function calculateCircleArea(radius) {
    return Math.PI * radius * radius
}

function calculateCirclePerimeter(radius) {
    return 2 * Math.PI * radius
}

function calculateCircleDiameter(radius) {
    return 2 * radius
}

//add an event listener to the button so when you click it will execute the function
calculateButton.addEventListener('click', ()=> {
    let radius = parseFloat(radiusInput.value)

    if(isNaN(radius)) {
        let errorText = "Please Input The Correct Radius"
        ErrorMessage.textContent = errorText
        ErrorMessage.style.color = "red"
        areaResultElement.textContent = ""
        perimeterResultElement.textContent = ""
        diameterResultElement.textContent = ""
    } else {
        const area = calculateCircleArea(radius)
        const perimeter = calculateCirclePerimeter(radius)
        const diameter = calculateCircleDiameter(radius)

        ErrorMessage.textContent = `Radius:- ${radius}`
        ErrorMessage.style.color = "black"
        areaResultElement.textContent = `The area of the circle is ${area.toFixed(2)}`
        perimeterResultElement.textContent = `The perimeter of the circle is ${perimeter.toFixed(2)}`
        diameterResultElement.textContent = `The diameter of the circle is ${diameter}`
        radiusInput.value = ""
    }
    
}) 
