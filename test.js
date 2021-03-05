const axios = require("axios");
let temp;

let api_url =
	"https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login";

let a = axios({
	method: "post",
	url: api_url,
	headers: { "x-api-key": "BDTv5isstyQr8aGI2xNp5CzqSYFCrtXPIAZV4Z40" },
	data: {
		username: "Group12",
		password: "Asu_MHFWvDbsXKE",
	},
});

a.then((data) => {
	temp = data["data"];
});

console.log(temp[0]);
