const axios = require("axios");

let api_url =
	"https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login";

async function login() {
	// return await axios({
	// 	method: "post",
	// 	url: api_url,
	// 	headers: {
	// 		"x-api-key": "BDTv5isstyQr8aGI2xNp5CzqSYFCrtXPIAZV4Z40",
	// 	},
	// 	data: {
	// 		username: "Group12",
	// 		password: "Asu_MHFWvDbsXKE",
	// 	},
	// }).then(function (response) {
	// 	return response.data;
	// });

	return axios
		.post(api_url, {
			headers: {
				"x-api-key": "BDTv5isstyQr8aGI2xNp5CzqSYFCrtXPIAZV4Z40",
			},
			params: {
				username: "Group12",
				password: "Asu_MHFWvDbsXKE",
			},
		})
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			console.log(error);
		});
}

console.log(login());
