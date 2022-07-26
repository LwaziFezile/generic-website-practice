function myFunction(){
    var x = document.getElementById("mobile");
    if(x.className === "mobile-menu"){
        x.className += " responsive";

    }
    else{
        x.className = "mobile-menu";
        
    }
}
/* function myFunction(){
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
} */