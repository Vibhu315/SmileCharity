function paymentdone() {
    var cardholderName = document.getElementById("cardholderName").value.trim();
    var cardNumber =document.getElementById("cardNumber").value.trim();
    var expireDate =document.getElementById("expireDate").value.trim();
    var cvv=document.getElementById("cvv").value.trim();
    var paymentAmount=document.getElementById("paymentAmount").value.trim();
    var regx = /^[a-zA-Z ]{4,20}$/;
    var regx1=/^[0-9]{12}$/;
    var regx2=/^([0-9]{2})-([0-9]{4})$/;
    var regx3=/^[0-9]{3}$/
    var regx4=/^(₹)[0-9]{2,9}$/
    if (!regx.test(cardholderName)) {
        alert("INVALID CARD HOLDER NAME");
        return false;
    } 
    if(!regx1.test(cardNumber)){
        alert("INVALID CARD NUMBER");
        return false;
    }    
    if(!regx2.test(expireDate)){
        alert("INVALID DATE")
        return false;
    }
    if(!regx3.test(cvv)){
        alert("INVALID CVV")
        return false;
    }
    if(!regx4.test(paymentAmount)){
        alert("INVALID AMOUNT")
        return false;
    }


   return true;
}