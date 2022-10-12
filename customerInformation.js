document.getElementById("form2").addEventListener("submit",myForm);
var infoArr=JSON.parse(localStorage.getItem("infoList"))||[];

function myForm(){
  event.preventDefault();
  var infoObj={
    email: document.getElementById("email").value,
    country: document.getElementById("country").value,
    firstname: document.getElementById("firstname").value,
    address: document.getElementById("address").value,
    apartment: document.getElementById("apartment").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    code: document.getElementById("code").value,
    
  };
  infoArr.push(infoObj);
  localStorage.setItem("infoList",JSON.stringify(infoArr));
  document.getElementById("email").value="";
  document.getElementById("country").value="";
  document.getElementById("firstname").value="";
  document.getElementById("address").value="";
  document.getElementById("apartment").value="";
  document.getElementById("city").value="";
  document.getElementById("state").value="";
  document.getElementById("code").value="";
}
