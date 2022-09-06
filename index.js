const getInput = document.querySelector("#search-input")
// console.log(getInput)
const getNames = document.querySelectorAll(".name")
// console.log(getNames)
const container = document.querySelector(".img-container")

getInput.addEventListener("input", () => {
  const inputValue = getInput.value.toLowerCase()
  // console.log(inputValue)

  getNames.forEach((element) => {
    let text = element.textContent
    if (text.toLowerCase().includes(inputValue.toLowerCase())) {
      container.style.display = ""
    } else {
      container.style.display = "none"
    }
  })
})
