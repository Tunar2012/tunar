let nameOfUser = JSON.parse(localStorage.getItem('names')) || ""



$('#he').html('Hello ' + nameOfUser)

$('#btn4').click(function(){
    window.location.href = 'start.html'
})
$('#btn3').click(function(){
    window.location.href = 'continue.html'
})
$('#btn2').click(function(){
    window.location.href = 'admin.html'
})
$('#btn1').click(function(){
    window.location.href = 'shoping.html'
})




console.log(nameOfUser)
if (nameOfUser.length > 1) {
    document.getElementById('btn3').style.display = 'none'
    document.getElementById('btn4').style.display = 'block'
}


if(nameOfUser.length < 1){
    document.getElementById('btn4').style.display = 'none'
    document.getElementById('btn3').style.display = 'block'
     document.getElementById('btn2').style.display = 'none'
  
}