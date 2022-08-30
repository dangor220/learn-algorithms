'use strict';

// Функция бинарного поиска по отсортированному массиву с поиском числа n.

const arr = [1, 3, 22, 31, 55];

const binarySearch = (arr, n) => {
	let low = 0,
		  hight = arr.length - 1;

	while (low <= hight) {
		let middle = Math.floor((low + hight) / 2);
		let guess = arr[middle];

		if (guess === n) {
			return middle;
		} else if (guess > n) {
			hight = middle - 1;
		} else {
			low = middle + 1;
		}
	}
	return 'Значение не найдено';
};

console.log(binarySearch(arr, 1));
