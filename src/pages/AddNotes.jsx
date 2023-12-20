import { useContext, useState } from "react";
import { addNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import Button from "../components/element/Button";
import { LocaleContext } from "../context/Locale";

const AddNotes = () => {
  const navigate = useNavigate();
  const [note, setNote] = useState({
    title: "",
    body: "",
  });
  const { locale } = useContext(LocaleContext);

  const submitHandler = (e) => {
    e.preventDefault();
    addNote(note);
    navigate("/");
  };

  return (
    <>
      <div className="w-[40%] mx-auto mt-20">
        <h2 className="text-2xl font-semibold">
          {locale === "id" ? "Catatan Baru" : "New Note"}
        </h2>
        <form onSubmit={submitHandler} className="flex flex-col mt-5 gap-4">
          <input
            type="text"
            placeholder={locale === "id" ? "Judul" : "Title"}
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            className="border border-gray-300 bg-transparent py-3 pl-3 rounded-lg"
          />
          <textarea
            type="text"
            value={note.body}
            onChange={(e) => setNote({ ...note, body: e.target.value })}
            placeholder={locale === "id" ? "Isi" : "Body"}
            className="border border-gray-300 bg-transparent resize-none h-52 p-3 rounded-lg"
          />
          <Button>{locale === "id" ? "Simpan" : "Save"}</Button>
        </form>
      </div>
    </>
  );
};

export default AddNotes;
