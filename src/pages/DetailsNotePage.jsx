import { useParams } from "react-router-dom";
import { getNote } from "../utils/network-data";
import { showFormattedDate } from "../utils";
import NotFound from "./NotFound";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const DetailsNotePage = () => {
  const { noteId } = useParams();
  const [note, setNote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getNotefunc = async () => {
      const note = await getNote(noteId);
      setNote(note.data);
      setIsLoading(false);
    };
    getNotefunc();
  }, [noteId]);

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl text-slate-500 col-span-3" />
      </div>
    );
  }

  return note ? (
    <>
      <div className="mt-24 max-w-5xl px-10 mx-auto">
        <p className="text-7xl font-bold">{note.title}</p>
        <p className="text-lg mt-1">{showFormattedDate(note.createdAt)}</p>
        <p className="mt-3 text-xl">{note.body}</p>
      </div>
    </>
  ) : (
    <NotFound />
  );
};

export default DetailsNotePage;
