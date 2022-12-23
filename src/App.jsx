import { Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import NewNote from "./components/NewNote"
import NoteList from "./components/NoteList";
import NoteLayout from "./components/NoteLayout";
import Note from "./components/Note";
import EditNote from "./components/EditNote";

function App() {
  return ( 
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<NoteList />} />

        <Route path="/new" element={<NewNote />} />

        <Route path="/:id" element={<NoteLayout />}>
          <Route index element={<Note />} />
          <Route path="edit" element={<EditNote />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
