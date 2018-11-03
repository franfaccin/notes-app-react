import { INote } from "../../models/note.interface";
import { SearchStatusEnum } from "../../redux/sections/notes/notes.interfaces";

export interface ISearchNotesProps {
  query: string;
  isValid: boolean;
  searchStatus: SearchStatusEnum;
  notesResults: Array<INote>;
}