function paymentdone(){
    var nam=document.getElementById("cardname")
    if(nam.value.trim()=="")
    {
        alert("ENTER CARDHOLDER NAME")
        return false
    }
    var regx=/^[a z A Z]{20}$/
    if(regx.test(nam)){
        alert("ENTER PROPER CARDHOLDER NAME")
        return false
    }
    else{
        return true
    }
}