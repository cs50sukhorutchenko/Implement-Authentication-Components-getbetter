import { useState } from 'react';
import Link from 'next/link';

function RegisterPage() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const validateRegistration = () => {
		if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
			alert("All fields are required!");
			return false;
		}

		if (formData.password !== formData.confirmPassword) {
			alert("Passwords do not match!");
			return false;
		}

		// Add other relevant validations like minimum password length, complexity, etc.
		if (formData.password.length < 8) {
			alert("Password should be at least 8 characters long!");
			return false;
		}

		// Validate email format
		if (!validateEmail(formData.email)) {
			alert("Please enter a valid email address!");
			return false;
		}

		return true;
	};

	const handleSubmit = () => {
		if (validateRegistration()) {
			// Proceed with the registration process, such as sending the data to the server.
		}
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
			<div className="p-6 bg-white rounded shadow-md w-96">
				<h2 className="text-2xl mb-4">Registration</h2>
				<input name="firstName" onChange={handleInputChange} placeholder="First Name" className="p-2 border border-gray-300 rounded mt-2 w-full" />
				<input name="lastName" onChange={handleInputChange} placeholder="Last Name" className="p-2 border border-gray-300 rounded mt-2 w-full" />
				<input name="email" type="email" onChange={handleInputChange} placeholder="Email" className="p-2 border border-gray-300 rounded mt-2 w-full" />
				<input name="password" type="password" onChange={handleInputChange} placeholder="Password" className="p-2 border border-gray-300 rounded mt-2 w-full" />
				<input name="confirmPassword" type="password" onChange={handleInputChange} placeholder="Confirm Password" className="p-2 border border-gray-300 rounded mt-2 w-full" />
				<button onClick={handleSubmit} className="p-2 bg-blue-500 text-white rounded mt-4 w-full">Register</button>
			</div>
		</div>
	);
}

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export default RegisterPage;
