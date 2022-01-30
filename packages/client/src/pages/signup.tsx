import { SignupStep } from "@src/components/constant/enum.constant";
import SignupPageTemplate from "@src/templates/SignupPage.template";
import React, { useState } from "react";

const SignupPage = () => {
  const [step, setStep] = useState<SignupStep>(SignupStep.TERM_CONFIRM);
  const [confirmed, setConfirmed] = useState(false);

  return (
    <SignupPageTemplate
      step={step}
      confirmed={confirmed}
      setConfirmed={setConfirmed}
    />
  );
};

export default SignupPage;
