import * as React from 'react';
import { ListGroup, ButtonGroup, Button } from 'reactstrap';
import ListGroupItem from 'reactstrap/lib/ListGroupItem';
import { INote } from '../../models/note.interface';
import { INotesListProps } from './NotesList.interfaces';
import { Link } from 'react-router-dom';
import { store } from '../../redux/store';
import * as notesActions from '../../redux/sections/notes/notes.actions';

class NotesList extends React.Component<INotesListProps> {
  
  render() {
    const { notes = [] } = this.props;

    return (
      <ListGroup flush>
        {
          this.notesList(notes)
        }
      </ListGroup>
    );
  }

  notesList(notes: Array<INote>) {
    return notes.map(note => this.noteItem(note));
  }

  noteItem(note: INote) {
    return (
      <ListGroupItem className="d(f) jc(sb) flw(w)  ai(c) w(1/1)" key={note.id}>
        {note.title}
        <ButtonGroup size="sm">
          {this.viewItemBtn(note)}
          {this.editItemBtn(note)}
          {this.deleteItemBtn(note)}
        </ButtonGroup>
      </ListGroupItem>
    );
  }

  noteItemBtn(content: JSX.Element | string, onClick: (e: React.MouseEvent<HTMLButtonElement>) => void) {
    return (
      <Button 
        outline
        color="secondary"
        className="ff-button-gray"
        onClick={onClick}
      >
        {content}
      </Button>
    );
  }

  viewItemBtn(note: INote) {
    return (
      this.noteItemBtn(
        (
          <Link
            to="/view"
          >
            View
          </Link>
        ),
        _ => this.updateStagingNote(note)
      )
    );
  }

  editItemBtn(note: INote) {
    return (
      this.noteItemBtn(
        (
          <Link
            to="/edit"
          >
            Edit
          </Link>
        ),
        _ => this.updateStagingNote(note)
      )
    );
  }

  deleteItemBtn(note: INote) {
    return (
      this.noteItemBtn(
        'Delete',
        _ => this.deleteNote(note)
      )
    );
  }

  updateStagingNote(note: INote) {
    store.dispatch(notesActions.FindNoteByIdAction(note.id));
  }

  deleteNote(note: INote) {
    store.dispatch(notesActions.DeleteNoteByIdAction(note.id));
  }
}

export default NotesList;