import React from "react";
import { Link, useLocation } from "react-router-dom";

const AddressNav = () => {
  const location = useLocation();

  // Extract the last part of the pathname (e.g., "/accessories" -> "Accessories")
  const pageName = location.pathname.split("/").filter(Boolean).pop();

  return (
    <nav className="w-full bg-white py-3">
      <div className="w-2/3 mx-auto">
        <ul className="flex space-x-4 list-none p-0 m-0 text-lg font-medium">
          {/* Home Link */}
          <li>
            <Link
              to="/"
              className={`pb-2 ${pageName === "" ? "border-b-2 border-gray-500" : ""
                }`}
            >
              Home
            </Link>
          </li>

          {/* Collection Link */}
          <li className="border-l pl-4">
            <Link
              to="/collection"
              className={`pb-2 ${pageName === "collection" ? "border-b-2 border-gray-500" : ""
                }`}
            >
              Collection
            </Link>
          </li>

          {pageName && pageName !== "" && pageName !== "collection" && (
            <li className="border-l pl-4 text-gray-600 font-semibold capitalize">
              {pageName.replace("-", " ")}
            </li>
          )}

        </ul>
      </div>
    </nav>
  );
};

export default AddressNav;