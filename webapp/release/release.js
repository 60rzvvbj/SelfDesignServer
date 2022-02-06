let body = document.querySelector('body');
async function sleep(time) {
	return new Promise((resolve) => { setTimeout(resolve, time); });
}

let fadeStep = 20;
let fadeInterval = 16;

async function domFadeIn(dom) {
	return new Promise((resolve) => {
		let count = 0;
		let timer = setInterval(() => {
			count++;
			dom.style.opacity = count / fadeStep;
			dom.style.transform = `translate(-50%, calc(-${(fadeStep - count) / fadeStep * 100}% + ${count / fadeStep * 20}px))`;
			if (count == fadeStep) {
				clearInterval(timer);
				resolve();
			}
		}, fadeInterval);
	});
}

async function domFadeOut(dom) {
	return new Promise((resolve) => {
		let count = fadeStep;
		let timer = setInterval(() => {
			count--;
			dom.style.opacity = count / fadeStep;
			dom.style.transform = `translate(-50%, calc(-${(fadeStep - count) / fadeStep * 100}% + ${count / fadeStep * 20}px))`;
			if (count == 0) {
				clearInterval(timer);
				resolve();
			}
		}, fadeInterval);
	});
}

function setStyle(dom, style) {
	for (let attr in style) {
		dom.style[attr] = style[attr];
	}
}

let toastStatus = true;

async function toast(text) {
	if (!toastStatus) {
		return;
	}
	toastStatus = false;
	let div = document.createElement('div');
	div.className = 'toastBox';
	div.innerText = text;
	div.style.opacity = 0;
	body.appendChild(div);
	await domFadeIn(div);
	await sleep(3000);
	await domFadeOut(div);
	body.removeChild(div);
	toastStatus = true;
}

function windowMove(dom, conti) {
	let scrollTop = document.scrollingElement.scrollTop;
	const target = dom.offsetTop;
	const step = (target - scrollTop) / conti * (1000 / 60);
	let time = Math.floor(conti / (1000 / 60));

	const funTop = function () {
		time--;
		scrollTop = scrollTop + step;
		if (time <= 0) {
			document.scrollingElement.scrollTop = target;
			return;
		}
		document.scrollingElement.scrollTop = scrollTop;
		requestAnimationFrame(funTop);
	};
	funTop();
}

async function jump(id) {
	windowMove(document.getElementById(id), 0);
}

async function slide(id) {
	windowMove(document.getElementById(id), 300);
}

// document.addEventListener('keyup', (e) => {
// 	if (e.key == 't') {
// 		toast('aaa bbb ccc');
// 	} else if (e.key == 'a') {
// 		alert('aaa bbb ccc');
// 	} else if (e.key == 'j') {
// 		jump(1);
// 	} else if (e.key == 's') {
// 		slide(1);
// 	}
// });