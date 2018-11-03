import { INotesState } from './sections/notes/notes.interfaces';

export interface IAppState {
  notes: INotesState;
}

export interface IHttpProcessState {
  status: HttpRequestEnum;
}

export enum HttpRequestEnum {
  INIT =       'INIT',
  PROCESSING = 'PROCESSING',
  FINISHED =   'FINISHED',
  ERROR =      'ERROR',
  CANCELLED =  'CANCELLED',
}