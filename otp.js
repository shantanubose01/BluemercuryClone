document.getElementById('otp').addEventListener('click',otpfun);

function otpfun(e){
    e.preventDefault();
        var otp=document.getElementById('one').value;
        
        if(otp=="")
        {
            alert("Please Enter correct OTP");
        }
        else{
            alert("Your Order Placed Successfully");
        }
    }
    