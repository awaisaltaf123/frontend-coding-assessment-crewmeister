import React from "react";
import PropTypes from "prop-types";
import "./loader.css";

const Loader = () => (
  <svg
    className="spinner"
    width="73"
    height="72"
    viewBox="0 0 73 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      animation=""
      d="M68.5 36.0016C68.4997 42.7592 66.36 49.3433 62.3878 54.8102C58.4155 60.2771 52.8145 64.3461 46.3876 66.4341C39.9606 68.5222 33.0376 68.522 26.6107 66.4336C20.1839 64.3452 14.5831 60.2758 10.6112 54.8087C6.6392 49.3416 4.49995 42.7574 4.5 35.9998C4.50005 29.2421 6.6394 22.658 10.6114 17.1909C14.5835 11.7238 20.1843 7.65457 26.6112 5.56629C33.038 3.478 39.9611 3.4779 46.388 5.56601"
      stroke="#7F9DC6"
      stroke-width="8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

Loader.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
};
export default Loader;
