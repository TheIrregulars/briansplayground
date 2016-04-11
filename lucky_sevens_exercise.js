var lucky_sevens = function (x) {
	for (var i = 0; i <= x.length; i ++) {
		if ((x[i] + x[i + 1] + x[i + 2]) === 7) {
			console.log(true)
		}
		else {
		console.log(false)
		}
	}
};
lucky_sevens([2,1,5,1,0])
lucky_sevens([0,-2,1,8])
lucky_sevens([7,7,7,7])
lucky_sevens([3,4,3,4])