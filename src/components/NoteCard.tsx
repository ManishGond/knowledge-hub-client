import React from 'react';
import { Note } from '../types/Notes';

interface NoteCardProps {
  note: Note;
  onEdit: () => void;
  onDelete: () => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onEdit, onDelete }) => {
  console.log(`📦Rendering NoteCard: ID : ${note.id}`)
  return (
    <div className="note-card">
      <h3>{ note.title }</h3>
      <p>{ note.content }</p>
      <div className="note-footer">
        <small>{ new Date(note.createdAt).toLocaleString() }</small>
        <div>
          <button onClick={ onEdit }>✏️</button>
          <button onClick={ onDelete }>🗑️</button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NoteCard);
