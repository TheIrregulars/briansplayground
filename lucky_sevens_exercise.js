var lucky_sevens = function (x) {
	for (var i = 0; i <= x.length; i ++) {
		console.log("i " + i)
		console.log("sum " + (x[i] + x[i + 1] + x[i + 2]))
		if ((x[i] + x[i + 1] + x[i + 2]) === 7) {
			console.log(true)
		}
		else {
		console.log(false)
		}
	}
};
lucky_sevens([2,1,5,1,1,5,1,5])
