function paymentdone(){
    var nam=document.getElementById("card-name")
    if(nam.ariaValueMax.trim()=="")
    {
        alert("ENTER NAME")
        return false
    }
}