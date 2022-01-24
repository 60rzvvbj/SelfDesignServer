import projectService from "../service/projectService.js";

function run(app) {

	app.post('/project/createProject', async function (req, res) {
		let token = req.header.token;
		let projectName = req.body.name;

		res.send({
			flag: true,
			code: 2000,
			message: '创建成功',
			data: {
				id: "10001",
				createTime: Date.now(),
			}
		});
	});

	app.post('/project/deleteProject', async function (req, res) {
		let token = req.header.token;
		let id = req.body.id;

		res.send({
			flag: true,
			code: 2000,
			message: '删除成功',
			data: null
		});
	});

	app.post('/project/modifyContent', async function (req, res) {
		let token = req.header.token;
		let id = req.body.id;
		let content = req.body.content;

		res.send({
			flag: true,
			code: 2000,
			message: '修改成功',
			data: {
				modifyTime: Date.now()
			}
		});
	});

	app.post('/project/modifyName', async function (req, res) {
		let token = req.header.token;
		let id = req.body.id;
		let name = req.body.name;

		res.send({
			flag: true,
			code: 2000,
			message: '修改成功',
			data: {
				modifyTime: Date.now()
			}
		});
	});

	app.get('/project/getUserProject', async function (req, res) {
		let token = req.header.token;

		res.send({
			flag: true,
			code: 2000,
			message: '获取成功',
			data: {
				projectList: [{
					id: 1,
					name: 'project1',
					createTime: Date.now(),
					modifyTime: Date.now()
				}]
			}
		});
	});

	app.get('/project/getProjectContent', async function (req, res) {
		let token = req.header.token;
		let id = req.query.id;

		res.send({
			flag: true,
			code: 2000,
			message: '获取成功',
			data: {
				content: '{}',
			}
		});
	});

	app.post('/project/release', async function (req, res) {
		let token = req.header.token;
		let id = req.query.id;
		let temp = req.query.temp; // 是否是临时

		res.send({
			flag: true,
			code: 2000,
			message: '发布成功',
			data: {
				url: 'aaa.html',
			}
		});
	});

	app.get('/project/export', async function (req, res) {
		let token = req.header.token;
		let id = req.query.id;

		let file = null;
		res.send(file);
	});

	app.post('/project/import', async function (req, res) {
		let token = req.header.token;
		let name = req.body.projectName;
		let file = req.body.file;

		res.send({
			flag: true,
			code: 2000,
			message: '导入成功',
			data: {
				id: '100001',
				createTime: Date.now(),
			}
		});
	});
}

export default {
	run,
};