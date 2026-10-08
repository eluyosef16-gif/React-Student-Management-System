import { useState } from "react";
import CourseCard from "../components/CourseCard";
import useCourses from "../hooks/useCourses";

function Courses() {
  const {
    courses,
    addCourse,
    editCourse: updateCourse,
    removeCourse,
  } = useCourses();

  const [courseName, setCourseName] = useState("");
  const [instructor, setInstructor] = useState("");

  const [search, setSearch] = useState("");
  const [editingCourse, setEditingCourse] = useState(null);

  async function saveCourse(event) {
    event.preventDefault();

    if (courseName.trim() === "" || instructor.trim() === "") {
      alert("Please enter both course name and instructor.");
      return;
    }

    try {
      if (editingCourse) {
        await updateCourse(
          editingCourse.id,
          courseName,
          instructor
        );

        setEditingCourse(null);
      } else {
        await addCourse(courseName, instructor);
      }

      setCourseName("");
      setInstructor("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await removeCourse(id);
    } catch (error) {
      console.error(error);
      alert("Could not delete course.");
    }
  }

  function startEdit(course) {
    setEditingCourse(course);
    setCourseName(course.name);
    setInstructor(course.instructor);
  }

  function cancelEdit() {
    setEditingCourse(null);
    setCourseName("");
    setInstructor("");
  }

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Courses</h1>

      <p>Total Courses: {courses.length}</p>

      <form className="student-form" onSubmit={saveCourse}>
        <input
          type="text"
          placeholder="Course name"
          value={courseName}
          onChange={(event) => setCourseName(event.target.value)}
        />

        <input
          type="text"
          placeholder="Instructor name"
          value={instructor}
          onChange={(event) => setInstructor(event.target.value)}
        />

        <button type="submit">
          {editingCourse ? "Update Course" : "Add Course"}
        </button>

        {editingCourse && (
          <button
            type="button"
            className="cancel-button"
            onClick={cancelEdit}
          >
            Cancel
          </button>
        )}
      </form>

      <div className="student-tools">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="course-list">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            name={course.name}
            instructor={course.instructor}
            onEdit={() => startEdit(course)}
            onDelete={() => handleDelete(course.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;

