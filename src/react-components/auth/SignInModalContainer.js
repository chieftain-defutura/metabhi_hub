import React, { useCallback, useReducer, useContext, useEffect } from "react";
import { TERMS, PRIVACY } from "../../constants";
import { AuthContext } from "./AuthContext";
import { SignInModal, SignInStep, WaitForVerification, SubmitEmail } from "./SignInModal";

const SignInAction = {
  submitEmail: "submitEmail",
  verificationReceived: "verificationReceived",
  cancel: "cancel"
};

const initialSignInState = {
  step: SignInStep.submit,
  email: ""
};

function loginReducer(state, action) {
  switch (action.type) {
    case SignInAction.submitEmail:
      return { step: SignInStep.waitForVerification, email: action.email };
    case SignInAction.verificationReceived:
      return { ...state, step: SignInStep.complete };
    case SignInAction.cancel:
      return { ...state, step: SignInStep.submit };
  }
}

function useSignIn() {
  const auth = useContext(AuthContext);
  const [state, dispatch] = useReducer(loginReducer, initialSignInState);

  const submitEmail = useCallback(
    email => {
      auth.signIn(email).then(() => {
        dispatch({ type: SignInAction.verificationReceived });
      });
      dispatch({ type: SignInAction.submitEmail, email });
    },
    [auth]
  );

  const cancel = useCallback(() => {
    dispatch({ type: SignInAction.cancel });
  }, []);

  return {
    step: state.step,
    email: state.email,
    submitEmail,
    cancel
  };
}

export function SignInModalContainer() {
  const qs = new URLSearchParams(location.search);
  const { step, submitEmail, cancel, email } = useSignIn();
  const redirectUrl = qs.get("sign_in_destination_url") || "/";

  useEffect(() => {
    if (step === SignInStep.complete) {
      window.location = redirectUrl;
    }
  }, [step, redirectUrl]);

  return (
    <SignInModal disableFullscreen>
      {step === SignInStep.submit ? (
        <SubmitEmail
          onSubmitEmail={submitEmail}
          initialEmail={email}
          signInReason={qs.get("sign_in_reason")}
          termsUrl={TERMS}
          showTerms={true}
          privacyUrl={PRIVACY}
          showPrivacy={true}
        />
      ) : (
        <WaitForVerification onCancel={cancel} email={email} />
      )}
    </SignInModal>
  );
}
