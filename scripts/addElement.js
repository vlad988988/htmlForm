"use strict";

function addElement (elem) {
  var parent = elem.parentNode;
  var parentTwo = parent.parentNode;
  var currentDiv = parentTwo.querySelector('.content'); 
  var selectBox = elem.closest("select");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
 	var newElem = document.createElement(selectedValue);
 	currentDiv.innerHTML = newElem.outerHTML;
 	currentDiv.firstChild.className="form-control col-md-8";
}