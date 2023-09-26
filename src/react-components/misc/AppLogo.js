import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/logo.png";

export function AppLogo({ className }) {
  return <img className={className} alt={"Metakraft Peach"} src={logo} />;
}

AppLogo.propTypes = {
  className: PropTypes.string
};
