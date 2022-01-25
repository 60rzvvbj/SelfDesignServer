function check(obj) {
	let flag = true;
	for (let x in obj) {
		if (obj[x] == null || obj[x] == undefined) {
			flag = false;
			break;
		}
	}
	return flag;
}

function checkUser(account, token, res) {
	if (!checkUtil.check({ account })) {
		res.send(resultUtil.accountError());
		return false;
	}

	if (!checkUtil.check({ token })) {
		res.send(resultUtil.paramsError());
		return false;
	}

	if (!tokenUtil.checkToken(account, token)) {
		res.send(resultUtil.tokenError());
		return false;
	}

	return true;
}

export default {
	check,
	checkUser,
};