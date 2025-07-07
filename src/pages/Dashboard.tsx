import React, { useState } from 'react';
import NoteCard from '../components/NoteCard';
import { Note } from '../types/Notes';

const Dashboard: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  const handleAddOrUpdate = () => {
    if (!title.trim() || !content.trim()) return;

    if (editId !== null) {
      setNotes(prev =>
        prev.map(note =>
          note.id === editId ? { ...note, title, content } : note
        )
      );
      setEditId(null);
    } else {
      const newNote: Note = {
        id: Date.now(),
        title,
        content,
        createdAt: new Date().toISOString()
      };
      setNotes([...notes, newNote]);
    }

    setTitle('');
    setContent('');
  };

  const handleDelete = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleEdit = (id: number) => {
    const note = notes.find(n => n.id === id);
    if (!note) return;
    setTitle(note.title);
    setContent(note.content);
    setEditId(note.id);
  };

  return (
    <div className="dashboard">
      <h1>🧠 Knowledge Hub</h1>

      <div className="note-form">
        <input
          type="text"
          placeholder="Title"
          value={ title }
          onChange={ (e) => setTitle(e.target.value) }
        />
        <textarea
          placeholder="Content"
          rows={ 5 }
          value={ content }
          onChange={ (e) => setContent(e.target.value) }
        />
        <button onClick={ handleAddOrUpdate }>
          { editId !== null ? 'Update Note' : 'Add Note' }
        </button>
      </div>

      <div className="note-list">
        { notes.map(note => (
          <NoteCard
            key={ note.id }
            note={ note }
            onEdit={ handleEdit }
            onDelete={ handleDelete }
          />
        )) }
      </div>
    </div>
  );
};

export default Dashboard;
