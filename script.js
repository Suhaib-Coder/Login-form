function data() 
{
    var a=document.getElementById("n1").value;
    var b=document.getElementById("n2").value;
    var c=document.getElementById("n3").value;
    var d=document.getElementById("n4").value;
    var e=document.getElementById("n5").value;
    var f=document.getElementById("n6").value;

    if(a == "" || b == "" || c == "" || d == "" || e == "" || f == ""){
        alert("All fields are mendatory");
        return false;
    }
    else if(b.length > 10 || b.length < 10){
        alert("Number should be of 10 Digits ! Please enter a valid number")
        return false;
    }
    else if(isNaN(b)){
        alert("Only Number allowed! Please enter a Valid Number")
        return false;
    }
    else if(e != f){
        alert("Please enter same password");
        return false;
    }
    else{
        true;
    }   
}
