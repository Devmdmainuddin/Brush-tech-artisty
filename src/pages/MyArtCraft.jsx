import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";
const MyArtCraft = () => {

    const { user } = UseAuth() || {};
    const [item, setItem] = useState([]);
    
   const [TopPropertie,setTopPropertie]=useState([]);

    const handlesort = () => {
    
        setItem(TopPropertie)
        
        setTopPropertie(item)
        
      
    }



    useEffect(() => {

        fetch(`https://brush-tech-artisty-server.vercel.app/myArtAndCraf/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
                const topProperties = [...data].sort((a, b) => b.price - a.price)
                setTopPropertie(topProperties)
               
            });


    }, [user]);

    const handledelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brush-tech-artisty-server.vercel.app/artAndCraf/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = item.filter(craft => craft._id !== _id);
                            setItem(remaining);
                        }

                    })


                
            }
        });
      
    }


    return (
        <div className="max-w-[1200px] mx-auto">
            <Helmet>
				<title>Brush Tech Artisty | MyArtCraft </title>
			</Helmet>
            <section className="container px-4 mx-auto">
                <div className="flex items-center gap-x-3">
                    <h2 className="text-lg font-medium text-gray-800 dark:text-white">my Art & Craft</h2>

                <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">total cart : {item.length}</span>
                </div>

                <div className='text-center'>
                <details className="dropdown ">
                    <summary onClick={()=>handlesort(this)} className="m-1 btn">sort by </summary>
                    
                </details>
            </div>


                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 ">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">


                                                <span>ID</span>

                                            </th>

                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <h2>image</h2>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <h2>item_name</h2>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                price</th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                rating</th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                customization</th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                stockStatus </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                action </th>


                                        </tr>
                                    </thead>
                                    {
                                        item?.map(items => (
                                            <tbody key={items._id} className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                                <tr>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {items._id}
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">

                                                        <img className="w-12" src={items.image} alt="images" />

                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {items.title}
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        ${items.price}</td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                                        {items.rating}</p>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    {items.customization}</td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                                        {items.stockStatus}</p>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div className="flex items-center gap-x-6">


                                                            <button onClick={() => handledelete(items._id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                </svg>
                                                            </button>

                                                            <Link to={`/updatecraft/${items._id}`}>
                                                                <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                    </svg>
                                                                </button></Link>

                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))
                                    }

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MyArtCraft;