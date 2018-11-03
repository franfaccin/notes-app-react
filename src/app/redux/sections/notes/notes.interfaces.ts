import { INote } from '../../../models/note.interface';

export interface INotesState {
  listAll: Array<INote>;
  stagingNote: INote;
  searchNotes: ISearchNotesState;
}

export interface ISearchNotesState {
  query: {
    value: string;
    isValid: boolean;
  };
  status: SearchStatusEnum;
  resultsList: Array<INote>;
}

export enum SearchStatusEnum {
  DEFAULT,
  SEARCHING,
  FAILED,
  FINISHED
}