const inputText =document.getElementById('inputText');
const btn =document.querySelector('.btn');
const form =document.querySelector('.form')
const message=document.querySelector('.errorMessageName');
const errorEmail=document.querySelector('.errorEmailName');
const inputEmail=document.querySelector('.inputEmail');
const selectCountry=document.getElementById('selectCountry');
const errorCountry=document.querySelector('.errorCountry');
const inputPassword=document.querySelector('.inputPassword');
const errorPassword =document.querySelector('.errorPassword');
const inputConformPassword = document.querySelector('.inputConformPassword');
const errorConformPassword=document.querySelector('.errorConformPassword');

let messageIndex,fromEvent;

inputText.addEventListener('onmouseover',nameInputFun());
function nameInputFun(){
    console.log("mouseover");
}

form.addEventListener('submit',(e)=>{
    fromEvent=e;
    let name=inputText.value
    ValidateName(name);
    errorMessageFun();
    // 
    console.log(inputEmail.value);
    ValidateEmail(inputEmail.value);
    errorEmailFun();
    ValidateCountry()
    errorCountryFun();
    ValidatePassword();
    passwordFun();
    ValidateConformPassword();
    errorConformPasswordFun();
})

function ValidateConformPassword(name){
    console.log( inputConformPassword.value,inputPassword.value);
    if( inputConformPassword.value  === ''||  inputConformPassword.value === null){
     messageIndex='Please enter the password again';
    }
    else if( inputConformPassword.value === inputPassword.value){
    messageIndex='';
   }
   else{
    messageIndex='The password does not match';
   }
}

function errorConformPasswordFun(){
    if(messageIndex){
       fromEvent.preventDefault();
       errorConformPassword.textContent=messageIndex
       }
       else{
           fromEvent.preventDefault();
           errorConformPassword.textContent=messageIndex;
       }
   }

function ValidateName(name){
    if(name === ''|| name === null){
        messageIndex='name is requried';
     }else{    
         messageIndex=''
     }
}

function errorMessageFun(){
 if(messageIndex){
    fromEvent.preventDefault();
    message.textContent=messageIndex
    }
    else{
        fromEvent.preventDefault();
        message.textContent=messageIndex;
    }
}
// errorEmailName
function  errorEmailFun(){
    if(messageIndex){
       fromEvent.preventDefault();
       errorEmail.textContent=messageIndex;
       }
       else{
           fromEvent.preventDefault();
           errorEmail.textContent=messageIndex;
       }
   }

function ValidateEmail(name) 
{
    if(name === ''|| name === null){
        messageIndex='email is requried';
        return;
     }else{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputEmail.value.match(mailformat))
{
 messageIndex="";

return true;
}
else
{
messageIndex="You have entered an invalid email address!";
return false;
}}
}  


function ValidatePassword(){

    let text =inputPassword.value;
    console.log(text);
    let passw=   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(text === ''|| text === null){
        messageIndex='password is requried';
     }
    else if(text.length <3 ){
        messageIndex ="password should be greater than 3";
    }
    else if(text.length > 20){
        messageIndex ="password should be lesser than 20";
    }
    else if(text.match(passw)) {
        messageIndex ="";
        return
      
    } else{
        messageIndex ="Input Password and Submit [3 to 20 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]";
     }
    console.log(messageIndex);
}
function passwordFun(){
    if(messageIndex){
       fromEvent.preventDefault();
       errorPassword.textContent=messageIndex;
       console.log(errorPassword.value);
       }
       else{
           fromEvent.preventDefault();
           errorPassword.textContent=messageIndex;
       }
   }

function ValidateCountry(){
    var value = selectCountry.value;
    var text = selectCountry.options[selectCountry.selectedIndex].text;
    if(Number(value) === -1){
        messageIndex='country is requried';
       
     }else{    
         messageIndex=''
     }  
    
}
function errorCountryFun(){
    if(messageIndex){
       fromEvent.preventDefault();
       errorCountry.textContent=messageIndex
       }
       else{
           fromEvent.preventDefault();
           errorCountry.textContent=messageIndex;
       }
   }
