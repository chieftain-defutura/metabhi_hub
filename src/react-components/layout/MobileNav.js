import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import styles from "./Header.scss";
import { ReactComponent as Hamburger } from "../icons/Hamburger.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";
export function MobileNav({ showDocsLink, docsUrl, showCommunityLink, communityUrl, isAdmin }) {
  const [navOpen, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!navOpen);
  };

  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.mobileNavWrapper}>
          <Hamburger onClick={toggleNav} />
          <header className={`${navOpen ? `is-active` : "hide"}`}>
            <nav role="navigation">
              <ul>
                <li>
                  <a href="/spoke">
                    <FormattedMessage id="header.spoke" defaultMessage="Peach Editor" />
                  </a>
                </li>
                {showDocsLink && (
                  <li>
                    <a href={docsUrl}>
                      <FormattedMessage id="header.docs" defaultMessage="Guides" />
                    </a>
                  </li>
                )}
                {showCommunityLink && (
                  <li>
                    <a href={communityUrl}>
                      <FormattedMessage id="header.community" defaultMessage="Community" />
                    </a>
                  </li>
                )}
                {isAdmin && (
                  <li>
                    <a style={{ marginLeft: 0 }} href="/admin" rel="noreferrer noopener">
                      <i>
                        <FontAwesomeIcon icon={faCog} />
                      </i>
                      &nbsp;
                      <FormattedMessage id="header.admin" defaultMessage="Admin" />
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </>
  );
}

MobileNav.propTypes = {
  showDocsLink: PropTypes.bool,
  docsUrl: PropTypes.string,
  showSourceLink: PropTypes.bool,
  showCommunityLink: PropTypes.bool,
  communityUrl: PropTypes.string,
  isAdmin: PropTypes.bool,
  isHmc: PropTypes.bool
};
