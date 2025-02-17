let users = JSON.parse(localStorage.getItem('users')) || []
$('#btn').click(function () {
  let email = $("#email").val()
  let password = $("#password").val()
  let confirm = $('#confirm').val()
  let username = $('#username').val()


  if(confirm === password){
    let newUser = {
      email: email,
      password: password,
      confirm: confirm,
      username: username,
    }
    users.push(newUser)
    localStorage.setItem('users',JSON.stringify(users))
    alert('You succesufuly registered go to loginPage!')
  }else{
    alert('password is incorrect')
  }
})
console.log(email);
$("#confirm").change(function () {
  if ($("#confirm").val().length > 0) { 
      $("#confirm").addClass("is-valid").removeClass("is-invalid"); 
  } else {
      $("#confirm").addClass("is-invalid").removeClass("is-valid");
  }
});
$("#username").change(function () {
  if ($("#username").val().length > 0) { 
      $("#username").addClass("is-valid").removeClass("is-invalid"); 
  } else {
      $("#username").addClass("is-invalid").removeClass("is-valid");
  }
});
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