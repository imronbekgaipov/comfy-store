import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../redux/features/basketSlice";
import { setUserData } from "../redux/features/basketSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mode = useSelector((state) => state.basket.mode);
  const userData = useSelector((state) => state.basket.userData);
  const numItemsInCart = useSelector((state) => state.basket.numItemsInCart);

  const handleMode = () => {
    dispatch(toggleMode());
  };

  const handleLogOut = () => {
    dispatch(setUserData(null));
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <nav className="bg-base-200 dark:bg-[#F0F6FF]">
      <div className="bg-gray-900 text-neutral-content items-center">
        {!userData && (
          <div className="max-w-6xl px-5 py-2 mx-auto flex gap-5 justify-end top text-white">
            <p className=" text-emerald-500 dark:text-gray-200 ">Welcome !</p>
            <Link to={"/login"} className="link link-hover text-xc sm:text-sm">
              Login
            </Link>
            <Link
              to={"/register"}
              className="link link-hover text-xc sm:text-sm"
            >
              Create Account
            </Link>
          </div>
        )}
        {userData && (
          <div className="max-w-6xl px-5 py-2 mx-auto flex gap-5 justify-end top">
            <button onClick={handleLogOut} className="btn btn-sm btn-error">
              Logout
            </button>
          </div>
        )}
      </div>
      <div className="w-full align-element pt-2 pb-2 flex items-center justify-between bg-blue-100">
        <Link
          aria-current="page"
          className="hidden lg:flex btn btn-info text-3xl items-center animation rounded-md bg-blue-600 px-2 py-3  text-white hover:bg-blue-700 md:px-3 md:py-2"
          to="/"
        >
          C
        </Link>

        <div className="flex gap-7 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/chekout">Chekout</NavLink>
        </div>

        <div className="flex items-center">
          <button onClick={handleMode} className="dark:text-white">
            {mode == "dark" ? <BsSunFill /> : <BsMoonFill />}
          </button>
          <NavLink to="cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator w-[20px] mt-4">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
