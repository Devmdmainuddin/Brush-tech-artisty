import UseAuth from "../hooks/UseAuth";
import '../App.css'
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";
const AddCraft = () => {

  const { user } = UseAuth() || {}
  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;
    const stockStatus = form.stockStatus.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const name = user.displayName;
    const email = user.email;

    // console.log(name, price, image, type)

    const info = { name, email, title, price, category, image, rating, description, stockStatus, customization, processingTime };

    fetch("http://localhost:4000/addArtAndCraf", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(data => {
        console.log('inside post', data)
        if (data?.insertedId) {
          form.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: " add art & craft items ",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    console.log(info)
  };



  return (
    <div className="max-w-[1200px] mx-auto">
      <Helmet>
				<title>Brush Tech Artisty | addCraft </title>
			</Helmet>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold">add art & craft </h2>
        <div className="horizontalLine mt-6">
        </div>

      </div>


      <form onSubmit={handleAddProduct} className='mt-12'>
        <div className="flex gap-8 ">
          <div className="flex-1 items-start">
            <label className="block mb-2 dark:text-white" htmlFor="title">
              item_name
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              placeholder="item_name"
              id="title"
              name="title"
            />

            {/* <label
              className="block mt-4 mb-2 dark:text-white"
              htmlFor="category"
            >
              category Name
            </label>
            <input
              className="w-full p-2 border rounded-md focus:border-[#FF497C] focus:outline-none"
              type="text"
              placeholder="category"
              id="category"
              name="category"
            /> */}
            <label
              className="block mt-4 mb-2 dark:text-white"
              htmlFor="category"
            >
              category Name
            </label>
            <select
              name="category"
              id="category"
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              placeholder="Select category"
            >
              <option value="Landscape Painting" selected>
                Landscape Painting
              </option>
              <option value="Portrait Drawing" selected>
                Portrait Drawing
              </option>
              <option value="Watercolour Painting" selected>
                Watercolour Painting
              </option>
              <option value="Oil Painting" selected>
                Oil Painting
              </option>
              <option value="Charcoal Sketching" selected>
                Charcoal Sketching
              </option>
              <option value="Cartoon Drawing" selected>
                Cartoon Drawing
              </option>
            </select>



            <label
              className="block mt-4 mb-2 dark:text-white"
              htmlFor="description"
            >
              description
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              placeholder="Enter description"
              id="description"
              name="description"
            />
            <label className="block mb-2 mt-4 dark:text-white" htmlFor="stockStatus">
              stockStatus
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              placeholder="stockStatus"
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
              placeholder="Enter Image URL"
              id="image"
              name="image"
            />
            <label className="block mb-2 mt-4 dark:text-white" htmlFor="price">
              price
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              placeholder="  price"
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
              min={0}
              type="number"
              placeholder="Enter Rating"
              id="rating"
              name="rating"
            />

<label
              className="block mt-4 mb-2 dark:text-white"
              htmlFor="customization"
            >
              customization
            </label>
            <select
              name="customization"
              id="customization"
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              placeholder="Select customization"
            >
              <option value="yes" selected>
                yes
              </option>
              <option value="no" selected>
                no
              </option>
              
            </select>
            {/* <label className="block mb-2 mt-4 dark:text-white" htmlFor="customization">
              customization
            </label>
           <div className="flex items-center gap-x-4 justify-center">
           <div className="flex items-center gap-x-4 justify-center">
           <input
              className=" p-2 border rounded-md focus:outline-[#FF497C]"
              type="radio"
              placeholder="  customization"
              id="customization"
              name="customization"
            />
            <label className="block" htmlFor="customization">
              yes
            </label>
           </div>
            <div className="flex items-center gap-x-4 justify-center">
            <input
              className="p-2 border rounded-md focus:outline-[#FF497C]"
              type="radio"
              placeholder="  customization"
              id="customization"
              name="customization"
            />
            <label className="block" htmlFor="customization">
              no
            </label>
            </div>
           </div> */}

            {/* <input
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              placeholder="  customization"
              id="customization"
              name="customization"
            /> */}
            <label className="block mb-2 mt-4 dark:text-white" htmlFor="processingTime">
              processingTime
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              placeholder="  processingTime"
              id="processingTime"
              name="processingTime"
            />
          </div>
        </div>
        {/* <a
          className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
          href="#"
        >
          Download
        </a> */}
        <input
          className="inline-block w-full rounded bg-indigo-600 mt-4 px-4 py-3 text-sm font-medium text-white transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
          type="submit"
          value="Add Product"
        />
        {/* <input
          className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
          type="submit"
          value="Add Product"
        /> */}
      </form>

    </div>
  );
};

export default AddCraft;