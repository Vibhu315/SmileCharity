function paymentdone(){
    var nam=document.getElementById("cardname")
    var regx=/^[a-zA-Z]{20}$/;
    if(nam.value.trim()=="")
    {
        alert("ENTER CARDHOLDER NAME")
        return false
    }
    else if(regx.test(nam)){
        alert("ENTER PROPER CARDHOLDER NAME")
        return false
    }
    else{
        return true
    }
}