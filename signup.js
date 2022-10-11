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

document.querySelector("form").addEventListener("submit",signup);
var signupData=JSON.parse(localStorage.getItem("userData"))||[];
var p=document.createElement("p");
p.innerText=""
function signup(){
    event.preventDefault();
    var data={
        email:document.getElementById("email").value,
        firstname:document.getElementById("firstName").value ,
        lastname:document.getElementById("lastName").value ,
        password:document.getElementById("password").value ,
       
   };
    var email=document.getElementById("email").value ;
     var isPresent=signupData.filter(function(e,i)
     {
       return email==e.email;
     }
     )
     if(isPresent)
     {
       p.innerText="This email address is already associated with an account. If this account is yours, you can reset your password";
       p.style.color="red";
       document.getElementById("status").append(p);
       document.getElementById("email").value="";
        document.getElementById("firstName").value="";
        document.getElementById("lastName").value="";
        document.getElementById("password").value="";
       
     }
     else{
   
   
    signupData.push(data);
        
    localStorage.setItem("userData",JSON.stringify(signupData));

    


}
        
        
    
    
}

