import { INotesState, ISearchNotesState, SearchStatusEnum } from './notes.interfaces';
import { NOTES_ACTIONS_TYPES, NotesActions, UpdateAllSearchNotesAction } from './notes.actions';
import { INote } from '../../../models/note.interface';
import { noteFactory } from '../../../models/note.factory';
import { store } from '../../store';

const searchNotesInitialState = (): ISearchNotesState => ({
  query: {
    value: '',
    isValid: true,
  },
  status: SearchStatusEnum.DEFAULT,
  resultsList: []
});

const initialState = (): INotesState => ({
  listAll: [],
  stagingNote: noteFactory(),
  searchNotes: searchNotesInitialState()
});

async function searchNotesByQuery(query: string, listAll: Array<INote>): Promise<Array<INote>> {
  const regQuery = RegExp(query);
  return listAll.filter(note => regQuery.test(note.title) || regQuery.test(note.content));
}

export const notesReducer = (state: INotesState = initialState(), action: NotesActions): INotesState => {
  switch (action.type) {

    case (NOTES_ACTIONS_TYPES.CLEAR_SEARCH_NOTES): {
      return {
        ...state,
        searchNotes: searchNotesInitialState()
      };
    }

    case (NOTES_ACTIONS_TYPES.CLEAR_STAGING_NOTE): {
      return {
        ...state,
        stagingNote: noteFactory()
      };
    }

    case (NOTES_ACTIONS_TYPES.DELETE_NOTE_BY_ID): {
      const id = action.payload as string;
      const updatedNotes = state.listAll.filter(note => note.id !== id);
      return {
        ...state,
        listAll: updatedNotes
      };
    }

    case (NOTES_ACTIONS_TYPES.FIND_NOTE_BY_ID): {
      const id = action.payload as string;
      return {
        ...state,
        stagingNote: state.listAll.find(note => note.id === id)
      };
    }

    case (NOTES_ACTIONS_TYPES.FIND_NOTES_BY_QUERY): {
      if (state.searchNotes.query.isValid) {
        const query = state.searchNotes.query.value;
        const allNotes = state.listAll;
        searchNotesByQuery(query, allNotes)
          .then((notesFound: Array<INote>) => store.dispatch(UpdateAllSearchNotesAction(notesFound)));

        return {
          ...state,
          searchNotes: {
            ...state.searchNotes,
            status: SearchStatusEnum.SEARCHING
          }
        };
      }
      return {
        ...state
      };
    }

    case (NOTES_ACTIONS_TYPES.FIND_NOTES_BY_QUERY_FAILED): {
      return {
        ...state,
        searchNotes: {
          ...state.searchNotes,
          status: SearchStatusEnum.FAILED
        }
      };
    }

    case (NOTES_ACTIONS_TYPES.UPDATE_ALL_NOTES): {
      const newList = action.payload as Array<INote>;
      return {
        ...state,
        listAll: [
          ...newList
        ]
      };
    }

    case (NOTES_ACTIONS_TYPES.UPDATE_ALL_SEARCH_NOTES): {
      const notes = action.payload as Array<INote>;
      return {
        ...state,
        searchNotes: {
          ...state.searchNotes,
          resultsList: notes,
          status: SearchStatusEnum.FINISHED
        }
      };
    }

    case (NOTES_ACTIONS_TYPES.STORE_STAGING_NOTE): {
      const newNote = state.stagingNote;
      const oldNotes = [...state.listAll];
      const index = state.listAll.findIndex(note => note.id === newNote.id);
      let updatedNotes: Array<INote>;
      if (index > -1) {
        updatedNotes = oldNotes;
        updatedNotes[index] = newNote;
      } else {
        updatedNotes = oldNotes.concat({
          ...newNote,
          createdAt: new Date().toISOString()
        });
      }

      return {
        ...state,
        listAll: [
          ... updatedNotes
        ],
        stagingNote: noteFactory()
      };
    }

    case (NOTES_ACTIONS_TYPES.UPDATE_STAGING_NOTE): {
      const updatedNote = action.payload as INote || noteFactory();
      return {
        ...state,
        stagingNote: {
          ...state.stagingNote,
          ...updatedNote
        }
      };
    }

    case (NOTES_ACTIONS_TYPES.UPDATE_STAGING_NOTE_TITLE): {
      const newTitle = action.payload as string;
      return {
        ...state,
        stagingNote: {
          ...state.stagingNote,
          title: newTitle
        }
      };
    }

    case (NOTES_ACTIONS_TYPES.UPDATE_STAGING_NOTE_CONTENT): {
      const newContent = action.payload as string;
      return {
        ...state,
        stagingNote: {
          ...state.stagingNote,
          content: newContent
        }
      };
    }

    case (NOTES_ACTIONS_TYPES.UPDATE_AND_VALIDATE_SEARCH_QUERY): {
      const query = action.payload as string;
      let isValid: boolean;
      try {
        let regexQuery = new RegExp(query);
        isValid = true;
      } catch (e) {
        isValid = false;
      }
      return {
        ...state,
        searchNotes: {
          ...state.searchNotes,
          query: {
            ...state.searchNotes.query,
            value: query,
            isValid: isValid,
          },
          status: SearchStatusEnum.DEFAULT
        }
      };
    }

    default:
      return state;
  }
};