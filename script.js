const body=document.querySelector("body");
const form=document.querySelector(".form");
const username=document.querySelector(".username");
const password=document.querySelector(".password");
const button=document.querySelector("button");
const results=document.querySelector(".results");

function checkUser (username, password) {

    const correctName = "test"
    const correctPassword = "1234"

    if(username === correctName && password == correctPassword) {
       return true 
    }
   return false 
}

function renderUi(success) {

    results.innerHTML=""
    const text = document.createElement("p")
    results.appendChild(text)
    if(success) {
        form.style.display="none"
        text.innerText="Inloggning lyckades"
        const buttonlogOut=document.createElement("button");
        buttonlogOut.innerText="Logga ut"
        results.appendChild(buttonlogOut)
        buttonlogOut.addEventListener("click", logout)
    
    } else {
        text.innerText="Inloggning misslyckades, testa igen."

} 

}

function checkInlog() {
    if(localStorage.getItem("user")) {
        renderUi(true)
    }
}

function logout() {
    localStorage.removeItem("user")
    results.innerHTML=""
    form.style.display="block"

}

button.addEventListener("click", function() {
    const success = checkUser(username.value, password.value)
    
    if(success) {
        localStorage.setItem("user", username.value)
        
    }
    renderUi(success)
})

checkInlog()