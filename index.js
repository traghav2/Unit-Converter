const inputEL = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function () {
    lengthEl.innerHTML = `${inputEL.value} meters = ${(inputEL.value * 3.281).toFixed(3)} feet | ${inputEL.value} feet = ${(inputEL.value * 0.304).toFixed(3)} meters`

    volumeEl.innerHTML = `${inputEL.value} liters = ${(inputEL.value * 0.264).toFixed(3)} gallons | ${inputEL.value} gallons = ${(inputEL.value * 3.785).toFixed(3)} liters`

    massEl.innerHTML = `${inputEL.value} kilos = ${(inputEL.value * 2.204).toFixed(3)} pounds | ${inputEL.value} pounds = ${(inputEL.value * 0.453).toFixed(3)} kilos`
})