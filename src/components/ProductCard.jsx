import React from "react";

// export default function ProductCard({product}) {
//      return (
//      <div className="col-3 mb-3">
//           <div class="card" style={{width: '300px'}}>
//                <img src={product.image} class="card-img-top" alt="..."/>
//                <div className="card-body">
//                <h5 className="card-title">{product.name}</h5>
//                <p className="card-text">{product.price}vnd</p>
//                <p className="card-text">{product.description}</p>       
//                <a href="#" class="btn btn-primary">Buy Now</a>
//           </div>
//      </div>
//      </div>
//      );
// }

export default function ChildComponent( {number, name}){
     const componentName = 'ChildComponent';

     return(
          <div>
               <h1>Xin chao toi la: {componentName}</h1>
               <h3>
                    Danh sach props cua toi la:
                    <p>number: {number}</p>
                    <p>name: {name}</p>
               </h3>
          </div>
     );
}

