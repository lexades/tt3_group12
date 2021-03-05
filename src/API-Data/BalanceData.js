const axios = require("axios");
// balanceData = {};
// let api_url =
// 	"https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance";

// let a = axios({
// 	method: "post",
// 	url: api_url,
// 	headers: { "x-api-key": "BDTv5isstyQr8aGI2xNp5CzqSYFCrtXPIAZV4Z40" },
// 	data: {
// 		accountKey: "e200e4e0-e45a-4923-9079-6ebd929f97db",
// 	},
// });

// a.then((data) => {
// 	balanceData = data["data"];
//     console.log(balanceData);
// });


var Data = {
	accountKey: "e200e4e0-e45a-4923-9079-6ebd929f97db"
};

let Config = {
	headers: {
			'x-api-key': 'BDTv5isstyQr8aGI2xNp5CzqSYFCrtXPIAZV4Z40',
	}
};

const BalanceData = () => {
	axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance', Data, Config)
	.then((response) => {
		console.log(response.data.assetBalance);
	}
);
};

BalanceData();

