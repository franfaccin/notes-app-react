import * as React from 'react';
import { connect } from 'react-redux';
import { store } from '../../redux/store';
import ContentBox from '../content-box/ContentBox';
import ContentBoxHeader from '../content-box/ContentBoxHeader';
import NoteForm from '../../components/note-form/NoteForm.cmp';
import { IAppState } from '../../redux/store.interfaces';
import { INoteEditProps } from './NoteEdit.interfaces';
import  * as notesActions from '../../redux/sections/notes/notes.actions';
import ContentBoxMain from '../content-box/ContentBoxMain';

class NoteEdit extends React.Component<INoteEditProps> {

  componentWillUnmount() {
    store.dispatch(notesActions.ClearStagingNoteAction());
  }

  render() {
    const { stagingNote } = this.props;
    const { createdAt } = stagingNote;
    return (
      <ContentBox>
        <ContentBoxHeader>
          {createdAt === null ? 'Add New' : 'Edit'} Note
        </ContentBoxHeader>
        <ContentBoxMain>
          <NoteForm
            note={stagingNote}
            updateNoteTitle={this.updateNoteTitle}
            updateNoteContent={this.updateNoteContent}
            saveNote={this.saveNote}
          />
        </ContentBoxMain>
      </ContentBox>
    );
  }

  updateNoteTitle(title: string) {
    store.dispatch(notesActions.UpdateStagingNoteTitleAction(title));
  }

  updateNoteContent(content: string) {
    store.dispatch(notesActions.UpdateStagingNoteContentAction(content));
  }

  saveNote() {
    store.dispatch(notesActions.StoreStagingNoteAction());
  }

}

const mapStateToProps = (state: IAppState): INoteEditProps => ({
  stagingNote: state.notes.stagingNote
});

export default connect(mapStateToProps)(NoteEdit);