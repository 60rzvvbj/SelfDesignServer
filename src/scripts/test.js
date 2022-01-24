import userService from "../service/userService.js";

async function test() {
	let res = userService.register('admin', '123456');
	console.log(res);
}

test();