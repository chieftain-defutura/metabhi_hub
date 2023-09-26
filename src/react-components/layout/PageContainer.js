import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Page } from "./Page";
import { AuthContext } from "../auth/AuthContext";
import configs from "../../utils/configs";
import { useAccessibleOutlineStyle } from "../input/useAccessibleOutlineStyle";
import { TERMS, PRIVACY } from "../../constants";
import logo from "../../assets/logo.png";

export function PageContainer({ children, ...rest }) {
  const auth = useContext(AuthContext);
  useAccessibleOutlineStyle();
  return (
    <Page
      showDocsLink={true}
      docsUrl={"https://metakraft.gitbook.io/metakraft/"}
      showSourceLink={configs.feature("show_source_link")}
      showCommunityLink={true}
      communityUrl={"https://t.me/metakraftdiscussions"}
      isAdmin={auth.isAdmin}
      isSignedIn={auth.isSignedIn}
      email={auth.email}
      onSignOut={auth.signOut}
      hidePoweredBy={true}
      showWhatsNewLink={false}
      showTerms={true}
      termsUrl={TERMS}
      showPrivacy={true}
      privacyUrl={PRIVACY}
      showCompanyLogo={true}
      companyLogoUrl={logo}
      showDiscordBotLink={false}
      appName={configs.translation("app-name")}
      {...rest}
    >
      {children}
    </Page>
  );
}

PageContainer.propTypes = {
  children: PropTypes.node
};
