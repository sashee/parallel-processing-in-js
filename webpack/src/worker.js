import fibonacci from "./fibonacci.js";

onmessage = (e) => {
	const num = e.data;
	console.log(`Starting calculation for ${num}`);
	const result = fibonacci(num);
	console.log(`Finished calculation for ${num}`);
	postMessage(result);
};
