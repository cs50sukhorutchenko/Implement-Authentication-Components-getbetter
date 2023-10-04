// import { useState } from 'react';
// import Link from 'next/link';
// import styles from '../styles/Login.module.css';

// function LoginPage() {

// 	const handleLogin = () => {
// 		if (!validateEmail(email)) {
// 			alert("Please enter a valid email address");
// 			return;
// 		}
// 		const [email, setEmail] = useState('');
// 		const [password, setPassword] = useState('');

// 		// TODO: Add function to handle login

// 		return (
// 			<div className={styles.container}>
// 				<div className={styles.loginCard}>
// 					<h2>Login</h2>
// 					<input
// 						type="email"
// 						placeholder="Email"
// 						value={email}
// 						onChange={(e) => setEmail(e.target.value)}
// 						className="p-2 border border-gray-300 rounded mt-2"
// 					/>
// 					<input
// 						type="password"
// 						placeholder="Password"
// 						value={password}
// 						onChange={(e) => setPassword(e.target.value)}
// 						className="p-2 border border-gray-300 rounded mt-2"
// 					/>
// 					<button className="p-2 bg-blue-500 text-white rounded mt-4" onClick={handleLogin}>Login</button>
// 					<p>
// 						Don't have an account?
// 						<Link href="/register">
// 							<a className="..."> Register here</a>
// 						</Link>
// 					</p>
// 				</div>
// 			</div>
// 		);
// 	}

// 	function validateEmail(email) {
// 		// Simple regex pattern to validate email
// 		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 		return re.test(String(email).toLowerCase());
// 	}

// 	export default LoginPage;
import { useState } from 'react';
// import React, { useState } from 'react';
import Link from 'next/link';
//import styles from '../styles/Login.module.css';
import '../styles/globals.css';
import Carousel from './carousel';
function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleLogin = () => {
		if (!validateEmail(email)) {
			alert("Please enter a valid email address");
			return;
		}
		// ... rest of the login process, such as sending the credentials to the server
	}



	// TODO: Add function to handle login

	return (
		//<div className={styles.container}>
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100" >

			<div className="{styles.container} grid grid-cols-2 overflow-y-auto">
				<div className="{styles.loginCard} flex items-center justify-center" >

					<div className="p-6 bg-white rounded shadow-md w-96">
						<h1 className="text-2xl font-extrabold">
							Log in to your Account
						</h1>
						<p className="mt-2">
							Welcome back! Select method to log in:
						</p>
						<div className="flex-1 m-6">
							<div className="flex flex-wrap justify-center">
								<button
									className="px-4 py-2 my-2 mx-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
									<img className="w-6 h-6" src="../google-color.svg" loading="lazy" alt="google logo" />
									<span>Google</span>
								</button>
								<button
									className="px-4 py-2 my-2 mx-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
									<img className="w-6 h-6" src="../Facebook_f_logo_(2021).svg" loading="lazy" alt="google logo" />
									<span>Facebook</span>
								</button>
							</div>

						</div>
						<div className="border-b text-center">
							<div
								className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
								Or sign up with e-mail
							</div>
						</div>
						<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="p-2 border border-gray-300 rounded mt-2 md:mt-4 w-full"
						/>
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="p-2 border border-gray-300 rounded mt-2 md:mt-4 w-full"
						/>
						<div className="flex items-center justify-between mt-4 ">
							<div className="flex items-center">
								<input id="remember_me" name="remember_me" type="checkbox"
									className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
								<label for="remember_me" className="ml-2 block text-sm text-gray-900">
									Remember me
								</label>
							</div>

							<div className="text-sm">
								<span className="font-medium text-blue-600 hover:text-blue-500">
									Forgot your password?
								</span>
							</div>
						</div>
						<button className="p-2 bg-blue-500 text-white rounded mt-4 w-full" onClick={handleLogin}>Login</button>
						<p className="mt-4">
							<span>Don't have an account? </span>
							<Link href="/registration" className="text-blue-500">
								<span>Register here</span>
							</Link>
						</p>
					</div>
				</div >
				<div className="flex items-center justify-center h-screen">
					<Carousel />
				</div>

			</div >
		</div >
	);
};

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());

}

export default LoginPage;
// export default Carousel;