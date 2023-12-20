import { Link, useSearchParams } from "react-router-dom";
import Card from "../components/fragment/Card";
import Button from "../components/element/Button";
import { useContext, useEffect, useState } from "react";
import { showFormattedDate } from "../utils";
import { archiveNote, deleteNote, getActiveNotes } from "../utils/network-data";
import ListNoteLayout from "../components/layout/ListNoteLayout";
import { LocaleContext } from "../context/Locale";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get("title") ?? "");
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    const getNotes = async () => {
      const { data } = await getActiveNotes();
      setNotes(data);
      setIsLoading(false);
    };
    getNotes();
  }, [isLoading]);

  const titleSearchParamHandler = (keyword) => {
    if (keyword) {
      setSearchParams({ title: keyword });
      setKeyword(keyword);
    } else {
      setSearchParams({});
      setKeyword("");
    }
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const deleteHandler = (id) => {
    deleteNote(id);
    setIsLoading(true);
  };

  const archiveHandler = (id) => {
    archiveNote(id);
    setIsLoading(true);
  };

  return (
    <ListNoteLayout
      titlePage={locale === "id" ? "Catatan aktif" : "Active Notes"}
      titleSearchParamHandler={titleSearchParamHandler}
      activeKeyword={keyword}
      isLoading={isLoading}
    >
      {filteredNotes.length > 0 &&
        filteredNotes.map((note) => (
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
                clickHandler={archiveHandler}
                id={note.id}
                type={"warning"}
              >
                {locale === "id" ? "Arsipkan" : "Archive"}
              </Button>
            </Card.Footer>
          </Card>
        ))}
      {filteredNotes.length === 0 && !isLoading && (
        <p className="text-center col-span-3">
          {locale === "id" ? "Tidak ada catatan" : "No notes"}
        </p>
      )}
    </ListNoteLayout>
  );
};

export default HomePage;
