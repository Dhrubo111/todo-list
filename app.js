let todoInput = document.querySelector("input")

let submitButton = document.querySelector(".submit")

let orderedList = document.querySelector("ol")

submitButton.addEventListener(
  "click",()=>{
    let stringValue = todoInput.value

    todoInput.value = ""

    let listItems = document.createElement("li")

    let deleteButton = document.createElement("button")

    deleteButton.textContent = "Delete"
    deleteButton.classList.add("delete")

    listItems.textContent = stringValue

    orderedList.appendChild(listItems)
    listItems.appendChild(deleteButton)

    listItems.classList.add("give-space")

    deleteButton.addEventListener(
      "click" , ()=>{
        orderedList.removeChild(listItems)
      }
    )

  }
)