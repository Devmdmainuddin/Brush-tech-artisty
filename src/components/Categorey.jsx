
import { useLoaderData } from "react-router-dom";
const Categorey = () => {
 const item = useLoaderData();

// const [catItems,setItem]= useState([])
  console.log(item.length)

//    useEffect(() => {
//       fetch(`http://localhost:4000/artAndCraf/${item.Categorey}`)
//           .then((res) => res.json())
//           .then((data) => {
//             setItem(data);
//           });
     
//  }, []);


    return (
        <div>
          <h3>categorey</h3>
{/* 
          {
            items.title
          } */}
          {/* {
            catItems.map(items=><div key={items._id}>{items.title}</div>)
          } */}
        </div>
    );
};

export default Categorey;