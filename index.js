const getInput = document.querySelector("#search-input")
// console.log(getInput)
const container = document.querySelectorAll(".img-container")

getInput.addEventListener("input", filtered)

function filtered() {
  const inputValue = getInput.value.toUpperCase()
  // console.log(inputValue)

  for (let i = 0; i < container.length; i++) {
    let name = container[i].querySelector(".name")

    if (name.innerHTML.toUpperCase().indexOf(inputValue) > -1) {
      container[i].style.display = ""
    } else {
      container[i].style.display = "none"
    }
  }
}
