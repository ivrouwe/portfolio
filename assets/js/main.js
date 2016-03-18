(function () {

	"use strict";

	var documentToolbar = document.querySelector(".document .toolbar"),
		viewPrintAnchor,
		index;

	function appendPrintTextAndSpanToAnchorAndAddHash () {
		switch (window.location.hash === "#print") {
			case false:
				(function () {
					if (viewPrintAnchor.classList.contains("view-or-print-anchor") === true) {
						var printAnchorText1 = document.createTextNode("Print This Document (Permalink"),
							printAnchorSpan = document.createElement("span"),
							printAnchorSpanText = document.createTextNode(" - launches in new window"),
							printAnchorText2 = document.createTextNode(")"),
							nodesToAppend = [];

						viewPrintAnchor.href = viewPrintAnchor.href + "#print";
						
						printAnchorSpan.classList.add("visually-hidden");
						printAnchorSpan.appendChild(printAnchorSpanText);

						nodesToAppend = [printAnchorText1, printAnchorSpan, printAnchorText2];

						for (index = 0; index < nodesToAppend.length; index++) {
							viewPrintAnchor.appendChild(nodesToAppend[index]);
						}
					}
				}());
				break;
			case true:
				(function () {
					var printAnchorText = document.createTextNode("Print This Document");

					viewPrintAnchor.appendChild(printAnchorText);
				}());
		}

		viewPrintAnchor.addEventListener("click", launchPrintDialog);
	}

	function launchPrintDialog () {
		setTimeout(function () {
			if (window.location.hash === "#print") {
				window.print();
			}
		}, 200);
	}

	// Checks for document on index page ("if") v. document on its own permalink page ("else if")
	(function () {
		viewPrintAnchor = documentToolbar.querySelector(".view-or-print-anchor");

		if (viewPrintAnchor && window.location.hash === "") {
			while (viewPrintAnchor.childNodes.length > 0) {
				viewPrintAnchor.removeChild(viewPrintAnchor.childNodes[0]);
			}
				appendPrintTextAndSpanToAnchorAndAddHash();

		} else if (!viewPrintAnchor) {
			var listItem = document.createElement("li"),
				anchor = document.createElement("a");

				anchor.classList.add("view-or-print-anchor");
				anchor.href="http://addictedtocoding.com/assets/documents/resume-ivan-vrouwe.html#print";
				listItem.appendChild(anchor);
				documentToolbar.insertBefore(listItem, documentToolbar.children[0]);

				viewPrintAnchor = documentToolbar.querySelector(".view-or-print-anchor");

				appendPrintTextAndSpanToAnchorAndAddHash();

				viewPrintAnchor.classList.remove("view-or-print-anchor");
		}
	}());


	if (window.location.hash === "#print") {
		window.scroll(0, document.body.scrollHeight);
		launchPrintDialog();
	}
}());