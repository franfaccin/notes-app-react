import * as React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { store } from '../../redux/store';
import ContentBox from '../content-box/ContentBox';
import ContentBoxHeader from '../content-box/ContentBoxHeader';
import ContentBoxMain from '../content-box/ContentBoxMain';
import { IAppState, HttpRequestEnum } from '../../redux/store.interfaces';
import { IViewNoteProps } from './ViewNote.interfaces';
import  * as notesActions from '../../redux/sections/notes/notes.actions';

class ViewNote extends React.Component<IViewNoteProps> {

  componentWillUnmount() {
    store.dispatch(notesActions.ClearStagingNoteAction());
  }

  render() {
    const { note } = this.props;
    const { title, content } = note.createdAt !== null ? note : this.defaultTitleAndContent();
    return (
      <ContentBox>
        <ContentBoxHeader>
          {title}
        </ContentBoxHeader>
        <ContentBoxMain>
          {content.split(/\n/g).map((line, i) => <p key={'line-' + i}>{line || '\u00A0'}</p>)}
        </ContentBoxMain>
      </ContentBox>
    );
  }

  defaultTitleAndContent(): { title: string; content: string; } {
    return {
      title: 'No note selected',
      content: 'No note was selected.'
    };
  }
}

const mapStateToProps = (state: IAppState): IViewNoteProps => ({
  note: state.notes.stagingNote
});

export default connect(mapStateToProps)(ViewNote);