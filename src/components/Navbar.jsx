import { Link, NavLink } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
// import { IoPersonOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import '../App.css'



const Navbar = () => {
    const [theme,setTheme]=useState('light')
    const { user, logOut } = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleToggle = e => {
        if (e.target.checked) {
          setTheme('dark')
        } else {
          setTheme('light')
        }
      }

    const handlelogOut = () => {
        logOut()
            .then(() => console.log('user logged successfully'))
            .catch(error => console.error(error))
    }
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
    
        // add custom data-theme attribute
        document.querySelector('html').setAttribute('data-theme', localTheme)
      }, [theme])
    return (
        <div className='px-4 py-5  max-w-[1170px] mx-auto md:px-24 lg:px-8'>
            <div className='relative flex items-center justify-between'>
                <Link
                    to='/'
                    aria-label='Luxury Properties'
                    title='Luxury Properties'
                    className='inline-flex items-center'
                >
                   <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 '>
                        Brush tech <span className="text-green-500">artisty</span>
                        {/* <img className="w-[60px]" src="https://i.ibb.co/XbV3yjw/33793b45-1af6-8c12-0931-a67904139ccc.png" alt="" border="0"></img> */}
                    </span>
                </Link>
                <ul className='items-center hidden gap-x-6 lg:flex'>
                    <li>
                        <NavLink
                            to='/'
                            data-tooltip-id="Home"
                            data-tooltip-content="Home!"
                            data-tooltip-place="top"

                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        ><Tooltip id="Home" />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/ArtandCraft'
                            data-tooltip-id="ArtandCraft"
                            data-tooltip-content="Art & Craft!"
                            data-tooltip-place="top"
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        ><Tooltip id="ArtandCraft" />
                            art & craft
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/addCraft'
                            data-tooltip-id="addCraft"
                            data-tooltip-content="add Craft!"
                            data-tooltip-place="top"
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        ><Tooltip id="addCraft" />
                            addCraft
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/updatecraft/'
                            data-tooltip-id="UpdateCraft"
                            data-tooltip-content="Update Craft!"
                            data-tooltip-place="top"
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        ><Tooltip id="addCraft" />
                            UpdateCraft
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/myartcraft'
                            data-tooltip-id="addCrmyartcraftaft"
                            data-tooltip-content="my art & craft"
                            data-tooltip-place="top"
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        ><Tooltip id="addCrmyartcraftaft" />
                            my Art & Craft
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/contact'
                            aria-label='contact'
                            title='contact'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            contact
                        </NavLink>
                    </li>
                   


                </ul>
                <div className=" hidden  lg:flex items-center gap-x-3">

                <label className="cursor-pointer grid place-items-center">
                            <input type="checkbox" onChange={handleToggle} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img aria-label='About Us'
                                        title={`${user.displayName}`} className="z-[1111]" src={user?.photoURL || "https://i.ibb.co/n3pxCKM/profile.png"} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1111] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user?.displayName || 'user name not found'}</button>

                                </li>
                                <li>
                                    <button
                                        onClick={handlelogOut}
                                        className="btn btn-sm  btn-ghost">Logout</button>

                                </li>
                            </ul>
                        </div>
                            : <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="">
                                    <div className="w-10 ">
                                        <p>profile</p>

                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1111] p-2 shadow bg-base-100 rounded-box w-52">
                                    <Link to='/login'>
                                        <button className="btn btn-sm  btn-ghost">login</button>
                                    </Link>

                                </ul>


                            </div>

                    }

                </div>


                <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <RiMenu2Line></RiMenu2Line>
                    </button>
                    {isMenuOpen && (
                        <div className='absolute z-10 top-0 left-0 w-full'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link
                                            to='/'
                                            aria-label='Luxury Properties'
                                            title='Luxury Properties'
                                            className='inline-flex items-center'
                                        >

                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                Luxury <span>Properties</span>
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link
                                                to='/contact'
                                                aria-label='contact'
                                                title='contact'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                contact us
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                to='/about'
                                                aria-label='About Us'
                                                title='About Us'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                    </ul>

                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img aria-label='About Us'
                                                    title={`${user.displayName}`} className="z-[1111]" src={user?.photoURL || "https://i.ibb.co/y0yrnYQ/1681283571946.jpg"} />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1111] p-2 shadow bg-base-100 rounded-box w-52">
                                            <li>
                                                <button className="btn btn-sm  btn-ghost">{user?.displayName || 'user name not found'}</button>

                                            </li>
                                            <li>
                                                <button
                                                    onClick={handlelogOut}
                                                    className="btn btn-sm  btn-ghost">Logout</button>

                                            </li>
                                        </ul>
                                    </div>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="">
                                            <div className="w-10 ">
                                                <p>profile</p>

                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1111] p-2 shadow bg-base-100 rounded-box w-52">
                                            <Link to='/login'>
                                                <button className="btn btn-sm  btn-ghost">login</button>
                                            </Link>

                                        </ul>


                                    </div>


                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;