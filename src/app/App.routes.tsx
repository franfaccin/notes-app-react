import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NoteEdit from './layouts/note-edit/NoteEdit';
import ListAllNotes from './layouts/list-all-notes/ListAllNotes';
import ViewNote from './layouts/view-note/ViewNote';
import SearchNotes from './layouts/search-notes/SearchNotes';

class AppRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/search" component={SearchNotes} />
        <Route path="/new" component={NoteEdit} />
        <Route path="/edit" component={NoteEdit} />
        <Route path="/all" component={ListAllNotes} />
        <Route path="/view" component={ViewNote} />
        <Redirect exact to="/all"/>
      </Switch>
    );
  }
}

export default AppRoutes;
