function NoteItem({ note, deleteNote }) {
  return (
    <li className="note-item">
      <div className="note-content">
        <h3>{note.title}</h3>
        {note.description && <p>{note.description}</p>}
      </div>
      <button onClick={() => deleteNote(note.id)} className="delete-button">
        Delete
      </button>
    </li>
  );
}

export default NoteItem;