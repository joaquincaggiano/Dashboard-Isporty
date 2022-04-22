import MainBoxes from "./MainBoxes";
import LastProductInDatabase from "./LastProductInDatabase.jsx";
import BrandsInDb from "./BrandsInDb";
import ProductsInDb from "./ProductsInDb"

import {useState, useEffect} from "react";

function ContentRowTop() {

  const [user, setUser] = useState(null);
  const [product, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:3003/api/users")
      .then(response => response.json())
      .then(data => {
        if(data){
          setLoading(false)
          setUser(data)
          console.log(data)
        }
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:3003/api/products")
      .then(response => response.json())
      .then(data => {
        if(data) {
          setLoading(false)
          setProduct(data)
        }
      })
  }, [])

  return (
    // <!-- Content Row Top -->
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      {isLoading && <p>Cargando información...</p>}
      {!isLoading && product && user &&
        <>
        <MainBoxes user={user} product={product}/>
        
          <div className="row">
            <LastProductInDatabase product={product}/>
            <BrandsInDb product={product}/>
            <ProductsInDb product={product}/>
          </div>
        </>  
      }
    </div>

    /* <!--End Content Row Top--> */
  );
}

export default ContentRowTop;