import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import HomePage from "./pages/HomePage";
import DetailsNotePage from "./pages/DetailsNotePage";
import AddNotes from "./pages/AddNotes";
import ArcivesPage from "./pages/ArcivesPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/fragment/Navbar";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const App = () => {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };
    getUser();
  }, []);

  const loginHandler = async (token) => {
    console.log(token);
    putAccessToken(token);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const logoutHandler = () => {
    console.log("logout");
    setAuthedUser(null);
    putAccessToken("");
  };

  if (initializing) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl text-slate-500 col-span-3" />
      </div>
    );
  }

  if (authedUser === null) {
    return (
      <>
        <header>
          <Navbar logoutHandler={logoutHandler} isAuth={false} />
        </header>
        <Routes>
          <Route
            path="/*"
            element={<LoginPage loginHandler={loginHandler} />}
          />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <header>
        <Navbar logoutHandler={logoutHandler} name={authedUser.name} />
      </header>
      <main className="mt-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/notes/:noteId" element={<DetailsNotePage />} />
          <Route path="/notes/new" element={<AddNotes />} />
          <Route path="/archives" element={<ArcivesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
