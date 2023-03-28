import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <section className="navbar-main">
        <nav className="navbar  navbar-expand-md bg-white fixed-top  ">
          <div className="container ">
            <a className="navbar-brand" href="home">
              <img src="logo1.png" className="w-100" alt="asa" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link text-black "
                    to={"/home"}
                    aria-current="page"
                  >
                    home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link  text-black "
                    to={"/about"}
                    aria-current="page"
                  >
                    about
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-black "
                    to={"/sports"}
                    aria-current="page"
                  >
                    sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link  text-black "
                    to={"/fashion"}
                    aria-current="page"
                  >
                    Fashion
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link  text-black "
                    to={"/tech"}
                    aria-current="page"
                  >
                    technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link  text-black "
                    to={"/foods"}
                    aria-current="page"
                  >
                    foods
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link  text-black"
                    to={"/contact"}
                    aria-current="page"
                  >
                    contact
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav ms-2">
                <li className="nav-item">
                  <i class="icon fa-brands fa-facebook"></i>
                </li>
                <li className="nav-item">
                  <i class="icon fa-brands fa-instagram"></i>
                </li>
                <li className="nav-item">
                  <i class="icon fa-brands fa-twitter"></i>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};
