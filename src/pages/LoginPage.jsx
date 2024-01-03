/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { login } from "../utils/network-data";
import Button from "../components/element/Button";
import { object, string } from "yup";
import PropTypes from "prop-types";
import { LocaleContext } from "../context/Locale";
import { useInput } from "../hooks/useInput";

const schema = object({
  email: string().email().required(),
  password: string().min(6).required(),
});

const LoginPage = ({ loginHandler }) => {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    document.title = "Login";
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = { email, password };
    try {
      await schema.validate(user);
      const { error, data } = await login(user);
      if (!error) {
        loginHandler(data.accessToken);
      }
    } catch (e) {
      alert(e.errors);
    }
  };

  return (
    <div className="animate-fade">
      <div className="w-[40%] mx-auto mt-20">
        <h2 className="text-2xl font-semibold">
          {locale === "id" ? "Masuk" : "Login"}
        </h2>
        <form onSubmit={submitHandler} className="flex flex-col mt-5 gap-4">
          <input
            autoComplete="on"
            type="email"
            placeholder="Email"
            value={email}
            onChange={onEmailChange}
            className="border border-gray-300 bg-transparent py-3 pl-3 rounded-lg"
          />
          <input
            autoComplete="new-password"
            type="password"
            placeholder="password"
            value={password}
            onChange={onPasswordChange}
            className="border border-gray-300 bg-transparent py-3 pl-3 rounded-lg"
          />
          <Button>{locale === "id" ? "Masuk" : "Login"}</Button>
          <p>
            {locale === "id" ? "Belum punya akun?" : "Don't have an account?"}{" "}
            <Link to="/register" className="underline">
              {locale === "id" ? "Daftar" : "Register"}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  loginHandler: PropTypes.func,
};

export default LoginPage;
