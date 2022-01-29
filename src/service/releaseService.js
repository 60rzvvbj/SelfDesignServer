function translate(content) {
	let res = `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>release</title>
			</head>
			<body>
				<pre>
					${JSON.stringify(content)}
				</pre>
			</body>
		</html>
	`;
	return res;
}

export default {
	translate,
};