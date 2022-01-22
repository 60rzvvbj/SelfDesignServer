import fs from 'fs';

// 返回资源
function returnResources(path, res) {
	fs.readFile(path, 'utf8', function (err, doc) {
		if (err == null) {
			res.send(doc);
		}
	});
}

export default {
	returnResources,
};