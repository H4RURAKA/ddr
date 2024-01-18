document.addEventListener("scroll", function () {
	var header = document.querySelector("header");
	if (window.scrollY > 0) {
		header.style.backgroundColor = "white";
	} else {
		header.style.backgroundColor = "transparent";
	}
});

////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
	fetch("./postdata.json")
		.then((response) => response.json())
		.then((postsData) => {
			const postsContainer = document.getElementById("posts");

			postsData.forEach((post) => {
				const postElement = document.createElement("div");
				postElement.classList.add("post");

				const headerElement = document.createElement("div");
				headerElement.classList.add("post-header");

				const titleElement = document.createElement("h4");
				titleElement.textContent = post.title;

				const iconElement = document.createElement("span");
				iconElement.classList.add("material-symbols-outlined");
				iconElement.textContent = "expand_more";

				const contentElement = document.createElement("div");
				contentElement.classList.add("post-content");
				contentElement.innerHTML = post.content;

				headerElement.appendChild(titleElement);
				headerElement.appendChild(iconElement);
				postElement.appendChild(headerElement);
				postElement.appendChild(contentElement);
				postsContainer.appendChild(postElement);

				headerElement.addEventListener("click", function () {
					if (
						contentElement.style.maxHeight === "0px" ||
						contentElement.style.maxHeight === ""
					) {
						// 다른 모든 포스트 닫기
						document
							.querySelectorAll("#posts .post-content")
							.forEach((el) => {
								el.style.maxHeight = "0";
							});
						document
							.querySelectorAll(
								"#posts .material-symbols-outlined"
							)
							.forEach((el) => {
								el.classList.remove("rotated");
							});

						// 클릭된 포스트 펼치기
						contentElement.style.maxHeight =
							contentElement.scrollHeight + "px";
						iconElement.classList.add("rotated");
					} else {
						// 클릭된 포스트 닫기
						contentElement.style.maxHeight = "0";
						iconElement.classList.remove("rotated");
					}
				});
			});
		})
		.catch((error) => {
			console.error("Error loading posts data:", error);
		});
});
