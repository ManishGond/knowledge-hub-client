import { useMemo } from "react";
import { useNotes } from "../hooks/useNotes"
import NoteCard from "../components/NoteCard";

const Dashboard = () => {
  const {
    notes,
    loading,
    error,
    title,
    content,
    setTitle,
    setContent,
    editMode,
    handleAddOrUpdate,
    handleDelete,
    handleEdit,
  } = useNotes()

  const sortedNotes = useMemo(() => {
    return [...notes].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [notes]);

  return (
    <div className="dashboard">
      <h1>🧠 Knowledge Hub</h1>

      <div className="note-form">
        <input
          type="text"
          placeholder="Enter title"
          value={ title }
          onChange={ (e) => setTitle(e.target.value) }
        />
        <textarea
          rows={ 3 }
          placeholder="Enter content"
          value={ content }
          onChange={ (e) => setContent(e.target.value) }
        />
        <button onClick={ handleAddOrUpdate }>
          { editMode ? "✅ Update Note" : "➕ Add Note" }
        </button>
      </div>

      { loading && <p>⏳ Loading notes...</p> }
      { error && <p style={ { color: "red" } }>❌ { error }</p> }

      <div className="note-list">
        { sortedNotes.map((note) => (
          <NoteCard
            key={ note.id }
            note={ note }
            onDelete={ () => handleDelete(note.id) }
            onEdit={ () => handleEdit(note) }
          />
        )) }
      </div>
    </div>
  );
}

export default Dashboard;