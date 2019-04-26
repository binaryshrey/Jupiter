function upvalidate(){
    let uname = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('pass');
    let pass_length = password.value.length;
    let repassword = document.getElementById('repass');

    let success = document.getElementById('success');
   
    if(uname.value==''){
        
        uname.style.border = "1px solid red";
        document.getElementById('error_name').style.visibility='visible';
        document.getElementById('error_name').innerHTML = "Invalid Name";
        return false;
    }

    else if(email.value== ''){
        email.style.border = "1px solid red";
        document.getElementById('error_email').style.visibility='visible';
        document.getElementById('error_email').innerHTML = "Invalid Email";
        return false;
    }

    else if((password.value== '') || (pass_length< 3) || (pass_length> 25)){
        password.style.border = "1px solid red";
        document.getElementById('error_pass').style.visibility='visible';
        document.getElementById('error_pass').innerHTML = "Invalid Password";
        return false;
    }

    else if(repassword.value== ''|| repassword.value !== pass.value){
        repassword.style.border = "1px solid red";
        document.getElementById('error_repass').style.visibility='visible';
        document.getElementById('error_repass').innerHTML = "Passwords do not match";
        return false;
    }
    else{
        success.style.visibility='visible';
        

        return true;
        
        
        
    }
}