
import UseAuth from "../hooks/UseAuth";
import Swal from 'sweetalert2'


const CreateCategorey = () => {
    const { user } = UseAuth() || {}






    const handleCategorey = (e) => {
        e.preventDefault();
    
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const name = user.displayName;
        const email = user.email;
    
        // console.log(name, price, image, type)
        const info = { name, email, title,  image, };
      
        fetch("https://brush-tech-artisty-server.vercel.app/addCategorey", {
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
    }    
    return (
        <div className="w-full max-w-[800px] mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="px-6 py-4">


                <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">CreateCategorey</h3>

                <form onSubmit={handleCategorey}>
                    <div className="w-full mt-4">
                    <label htmlFor="title"></label>
                        <input name="title" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="type categorey name"  />
                    </div>

                    <div className="w-full mt-4">
                        <label htmlFor="image"></label>
                        <input name="image" className="block w-full  px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="type image url"  />
                    </div>

                    <div className="flex items-center justify-center mt-4">


                        <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            add categorey
                        </button>
                    </div>
                </form>
            </div>

           
        </div>
    );
};

export default CreateCategorey;