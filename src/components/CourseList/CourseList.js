import React, { Component } from "react";
import { ListCourse, ListSpan, EditButton, DeleteButton } from "./styled";
import { InputForm, Button, Form } from "../CourseForm/styled";

class CourseList extends Component {
  state = {
    isEdit: false
  };
  //renderCourse
  renderCourse = () => {
    return (
      <ListCourse>
        <ListSpan>{this.props.details.name} </ListSpan>
        <EditButton
          onClick={() => {
            this.toggleState();
          }}
        >
          Edit Course
        </EditButton>
        <DeleteButton
          onClick={() => {
            this.props.deleteCourse(this.props.index);
          }}
        >
          Delete Course
        </DeleteButton>
      </ListCourse>
    );
  };
  //toggleState
  toggleState = () => {
    this.setState(oldState => ({
      isEdit: !oldState.isEdit
    }));
  };

  updateCourseItem = e => {
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value);
    this.toggleState();
  };
  renderUpdateForm = () => {
    return (
      <Form onSubmit={this.updateCourseItem}>
        <InputForm
          type="text"
          ref={v => {
            this.input = v;
          }}
          defaultValue={this.props.details.name}
        />
        <Button onClick={() => {}}>Update Course</Button>
      </Form>
    );
  };
  render() {
    let { isEdit } = this.state;
    return <>{isEdit ? this.renderUpdateForm() : this.renderCourse()}</>;
  }
}
export default CourseList;
