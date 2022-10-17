function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
   
       
    var text;
    var regEx=/^[A-Za-z]+$/;
    if(!name.match(regEx)){
      text = "Please Enter valid Name";
      document.querySelector('.name-error').style.display="block";
      return false;
    }else{
      document.querySelector('.name-error').style.display="none";
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      document.querySelector('.subject-error').style.display="block";
      return false;
    }else{
      document.querySelector('.subject-error').style.display="none";
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      document.querySelector('.number-error').style.display="block";
      return false;
    }else{
      document.querySelector('.number-error').style.display="none";
    }
    
    var regEx=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!email.match(regEx)){
      text = "Please Enter valid Email";
      document.querySelector('.mail-error').style.display="block";
      return false;
    }else{
      document.querySelector('.mail-error').style.display="none";
    }

    if(message.length <= ""){
      text = "This page cannot be left blank!";
      document.querySelector('.message-error').style.display="block";
      return false;
      }else{
        document.querySelector('.message-error').style.display="none";
      }

    alert("Form Submitted Successfully!");
    return true;
  }
