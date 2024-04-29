

const BrandCard = () => {

    return (
        <div >
        
        <div className="text-center md:text-left mt-16">
          <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
            <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
              <i className="bx bxs-category"></i>
            </span>
            Top Brands
          </p>
          <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
            Browse By Brands
          </p>
        </div>

        {/* grid grid-cols-5 gap-4  dark:bg-[#0F172A] */}
        <div className=" grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  xl:grid-cols-5 gap-5  mt-10 w-full ">
        <div  className=" w-full group  cursor-pointer ">
        <div className="cardShadow p-5 w-full bg-white dark:bg-[#1a2641d5] rounded">
      <img
        className="w-full h-[150px] object-contain rounded-md"
        src=''
        alt=""
      />
      <div className=" w-full group-hover:bg-[#ab3154] rounded h-10 mt-2 bg-[#FF497C] flex justify-center items-center">
        <p className="text-center font-bold text-white"></p>
      </div>
      </div>
    </div>
        </div>
        </div>
    );
};

export default BrandCard;