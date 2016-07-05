// https://gist.github.com/jfairbank/8d36e4bde9c16dc0bac7
function fibonacci(n) {
	if (n < 2) {
		return 1;
	}else {
		return fibonacci(n - 2) + fibonacci(n - 1);
	}
}
onmessage = (e) => {
	const num = e.data;
	console.log(`Starting calculation for ${num}`);
	const result = fibonacci(num);
	console.log(`Finished calculation for ${num}`);
	postMessage(result);
};

