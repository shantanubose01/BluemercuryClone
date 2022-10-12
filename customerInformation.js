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


  var oops=document.querySelectorAll('#main').value;
  if(oops=="")
  {
    alert("Please Fill Form");
  } 

  // var oops=document.querySelectorAll('#form2').value;
  // if(oops=="")
  // {
  //     alert("Please Enter  Email");
  // }

  
  // var oops1=document.getElementById('country').value;
  // if(oops1=="")
  // {
  //     alert("Please Choose  Country");
  // }

  // var oops2=document.getElementById('firstname').value;
  // if(oops2=="")
  // {
  //     alert("Please Enter Name");
  // }

  // var oops3=document.getElementById('address').value;
  // if(oops3=="")
  // {
  //     alert("Please Enter Address");
  // }

  // var oops4=document.getElementById('apartrment').value;
  // if(oops4=="")
  // {
  //     alert("Please Enter Apartment");
  // }

  // var oops5=document.getElementById('city').value;
  // if(oops5=="")
  // {
  //     alert("Please Enter City");
  // }

  // var oops6=document.getElementById('state').value;
  // if(oops6=="")
  // {
  //     alert("Please Choose State");
  // }

  // var oops7=document.getElementById('code').value;
  // if(oops7=="")
  // {
  //     alert("Please Enter ZIP Code");
  // }

 

    window.location.href='shipping.html';
}
