import { NavLink } from "@remix-run/react";
import "../404.css";
export async function loader() {
  return {};
}

export default function FourOhFour() {
  return (
    <main className="bl_page404 mt-24 mx-auto">
      <h1>Error 404. The page does not exist</h1>
      <p>
        Sorry! The page you are looking for can not be found. Perhaps the page
        you requested was moved or deleted. It is also possible that you made a
        small typo when entering the address.
      </p>
      <div className="bl_page404__wrapper">
        <img
          src="https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/cloud_warmcasino.png?raw=true"
          alt="404"
        />
        <div className="bl_page404__el1"></div>
        <div className="bl_page404__el2"></div>
        <div className="bl_page404__el3"></div>
      </div>
      <div className="flex justify-center mt-5">
        <NavLink to="/" className="bl_page404__link uppercase px-8 py-3">
          go home
        </NavLink>
      </div>
    </main>
  );
}
