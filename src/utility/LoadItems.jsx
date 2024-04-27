
import { baseURL } from "./Url.js";

// product of brands fatch from here
export const productOfBrands =async({params})=>{
    // params => brandName
    const response = await fetch(`${baseURL}/category`);
    const data = await response.json();
    const filterData = data?.filter(item=>item.category.toLowerCase()===params.category.toLowerCase())
    return filterData;
}