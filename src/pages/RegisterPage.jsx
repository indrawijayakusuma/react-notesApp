import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";
import Button from "../components/element/Button";
import { object, string, ref } from "yup";
import { LocaleContext } from "../context/Locale";
import { useInput } from "../hooks/useInput";

const schema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().min(6).required(),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "Passwords must match"
  ),
});

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    document.title = "Register";
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = { name, email, password, confirmPassword };
    try {
      await schema.validate(user);
      const { error } = await register(user);
      if (!error) {
        navigate("/login");
      }
    } catch (e) {
      alert(e.errors);
    }
  };

  return (
    <>
      <div className="w-[40%] mx-auto mt-20 animate-fade">
        <h2 className="text-2xl font-semibold">
          {locale === "id" ? "Daftar" : "Register"}
        </h2>
        <form onSubmit={submitHandler} className="flex flex-col mt-5 gap-4">
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={onNameChange}
            className="border border-gray-300 bg-transparent py-3 pl-3 rounded-lg"
          />
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
          <input
            autoComplete="new-password"
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
            className="border border-gray-300 bg-transparent py-3 pl-3 rounded-lg"
          />
          <Button>{locale === "id" ? "Daftar" : "Register"}</Button>
          <p>
            {locale === "id" ? "Sudah punya akun?" : "Already have an account?"}{" "}
            <Link to="/login" className="underline">
              {locale === "id" ? "Masuk" : "Login"}
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
