function myFunction() {
    var x = document.getElementById("mobile-navigation");
    if(x.className === "mobile-nav"){
        x.className += " responsive"
    }else{
        x.className = "mobile-nav"
    }
}