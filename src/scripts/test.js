import fs from 'fs';
import userService from "../service/userService.js";
import projectService from "../service/projectService.js";
import releaseService from "../service/releaseService.js";
import checkUtil from "../utils/checkUtil.js";

let testContent = {
	"lang": "ch-ZN",
	"title": "testProject",
	"icoUrl": null,
	"root": {
		"id": 1,
		"tag": "VerticalLayout",
		"style": {
			"width": "100%",
			"height": "100%",
		},
		"children": [
			{
				"id": 2,
				"tag": "PositionLayout",
				"style": {
					"width": "200px",
					"height": "200px",
					"background-color": "skyblue",
				},
				"children": [
					{
						"id": 3,
						"tag": "Text",
						"values": {
							"content": "文本1"
						},
						"style": {
							"width": "100px",
							"height": "30px",
							"background-color": "pink",
						},
					},
					{
						"id": 4,
						"tag": "Button",
						"values": {
							"content": "按钮"
						},
						"style": {
							"width": "50px",
							"height": "30px",
							"background-color": "#999",
						},
					},
				]
			},
			{
				"id": 5,
				"tag": "Text",
				"values": {
					"content": "文本2"
				},
				"style": {
					"width": "300px",
					"height": "100px",
					"background-color": "yellow",
					"color": "#fff",
				},
			},
		]
	}
};

async function test() {
	let res = releaseService.translate(testContent);
	fs.writeFileSync('C:/Users/Administrator/Desktop/test.html', res);
	// process.exit();
};

test();
