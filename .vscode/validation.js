const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email_input')
const password_input = document.getElementById('password_input')
const repeat_password_input = document.getElementById('repeat-password-input')

form.addEventListener('submit', (e) =>) {
    // e.preventDefault() prevent submit

    let errors = []
    
if(firstname_input){
    // If we have a firstname input then we are in the signup
    errors = getSignupFormErrors()
}
else{
    // If we don't have a firstname input then we are in the login
    errors = getLoginFormErrors()
}
}