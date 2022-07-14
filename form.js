const button = document.getElementById('btn')
let userName = document.getElementById('name')
let subject = document.getElementById('subject')
let phone = document.getElementById('phone')
let emailB = document.getElementById('email')
let message = document.getElementById('message')
let error_message = document.getElementById('error_message');




function validate(e) {
    e.preventDefault()
   

   error_message.style.padding = "10px";

    let text;
    if(userName.value.length < 5) {
        text = 'Please enter valid name';
        error_message.innerHTML = text;
        return false;
    }

    if(subject.value.length < 10) {
        text = 'Please Enter Correct Subject';
         error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone.value)  && phone.value.length <= 11) {
        text = 'Please Enter a valid Phone Number';
         error_message.innerHTML = text;
        return false;
    }

    if(emailB.value.indexOf('@') == -1 || emailB.value.length < 6){
        text = 'Please Enter a valid email';
         error_message.innerHTML = text;
        return false;
    }
    
    if(message.value.length < 140){
        text = 'Please Enter more than 140 characters';
         error_message.innerHTML = text;
        return false;
    }



    alert('Form Submitted Successfully!')
   
 userName.value = '';
 subject.value = '';
 phone.value = '';
 emailB.value = '';
 message.value = '';

   
    
}
button.addEventListener('click', validate);





  