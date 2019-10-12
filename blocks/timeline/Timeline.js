sap.ui.define(['sap/uxap/BlockBase'],
	function (BlockBase) {
		"use strict";

		var Timeline = BlockBase.extend("ui5.resume.blocks.timeline.Timeline", {
			metadata: {
				views: {
					Collapsed: {
						viewName: "ui5.resume.blocks.timeline.Timeline",
						type: "XML"
					},
					Expanded: {
						viewName: "ui5.resume.blocks.timeline.Timeline",
						type: "XML"
					}
				}
			},
			renderer: {}
		});

		return Timeline;

	});
