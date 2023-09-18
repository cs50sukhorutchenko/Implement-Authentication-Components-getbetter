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
import Link from 'next/link';
import styles from '../styles/Login.module.css';

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
		<div className={styles.container}>
			<div className={styles.loginCard}>
				<h2>Login</h2>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="p-2 border border-gray-300 rounded mt-2"
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="p-2 border border-gray-300 rounded mt-2"
				/>
				<button className="p-2 bg-blue-500 text-white rounded mt-4" onClick={handleLogin}>Login</button>
				<p>
					Don't have an account?
					<Link href="/register">
						Register here
					</Link>
				</p>
			</div>
		</div>
	);
}
function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export default LoginPage;