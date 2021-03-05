const axios = require("axios");

let api_url =
	"https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login";

async function login(username, password) {
	const config = {
		method: "post",
		url: api_url,
		headers: {
			"x-api-key": "BDTv5isstyQr8aGI2xNp5CzqSYFCrtXPIAZV4Z40",
		},
		data: {
			username: username,
			password: password,
		},
	};

	let res = await axios(config);
	return res.data;
}

let username = "Group12";
let password = "Asu_MHFWvDbsXKE";

login(username, password).then((data) => {
	console.log(data);
});
