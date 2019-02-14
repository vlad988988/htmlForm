"use strict";

function addField(btn) {
  var form = btn.closest("form");
  if (form) {
    var div = form.querySelector(".field");
    if (div) {
      var divCreated = document.createElement("div");
      divCreated.className = div.className;
      divCreated.innerHTML = div.innerHTML;
      document.getElementById('container').appendChild(divCreated);
    }
  }
}