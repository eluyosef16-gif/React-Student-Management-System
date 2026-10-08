import { useEffect, useState } from "react";

import {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../services/api";

function useCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  async function loadCourses() {
    try {
      const data = await getCourses();
      setCourses(data);
    } catch (error) {
      console.error(error);
      alert("Could not load courses.");
    }
  }

  async function addCourse(name, instructor) {
    await createCourse({
      name: name,
      instructor: instructor,
    });

    await loadCourses();
  }

  async function editCourse(id, name, instructor) {
    await updateCourse(id, {
      name: name,
      instructor: instructor,
    });

    await loadCourses();
  }

  async function removeCourse(id) {
    await deleteCourse(id);
    await loadCourses();
  }

  return {
    courses,
    addCourse,
    editCourse,
    removeCourse,
  };
}

export default useCourses;

