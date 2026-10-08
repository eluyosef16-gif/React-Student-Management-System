import { useEffect, useState } from "react";

import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../services/api";

function useStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  async function loadStudents() {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      console.error(error);
      alert("Could not load students.");
    }
  }

  async function addStudent(name, course) {
    await createStudent({
      name: name,
      course: course,
    });

    await loadStudents();
  }

  async function editStudent(id, name, course) {
    await updateStudent(id, {
      name: name,
      course: course,
    });

    await loadStudents();
  }

  async function removeStudent(id) {
    await deleteStudent(id);
    await loadStudents();
  }

  return {
    students,
    addStudent,
    editStudent,
    removeStudent,
  };
}

export default useStudents;

