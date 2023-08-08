
var form = document.getElementById("all_form")

form.addEventListener("submit",function(event){
  event.preventDefault()
  alert("Form Submitted!");
  

  var fname = document.getElementById("fname").value
  console.log(fname)
  
  var lname = document.getElementById("lname").value
  console.log(lname)

  var email_address = document.getElementById("email_address").value
  console.log(email_address)

  var cbxtype = document.getElementById("cbxtype").value
  console.log(cbxtype)

  var subject = document.getElementById("subject").value
  console.log(subject)

  var yesOption = document.getElementById("yesOption").value
  console.log(yesOption)

  var noOption = document.getElementById("noOption").value
  console.log(noOption)
  
})
