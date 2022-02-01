import useForm from "@src/hooks/useForm.hook";
import LoginPageTemplate, {
  LoginForm,
} from "@src/templates/LoginPage.template";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

const LoginPage: NextPage = () => {
  const router = useRouter();

  const onSubmit = useCallback(async (values) => {}, []);

  const { values, handleSubmit, handleChange } = useForm<LoginForm>({
    init: { email: "", password: "" },
    onSubmit,
    validate() {
      return {};
    },
  });

  return (
    <div>
      <LoginPageTemplate
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default LoginPage;

//
