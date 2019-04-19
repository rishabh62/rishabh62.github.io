sap.ui.define([
		"sap/ui/core/mvc/XMLView"
	],
	function(XMLView) {
		"use strict";

		XMLView.create({
			viewName: "ui5.resume.view.Resume"
		}).then(function(oView) {
			oView.placeAt("content");
		});

	});