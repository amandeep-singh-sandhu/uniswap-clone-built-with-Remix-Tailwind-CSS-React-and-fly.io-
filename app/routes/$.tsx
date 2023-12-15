import { NavLink } from "@remix-run/react";
import "../404.css";
export async function loader() {
  return {};
}

export default function FourOhFour() {
  return (
    <div className="flex-container">
      <div className="text-center">
        <h1 className="leading-[100px]">
          <span className="fade-in" id="digit1">
            4
          </span>
          <span className="fade-in" id="digit2">
            0
          </span>
          <span className="fade-in" id="digit3">
            4
          </span>
        </h1>
        <h3 className="fadeIn">PAGE NOT FOUND</h3>
        <NavLink to="/" className="button">
          Return To Home
        </NavLink>
      </div>
    </div>
  );
}
