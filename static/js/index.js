function myFunction() {
  var x = document.getElementById("nav-right");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "navbar";
  }
}
