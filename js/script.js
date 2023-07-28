// sign up page

var upname = document.getElementById("na");
var upem = document.getElementById("signem")
var uppass = document.getElementById("signpass")
var upbtn = document.getElementById("upbtn")
var uparr = []
// login 
var inem = document.getElementById("em")
var inpass =document.getElementById("pass")
var inbtn = document.getElementById("in")
var inarr=[]
var check =document.getElementById("check")
if(localStorage.getItem("signup") !=null){
  uparr = JSON.parse(localStorage.getItem("signup"))
}
if(localStorage.getItem("login") !=null){
  inarr = JSON.parse(localStorage.getItem("login"))
}


function up(){
 var upobj ={
  upnameobj:upname.value,
  upemobj:upem.value,
  uppassobj:uppass.value
 }
 uparr.push(upobj)
 if(upname.value=="" || upem.value ==""||uppass.value==""){
  check.style.color="red"
  check.innerHTML="All inputs is required";
 }else{
  check.style.color="green"
  check.innerHTML="success";
 }
 localStorage.setItem("signup",JSON.stringify(uparr))
 
}

var wel = document.getElementById("wel")
function login(){  
 var emlogin = inem.value;
 var passlogin = inpass.value
 for(var i =0 ; i<uparr.length;i++){
  if(uparr[i].upemobj ==emlogin && uparr[i].uppassobj == passlogin){
    location.replace('/html/welcome.html')
    
    
  }
 }

}

