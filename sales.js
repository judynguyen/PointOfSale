var runningTotal = 0.0;

function addItem()
{
  var dollars="$0.0";
  var newItem;
  newItem = document.getElementById("price").value;
  var check = isNaN(newItem); //returns false
  if(check){
    alert("Enter price as a number.");
  }
  else{
    newItem = Number(newItem);
    runningTotal=runningTotal+newItem;
    dollars = asCurrency(runningTotal);
    document.getElementById("subtotal").innerHTML=dollars;
    document.getElementById("price").value="";
    setCookie("preTax", runningTotal);
  }
}

function calculateReciept(){
  var recieptSubtotal=Number(getCookie("preTax"));
  document.getElementById("sub").innerHTML=asCurrency(recieptSubtotal);

  var recieptTax=recieptSubtotal*0.075;
  document.getElementById("tax").innerHTML=asCurrency(recieptTax);

  var recieptTotal=recieptSubtotal+recieptTax;
  document.getElementById("tot").innerHTML=asCurrency(recieptTotal);
}

//takes a number and gives a string with the number displayed as USD currency
function asCurrency(val)
{
  return "$" + val.toFixed(2);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
