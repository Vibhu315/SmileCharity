function signup(){
    var name=document.getElementById("name").value.trim();
    var email=document.getElementById("email").value.trim();
    var password=document.getElementById("password").value.trim();
    var cpassword=document.getElementById("confirm-password").value.trim();
    var regx=/^[a-zA-Z ]{4,20}$/;
    var regx1=/^([a-z A-Z 0-9]{5,20})@([a-z A-Z]{3,6}).([a-z]{3})$/;
    var regx2=/^[a-z A-Z _ @ ! 0-9]{8}/;
    if(!regx.test(name)){
        alert("INVALID NAME")
        return false
    }
    if(!regx1.test(email)){
        alert("WRONG EMAIL FORMAT")
        return false
    }
    if(!regx2.test(password)){
        alert("INVALID PASSWORD")
        return false
    }
    if(password != cpassword){
        alert("CONFIRM PASSWORD AND PASSWORD DOESNOT MATCHES")
        return false
    }
    return true



}