function LastProductInDatabase({product}) {
  // console.log("PRODUCT", product.data.product.pop())

  const lastProduct = product.data.product.slice(-1)

    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Last Product in Data Base - {lastProduct[0].name}
            </h5>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img className="img-fluid px-3 px-sm-4 mt-3 mb-4"  src={lastProduct[0].image} alt={lastProduct[0].name}/>
            </div>
            <p>
              {lastProduct[0].description}
            </p>
            <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:3003/products/detail/${lastProduct[0].id}`}>
              View product detail
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default LastProductInDatabase;