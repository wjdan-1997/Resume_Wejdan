function show()
{
  var img = document.getElementById('myCertificate');
  var butt = document.getElementById('p')
  if (img.style.display == "none")
  {
    img.style.display = "block";
    butt.innerHTML = "Hide";
  }else{
    img.style.display ="none";
    butt.innerHTML = "Show";
  }

}