function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "icon") {
        x.className += " responsive";
    } else {
        x.className = "icon";
    }
}