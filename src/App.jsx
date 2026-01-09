import { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial API load with loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  const addNote = (newNote) => {
    setNotes([...notes, { id: Date.now().toString(), ...newNote }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Notes App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} isLoading={isLoading} />
    </div>
  );
}

export default App;