import { useLoaderData } from "react-router-dom";


const CraftDetails = () => {
    const craft = useLoaderData();
console.log(craft)
    return (
        <div>
            <h2>

                <details></details>
            </h2>
             <h2>{craft.title}</h2>
        </div>
    );
};

export default CraftDetails;