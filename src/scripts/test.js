import userService from "../service/userService.js";

async function register() {
	let res = await userService.register('adminnn', '123456');
	console.log(res);
}

async function login() {
	let res = await userService.login('admin', '1234567');
	console.log(res);
}

async function modifyPwd() {
	let res = await userService.modifyPwd('admin', '123456', '1234567');
	console.log(res);
}

async function modifyUserName() {
	let res = await userService.modifyUserInfo('adminn', { username: '60rzvvbj' });
	console.log(res);
}

async function test() {
	// await register();
	// await login();
	// await modifyPwd();
	await modifyUserName();
	process.exit();
}

test();
