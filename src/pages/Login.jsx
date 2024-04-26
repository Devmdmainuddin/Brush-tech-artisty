import { useContext, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const emailRaf = useRef(null)
	const { register, handleSubmit, formState: { errors } } = useForm();

	const [showpassword, setshowpassword] = useState(null)
	const navigate = useNavigate();
	const location = useLocation();
	const { signInUser, setloader, googleLogin, githubLogin } = useContext(AuthContext)
	const from = location?.state || "/";

	// handle register
	const onSubmit = data => {
		const { email, password } = data;


		signInUser(email, password)
			.then((result) => {


				console.log(result.user)


				if (result.user) {
					navigate(from);
				}
			})
			.catch(error => {
				setloader(false)
				toast.error(error.message)
				console.log('error', error.message)
			})
	};


	const handleSocialLogin = (socialProvider) => {
		socialProvider().then((result) => {
			if (result.user) {
				navigate(from);
			}
		});
	};
    return (
        <div className="w-full mt-8 mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-100">
            <Helmet>
				<title>Luxury Properties | login </title>
			</Helmet>
            <h1 className="text-2xl font-bold text-center">Login</h1>

<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
    <div className="space-y-1 text-sm">
        <label htmlFor="email" className="block text-gray-400">email</label>
        <input type="email" ref={emailRaf} name="email" id="email" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            {...register("email", { required: true })} />
        {errors.email && <span className='text-red-500'>This field is required</span>}
    </div>
    <div className="space-y-1 text-sm">
        <label htmlFor="password" className="block text-gray-400">Password</label>

        <div className="flex items-center gap-x-2 relative">
            <input
                type={showpassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                {...register("password", { required: true })} />
            <span className="absolute right-3" onClick={() => setshowpassword(!showpassword)}>
                {showpassword ? <FaEye className="text-gray-900"></FaEye> : <IoMdEyeOff className="text-gray-900"></IoMdEyeOff>}
            </span>
            {errors.password && <span className='text-red-500'>This field is required</span>}

        </div>

        <div className="flex justify-end text-xs text-gray-400">
            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
        </div>
    </div>
    <button type="submit" className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign in</button>
</form>
<div className="flex items-center pt-4 space-x-1">
    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
    <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
</div>
<div className="flex justify-center space-x-4">
    <button
        onClick={() => handleSocialLogin(googleLogin)} aria-label="Log in with Google" className="p-3 rounded-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-gray-900">
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
        </svg>
    </button>

    <button
        onClick={() => handleSocialLogin(githubLogin)}
        aria-label="Log in with GitHub" className="p-3 rounded-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-gray-900">
            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
        </svg>
    </button>
</div>
<p className="text-xs text-center sm:px-6 text-gray-400">Don{`'`}t have an account?
    <Link to='/register' rel="noopener noreferrer" href="#" className="underline text-gray-900">Sign up</Link>
</p>
<ToastContainer />
            
        </div>
    );
};

export default Login;