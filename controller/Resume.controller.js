sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"ui5/resume/util/test"
], function(Controller, Human) {
	"use strict";

	return Controller.extend("ui5.resume.controller.Resume", {
		
		onInit: function(){
	//		alert("hi");
//	debugger;
			var human = new Human("Rishabh");
			console.log(human.talk());
		}
		
	});
});