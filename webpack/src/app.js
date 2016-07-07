const workerCode = require("worker!./worker.js");

const calculateFibonacci = (num) => {
	return new Promise((resolve, reject) => {
		const worker = new workerCode();
		worker.onerror = (e) => {
			worker.terminate();
			reject(e);
		};
		worker.onmessage = (e) => {
			worker.terminate();
			resolve(e.data);
		}
		worker.postMessage(num);
	});
};
window.calc = () => {
	for (let i = 1; i <= 4; i++) {
		const e = document.getElementById("result" + i);
		e.value = "Calculating...";
		calculateFibonacci(40 + i).then((res) => {
			e.value = res;
		});
	}
};
