import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";
import Button from "../components/element/Button";
import { object, string, ref } from "yup";
import { LocaleContext } from "../context/Locale";

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
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    document.title = "Register";
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
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
      <div className="w-[40%] mx-auto mt-20">
        <h2 className="text-2xl font-semibold">
          {locale === "id" ? "Daftar" : "Register"}
        </h2>
        <form onSubmit={submitHandler} className="flex flex-col mt-5 gap-4">
          <input
            type="text"
            placeholder="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="border border-gray-300 bg-transparent py-3 pl-3 rounded-lg"
          />
          <input
            autoComplete="on"
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="border border-gray-300 bg-transparent py-3 pl-3 rounded-lg"
          />
          <input
            autoComplete="new-password"
            type="password"
            placeholder="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="border border-gray-300 bg-transparent py-3 pl-3 rounded-lg"
          />
          <input
            autoComplete="new-password"
            type="password"
            placeholder="confirm password"
            value={user.confirmPassword}
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
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
