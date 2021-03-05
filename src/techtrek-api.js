const axios = require("axios");

const config = {
	headers: {
		"x-api-key": "BDTv5isstyQr8aGI2xNp5CzqSYFCrtXPIAZV4Z40",
	},
};

export function login(username, password) {
	const api_url =
		"https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login";
	var data = {
		username: username,
		password: password,
	};

	return axios.post(api_url, data, config).then((response) => {
		return response.data;
	});
}

export function viewBalance(accountKey) {
	const api_url =
		"https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance";

	let data = {
		accountKey: accountKey,
	};
	return axios.post(api_url, data, config).then((response) => {
		return response.data;
	});
}

export function viewCurrentPricing() {
	const api_url =
		"https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current";

	return axios.post(api_url, {}, config).then((res) => {
		return res.data;
	});
}

export function viewHistoricalPricing() {
	const api_url =
		"https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical";

	return axios.post(api_url, {}, config).then((res) => {
		return res.data;
	});
}

export function viewPastTransaction(accountKey) {
	const api_url =
		"https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view";

	let data = {
		accountKey: accountKey,
	};
	return axios.post(api_url, data, config).then((response) => {
		return response.data;
	});
}

export function buySell(accountKey, orderType, assetAmount) {
	const api_url =
		"https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add";

	let data = {
		accountKey: accountKey,
		orderType: orderType,
		assetAmount: assetAmount,
	};

	return axios.post(api_url, data, config).then((response) => {
		return response.data;
	});
}

// const username = "Group12";
// const password = "Asu_MHFWvDbsXKE";
