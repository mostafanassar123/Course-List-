import React, { PureComponent } from "react";
import CourseForm from "./components/CourseForm/CourseForm";
import CourseList from "./components/CourseList/CourseList";
import { Header, Section, UList } from "./styled";
class App extends PureComponent {
  state = {
    courses: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JAVA SCRIPT" },
      { name: "REACT JS" }
    ],
    current: ""
  };
  //insert course to input
  updateCourse = e => {
    this.setState({
      current: e.target.value
    });
  };

  //addCourse to list
  addCourse = e => {
    e.preventDefault();
    const current = this.state.current;
    if (current) {
      let courses = this.state.courses;
      courses.push({ name: current });
      this.setState({
        courses,
        current: ""
      });
    }
  };
  //delete course
  deleteCourse = index => {
    const courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses
    });
  };
  //editCourse
  editCourse = (index, value) => {
    const courses = this.state.courses;
    let course = courses[index];
    course.name = value;
    this.setState({
      courses
    });
  };

  render() {
    const { courses } = this.state;
    const courseList = courses.map((course, index) => {
      return (
        <CourseList
          details={course}
          key={index}
          index={index}
          update={this.handleChange}
          deleteCourse={this.deleteCourse}
          editCourse={this.editCourse}
        />
      );
    });
    return (
      <Section>
        <Header>Add Course</Header>
        <CourseForm
          current={this.state.current}
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
        />
        <UList>{courseList}</UList>
      </Section>
    );
  }
}
export default App;
