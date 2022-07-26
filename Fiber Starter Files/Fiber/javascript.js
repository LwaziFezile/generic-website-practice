function myFunction(){
    var x = document.getElementById("menu-responsive");
    if(x.className === "mobile-menu"){
        x.className += " responsive";
    }else{
        x.className = "mobile-menu";
    }
}