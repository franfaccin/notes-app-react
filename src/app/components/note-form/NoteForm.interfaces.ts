import { INote } from "../../models/note.interface";

export interface INoteFormProps {
  note: INote;
  updateNoteTitle: (title: string) => void
  updateNoteContent: (content: string) => void
  saveNote: () => void
}

export interface INoteFormState {
  isValidTitle: boolean;
  isValidContent: boolean;
  isSaving: boolean;
}