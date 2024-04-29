import { useEffect, useState } from "react";
// import { GiConsoleController } from "react-icons/gi";
import { Link } from "react-router-dom";
import {  Slide, } from "react-awesome-reveal";


const CraftItems = () => {
    const [dataLength,setDataLength]=useState(6);
    const [items,setitems]=useState([])
    useEffect(()=>{
        fetch(`https://brush-tech-artisty-server.vercel.app/artAndCraf`)
        .then((res) => res.json())
        .then((data) => {
            setitems(data);
    //   console.log(data)
        });
    },[])
    return (
        <section className=" max-w-[1200px] mx-auto   py-6 sm:py-12  text-gray-800">
             <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 ">
         <h2 className="text-3xl font-bold">new Art & Craft Items</h2> 
            <p className="font-serif text-sm text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
        </div>
        <div   className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {
    items.slice(0,dataLength).map(item=>
        <Slide triggerOnce key={item._id} >
 <article key={item._id} className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
                alt=""
                src={item.image}
                className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
                <h3 dateTime="2022-10-10" className="block text-xs text-gray-500"> {item.category} </h3>

                <a href="#">
                    <h3 className="mt-0.5 text-lg text-gray-900">{item.title}</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {item.description}
                </p>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                    <span>${item.price}</span>
                    <span>{item.processingTime} day</span>
                </div>
                <Link className="block text-center mt-3 w-full rounded text-white px-12 py-3 text-sm font-medium bg-rose-600 shadow  focus:outline-none focus:ring active:text-rose-500 sm:w-auto" to={`/CraftDetails/${item._id}`}><button>details</button></Link>
            </div>
            
        </article> 
        </Slide>
       
    )
}
        </div>
        <div className={dataLength === items.length ? 'hidden' : 'text-center mt-6'}>
                <button
                    onClick={() => setDataLength(items.length)}
                    className="btn btn-primary">Show All Books</button>
            </div>
      
    </div>


            
        </section>
    );
};

export default CraftItems;