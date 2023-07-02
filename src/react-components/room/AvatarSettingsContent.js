import React from "react";
import PropTypes from "prop-types";
import { Button, AcceptButton } from "../input/Button";
import styles from "./AvatarSettingsContent.scss";
import { TextInputField } from "../input/TextInputField";
import { Column } from "../layout/Column";
import { FormattedMessage } from "react-intl";
import { ReactComponent as ChevronBackIcon } from "../icons/ChevronBack.svg";

export function AvatarSettingsContent({
  displayName,
  displayNameInputRef,
  disableDisplayNameInput,
  onChangeDisplayName,
  avatarPreview,
  displayNamePattern,
  onChangeAvatar,
  onBack,
  ...rest
}) {
  return (
    <Column as="form" className={styles.content} {...rest}>
      <div className="input-content">
        <TextInputField
          disabled={disableDisplayNameInput}
          label={<FormattedMessage id="avatar-settings-content.display-name-label" defaultMessage="Display Name" />}
          value={displayName}
          pattern={displayNamePattern}
          spellCheck="false"
          required
          onChange={onChangeDisplayName}
          description={
            <FormattedMessage
              id="avatar-settings-content.display-name-description"
              defaultMessage="Alphanumerics, hyphens, underscores, and tildes. At least 3 characters, no more than 32"
            />
          }
          ref={displayNameInputRef}
        />
      </div>
      <div className={styles.avatarPreviewContainer}>
        {avatarPreview || <div />}
        <div className="change-avatar-btn">
          <Button type="button" preset="basic" onClick={onChangeAvatar}>
            <FormattedMessage id="avatar-settings-content.change-avatar-button" defaultMessage="Change Avatar" />
          </Button>
        </div>
      </div>
      <div className="btn-flex-content">
        <div className="avatar-btn" onClick={onBack}>
          <ChevronBackIcon />
        </div>
        <div className="accept-btn">
          <AcceptButton preset="accept" type="submit" />
        </div>
      </div>
    </Column>
  );
}

AvatarSettingsContent.propTypes = {
  className: PropTypes.string,
  displayName: PropTypes.string,
  displayNameInputRef: PropTypes.func,
  disableDisplayNameInput: PropTypes.bool,
  displayNamePattern: PropTypes.string,
  onChangeDisplayName: PropTypes.func,
  avatarPreview: PropTypes.node,
  onChangeAvatar: PropTypes.func,
  onBack: PropTypes.func
};
