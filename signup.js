// Get form and button
let submitBtn = document.getElementById("submit-btn")
let myForm = document.getElementById("myForm")

// Main function
let checkForm = () => {
  let username = document.getElementById("username").value.trim()
  let mobile = document.getElementById("mobile").value.trim()
  let email = document.getElementById("email").value.trim()
  let password = document.getElementById("password").value.trim()
 let confirmPassword = document.getElementById("confirm_password").value.trim()

  console.log(username, mobile, email, password, confirmPassword)
   
  if(username && mobile.length===10 && email.includes("@") && password === confirmPassword){
     console.log("super")
  }
 else {
    alert("Enter Valid Data")
  }
}


submitBtn.addEventListener("click" ,()=>{
  checkForm()
})