import * as React from 'react';
import { connect } from 'react-redux';
import { store } from '../../redux/store';
import ContentBox from '../content-box/ContentBox';
import ContentBoxHeader from '../content-box/ContentBoxHeader';
import ContentBoxMain from '../content-box/ContentBoxMain';
import { IAppState, HttpRequestEnum } from '../../redux/store.interfaces';
import { ISearchNotesProps } from './SearchNotes.interfaces';
import  * as notesActions from '../../redux/sections/notes/notes.actions';
import NotesList from '../../components/notes-list/NotesList.cmp';
import NoteSearch from '../../components/note-search/NoteSearch.cmp';
import Alert from 'reactstrap/lib/Alert';
import { SearchStatusEnum } from '../../redux/sections/notes/notes.interfaces';
import Progress from 'reactstrap/lib/Progress';

class SearchNotes extends React.Component<ISearchNotesProps> {

  constructor(props: ISearchNotesProps) {
    super(props);
    if (this.props.query && this.props.isValid) {
      this.doSearch();
    }
  }

  render() {
    const { query, isValid, notesResults } = this.props;
    return (
      <ContentBox>
        <ContentBoxHeader>
          Search For Notes
        </ContentBoxHeader>
        <ContentBoxMain>
          <NoteSearch
            query={query}
            isValid={isValid}
            updateQuery={this.updateQuery}
            doSearch={this.doSearch}
            clearSearch={this.clearSearch}
          />
        </ContentBoxMain>
        <ContentBoxMain>
          {
            (notesResults.length > 0
              ? <NotesList notes={notesResults}/>
              : this.noNotesMessage()  
            )
          }
        </ContentBoxMain>
      </ContentBox>
    );
  }

  updateQuery(query: string) {
    store.dispatch(notesActions.UpdateAndValidateSearchQueryAction(query));
  }

  doSearch() {
    store.dispatch(notesActions.FindNotesByQueryAction());
  }

  clearSearch() {
    store.dispatch(notesActions.ClearSearchNotesAction());
  }

  noNotesMessage() {
    const { query, searchStatus } = this.props;
    
    if (!!query) {
      if ( searchStatus === SearchStatusEnum.FINISHED) {
        return 'No notes found.';
      } else {
        return (<Progress animated value="100" />);
      }
    }
  }
}

const mapStateToProps = (state: IAppState): ISearchNotesProps => ({
  query: state.notes.searchNotes.query.value,
  isValid: state.notes.searchNotes.query.isValid,
  searchStatus: state.notes.searchNotes.status,
  notesResults: state.notes.searchNotes.resultsList
});

export default connect(mapStateToProps)(SearchNotes);