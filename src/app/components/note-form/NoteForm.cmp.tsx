import * as React from 'react';
import { Form, Label, Input, FormFeedback } from 'reactstrap';
import { INoteFormProps, INoteFormState } from './NoteForm.interfaces';
import Button from 'reactstrap/lib/Button';
import { HttpRequestEnum } from '../../redux/store.interfaces';
import Alert from 'reactstrap/lib/Alert';

class NoteForm extends React.Component<INoteFormProps, INoteFormState> {

  constructor(props: INoteFormProps) {
    super(props);
    this.state = {
      isValidTitle: true,
      isValidContent: true,
      isSaving: false
    };
  }

  render() {
    const { note } = this.props;
    const { title, content } = note;
    const { isValidTitle, isValidContent, isSaving } = this.state;

    return (
      <Form>
        <Label className="ff-label" htmlFor="noteTitle">Title</Label>
        <Input
          type="text"
          name="noteTitle"
          value={title}
          className="bdc(gray-light)"
          invalid={!isValidTitle}
          onChange={(event) => this.updateNoteTitle(event)}
        />
        <FormFeedback valid={isValidTitle}>Title cannot be empty</FormFeedback>
        <br/>
        <Label className="ff-label" htmlFor="noteContent">Content</Label>
        <Input
          type="textarea"
          name="noteContent"
          value={content}
          className="bdc(gray-light)"
          invalid={!isValidContent}
          onChange={(event) => this.updateNoteContent(event)}
        />
        <FormFeedback valid={isValidContent}>Content cannot be empty</FormFeedback>
        <br/>
        <Button
          outline
          color="secondary"
          className="ff-button ff-button-gray"
          onClick={() => this.validateAndDoSearch()}
          
        >
          Save
        </Button>
        <br/>
        <br/>
        <Alert
          isOpen={isSaving}
          toggle={() => this.closeAlert()}
          color="success"
        >
          Note saved succesfully
        </Alert>
      </Form>
    );
  }

  isValidForm(): boolean {
    const { title, content } = this.props.note;
    this.setState({
      isValidTitle: this.isValidTitle(title),
      isValidContent: this.isValidContent(content)
    });
    return this.isValidTitle(title) && this.isValidContent(content);
  }

  isValidTitle(title: string): boolean {
    return !!title;
  }

  isValidContent(content: string): boolean {
    return !!content;
  }

  updateNoteTitle(event: React.FormEvent<HTMLInputElement>) {
    const newTitle = event.currentTarget.value;
    if (!this.state.isValidTitle) {
      this.setState({isValidTitle: this.isValidTitle(newTitle)});
    }
    this.props.updateNoteTitle(newTitle);
  }

  updateNoteContent(event: React.ChangeEvent<HTMLInputElement>) {
    const newContent = event.currentTarget.value;
    if (!this.state.isValidContent) {
      this.setState({isValidContent: this.isValidContent(newContent)});
    }
    this.props.updateNoteContent(newContent);
  }

  validateAndDoSearch() {
    if (this.isValidForm()) {
      this.saveNote();
    } else if (this.state.isSaving) {
      this.setState({
        isSaving: false 
      });
    }
  }

  saveNote() {
    this.props.saveNote();
    this.setState({isSaving: true});
  }

  closeAlert() {
    this.setState({
      isSaving: false 
    });
  }
  
}

export default NoteForm;