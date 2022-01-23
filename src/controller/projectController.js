import projectService from "../service/projectService.js";

function run(app) {

	app.post('/project/createProject', async function (req, res) {
		let token = req.header.token;
		let projectName = req.header.name;

		res.send({
			flag: true,
			code: 2000,
			message: '创建成功',
			data: {
				id: 1,
				createTime: Date.now(),
				modifyTime: Date.now()
			}
		});
	});

	app.get('/project/deleteProject', async function (req, res) {
		let token = req.header.token;
		let id = req.query.id;

		res.send({
			flag: true,
			code: 2000,
			message: '删除成功',
			data: null
		});
	});

	app.post('/project/modifyProject', async function (req, res) {
		let token = req.header.token;
		let id = req.query.id;
		let content = req.query.content;

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

	app.get('/project/getProjectInfo', async function (req, res) {
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
}

export default {
	run,
};