import { IAction } from '../../util-rx';
import { INote } from '../../../models/note.interface';

export enum NOTES_ACTIONS_TYPES {
  CLEAR_SEARCH_NOTES =                 '[Notes] ClearSearchNotes',
  CLEAR_STAGING_NOTE =                 '[Notes] ClearStagingNote',
  DELETE_NOTE_BY_ID =                  '[Notes] DeleteNoteById',
  FIND_NOTE_BY_ID =                    '[Notes] FindNoteById',
  FIND_NOTES_BY_QUERY =                '[Notes] FindNotesByQuery',
  FIND_NOTES_BY_QUERY_FAILED =         '[Notes] FindNotesByQueryFailed',
  STORE_STAGING_NOTE =                 '[Notes] StoreStagingNote',
  UPDATE_ALL_NOTES =                   '[Notes] UpdateAllNotes',
  UPDATE_ALL_SEARCH_NOTES =            '[Notes] UpdateAllSearchNotes',
  UPDATE_STAGING_NOTE =                '[Notes] UpdateStagingNote',
  UPDATE_STAGING_NOTE_TITLE =          '[Notes] UpdateStagingNoteTitle',
  UPDATE_STAGING_NOTE_CONTENT =        '[Notes] UpdateStagingNoteContent',
  UPDATE_AND_VALIDATE_SEARCH_QUERY =   '[Notes] UpdateAndValidateSearchQuery'
}

interface IClearSearchNotesAction extends IAction<NOTES_ACTIONS_TYPES, null> {}
export const ClearSearchNotesAction = (): IClearSearchNotesAction  => ({
  type: NOTES_ACTIONS_TYPES.CLEAR_SEARCH_NOTES,
  payload: null
});

interface IClearStagingNoteAction extends IAction<NOTES_ACTIONS_TYPES, null> {}
export const ClearStagingNoteAction = (): IClearStagingNoteAction  => ({
  type: NOTES_ACTIONS_TYPES.CLEAR_STAGING_NOTE,
  payload: null
});

interface IDeleteNoteByIdAction extends IAction<NOTES_ACTIONS_TYPES, string> {}
export const DeleteNoteByIdAction = (id: string): IDeleteNoteByIdAction  => ({
  type: NOTES_ACTIONS_TYPES.DELETE_NOTE_BY_ID,
  payload: id
});

interface IFindNoteByIdAction extends IAction<NOTES_ACTIONS_TYPES, string> {}
export const FindNoteByIdAction = (id: string): IFindNoteByIdAction  => ({
  type: NOTES_ACTIONS_TYPES.FIND_NOTE_BY_ID,
  payload: id
});

interface IFindNotesByQueryAction extends IAction<NOTES_ACTIONS_TYPES, null> {}
export const FindNotesByQueryAction = (): IFindNotesByQueryAction  => ({
  type: NOTES_ACTIONS_TYPES.FIND_NOTES_BY_QUERY,
  payload: null
});

interface IFindNotesByQueryFailedAction extends IAction<NOTES_ACTIONS_TYPES, null> {}
export const FindNotesByQueryFailedAction = (): IFindNotesByQueryFailedAction  => ({
  type: NOTES_ACTIONS_TYPES.FIND_NOTES_BY_QUERY_FAILED,
  payload: null
});

interface IStoreStagingNoteAction extends IAction<NOTES_ACTIONS_TYPES, null> {}
export const StoreStagingNoteAction = (): IStoreStagingNoteAction  => ({
  type: NOTES_ACTIONS_TYPES.STORE_STAGING_NOTE,
  payload: null
});

interface IUpdateAllNotesAction extends IAction<NOTES_ACTIONS_TYPES, Array<INote>> {}
export const UpdateAllNotesAction = (notes: Array<INote>): IUpdateAllNotesAction  => ({
  type: NOTES_ACTIONS_TYPES.UPDATE_ALL_NOTES,
  payload: notes
});

interface IUpdateAllSearchNotesAction extends IAction<NOTES_ACTIONS_TYPES, Array<INote>> {}
export const UpdateAllSearchNotesAction = (notes: Array<INote>): IUpdateAllSearchNotesAction  => ({
  type: NOTES_ACTIONS_TYPES.UPDATE_ALL_SEARCH_NOTES,
  payload: notes
});

interface IUpdateStagingNoteAction extends IAction<NOTES_ACTIONS_TYPES, INote> {}
export const UpdateStagingNoteAction = (note: INote): IUpdateStagingNoteAction  => ({
  type: NOTES_ACTIONS_TYPES.UPDATE_STAGING_NOTE,
  payload: note
});

interface IUpdateStagingNoteTitleAction extends IAction<NOTES_ACTIONS_TYPES, string> {}
export const UpdateStagingNoteTitleAction = (newTitle: string): IUpdateStagingNoteTitleAction  => ({
  type: NOTES_ACTIONS_TYPES.UPDATE_STAGING_NOTE_TITLE,
  payload: newTitle
});

interface IUpdateStagingNoteContentAction extends IAction<NOTES_ACTIONS_TYPES, string> {}
export const UpdateStagingNoteContentAction = (newContent: string): IUpdateStagingNoteContentAction  => ({
  type: NOTES_ACTIONS_TYPES.UPDATE_STAGING_NOTE_CONTENT,
  payload: newContent
});

interface IUpdateAndValidateSearchQueryAction extends IAction<NOTES_ACTIONS_TYPES, string> {}
export const UpdateAndValidateSearchQueryAction = (query: string): IUpdateAndValidateSearchQueryAction  => ({
  type: NOTES_ACTIONS_TYPES.UPDATE_AND_VALIDATE_SEARCH_QUERY,
  payload: query
});

export type NotesActions
  = IClearSearchNotesAction
  | IClearStagingNoteAction
  | IDeleteNoteByIdAction
  | IFindNoteByIdAction
  | IFindNotesByQueryAction
  | IFindNotesByQueryFailedAction
  | IStoreStagingNoteAction
  | IUpdateAllNotesAction
  | IUpdateAllSearchNotesAction
  | IUpdateStagingNoteAction
  | IUpdateStagingNoteTitleAction
  | IUpdateStagingNoteContentAction
  | IUpdateAndValidateSearchQueryAction;
