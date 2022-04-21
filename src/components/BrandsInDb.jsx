function BrandsInDb({product}) {

  //crear una function y pasar como parametros dos cb
  let keyBrand = Object.keys(product.countByBrand);
  let valueBrand = Object.values(product.countByBrand)

  const calcBrand = function (par1, par2) {
    let answerBrand = []
    for (let i = 0; i < par1.length; i++) {
      answerBrand.push(`${par1[i]}: ${par2[i]}`)
    }
    return answerBrand
  }
    return (
      // Brands in DB
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Brands in Data Base
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              {calcBrand(keyBrand, valueBrand).map((oneBrand, i) => {
                return(
                  <div key={oneBrand + i} className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">{oneBrand}</div>
                  </div>
                </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default BrandsInDb;