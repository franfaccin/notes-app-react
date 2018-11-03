import * as React from 'react';
import { connect } from 'react-redux';
import Alert from 'reactstrap/lib/Alert';
import ContentBox from '../content-box/ContentBox';
import ContentBoxHeader from '../content-box/ContentBoxHeader';
import ContentBoxMain from '../content-box/ContentBoxMain';
import { IAppState, HttpRequestEnum } from '../../redux/store.interfaces';
import { IListAllNotesProps } from './ListAllNotes.interfaces';
import NotesList from '../../components/notes-list/NotesList.cmp';

class ListAllNotes extends React.Component<IListAllNotesProps> {

  constructor(props: IListAllNotesProps) {
    super(props);
  }

  render() {
    const { allNotes } = this.props;
    return (
      <ContentBox>
        <ContentBoxHeader>
          All Notes
        </ContentBoxHeader>
        <ContentBoxMain>
          {
            (allNotes.length > 0
              ? <NotesList notes={allNotes}/>
              : this.noNotesMessage()
            )
          }
        </ContentBoxMain>
      </ContentBox>
    );
  }

  noNotesMessage() {
    return 'No notes available';
  }
}

const mapStateToProps = (state: IAppState): IListAllNotesProps => ({
  allNotes: state.notes.listAll
});

export default connect(mapStateToProps)(ListAllNotes);