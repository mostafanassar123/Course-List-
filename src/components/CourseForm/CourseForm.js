import React from "react";
import { InputForm, Button, Form } from "./styled";

const CourseForm = props => (
  <Form onSubmit={props.addCourse}>
    <InputForm
      type="text"
      value={props.current}
      onChange={props.updateCourse}
    />
    <Button>Add Course</Button>
  </Form>
);

export default CourseForm;
