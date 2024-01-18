document.addEventListener("scroll", function () {
	var header = document.querySelector("header");
	if (window.scrollY > 0) {
		header.style.backgroundColor = "white";
	} else {
		header.style.backgroundColor = "transparent";
	}
});

////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("grade-select").addEventListener("change", function () {
	// 모든 시간표 숨김
	document.querySelectorAll(".timetable").forEach(function (table) {
		table.style.display = "none";
	});

	// 선택된 학년의 시간표 표시
	var selectedGrade = this.value;
	document.getElementById(selectedGrade + "-timetable").style.display =
		"block";
});
