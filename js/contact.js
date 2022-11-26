///  form validation ///////////////////////////
var uname = document.getElementById("name");
var errorname = document.querySelector(".namecheck");

var uemail = document.getElementById("email");
var  erroremail = document.querySelector(".emailcheck")

var upassword = document.getElementById("password");
var  errorpassword = document.querySelector(".passwordcheck")

console.log(erroremail);


//functins of validation
/^[a-z]{3,12}[@\-_\.\s]?[a-zA-Z0-9]{0,8}$/
function checkname(){
    if(!/^[a-z]{3,12}[@\-_\.\s]?[a-zA-Z0-9]{0,8}$/.test(uname.value)){
        errorname.style.display = "block";
        errorname.style.color="red";

    }else{
           errorname.style.display="none";
    }   
}

function checkemail(){
if(!/^[a-z]{3,12}[\._]{0,1}\d{0,7}@((yahoo)|(gmail)|(hotmail)|(outlook)|(aol)|(protonmail)|(zohocorp)|(icloud)|(me)|(mac))\.com$/.test(uemail.value) )
{
erroremail.style.display = "block";
erroremail.style.color="red";
}else
{
    erroremail.style.display="none";
}      
}


function checkpassword(){
if(upassword.value.length<8)
{
    errorpassword.style.display = "block";
    errorpassword.style.color="red";

}else{
    errorpassword.style.display="none";

}

}


var submit = document.getElementById("submit");


///evnts //////////////////////////

uname.addEventListener("input",checkname);
uemail.addEventListener("input",checkemail);
upassword.addEventListener("input",checkpassword);


submit.addEventListener("click",function(e){

e.preventDefault();
 if(uname.value==="")
 {   
    var mes = document.getElementsByClassName("namecheck")[0]
    mes .style.display = "block";
    mes.style.color="red";
 }
 if(uemail.value==="")
  { var mes = document.getElementsByClassName("emailcheck")[0]
    mes.style.display = "block";
    mes.style.color="red";

  }
  if(upassword.value==="")
{
    var mes = document.getElementsByClassName("passwordcheck")[0]
    mes.style.display = "block";
    mes.style.color="red";
    
}
 
}
)
