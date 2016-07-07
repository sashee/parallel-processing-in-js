// https://gist.github.com/jfairbank/8d36e4bde9c16dc0bac7
export default function fibonacci(n) {
	if (n < 2) {
		return 1;
	}else {
		return fibonacci(n - 2) + fibonacci(n - 1);
	}
}

