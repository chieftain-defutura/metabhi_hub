import React from "react";
import PropTypes from "prop-types";

import configs from "../../utils/configs";
// import { ReactComponent as HmcLogo } from "../icons/HmcLogo.svg";
import { ReactComponent as HubsLogo } from "../icons/hubs-logo.svg";
import { isHmc } from "../../utils/isHmc";
import { useLogo } from "../styles/theme";

export function AppLogo({ className, forceConfigurableLogo }) {
  const logo = useLogo();
  if (isHmc() && !forceConfigurableLogo) {
    return <HubsLogo className="hmc-logo" />;
  } else {
    return <img className={className} alt={configs.translation("app-name")} src={logo} />;
  }
}

AppLogo.propTypes = {
  className: PropTypes.string,
  forceConfigurableLogo: PropTypes.bool
};
