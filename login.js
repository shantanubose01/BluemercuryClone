var btn = document.getElementById("disappear")
function divAppear() {
    var cll = document.getElementById("shop_hover");
    cll.style.display = "grid";
    cll.style.background = "white";
}
btn.addEventListener("mouseover", divAppear);

// work on div of shop_hover =>

var cll = document.getElementById("shop_hover");
function divDisappear() {
        cll.style.display = "none";
}
cll.addEventListener("mouseleave", divDisappear);

var loginData=JSON.parse(localStorage.getItem("userData")) || [];

document.querySelector("form").addEventListener("submit", loginForm);
var p=document.createElement("p");

p.innerText=" ";
function loginForm(){
    event.preventDefault();
    var email=document.getElementById("email").value ;
    var password=document.getElementById("password").value ;
    if(email=="" || password=="")
    {
        var b=document.createElement("p");
        b.innerText="Please Enter Required Field";
        b.style.color="#cb2b2b";
         b.style.width="95%"
         document.getElementById("error").style.backgroundColor="#e4c4c4";
         
         
         document.getElementById("error").style.height="30px";
         
  
         
         document.getElementById("error").style.textAlign="centre";
         document.getElementById("error").style.margin="auto";
         b.style.marginTop="5px";
         document.getElementById("error").style.fontSize="18px";
  
         document.getElementById("error").append(b);
  
        
    }
    else{
     var obj={
        Email:document.getElementById("email").value ,
        Password:document.getElementById("password").value ,
    };
   
    var isPresent=loginData.filter(function(e,i){
        return email==e.email && password==e.password ;
    }
    )
    
    if(isPresent.length!=0)
    {
        alert("Login Success");
        localStorage.setItem("loginData",JSON.stringify(obj));
        window.location.href=" ";
    }
    else{
       
        p.innerText="Incorrect email or password.";
        p.style.color="#cb2b2b";
       p.style.width="95%";
      
       document.getElementById("error").style.backgroundColor="#e4c4c4";
       
       
       document.getElementById("error").style.height="40px";
       

       
       document.getElementById("error").style.textAlign="centre";
       document.getElementById("error").style.margin="auto";
       p.style.marginTop="5px";
       document.getElementById("error").style.fontSize="18px";
       
       document.getElementById("error").append(p);
       
        document.getElementById("email").value="";
        document.getElementById("password").value="";
    }
}
}