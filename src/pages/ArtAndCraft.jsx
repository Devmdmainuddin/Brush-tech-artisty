import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
// import { Fade, Slide, } from "react-awesome-reveal";
// import { data } from "autoprefixer";
import '../App.css'

const ArtAndCraft = () => {
    const craft = useLoaderData();
    const [categorey, setcategorey] = useState(craft)
    const [catitem, setcatitem] = useState([])
    console.log(catitem)
    useEffect(() => {
        let uniqueChars = [...new Set(craft)];
        setcatitem(uniqueChars)
        console.log(uniqueChars)
    }, [craft])

    const allItems = () => {
        //   let uniqueChars = [...new Set(craft.categorey === craft)];
        setcategorey(craft)
        console.log(craft)
    }
    const handlecat = data => {
        const cat = craft.filter(p => p.category === data)
        setcategorey(cat)
    }
    const handlecatitem = data => {
        const cat = craft.filter(p => p.category === data)
        
    }



    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className=" rounded-lg bg-gray-200">
                <div className="  mt-10 w-full ">

                    <h1 className="text-center text-3xl font-bold">sort  by categorey</h1>

                    <h2 className="mt-4" onClick={allItems}>all</h2>
                    {catitem.map((p,idx) => <article onClick={() => handlecatitem(this)} key={idx}>{p.category}</article>)}
                    {craft.map((brand) => (
                        <article onClick={() => handlecat(brand.category)} key={brand._id}>{brand.category} {brand.length} </article>
                    ))}
                </div>
            </div>
            <div className=" rounded-lg bg-gray-200 lg:col-span-2 py-6 sm:py-12  text-gray-800">

                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 ">
                        <div className="flex flex-col items-center">
                            <h2 className="text-3xl font-bold"> Art & Craft </h2>
                            <div className="horizontalLine mt-6">
                            </div>

                        </div>

                    </div>


                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                        {
                            categorey.map(crafts =>
                                <article key={crafts._id} className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                        className="h-56  w-full object-cover transition duration-500 hover:scale-105 sm:h-72"

                                    />

                                    <div className="bg-white p-4 sm:p-6">
                                        <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

                                        <a href="#">
                                            <h3 className="mt-0.5 text-lg text-gray-900">{crafts.title}</h3>
                                        </a>

                                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                                            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                                            mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                                            dignissimos. Molestias explicabo corporis voluptatem?
                                        </p>
                                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                                            <span>June 2, 2020</span>
                                            <span>2.2K views</span>
                                        </div>
                                        <Link to={`/CraftDetails/${crafts._id}`}><button>details</button></Link>
                                    </div>

                                </article>)
                        }


                    </div>
                </div>

            </div>
        </div>

    );
};

export default ArtAndCraft;