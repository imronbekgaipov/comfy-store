import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ProductNavbar from "../components/ProductNavbar";

function Products() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const api = `https://strapi-store-server.onrender.com/api/products?page=${currentPage}`;

  if (data == null) {
    return <Loading />;
  }

  useEffect(() => {
    axios(api)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <ProductNavbar />
      <div>
        <div className="align-element border-b border-base-300 pb-5">
          <h2 className="dark:text-[#F0F6FF] mt-10 text-xl font-medium tracking-wider capitalize">
            22 Products
          </h2>
        </div>
      </div>
      <div className="align-element flex flex-wrap justify-between">
        {data &&
          data.map((item) => (
            <li
              key={item.id}
              className="mt-12 card w-80 bg-base-100 shadow-xl  rounded-xl"
            >
              <Link to={`/material/${item.id}`}>
                <figure className="px-4 pt-4">
                  <img
                    src={item.attributes.image}
                    alt={item.attributes.title}
                    className="rounded-xl h-64 md:h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center mt-5 mb-5">
                  <h2 className="card-title capitalize tracking-wider mb-2 text-2xl text-gray-700">
                    {item.attributes.title}
                  </h2>
                  <p className="dark:text-[#F0F6FF]">
                    ${item.attributes.price}
                  </p>
                </div>
              </Link>
            </li>
          ))}
      </div>
      <div className=" align-element mb-12 join flex justify-end gap-2 mt-5">
        <button
          className="join-item btn dark:text-[#F0F6FF] rounded-md bg-gray-400 px-2 py-3 text-white hover:bg-gray-500 md:px-3 md:py-2"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          PREV
        </button>
        <button className="join-item btn dark:text-[#F0F6FF]">
          {currentPage}
        </button>
        <button
          className="join-item btncrounded-md rounded-md bg-gray-400 px-2 py-3 text-white hover:bg-gray-500 md:px-3 md:py-2"
          disabled={currentPage === 3}
          onClick={handleNextPage}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Products;
