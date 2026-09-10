
import { useParams, Link } from "react-router-dom";
import { product1 } from "../product1";
import { FaArrowRight } from "react-icons/fa";
const Details = () => {
  const { prodId } = useParams();

  const singleProduct = product1.find((item) => item.id === Number(prodId));

  return (
    <div>
      <h1>Details : {prodId}</h1>

      {singleProduct ? (
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img
                src={singleProduct.image}
                className="img-fluid"
                alt={singleProduct.title}
              />
            </div>

            <div className="col-6">
              <h1>{singleProduct.title}</h1>
              <p>{singleProduct.desc}</p>
              <button style={{width:"80px"}} className="btn btn-dark">₹{singleProduct.price}</button>
              &nbsp;&nbsp;
              <Link to="/Galleryfaq" className="btn btn-primary ">
                <FaArrowRight /> Back
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <h3>Product Not Found</h3>
      )}
    </div>
  );
};

export default Details;
