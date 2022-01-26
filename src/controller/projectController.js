import projectService from "../service/projectService.js";
import resultUtil from "../utils/resultUtil.js";
import checkUtil from "../utils/checkUtil.js";

function run(app) {

	// 创建项目
	app.post('/project/createProject', async function (req, res) {

		// 获取参数
		let token = req.headers.token;
		let account = req.cookies.account;
		let projectName = req.body.name;

		// 检验用户身份
		if (!checkUtil.checkUser(account, token, res)) {
			return;
		}

		// 判断参数是否完整
		if (!checkUtil.check({ projectName })) {
			res.send(resultUtil.paramsError());
			return;
		}

		// 开始创建项目
		let project = await projectService.addProject(account, projectName);

		// 返回结果
		res.send(resultUtil.success('创建成功', { id: project.id, createTime: project.createTime }));
	});

	// 删除项目
	app.post('/project/deleteProject', async function (req, res) {

		// 获取参数
		let token = req.headers.token;
		let account = req.cookies.account;
		let id = req.body.id;

		// 检验用户身份
		if (!checkUtil.checkUser(account, token, res)) {
			return;
		}

		// 判断参数是否完整
		if (!checkUtil.check({ id })) {
			res.send(resultUtil.paramsError());
			return;
		}

		// 验证身份
		if (!projectService.identityCheck(account, id)) {
			res.send(resultUtil.identityError());
			return;
		}

		// 开始删除项目
		let flag = await projectService.deleteProject(id);

		// 返回结果
		if (flag) {
			res.send(resultUtil.success('删除成功'));
		} else {
			res.send(resultUtil.reject('删除失败'));
		}
	});

	// 修改项目内容
	app.post('/project/modifyContent', async function (req, res) {

		// 获取参数
		let token = req.headers.token;
		let account = req.cookies.account;
		let id = req.body.id;
		let content = req.body.content;

		// 检验用户身份
		if (!checkUtil.checkUser(account, token, res)) {
			return;
		}

		// 判断参数是否完整
		if (!checkUtil.check({ id, content })) {
			res.send(resultUtil.paramsError());
			return;
		}

		// 验证身份
		if (!projectService.identityCheck(account, id)) {
			res.send(resultUtil.identityError());
			return;
		}

		// 开始修改项目内容
		let flag = await projectService.updateContent(id, content);

		// 返回结果
		if (flag) {
			res.send(resultUtil.success('修改成功', { modifyTime: flag.modifyTime }));
		} else {
			res.send(resultUtil.reject('修改失败'));
		}
	});

	// 修改项目名
	app.post('/project/modifyName', async function (req, res) {

		// 获取参数
		let token = req.headers.token;
		let account = req.cookies.account;
		let id = req.body.id;
		let name = req.body.name;

		// 检验用户身份
		if (!checkUtil.checkUser(account, token, res)) {
			return;
		}

		// 判断参数是否完整
		if (!checkUtil.check({ id, name })) {
			res.send(resultUtil.paramsError());
			return;
		}

		// 验证身份
		if (!projectService.identityCheck(account, id)) {
			res.send(resultUtil.identityError());
			return;
		}

		// 开始修改项目信息
		let flag = await projectService.modifyProjectName(id, name);

		// 返回结果
		if (flag) {
			res.send(resultUtil.success('修改成功', { modifyTime: flag.modifyTime }));
		} else {
			res.send(resultUtil.reject('修改失败'));
		}
	});

	// 获取用户项目信息
	app.get('/project/getUserProject', async function (req, res) {

		// 获取参数
		let token = req.headers.token;
		let account = req.cookies.account;

		// 检验用户身份
		if (!checkUtil.checkUser(account, token, res)) {
			return;
		}

		// 开始获取
		let projectList = await projectService.getUserProject(account);

		// 返回结果
		res.send(resultUtil.success('获取成功', { projectList }));
	});

	// 获取项目内容
	app.get('/project/getProjectContent', async function (req, res) {

		// 获取参数
		let token = req.headers.token;
		let account = req.cookies.account;
		let id = req.query.id;

		// 检验用户身份
		if (!checkUtil.checkUser(account, token, res)) {
			return;
		}

		// 判断参数是否完整
		if (!checkUtil.check({ id })) {
			res.send(resultUtil.paramsError());
			return;
		}

		// 验证身份
		if (!projectService.identityCheck(account, id)) {
			res.send(resultUtil.identityError());
			return;
		}

		// 开始获取内容
		let content = await projectService.getProjectContent(id);

		// 返回结果
		if (content) {
			res.send(resultUtil.success('获取成功', { content }));
		} else {
			res.send(resultUtil.reject('获取失败'));
		}
	});

	app.post('/project/release', async function (req, res) {
		let token = req.headers.token;
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
		let token = req.headers.token;
		let id = req.query.id;

		let file = null;
		res.send(file);
	});

	app.post('/project/import', async function (req, res) {
		let token = req.headers.token;
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