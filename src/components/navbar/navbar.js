import Image from "next/image";
import Link from "next/link";
import logo from "../../../images/Logo.svg";
import { navData } from "../fakeData/navData";
import styles from "./navBar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className="d-flex justify-content-between align-items-center container py-3">
        <div className="d-none d-md-block">
          <Image src={logo} alt="logo" height="50" width="278" />
        </div>
        <div className="d-block d-md-none">
          <Image src={logo} alt="logo" height="31" width="170" />
        </div>
        <div className="d-none d-md-block">
          <ul className="d-flex align-items-center">
            {navData.map((nav) => (
              <li key={nav.id} className="mx-3">
                <Link href={nav.link}>
                  <a className={styles.navItem}>{nav.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="d-block d-md-none"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <span className={styles.menu1}></span>
          <span className={styles.menu2}></span>
        </div>
      </div>
      <div className="d-block d-md-none">
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset d-block ms-auto mt-2"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="text-center">
              {navData.map((nav) => (
                <li key={nav.id} className="my-4">
                  <Link href={nav.link}>
                    <a className={styles.navItem}>{nav.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;