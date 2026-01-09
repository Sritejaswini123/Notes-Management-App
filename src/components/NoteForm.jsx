import { useState } from 'react';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [titleTouched, setTitleTouched] = useState(false);

  const validateTitle = (value) => {
    if (!value.trim()) {
      return 'Title is required';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark as touched on submit attempt
    setTitleTouched(true);

    const titleError = validateTitle(title);
    if (titleError) {
      setError(titleError);
      return;
    }

    // Success
    addNote({ title: title.trim(), description: description.trim() });
    setTitle('');
    setDescription('');
    setError('');
    setTitleTouched(false); // Reset for next note
  };

  const handleBlur = () => {
    setTitleTouched(true);
    const err = validateTitle(title);
    setError(err);
  };

  const showError = titleTouched && error;

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <div className="form-group">
        <label>Title (required)</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError('');
          }}
          onBlur={handleBlur}      
          className={showError ? 'input-error' : ''}
          placeholder="Enter note title"
        />
        {showError && <p className="error-message">{error}</p>}
      </div>

      <div className="form-group">
        <label>Description (optional)</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description (optional)"
        />
      </div>

      <button 
        type="submit" 
        disabled={title.trim() === ''}
      >
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;