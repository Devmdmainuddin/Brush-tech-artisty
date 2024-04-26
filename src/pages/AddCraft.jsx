import UseAuth from "../hooks/UseAuth";


const AddCraft = () => {

  const { user } = UseAuth() || {}
  const handleAddProduct = (e) => {
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
    const name = user.name;
    const email = user.email;

    // console.log(name, price, image, type)

    const info = { title, price,category, image,rating,description,stockStatus, customization,processingTime,name, email };

    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(data => {
        if (data?.insertedId) {
          alert("bhai data insert hoice")
        }
      })

  };



  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="space-y-2 ">
        <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
        <p className="font-serif text-sm text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
      </div>


      <form onSubmit={handleAddProduct}>
        <div className="flex gap-8 ">
          <div className="flex-1 items-start">
            <label className="block mb-2 dark:text-white" htmlFor="name">
              item_name
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              placeholder="item_name"
              id="name"
              name="name"
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
              placeholder="category"
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
            <label className="block mb-2 mt-4 dark:text-white" htmlFor="customization">
              customization
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              placeholder="  customization"
              id="customization"
              name="customization"
            />
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

        <input
          className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
          type="submit"
          value="Add Product"
        />
      </form>

    </div>
  );
};

export default AddCraft;