function ProductsInDb({product}) {
console.log(product)

    let products = Object.values(product.data.product)

    
      return (
        // Brands in DB
        <div className="col-lg-12 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
        
              <h5 className="m-0 font-weight-bold text-gray-800">
                  
                Listado de productos - {product.total}
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                {products.map(oneProduct =>{
                  return(
                    <div key={oneProduct.name} className="col-lg-6 mb-4">
                    <a target="_blank" href={`http://localhost:3003/products/detail/${oneProduct.id}`}>
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">
                        {oneProduct.name} - {oneProduct.brands} - $ {oneProduct.price}
                      </div>
                    </div>
                      </a>
                  </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      );
            }
    
    export default ProductsInDb;