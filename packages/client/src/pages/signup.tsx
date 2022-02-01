import { SignupStep } from "@src/constant/enum.constant";
import SignupPageTemplate from "@src/templates/SignupPage.template";
import React, { useCallback, useMemo, useState } from "react";

const SignupPage = () => {
  const [step, setStep] = useState<SignupStep>(SignupStep.TERM_CONFIRM);
  const [confirmed, setConfirmed] = useState(false);

  const isStepCompleted = useMemo(
    () => ({
      [SignupStep.TERM_CONFIRM]: confirmed,
      [SignupStep.USER_INFO]: true,
      [SignupStep.PROFILE_INPUT]: true,
    }),
    [confirmed],
  );

  const onMoveNext = useCallback(() => {
    setStep((step + 1) as SignupStep);
  }, [step]);

  const onMovePrev = useCallback(() => {
    setStep((prev) => (prev - 1) as SignupStep);
  }, [step]);

  return (
    <SignupPageTemplate
      step={step}
      confirmed={confirmed}
      isStepCompleted={isStepCompleted}
      setConfirmed={setConfirmed}
      onClickNext={onMoveNext}
      onClickPrev={onMovePrev}
    />
  );
};

export default SignupPage;
