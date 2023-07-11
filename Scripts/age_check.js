document.getElementById("openModal").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("myModal").style.display = "none";
});

document.getElementById("submit").addEventListener("click", function() {
  var dob = document.getElementById("dob").value;
  var currentDate = new Date();
  var enteredDate = new Date(dob);
  var age = currentDate.getFullYear() - enteredDate.getFullYear();
  
  if (age >= 18) {
    alert("You are old enough to attend Peckham Beats Festival.");
    document.getElementById("myModal").style.display = "none";
  }
  else if (age < 18) {
  alert("Under the age of 16 to attend the Festival MUST be accompanied by someone over the age of 18.");
  }
  else {
    alert("Please enter your date of birth!");
  }
});
