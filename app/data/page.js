// "use client";
// import React, { useState, useEffect } from "react";
// const Data = () => {
//   const [product, setProduct] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//       data = await data.json();
//       setProduct(data);
//       console.log(data);
//     }
//     fetchData();
//   }, []);
//   return (
//     <div>
//       <h2>Data</h2>
//       <ul>
//         {product.map((i) => (
//           <ul key={i.id} className="flex border m-5 p-2 w-1/2">
//             <li>{i.id}-</li>
//             <li> {i.title}</li>
//           </ul>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Data;

//using server component fetch data
async function fetchData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  return data;
}

const Data = async () => {
  let products = await fetchData();
  console.log(products);
  return (
    <div>
      {products?.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};

export default Data;
