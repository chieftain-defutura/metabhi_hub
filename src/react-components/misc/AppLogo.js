import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/logo.png";

import configs from "../../utils/configs";

export function AppLogo({ className }) {
  return <img className={className} alt={configs.translation("app-name")} src={logo} />;
}

AppLogo.propTypes = {
  className: PropTypes.string
};
