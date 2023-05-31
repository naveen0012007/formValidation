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
const inputConfirmPassword = document.querySelector('.inputConfirmPassword');
const errorConformPassword=document.querySelector('.errorConformPassword');

let messageIndex,fromEvent,data;

const obj = {
    name: "",
    email: "",
    country:"",
    password: "",
   
  };
form.addEventListener('submit',(e)=>{
    fromEvent=e;
    let name=inputText.value
    ValidateName(name);
    errorMessageFun();
    ValidateEmail(inputEmail.value);
    errorEmailFun();
    ValidateCountry()
    errorCountryFun();
    ValidatePassword();
    passwordFun();
    ValidateConformPassword();
    errorConformPasswordFun();
    postMethod()
   
})

function ValidateConformPassword(name){
    console.log( inputConfirmPassword.value,inputPassword.value);
    if( inputConfirmPassword.value  === ''||  inputConfirmPassword.value === null){
     messageIndex='Please enter the password again';
    }
    else if( inputConfirmPassword.value === inputPassword.value){
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
    //    obj.Conformpassword=inputConformPassword.value;
   }

function ValidateName(name){

    if(name === ''|| name === null){
        messageIndex='name is requried';
     }else{    
         messageIndex=''
     }
     obj.name=inputText.value;
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
        obj.email=inputEmail.value;
        return;
     }else{
        obj.email=inputEmail.value;
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
        obj.password=inputPassword.value;

        return
      
    } else{
        messageIndex ="Input Password and Submit [3 to 20 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]";
     }
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
    obj.country=text;

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

   function postMethod(){
   fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(obj),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) =>  removeFun(json));
}

function removeFun(data){
    console.log(data)
    let result = data.hasOwnProperty('id');
console.log(result); // true
if(result){
  document.querySelector('.formDetails').setAttribute("style", "background: none; border:none ");
  document.querySelector('.end').setAttribute("style","display:block");
form.remove();

}
}
