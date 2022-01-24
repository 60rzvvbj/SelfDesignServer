import projectDao from "../dao/projectDao.js";

async function addProject(account, name) {
	let nowTime = Date.now();
	let project = {
		projectName: name,
		account: account,
		content: '{}',
		createTime: nowTime,
		modifyTime: nowTime,
		isRelease: false
	};
	let id = await projectDao.addProject(project);
	return id;
}

async function modifyProjectName(id, name) {
	return (await projectDao.updateProject(id, ['projectName'], [name]));
}

async function updateContent(id, content) {
	return (await projectDao.updateProject(id, ['content'], [content]));
}

async function deleteProject(id) {
	return (await projectDao.deleteProject(id));
}

async function getUserProject(account) {
	return (await projectDao.getUserProject(account));
}

async function getProjectInfo(id) {
	return (await projectDao.getProjectInfo(id));
}

async function getProjectContent(id) {
	return (await projectDao.getProjectContent(id));
}

export default {
	addProject,
	modifyProjectName,
	updateContent,
	deleteProject,
	getUserProject,
	getProjectContent,
	getProjectInfo,
};