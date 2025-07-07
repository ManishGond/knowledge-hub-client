// src/pages/Dashboard.tsx
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import {
  fetchNotesAsync,
  createNoteAsync,
  updateNoteAsync,
  deleteNoteAsync,
} from "../redux/notesSlice";
import { Note } from "../types/Notes";
import NoteCard from "../components/NoteCard";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { notes, loading, error } = useSelector(
    (state: RootState) => state.notes
  );

  const sortedNotes = useMemo(() => {
    return [...notes].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [notes]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchNotesAsync());
  }, [dispatch]);

  const handleAddOrUpdate = () => {
    if (!title.trim() || !content.trim()) return;

    if (editMode && editId !== null) {
      dispatch(updateNoteAsync(editId, { title, content }));
    } else {
      dispatch(createNoteAsync({ title, content }));
    }

    setTitle("");
    setContent("");
    setEditMode(false);
    setEditId(null);
  };

  const handleDelete = useCallback(
    (id: number) => {
      dispatch(deleteNoteAsync(id));
    },
    [dispatch]
  );

  const handleEdit = useCallback((note: Note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditMode(true);
    setEditId(note.id);
  }, []);

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
};

export default Dashboard;
