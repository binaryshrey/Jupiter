function invalidate(){
    let uname = document.getElementById('username');
    let password = document.getElementById('pass');
    let success = document.getElementById('success');
    
    if(uname.value==''){
        
        uname.style.border = "1px solid red";
        document.getElementById('error_name').style.visibility='visible';
        document.getElementById('error_name').innerHTML = "Invalid Name";
        return false;
    }

    
    else if((password.value== '') || (pass_length< 3) || (pass_length> 25)){
        password.style.border = "1px solid red";
        document.getElementById('error_pass').style.visibility='visible';
        document.getElementById('error_pass').innerHTML = "Invalid Password";
        return false;
    }

    
    else{
        
        success.style.visibility='visible';
        return true;
        
        
        
    }
}