"use strict";

function removeField(btn) {
  var div = btn.closest(".field");
  if (div) {
    div.remove();
  }
}