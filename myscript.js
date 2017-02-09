window.onload = setInterval(clock,1000);
//function to validate a Login form

function validate() {
//two arrays of static inputs for username and passwords
 var users=["anuj","arjun","himanshu","anshul"];
 var passwords=["anuj","arjun","himanshu","anshul"];

var password=document.getElementByClassName('password').value;
var user=document.getElementByClassName('username').value;
if(user != " " && pass !=" "){
  if(users.indexOf(user)==-1){
    alert("User doesn't exists");
  }
  else{
    if(user==pass){
      alert("login Successfull");
    }
  }
}
else{
  alert("Username or password can not be empty");
}
}

//function to set a clock on page
function clock(){
  var date=new Date();
  var time=date.toLocaleTimeString();
  document.getElementById('3').innerHTML=time;
}
