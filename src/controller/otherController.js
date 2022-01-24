
function run(app) {

	app.post('/other/uploadImg', async function (req, res) {
		let token = req.header.token;
		let file = req.body.file;

		// 处理

		res.send({
			flag: true,
			code: 2000,
			message: '上传成功',
			data: {
				url: "1.png"
			}
		});
	});

}

export default {
	run,
};