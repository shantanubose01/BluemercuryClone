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
var loginData=JSON.parse(localStorage.getItem("userData"));

document.querySelector("form").addEventListener("submit", loginForm);
function loginForm(){
    var email=document.getElementById("email").value ;
    var password=document.getElementById("password").value ;
    var isPrsent=loginData.filter(function(e){
        return email==e.email && password==e.password ;
    }
    )
    if(isPrsent)
    {
        alert("Login Success");
        document.getElementById("frontName").innerText="Account";
        var anchor=document.createElement("a");
        anchor.setAttribute("href","account.html");
        document.getElementById("frontName").append(anchor);
        window.location.href=" ";
    }
    else{
        var p=document.createElement("p");
        p.innertext="Entered wrong email or password";
        p.style.color="red";
        document.querySelector("form").append(p);
        document.getElementById("email").value =" ";
        document.getElementById("password").value=" ";
    }
}