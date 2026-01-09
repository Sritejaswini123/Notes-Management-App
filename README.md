# Notes Management App

## Project Overview
A simple React application for managing notes: add, view, and delete them using local state. It demonstrates clean component architecture, proper state management with hooks, and handling of loading, empty, and error states.

## How to Run
- Node version: 18+ (tested on 20)
- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Open http://localhost:5173 in your browser.

## Component Breakdown
- **NoteForm**: Manages input for title (required) and description (optional), validates title, shows inline error, and calls addNote on submit.
- **NoteList**: Conditionally renders Loader (during initial load), EmptyState (no notes), or a list of NoteItem components.
- **NoteItem**: Displays a single note's title and description with a delete button.
- **Loader**: Shows a spinner and message during simulated loading.
- **EmptyState**: Displays a friendly message when there are no notes.

## State Explanation
All state is lifted to App.jsx: `notes` (array of {id, title, description}) and `isLoading` (boolean). 
- `useEffect` simulates loading with setTimeout.
- `addNote` appends to notes array.
- `deleteNote` filters out by id.
- Props flow down: addNote and deleteNote as functions to NoteForm/NoteList; notes and isLoading to NoteList.

## Assumptions/Limitations
- Notes are stored in memory (lost on refresh, no persistence).
- Basic vanilla CSS for styling; no frameworks.
- ID uses Date.now() for uniqueness.
- No persistence, auth, or advanced features as per scope.
- Loader simulates API; real API would replace setTimeout.