function Check(){
    let uname=document.getElementById("uname");
    let pwd=document.getElementsByTagName("pwd").item;
    console.log(uname.value);
    console.log(uname.value);
    if (uname.value=="poleak" && pwd.value=="poleak"){
        alert("correct");
    }
    else{
        alert("Wrong username or password.");
    }
}
$(document).ready(function(){
    const date=new Date();
    const hour=date.getHours();
    let message="";
    if(hour<=12){
        message="Good Morning!";
    }
    if(hour>12){
        message="Good Afternoon!";
    }
    if(hour>17){
        message="Good Evening!";
    }
    $('#headingText').empty().append(message + " Thuok Poleak")
})