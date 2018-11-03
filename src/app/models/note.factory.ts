import { INote } from './note.interface';

export const noteFactory = (
  title: string = '',
  content: string = '',
  id: string = null,
  createdAt: string = null
): INote => ({
  title: title,
  content: content,
  id: id || generateNoteId(),
  createdAt: createdAt,
});

const generateNoteId = (): string => Math.random().toString(36).substr(2, 9);