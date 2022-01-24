import userService from "../service/userService.js";

function run(app) {

	app.post('/user/register', async function (req, res) {
		let account = req.query.account;
		let pwd = req.query.pwd;

		res.send({
			flag: true,
			code: 2000,
			message: '注册成功',
			data: null
		});
	});

	app.post('/user/login', async function (req, res) {
		let account = req.query.account;
		let pwd = req.query.pwd;

		res.send({
			flag: true,
			code: 2000,
			message: '登录成功',
			data: {
				token: account // 以后改
			}
		});
	});

	app.get('/user/getUserInfo', async function (req, res) {
		let token = req.header.token;

		// 处理

		res.send({
			flag: true,
			code: 2000,
			message: '获取成功',
			data: {
				username: '60rzvvbj'
			}
		});
	});

	app.POST('/user/modifyPassword', async function (req, res) {
		let token = req.header.token;
		let oldPwd = req.body.oldPwd;
		let newPwd = req.body.newPwd;

		// 处理

		res.send({
			flag: true,
			code: 2000,
			message: '修改成功',
			data: null
		});

	});

	app.POST('/user/modifyUsername', async function (req, res) {
		let token = req.header.token;
		let username = req.body.username;

		// 处理

		res.send({
			flag: true,
			code: 2000,
			message: '修改成功',
			data: null
		});

	});
}

export default {
	run,
};