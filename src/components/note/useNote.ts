import { useOutletContext } from "react-router-dom";
import { Note } from "../../routes/AppRouter";

const useNote = () => {
  return useOutletContext<Note>();
};

export default useNote;
