let users = JSON.parse(localStorage.getItem('users')) || []
let userfound = false
$("#btn").click(function () {
  let password = $("#password").val()
  let email = $("#email").val()
  users.forEach(user => {
    if (email === user.email && password === user.password) {
      userfound = true
      alert('You successfully logged in')
      localStorage.setItem('names',JSON.stringify(user.username))
      window.location.href = 'home.html'
    }


  });
  if (userfound === false) {
    alert('You have a problem')
  }
})

let password = $("#password")
let email = $('#email')
console.log(email);
$("#email").change(function () {
  if ($("#email").val().length > 0) { 
      $("#email").addClass("is-valid").removeClass("is-invalid"); 
  } else {
      $("#email").addClass("is-invalid").removeClass("is-valid");
  }
});
$("#password").change(function () {
  if ($("#password").val().length > 0) { 
      $("#password").addClass("is-valid").removeClass("is-invalid"); 
  } else {
      $("#password").addClass("is-invalid").removeClass("is-valid");
  }
});