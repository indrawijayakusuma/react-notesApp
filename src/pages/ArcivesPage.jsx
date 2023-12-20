import { Link, useSearchParams } from "react-router-dom";
import Card from "../components/fragment/Card";
import ListNoteLayout from "../components/layout/ListNoteLayout";
import Button from "../components/element/Button";
import { useContext, useEffect, useState } from "react";
import {
  deleteNote,
  getArchivedNotes,
  unarchiveNote,
} from "../utils/network-data";
import { showFormattedDate } from "../utils";
import { LocaleContext } from "../context/Locale";

const ArcivesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    const getNotes = async () => {
      const { data } = await getArchivedNotes();
      setNotes(data);
      setIsLoading(false);
    };
    getNotes();
  }, [isLoading]);

  const titleSearchParamHandler = (keyword) => {
    if (keyword) {
      setSearchParams({ title: keyword });
      setNotes(searchUnarchivedNotes(keyword));
    } else {
      setSearchParams({});
      setIsLoading(true);
    }
  };

  function searchUnarchivedNotes(keyword) {
    let searchNotes;
    if (keyword) {
      searchNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase())
      );
    } else {
      searchNotes = notes;
    }
    return searchNotes;
  }

  const deleteHandler = (id) => {
    deleteNote(id);
    setIsLoading(true);
  };

  const unArchiveHandler = (id) => {
    unarchiveNote(id);
    setIsLoading(true);
  };

  return (
    <ListNoteLayout
      titlePage={locale === "id" ? "Catatan Terarsip" : "Archived Notes"}
      titleSearchParamHandler={titleSearchParamHandler}
      activeKeyword={title}
      isLoading={isLoading}
    >
      {notes.length > 0 &&
        notes.map((note) => (
          <Card key={note.id}>
            <Link to={`/notes/${note.id}`}>
              <Card.Title>{note.title}</Card.Title>
            </Link>
            <Card.SubTitle>{showFormattedDate(note.createdAt)}</Card.SubTitle>
            <Card.Body>{note.body}</Card.Body>
            <Card.Footer>
              <Button clickHandler={deleteHandler} id={note.id} type={"danger"}>
                {locale === "id" ? "Hapus" : "Delete"}
              </Button>
              <Button
                clickHandler={unArchiveHandler}
                id={note.id}
                type={"warning"}
              >
                {locale === "id" ? "Pulihkan" : "Unarchive"}
              </Button>
            </Card.Footer>
          </Card>
        ))}
      {notes.length === 0 && !isLoading && (
        <p className="text-center col-span-3">
          {locale === "id" ? "Tidak ada catatan terarsip" : "No archived notes"}
        </p>
      )}
    </ListNoteLayout>
  );
};

export default ArcivesPage;
