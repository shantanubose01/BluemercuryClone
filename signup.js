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
p.innerText="";
function signup(){
    event.preventDefault();
    var email=document.getElementById("email").value;
    var firstname=document.getElementById("firstName").value;
    var lastname=document.getElementById("lastName").value ;
    var  password=document.getElementById("password").value ;
   
    var isPresent=signupData.filter(function(elem,i)
    {
      var Email=document.getElementById("email").value ;
       return elem.email==Email;
    });
    
   
    if(email=="" || firstname=="" || lastname=="" || password=="")
    {
      var b=document.createElement("p");
      document.getElementById("status").innerHTML="";
      b.innerText="Please Enter Required Field";
      b.style.color="#cb2b2b";
       b.style.width="95%"
       document.getElementById("status").style.backgroundColor="#e4c4c4";
       document.getElementById("status").style.textAlign="centre";
       document.getElementById("status").style.margin="auto";
       b.style.marginTop="5px";
       document.getElementById("status").style.fontSize="18px";

       document.getElementById("status").append(b);

    }
    else  if(password.length<8 || password.length>12)
    {
      document.getElementById("status").innerHTML="";
      var c=document.createElement("p");
      document.getElementById("status").innerHTML="";
      c.innerText="Password should contains between 8 to 12 characters";
      c.style.color="#cb2b2b";
       c.style.width="95%";
       document.getElementById("status").style.backgroundColor="#e4c4c4";
       
    
       document.getElementById("status").style.textAlign="centre";
       document.getElementById("status").style.margin="auto";
       c.style.marginTop="15px";
       document.getElementById("status").style.fontSize="18px";

       document.getElementById("status").append(c);
       document.getElementById("password").value="";
       document.getElementById("password").style.borderColor="#cb2b2b"; 
   
   

    }
    else if(isPresent.length!=0)
     {
      document.getElementById("status").innerHTML="";
       p.innerText="This email address is already associated with an account. If this account is yours, you can reset your password";
       document.getElementById("password").style.borderColor="calc()";
       p.style.color="#cb2b2b";
       p.style.width="95%"
       document.getElementById("status").style.backgroundColor="#e4c4c4";
       
        document.getElementById("status").style.textAlign="centre";
       document.getElementById("status").style.margin="auto";
       document.getElementById("status").style.fontSize="18px";

       document.getElementById("status").append(p);
       document.getElementById("email").value="";
        document.getElementById("firstName").value="";
        document.getElementById("lastName").value="";
        document.getElementById("password").value="";
       
     }
     else{
      var data={
        email:document.getElementById("email").value,
        firstname:document.getElementById("firstName").value ,
        lastname:document.getElementById("lastName").value ,
        password:document.getElementById("password").value ,
       
   };
   
    signupData.push(data);
        
    localStorage.setItem("userData",JSON.stringify(signupData));

    document.getElementById("status").innerHTML="";
    alert("Account is Created Succesfully");
    window.location.href="login.html";


}
        
}      
    
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});


