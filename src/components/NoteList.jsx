import Loader from './Loader';
import EmptyState from './EmptyState';
import NoteItem from './NoteItem';

function NoteList({ notes, deleteNote, isLoading }) {
  if (isLoading) {
    return <Loader />;
  }

  if (notes.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul className="note-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </ul>
  );
}

export default NoteList;