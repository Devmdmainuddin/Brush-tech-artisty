import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Swal from 'sweetalert2'

const Register = () => {
	const [showpassword, setshowpassword] = useState(null)
	const { createUser, updateUserProfile, setloader } = useContext(AuthContext)
	const { register, handleSubmit, formState: { errors }, } = useForm();

	const navigate = useNavigate();
	const from = "/";

	const onSubmit = (data) => {
		// data.preventDefault();
		const { email, password, image, fullName } = data;
		if (password.length < 6) {
			Swal.fire({
				position: "top-end",
				icon: "error",
				title: "password must have a  6 letter",
				showConfirmButton: false,
				timer: 1500
			});
			//toast.error('error.message')
			return
		}
		if (!/[A-Z]/.test(password)) {
			Swal.fire({
					position: "top-end",
					icon: "error",
					title: "password must have a  uppercase  letter",
					showConfirmButton: false,
					timer: 1500
				});
			//toast.error("password must have a  uppercase  letter")
			return
		}

		if (!/[a-z]/.test(password)) {
			Swal.fire({
				position: "top-end",
				icon: "error",
				title: "password must have a capital letter",
				showConfirmButton: false,
				timer: 1500
			});
			//toast.error('password must have a capital letter')
			return
		}

		createUser(email, password)

			.then(result => {
				console.log('user created succesfully !', result.user)
				updateUserProfile(fullName, image)
				navigate(from);
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: " add art & craft items ",
					showConfirmButton: false,
					timer: 1500
				});
				//toast.success('user register successfully')
				const createdAt = result.user?.metadata?.creationTime;
				const users = { fullName, image, email, createdAt: createdAt };
				fetch('http://localhost:4000/users', {
					method: 'POST',
					headers: {
						'content-type': 'application/json'
					},
					body: JSON.stringify(users)
				})
					.then(res => res.json())
					.then(data => {

						console.log('inside post', data)
						if (data.insertedId) {
							//	alert('users added successfully')
							toast.success('users added successfully')
							// const newproperties = [...properties, data]
							// setproperties(newproperties)
							// form.reset();


						}
					})



			})
			.catch(error => {
				Swal.fire({
					position: "top-end",
					icon: "error",
					title: "try again",
					showConfirmButton: false,
					timer: 1500
				});
			//	toast.error(error.message)
				console.log('error', error.message)
				setloader(false)
			});



	};
	return (
		<div className="flex mt-8 flex-col max-w-[800px] p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800 mx-auto">
			<Helmet>
				<title>Brush Tech Artisty | Register </title>
			</Helmet>
			<div className="mb-8 text-center">
				<h1 className="my-3 text-4xl font-bold">Sign up</h1>
				<p className="text-sm text-gray-600">Sign in to access your account</p>
			</div>



			<form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
				<div className="space-y-4">
					<div>
						<label htmlFor="text" className="block mb-2 text-sm">Full Name</label>
						<input type="text" name="text" id="text" placeholder="Full name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
							{...register("fullName", { required: true })}
						/>
						{errors.fullName && (
							<span className="text-red-500">This field is required</span>
						)}
					</div>
					<div>
						<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
						<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
							{...register("email", { required: true })}
						/>
						{errors.email && (
							<span className="text-red-500">This field is required</span>
						)}
					</div>
					<div>
						<label htmlFor="image" className="block mb-2 text-sm">Image Url</label>
						<input type="text" name="image" id="image" placeholder="image url" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
							{...register("image")}
						/>
					</div>
					<div>
						<div className="flex justify-between mb-2">
							<label htmlFor="password" className="text-sm">Password</label>
						</div>
						<div className="flex items-center gap-x-2 relative">
						<input type={showpassword ? "text" : "password"} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
							{...register("password", { required: true })}
						/>
						<span className="absolute right-3" onClick={() => setshowpassword(!showpassword)}>
							{showpassword ? <FaEye className="text-gray-900"></FaEye> : <IoMdEyeOff className="text-gray-900"></IoMdEyeOff>}
						</span>
						{errors.password && (
							<span className="text-red-500">This field is required</span>
						)}

						</div>
						
					</div>


				</div>
				<div className="space-y-2">
					<div>
						<button type="submit" className="w-full px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">Sign up</button>
					</div>
					<div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
						<span className="text-sm text-gray-600 dark:text-gray-200">alreday  have an account? </span>

						<Link to='/login'><a href="#" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">login</a></Link>
					</div>
					{/* <p className="px-6 text-sm text-center text-gray-600">Don{`'`}t have an account yet?
						<Link to='/login' rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Sign in</Link>.
					</p> */}
				</div>
			</form>
			<ToastContainer />
		</div>
	);
};

export default Register;