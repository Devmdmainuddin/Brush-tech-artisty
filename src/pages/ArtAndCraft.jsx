import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";



const ArtAndCraft = () => {
    const craft = useLoaderData();
const [categorey,setcategorey]=useState(craft)

    // console.log(craft)
const handlecat = data =>{
    const Sale = craft.filter(p=>p.category === data)
    // console.log(Sale)
    // console.log(Sale)
    setcategorey(Sale)
}
    useEffect(() => {
        // const Sale = craft.filter(p=>p.category ==='For Sale')
        //    const cat = craft.map(craft=>{craft.category})
        //    console.log(cat)
        // fetch('http://localhost:4000/artAndCraf/')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //            const Sale = [...data].filter(p=>p.category =='cat6')
        //            console.log(Sale)
        //     });

    }, [craft])

    return (
        <section className="py-6 sm:py-12  text-gray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 ">
                    <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                    <p className="font-serif text-sm text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                </div>
                <div className=" grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  xl:grid-cols-5 gap-5  mt-10 w-full ">
                    
                    
                    {craft.map((brand) => (
                     <article onClick={()=>handlecat(brand.category)}  key={brand._id}>{brand.category} {brand.length} </article>
                    ))}
                    {
                    //  <Link to={`/artAndCraf/${brand.category}`}>{brand.category}</Link>
                    /* <Link to={`/artandcraft/${brand.category}`}>{brand.category}</Link> */}
                </div>

                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                    {
                        categorey.map(crafts =>
                            <article key={crafts._id} className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                    className="h-56 w-full object-cover"
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
        </section>
    );
};

export default ArtAndCraft;