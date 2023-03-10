import { useState } from "react";
import {
  LoginContainer,
  FormBox,
  LoginButton,
  LoginBox,
  LoginFooterContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Footer } from "../../components/Layout/Footer";

export default function Login() {
  const [isSpinnerActive, setIsSpinnerActive] = useState(false);

  let navigate = useNavigate();

  function routeChange() {
    setIsSpinnerActive(true);
    let path = `/agenda`;

    setTimeout(() => {
      navigate(path);
    }, 1500);
  }

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("email inválido").required("Campo obrigatório"),
    password: Yup.string()
      .required("Campo obrigatório")
      .min(4, "Mínimo 4 caracteres"),
  });

  return (
    <>
      <LoginContainer>
        <LoginBox>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              await routeChange();
            }}
          >
            {({ values, errors, touched }) => (
              <Form>
                <FormBox>
                  <label htmlFor="email">Login</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="e-mail"
                  />
                  {errors.email && touched.email ? (
                    <div className="errorMessage">{errors.email}</div>
                  ) : (
                    <div className="nullErrorMessage"></div>
                  )}
                </FormBox>

                <FormBox>
                  <label htmlFor="password" className="password">
                    Senha
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="senha"
                  />
                  {errors.password && touched.password ? (
                    <div className="errorMessage">{errors.password}</div>
                  ) : (
                    <div className="nullErrorMessage"></div>
                  )}
                </FormBox>

                <LoginButton>
                  <span
                    className={`button__text ${
                      isSpinnerActive && "button__loading"
                    }`}
                  >
                    Entrar
                  </span>
                  <span
                    className={`${isSpinnerActive && "button__spinner"}`}
                  ></span>
                </LoginButton>
              </Form>
            )}
          </Formik>
        </LoginBox>
      </LoginContainer>
      <LoginFooterContainer>
        <Footer />
      </LoginFooterContainer>
    </>
  );
}
