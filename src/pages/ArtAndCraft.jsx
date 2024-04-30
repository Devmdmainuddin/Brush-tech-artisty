import {  useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import { Fade, Slide, } from "react-awesome-reveal";
// import { data } from "autoprefixer";
import '../App.css'



const ArtAndCraft = () => {
    const craft = useLoaderData();
    const [categorey, setcategorey] = useState(craft)
    const [catitems, setcatitems] = useState([])

    useEffect(() => {
        fetch('https://brush-tech-artisty-server.vercel.app/categorey')
            .then((res) => res.json())
            .then((data) => {
                setcatitems(data);
                console.log(data)
            });
    }, [])



const filteritems=items=>{
    const cat = craft.filter(p => p.category === items)
    setcategorey(cat)
}


    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <Helmet>
				<title>Brush Tech Artisty | ArtAndCraft </title>
			</Helmet>
            <div className=" rounded-lg bg-gray-200">
                <div className="  mt-10 w-full ">

                    <h1 className="text-center text-3xl font-bold">sort  by categorey</h1>
                   
                    {/* <div className="flex gap-y-8 flex-col mt-6">
                   
                    <button type="button" onClick={()=>filteritems("Landscape Painting")}>Landscape Painting</button>
                    <button type="button" onClick={()=>filteritems("Portrait Drawing")}>Portrait Drawing</button>
                    <button type="button" onClick={()=>filteritems("Watercolour Painting")}>Watercolour Painting</button>
                    <button type="button" onClick={()=>filteritems("Oil Painting")}>Oil Painting</button>
                    <button type="button" onClick={()=>filteritems("Charcoal Sketching")}>Charcoal Sketching</button>
                    <button type="button" onClick={()=>filteritems("Cartoon Drawing")}>Cartoon Drawing</button>
                    </div> */}
                    

                  
                    {/* {catitem.map((p,idx) => <article onClick={() => handlecatitem(this)} key={idx}>{p.category}</article>)}
                     */}
                    {/* {craft.map((brand) => (
                        <article onClick={() => handlecat(brand.category)} key={brand._id}>{brand.category} {brand.length} </article>
                    ))} */}

<div className=" flex flex-col  mt-10 w-full ">
<button className="" type="button" onClick={()=>setcategorey(craft)}>all</button>
               
                {catitems.map(items =>
                    <div key={items._id} onClick={()=>filteritems(items.title)} >
                        <Link ><div className=" w-full group  cursor-pointer ">
                            <div className="cardShadow p-5 w-full  rounded">
                                
                                <div className=" w-full text-slate-800  rounded  mt-2  flex justify-center items-center">
                                    <p className="text-center font-bold">{items.title}</p>
                                </div>
                            </div>
                        </div></Link>
                        
                    </div>
                )

                }
            </div>



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
                                <article  key={crafts._id} className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                                    <img
                                        alt=""
                                        src={crafts.image}
                                        className="h-56  w-full object-cover transition duration-500 hover:scale-105 sm:h-72"

                                    />

                                    <div className="bg-white p-4 sm:p-6">
                                        <h3 dateTime="2022-10-10" className="block text-xs text-gray-500"> {crafts.category} </h3>

                                        <a href="#">
                                            <h3 className="mt-0.5 text-lg text-gray-900">{crafts.title}</h3>
                                        </a>

                                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                        {crafts.description}
                                        </p>
                                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                                            <span>price : {crafts.price}</span>
                                            <span>{crafts.processingTime} day</span>
                                        </div>
                                        <Link to={`/CraftDetails/${crafts._id}`}><button className="px-4 w-full py-2 mt-4 rounded hover:bg-[#2988e8]  bg-[#528ef0] duration-200 text-white cursor-pointer font-semibold">details</button></Link>
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