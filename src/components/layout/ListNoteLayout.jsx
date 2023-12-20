import Proptype from "prop-types";
import { Link } from "react-router-dom";
import SearchInput from "../fragment/SearchInput";
import add from "../../assets/add.svg";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const ListNoteLayout = ({
  children,
  titleSearchParamHandler,
  activeKeyword,
  titlePage,
  isLoading,
}) => {
  return (
    <div className="flex flex-col gap-10 items-center relative">
      <div className="p-3 bg-white border fixed bottom-6 right-6 rounded-full shadow-md z-50">
        <Link to={"/notes/new"}>
          <img src={add} className="w-12" alt="React Logo" />
        </Link>
      </div>
      <h2 className="text-3xl font-bold">{titlePage}</h2>
      <SearchInput
        onSearch={titleSearchParamHandler}
        activeKeyword={activeKeyword}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading && (
          <AiOutlineLoading3Quarters className="animate-spin text-4xl text-slate-500 col-span-3" />
        )}
        {!isLoading && <>{children}</>}
      </div>
    </div>
  );
};

ListNoteLayout.propTypes = {
  children: Proptype.node.isRequired,
  titleSearchParamHandler: Proptype.func.isRequired,
  activeKeyword: Proptype.string,
  titlePage: Proptype.string.isRequired,
  isLoading: Proptype.bool,
};

export default ListNoteLayout;
