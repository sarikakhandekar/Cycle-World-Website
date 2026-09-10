import React, { useRef, useState } from "react";
import { products } from "../components/products";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import "./Product.css";



const Product = () => {
  const [data, setData] = useState(products);
  const [editId, setEditId] = useState(null);

  const titleRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      title: titleRef.current.value,
      desc: descRef.current.value,
      price: priceRef.current.value,
      image: imageRef.current.value,
    };

    setData([...data, newProduct]);

    titleRef.current.value = "";
    descRef.current.value = "";
    priceRef.current.value = "";
    imageRef.current.value = "";
  };

  const deleteProduct = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const editProduct = (item) => {
    titleRef.current.value = item.title;
    descRef.current.value = item.desc;
    priceRef.current.value = item.price;
    imageRef.current.value = item.image;

    setEditId(item.id);
  };

  const saveProduct = () => {
    const updatedProduct = {
      title: titleRef.current.value,
      desc: descRef.current.value,
      price: priceRef.current.value,
      image: imageRef.current.value,
    };

    setData(
      data.map((item) =>
        item.id === editId ? { ...item, ...updatedProduct } : item
      )
    );

    setEditId(null);

    titleRef.current.value = "";
    descRef.current.value = "";
    priceRef.current.value = "";
    imageRef.current.value = "";
  };

  return (
    <>
      <Marquee />
      <Navbar1 />
      <Navbar />

      <div className="container mt-4">
        <h1 style={{marginTop:"90px", fontFamily:"sans-serif"}} className="text-center mb-4">OUR  PRODUCTS</h1>

        <div className="row mb-4">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Product Title"
              ref={titleRef}
            />
          </div>

          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              ref={descRef}
            />
          </div>

          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Price"
              ref={priceRef}
            />
          </div>

          <div className="col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Image URL"
              ref={imageRef}
            />
          </div>

          <div className="col-md-2">
            {editId ? (
              <button className="btn btn-warning w-100" onClick={saveProduct}>
                Save Product
              </button>
            ) : (
              <button className="btn btn-dark w-100" onClick={addProduct}>
                Add Product
              </button>
            )}
          </div>
        </div>

        <div className="row">
          {data.map((item) => {
            let discount = 0;

            if (item.price >= 9000) {
              discount = 35;
            } else if (item.price >= 8000) {
              discount = 30;
            } else if (item.price >= 7000) {
              discount = 25;
            } else if (item.price >= 5000) {
              discount = 20;
            } else if (item.price >= 3000) {
              discount = 15;
            } else {
              discount = 10;
            }

            const discountedPrice = item.price - (item.price * discount) / 100;

            return (
              <div className="col-md-3 mt-3 " key={item.id} style={{ width: "400px", marginLeft: "30px" }}
>
                <div className="card h-100 cycle-card shadow-sm position-relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5>{item.title}</h5>

                    <p>{item.desc}</p>

                    <h6 className="text-muted">
                      <del>₹{item.price}</del>
                    </h6>

                    <button
                      className="btn btn-danger btn-sm position-absolute"
                      style={{
                        top: "10px",
                        right: "10px",
                        borderRadius: "120px",
                        fontSize: "12px",
                        padding: "4px 10px",
                        zIndex: 10,
                        border: "rotated 12px solid red",
                        height: "25px",
                        width: "80px",
                      }}
                    >
                      {discount}% OFF
                    </button>
                    <h4 className="text-success">₹{discountedPrice}</h4>

                    <div className="d-flex gap-2 mt-auto">
                      <button
                        className="btn btn-dark btn-sm flex-fill"
                        onClick={() =>
                          alert(`${item.title} Purchased Successfully`)
                        }
                      >
                        Buy
                      </button>

                      <button
                        className="btn btn-info btn-sm flex-fill"
                        onClick={() => editProduct(item)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger btn-sm flex-fill"
                        onClick={() => deleteProduct(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div><br></br><br></br><br></br><br></br>
  
      <Footer />
    </>
  );
};

export default Product;
