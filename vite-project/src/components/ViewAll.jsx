import React, { useState } from "react";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import "./ViewAll.css";
import { Link } from "react-router-dom";


const cycles = [
  {
    id: 1,
    name: "Moutain Rider 500",
    category: "Mountain",
    price: 15999,
    oldPrice: 18999,
    rating: 4.8,
    image:
      "https://media.mwstatic.com/product-images/src/primary/825/825378.jpg",
  },
  {
    id: 2,
    name: "Winter Rider cycle",
    category: "E-Cycle",
    price: 24999,
    oldPrice: 29999,
    rating: 4.7,
    image:
      "https://3gvcvbl9l8rintbd.public.blob.vercel-storage.com/ebc/blog/how-to-prep-ebike-for-winter-riding/06-image5_071023a4-93c6-4e90-9252-cd4fcfaccf17.jpg",
  },
  {
    id: 3,
    name: "folding cycles",
    category: "Folding E-Bikes",
    price: 17999,
    oldPrice: 21999,
    rating: 4.6,
    image:
      "https://m.media-amazon.com/images/I/71Gx+ZDPcZL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 4,
    name: "Kids",
    category: "Kids  Beast",
    price: 21999,
    oldPrice: 25999,
    rating: 4.9,
    image:
      "https://m.media-amazon.com/images/I/41vfK5m7rEL.jpg",
  },
  {
    id: 5,
    name: "Speed X1",
    category: "Road",
    price: 28999,
    oldPrice: 32999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=600",
  },
  {
    id: 6,
    name: "  Road E-cycle",
    category: "road electric cycle",
    price: 13999,
    oldPrice: 16999,
    rating: 4.5,
    image:
      "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/28ee2f94e3cb21921773387185974.jpg",
  },
  {
    id: 7,
    name: "Mountain cycle",
    category: "Mountain",
    price: 19999,
    oldPrice: 23999,
    rating: 4.7,
    image:
      "https://woody.cloudly.space/app/uploads/saint-gervais/2023/09/thumbs/Cedric-Tassan-VTOPO-30-640x480.jpg"
  },
  {
    id: 8,
    name: "City Flash",
    category: "City",
    price: 16999,
    oldPrice: 19999,
    rating: 4.6,
    image:
      "https://www.brake.org.uk/files/images/Active-transport/_large/shutterstock_1116326888_London-cyclists-2000x1333px-1.jpg?v=1768471690"
  },

];

function ViewAll() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 3;

  const filteredCycles = cycles
    .filter((cycle) =>
      cycle.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((cycle) =>
      category === "All" ? true : cycle.category === category
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });


  const totalPages = Math.ceil(
    filteredCycles.length / productsPerPage
  );



  const startIndex = (currentPage - 1) * productsPerPage;

  const currentCycles = filteredCycles.slice(
    startIndex,
    startIndex + productsPerPage
  );


  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Marquee />
      <Navbar1 />
      <Navbar />

      <div className="view-all-page">

        <div className="page-header">
          <div>
            <h1>Explore All Cycles</h1>

            <p>
              Find the perfect cycle for your adventure, fitness and daily rides.
            </p>
          </div>

          <div className="breadcrumb">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/"
            >
              Home
            </Link>

            &nbsp;&nbsp;

            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/Products"
            >
              All Cycles
            </Link>
          </div>
        </div>

        <div className="products-container">


          <aside className="filter-sidebar">
            <h3>Filter Cycles</h3>

            <div className="filter-group">
              <h4>Category</h4>

              <label>
                <input
                  type="radio"
                  name="category"
                  checked={category === "All"}
                  onChange={() => {
                    setCategory("All");
                    setCurrentPage(1);
                  }}
                />
                All Cycles
              </label>

              <label>
                <input
                  type="radio"
                  name="category"
                  checked={category === "Mountain"}
                  onChange={() => {
                    setCategory("Mountain");
                    setCurrentPage(1);
                  }}
                />
                Mountain
              </label>

              <label>
                <input
                  type="radio"
                  name="category"
                  checked={category === "Road"}
                  onChange={() => {
                    setCategory("Road");
                    setCurrentPage(1);
                  }}
                />
                Road
              </label>

              <label>
                <input
                  type="radio"
                  name="category"
                  checked={category === "Hybrid"}
                  onChange={() => {
                    setCategory("Hybrid");
                    setCurrentPage(1);
                  }}
                />
                Hybrid
              </label>
            </div>

            <div className="filter-group">
              <h4>Price</h4>

              <label>
                <input type="checkbox" />
                Under ₹15,000
              </label>

              <label>
                <input type="checkbox" />
                ₹15,000 - ₹20,000
              </label>

              <label>
                <input type="checkbox" />
                ₹20,000 - ₹30,000
              </label>

              <label>
                <input type="checkbox" />
                Above ₹30,000
              </label>
            </div>

            <button
              className="clear-btn"
              onClick={() => {
                setCategory("All");
                setSearch("");
                setSort("default");
                setCurrentPage(1);
              }}
            >
              Clear Filters
            </button>
          </aside>


          <main className="products-section">

            <div className="products-top">

              <div className="search-box">
                <span>🔍</span>

                <input
                  type="text"
                  placeholder="Search cycles..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>

              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="default">Sort By</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>

            </div>

            <div className="result-count">
              Showing{" "}
              <strong>{filteredCycles.length}</strong>{" "}
              cycles
            </div>


            <div className="cycle-grid">

              {currentCycles.map((cycle) => {

                const discount = Math.round(
                  ((cycle.oldPrice - cycle.price) /
                    cycle.oldPrice) *
                  100
                );

                return (
                  <div
                    className="cycle-card"
                    key={cycle.id}
                  >

                    <div className="image-container">

                      <span className="discount">
                        {discount}% OFF
                      </span>

                      <button className="wishlist">
                        ♡
                      </button>

                      <img
                        src={cycle.image}
                        alt={cycle.name}
                      />

                    </div>

                    <div className="cycle-info">

                      <p className="category">
                        {cycle.category} Cycle
                      </p>

                      <h3>{cycle.name}</h3>

                      <div className="rating">
                        ⭐ {cycle.rating}
                      </div>

                      <div className="price">
                        <strong>
                          ₹{cycle.price.toLocaleString()}
                        </strong>

                        <del>
                          ₹{cycle.oldPrice.toLocaleString()}
                        </del>
                      </div>

                      <div className="card-buttons">

                        {/* <button className="view-btn">
                          View Details
                        </button> */}
                        <Link
                          to={`/cycle/${cycle.id}`}
                          className="view-btn"
                        >
                          View Details
                        </Link>

                        <button className="cart-btn">
                          Add to Cart
                        </button>

                      </div>

                    </div>
                  </div>
                );
              })}

            </div>


            {filteredCycles.length === 0 && (
              <div className="no-products">
                <h2>No cycles found 😕</h2>
                <p>
                  Try another search or category.
                </p>
              </div>
            )}


            {totalPages > 1 && (
              <div className="pagination">


                <button
                  onClick={() =>
                    handlePageChange(currentPage - 1)
                  }
                  disabled={currentPage === 1}
                  className={
                    currentPage === 1 ? "disabled" : ""
                  }
                >
                  ‹
                </button>


                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() =>
                      handlePageChange(page)
                    }
                    className={
                      currentPage === page
                        ? "active"
                        : ""
                    }
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() =>
                    handlePageChange(currentPage + 1)
                  }
                  disabled={currentPage === totalPages}
                  className={
                    currentPage === totalPages
                      ? "disabled"
                      : ""
                  }
                >
                  ›
                </button>

              </div>
            )}

          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ViewAll;
