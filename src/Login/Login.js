import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "./../techtrek-api";

import "./Login.styles.css";

export default function Login() {
	const history = useHistory();

	const [username, setusername] = useState(""); //Group12
	const [password, setpassword] = useState(""); //Asu_MHFWvDbsXKE
	const [loginStatus, setLoginStatus] = useState("");

	var Data = {
		username: username,
		password: password,
	};

	const handleLogin = () => {
		login(Data.username, Data.password).then((response) => {
			console.log(response);
			if (!response.status === 200) {
				setLoginStatus(false);
			} else {
				setLoginStatus(true);
				history.push("/dashboard");
			}
			console.log(loginStatus);
		});
	};

    //before integration
//     const handleLogin = () => {
//         Axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', Data, Config)
//         .then((response) => {
//             console.log(response);
//             if(!response.status===200) {
//                 setLoginStatus(false);
//             } else {
//                 setLoginStatus(true);
//                 history.push('/dashboard');
//             }
//             console.log(loginStatus);
//         }
//     );
// };

	return (
		<div className="login_box">
			<table>
				<tbody>
					<tr>
						<td colSpan="2">
							<img
								src="https://www.nicepng.com/png/full/267-2670427_1-dbs-group-holdings-ltd-dbs-bank-logo.png"
								alt="logo"
							></img>
						</td>
					</tr>
					<tr>
						<td>User</td>
						<td>
							<input
								type="text"
								onChange={(e) => {
									setusername(e.target.value);
								}}
							></input>
						</td>
					</tr>
					<tr>
						<td>Password</td>
						<td>
							<input
								type="text"
								onChange={(e) => {
									setpassword(e.target.value);
								}}
							></input>
						</td>
					</tr>
					<tr>
						<td colSpan="2">
							<button className="login_button" onClick={handleLogin}>
								Login
							</button>
							<p>{loginStatus}</p>
							<a href="#forgotpwd">Forget password?</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
