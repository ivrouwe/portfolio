(function () {

	"use strict";

	var documentToolbar = document.querySelector(".document .toolbar");

	function launchPrintDialog () {
		window.print();
	}

	if (documentToolbar.children.length < 3) {
		var listItem = document.createElement("li"),
			printButton = document.createElement("button"),
			printButtonText = document.createTextNode("Print This Document");

			printButton.classList.add("launches-print-dialog");

			printButton.appendChild(printButtonText);

			listItem.appendChild(printButton);

			documentToolbar.insertBefore(listItem, documentToolbar.children[0]);

			printButton = documentToolbar.querySelector(".launches-print-dialog");

			printButton.addEventListener("click", launchPrintDialog);
	}

	if (window.location.hash === "#print") {
		window.scroll(0, document.body.scrollHeight);
		launchPrintDialog();
	}
}());