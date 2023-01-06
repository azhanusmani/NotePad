import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";

const NoteLayout = ({ notes }) => {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (note == null) return <Navigate to="/" replace />;

  return <Outlet context={note} />;
};

export function useNote() {
  return useOutletContext();
}

export default NoteLayout;
