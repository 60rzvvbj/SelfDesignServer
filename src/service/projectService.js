import projectDao from "../dao/projectDao.js";
import userDao from "../dao/userDao.js";

async function addProject(account, name) {

	let user = await userDao.getUser(account);
	if (user == null) {
		return false;
	}

	let nowTime = Date.now();
	let project = {
		projectName: name,
		account: account,
		content: '{}',
		createTime: nowTime,
		modifyTime: nowTime,
		isRelease: false
	};
	project.id = (await projectDao.addProject(project)) + '';
	return project;
}

async function modifyProjectName(id, name) {
	let modifyTime = Date.now();
	let res = await projectDao.updateProject(id, ['projectName', 'modifyTime'], [name, modifyTime]);
	return res ? { modifyTime } : false;
}

async function updateContent(id, content) {
	let modifyTime = Date.now();
	let res = await projectDao.updateProject(id, ['content', 'modifyTime'], [content, modifyTime]);
	return res ? { modifyTime } : false;
}

async function deleteProject(id) {
	return (await projectDao.deleteProject(id));
}

async function getUserProject(account) {
	let projects = await projectDao.getUserProject(account);
	let res = [];
	for (let i = 0; i < projects.length; i++) {
		res.push({
			id: projects[i].id,
			name: projects[i].projectName,
			createTime: projects[i].createTime,
			modifyTime: projects[i].modifyTime
		});
	}
	return res;
}

async function getProjectInfo(id) {
	return (await projectDao.getProjectInfo(id));
}

async function getProjectContent(id) {
	return JSON.parse((await projectDao.getProjectContent(id)));
}

async function identityCheck(account, id) {
	let project = await projectDao.getProjectInfo(id);
	if (project) {
		return (account == project.account);
	} else {
		return false;
	}
}

export default {
	addProject,
	modifyProjectName,
	updateContent,
	deleteProject,
	getUserProject,
	getProjectContent,
	getProjectInfo,
	identityCheck,
};