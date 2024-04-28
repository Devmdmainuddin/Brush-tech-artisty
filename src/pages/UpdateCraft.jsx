import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpdateCraft = () => {
    const craft =useLoaderData();
const handleUpdateProduct = (e)=>{
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const price = form.price.value;
    const category = form.category.value;
    const description =form.description.value;
    const stockStatus = form.stockStatus.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const info = { title, price,category, image,rating,description,stockStatus, customization,processingTime };

    fetch(`http://localhost:4000/artAndCraf/${craft._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
        
            
        })
console.log(info)

}



    return (
        <div className="max-w-[1200px] mx-auto">
            <Helmet>
				<title>Brush Tech Artisty | UpdateCart </title>
			</Helmet>
            <div className="space-y-2 ">
                <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                <p className="font-serif text-sm text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
            </div>
            <form onSubmit={handleUpdateProduct} >
                <div className="flex gap-8 flex-col md:flex-row">
                    <div className="flex-1 items-start">
                        <label className="block mb-2 dark:text-white" htmlFor="title">
                            item_name
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            defaultValue={craft.title}
                            id="title"
                            name="title"
                        />

                        <label
                            className="block mt-4 mb-2 dark:text-white"
                            htmlFor="category"
                        >
                            category Name
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            defaultValue={craft.category}
                            id="category"
                            name="category"
                        />



                        <label
                            className="block mt-4 mb-2 dark:text-white"
                            htmlFor="description"
                        >
                            description
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            defaultValue={craft.description}
                            id="description"
                            name="description"
                        />
                        <label className="block mb-2 mt-4 dark:text-white" htmlFor="stockStatus">
                            stockStatus
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            defaultValue={craft.stockStatus}
                            id="stockStatus"
                            name="stockStatus"
                        />
                    </div>

                    <div className="flex-1">
                        <label className="block mb-2 dark:text-white" htmlFor="image">
                            Image
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            defaultValue={craft.image}
                            id="image"
                            name="image"
                        />
                        <label className="block mb-2 mt-4 dark:text-white" htmlFor="price">
                            price
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            defaultValue={craft.price}
                            id="price"
                            name="price"
                        />

                        <label
                            className="block mt-4 mb-2 dark:text-white"
                            htmlFor="rating"
                        >
                            Rating
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            maxLength={5}
                            max={5}
                            min={1}
                            type="number"
                            defaultValue={craft.rating}
                            id="rating"
                            name="rating"
                        />
                        <label className="block mb-2 mt-4 dark:text-white" htmlFor="customization">
                            customization
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            defaultValue={craft.customization}
                            id="customization"
                            name="customization"
                        />
                        <label className="block mb-2 mt-4 dark:text-white" htmlFor="processingTime">
                            processingTime
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            defaultValue={craft.processingTime}
                            id="processingTime"
                            name="processingTime"
                        />
                    </div>
                </div>

                <input
                    className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
                    type="submit"
                    value="Add Product"
                />
            </form>
        </div>
    );
};

export default UpdateCraft;