import React from "react";
import PropTypes from "prop-types";
import { Modal } from "../modal/Modal";
// import { BackButton } from "../input/BackButton";
import { AvatarSettingsContent } from "./AvatarSettingsContent";
import { FormattedMessage } from "react-intl";

export function AvatarSetupModal({ className, ...rest }) {
  return (
    <div
      style={{
        background: "#fff",
        color: "#000",
        borderRadius: "16px",
        width: "338px",
        height: "380px",
        margin: "0 auto"
      }}
    >
      <Modal
        title={<FormattedMessage id="avatar-setup-sidebar.title" defaultMessage="Avatar Setup" />}
        // beforeTitle={<BackButton onClick={onBack} />}
        className={className}
      >
        <AvatarSettingsContent {...rest} />
      </Modal>
    </div>
  );
}

AvatarSetupModal.propTypes = {
  className: PropTypes.string,
  onBack: PropTypes.func
};
