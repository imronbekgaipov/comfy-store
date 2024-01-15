import { Link } from "react-router-dom";

import Materials from "../components/Materials";

function Home() {
  return (
    <div>
      <div className="align-element mt-20 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight leading-none text-gray-600 sm:text-[56px]">
            We are changing the way people shop.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <div className="mt-10 ">
            <Link
              to="products"
              className="btn btn-info animation rounded-md bg-blue-600 px-2 py-1  text-white hover:bg-blue-700 md:px-3 md:py-2"
            >
              OUR PRODUCTS
            </Link>
          </div>
        </div>
        <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
          <div
            className="rounded-2xl mx-auto w-[500px] hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4
         bg-slate-700 m "
          >
            <div className="carousel carousel-center h-[400px] rounded-box">
              <div className="carousel-item">
                <img
                  className="w-[300px] m-2 rounded-3xl"
                  src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp"
                  alt="cls 63"
                />
              </div>

              <div className="carousel-item">
                <img
                  className="w-[300px] m-2 rounded-3xl"
                  src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp"
                  alt="cls 63"
                />
              </div>

              <div className="carousel-item">
                <img
                  className="w-[300px]  m-2 rounded-3xl"
                  src="https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp"
                  alt="cls 63"
                />
              </div>

              <div className="carousel-item">
                <img
                  className="w-[350px] m-2 rounded-3xl"
                  src="https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp"
                  alt="cls 63"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Materials />
    </div>
  );
}

export default Home;
