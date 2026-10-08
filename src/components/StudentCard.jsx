function StudentCard({ name, course, onDelete, onEdit }) {
  return (
    <div className="student-card">
      <div>
        <h3>{name}</h3>
        <p>{course}</p>
      </div>

      <div className="student-actions">
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

export default StudentCard;