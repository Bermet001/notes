import React from "react";
import NoteForm from "./NoteForm";
import { NoteData, Tag } from "../../routes/AppRouter";
import useNote from "./useNote";

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];

  title: string;
  markdown: string;
} & Partial<NoteData>;

const EditNote = ({
  onSubmit,
  availableTags,
  onAddTag,
  title = "",
  markdown = "",
}: EditNoteProps) => {
  const note = useNote();

  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default EditNote;
