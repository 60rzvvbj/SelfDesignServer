import userService from "../service/userService.js";

async function register() {
	let res = await userService.register('admin', '123456');
	console.log(res);
}

async function login() {
	let res = await userService.login('adminn', '1234567');
	console.log(res);
}

async function modifyPwd() {
	let res = await userService.modifyPwd('adminn', '12345', '1234567');
	console.log(res);
}

async function test() {
	// await register();
	// await login();
	await modifyPwd();
	process.exit();
}

test();
