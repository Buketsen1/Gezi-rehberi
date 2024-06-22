let formDOM = document.querySelector("#form")
formDOM.addEventListener('button', formSubmit)

function formSubmit(event){
    event.preventDefault()
    console.log("İslem gerceklesti")
}
