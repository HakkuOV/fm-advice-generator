const advice_generator = document.getElementById("advice_generator");
const advice_id = document.getElementById("advice_id");
const advice_text = document.getElementById("advice_text");

const fetchData = () => {
	const api = "	https://api.adviceslip.com/advice";
	fetch(api)
		.then((response) => response.json())
		.then((data) => {
			console.log(data.slip);
			advice_id.innerText = `ADVICE #${data.slip.id}`;
			advice_text.innerHTML = `"${data.slip.advice}"`;
		});
};

advice_generator.addEventListener("click", () => {
	fetchData();
});

fetchData();
