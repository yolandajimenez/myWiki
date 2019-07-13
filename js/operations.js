
function selectOption(e) {
  e = e || window.event;
	let target = e.target || e.srcElement;
  let myPage = target.attributes.name.value;
  showPage(myPage);
}

function showPage(myPage) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
      if (xmlhttp.status == 200) {
        document.getElementById("textContent").innerHTML = xmlhttp.responseText;
      }
      else {
        document.getElementById("textContent").innerHTML = "No hay datos";
      }
    }
  };

  xmlhttp.open("GET", "pages/"+ myPage + ".html", true);
  xmlhttp.send();
}