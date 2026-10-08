function CourseCard({ name, instructor, onEdit, onDelete }) {
  return (
    <div className="course-card">
      <div>
        <h3>{name}</h3>
        <p>Instructor: {instructor}</p>
      </div>

      <div className="course-actions">
        <button className="edit-button" onClick={onEdit}>
          Edit
        </button>

        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default CourseCard;