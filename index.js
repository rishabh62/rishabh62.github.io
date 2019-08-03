sap.ui.define([
		"sap/ui/core/ComponentContainer"
	],
	function(ComponentContainer) {
		"use strict";

		new ComponentContainer("resumeComponentContainerId",{
			name: "ui5.resume",
			async: true
		}).placeAt("content");

	});