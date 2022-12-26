import React from "react";

import NoteForm from "./NoteForm";

const NewNote = ({ onSubmit, onAddTag, availableTags }) => {

  return (
    <div>
      <h1 className="mb-4">New Note</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </div>
  );
};

export default NewNote;
