import { useState } from "react";
import StudentCard from "../components/StudentCard";
import useStudents from "../hooks/useStudents";

function Students() {
  const {
    students,
    addStudent,
    editStudent: updateStudent,
    removeStudent,
  } = useStudents();

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const [search, setSearch] = useState("");
  const [filterCourse, setFilterCourse] = useState("All");

  const [editingStudent, setEditingStudent] = useState(null);

  async function saveStudent(event) {
    event.preventDefault();

    if (name.trim() === "" || course.trim() === "") {
      alert("Please enter both name and course.");
      return;
    }

    try {
      if (editingStudent) {
        await updateStudent(editingStudent.id, name, course);
        setEditingStudent(null);
      } else {
        await addStudent(name, course);
      }

      setName("");
      setCourse("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await removeStudent(id);
    } catch (error) {
      console.error(error);
      alert("Could not delete student.");
    }
  }

  function startEdit(student) {
    setEditingStudent(student);
    setName(student.name);
    setCourse(student.course);
  }

  function cancelEdit() {
    setEditingStudent(null);
    setName("");
    setCourse("");
  }

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCourse =
      filterCourse === "All" || student.course === filterCourse;

    return matchesSearch && matchesCourse;
  });

  return (
    <div>
      <h1>Students</h1>

      <p>Total Students: {students.length}</p>

      <form className="student-form" onSubmit={saveStudent}>
        <input
          type="text"
          placeholder="Student name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(event) => setCourse(event.target.value)}
        />

        <button type="submit">
          {editingStudent ? "Update Student" : "Add Student"}
        </button>

        {editingStudent && (
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
          placeholder="Search students..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={filterCourse}
          onChange={(event) => setFilterCourse(event.target.value)}
        >
          <option value="All">All Courses</option>
          <option value="React Development">React Development</option>
          <option value="Web Development">Web Development</option>
          <option value="Full Stack Development">
            Full Stack Development
          </option>
          <option value="Software Engineering">
            Software Engineering
          </option>
        </select>
      </div>

      <div className="student-list">
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            onEdit={() => startEdit(student)}
            onDelete={() => handleDelete(student.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Students;

