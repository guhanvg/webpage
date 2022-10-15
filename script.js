function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    var regEx=/^[A-Za-z]+$/;
    if(!name.match(regEx)){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    var regEx=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!email.match(regEx)){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= ""){
      text = "This page cannot be left blank!";
      error_message.innerHTML = text;
      return false;
      }
    alert("Form Submitted Successfully!");
    return true;
  }