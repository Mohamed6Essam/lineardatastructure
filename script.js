var n1 = [3, 1, 7, 9];
var n2 = [2, 4, 1, 9, 3];

function sum(arr1, arr2) {
	var matchArr = [];
	for (let i = 0; i < arr1.length; i++) {
		for (let x = 0; x < arr2.length; x++) {
			if (arr1[i] === arr2[x]) matchArr.push(arr1[i]);
		}
	}
	var sumArr = matchArr.reduce((initvalue, a) => initvalue + a, 0);
	return sumArr;
}

console.log(sum(n1, n2));

function findDistince(arr1, arr2) {
	var unmatchArr = [];

	for (let i = 0; i < arr2.length; i++) {
		if (arr1.includes(arr2[i]) === false) {
			unmatchArr.push(arr2[i]);
		}
		if (arr2.includes(arr1[i]) === false) {
			unmatchArr.push(arr1[i]);
		}
	}
	unmatchArr = unmatchArr.filter((el) => typeof el === "number");
	console.log(unmatchArr);

	return unmatchArr.reduce((initvalue, a) => initvalue + a, 0);
}

console.log(findDistince(n1, n2));
