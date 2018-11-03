import * as React from 'react';
import Input from 'reactstrap/lib/Input';
import FormFeedback from 'reactstrap/lib/FormFeedback';
import { INoteSearchProps } from './NoteSearch.interfaces';

class NoteSearch extends React.Component<INoteSearchProps> {

  typeaheadTimeoutID: NodeJS.Timeout;
  typeaheadTimeoutDelay: number = 300;

  render() {
    const { query, isValid } = this.props;
    return (
      <section>
        <Input
          type="text"
          placeholder="What note are you looking for?"
          value={query}
          invalid={!isValid}
          onChange={(event) => this.search(event)}
        />
        <FormFeedback>Please type a valid query.</FormFeedback>
      </section>
    );
  }

  search(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.currentTarget.value;
    this.props.updateQuery(query);

    if (query.length > 0) {

      if (!!this.typeaheadTimeoutID) { clearTimeout(this.typeaheadTimeoutID); }
      
      this.typeaheadTimeoutID = setTimeout(
        () => {
          this.props.doSearch();
        },
        this.typeaheadTimeoutDelay
      );
    } else {
      if (!!this.typeaheadTimeoutID) { clearTimeout(this.typeaheadTimeoutID); }
      this.props.clearSearch();
    }
  }
}

export default NoteSearch;
