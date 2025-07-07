import React from 'react';
import { Note } from '../types/Notes';

interface NoteCardProps {
  note: Note;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onEdit, onDelete }) => {
  return (
    <div className="note-card">
      <h3>{ note.title }</h3>
      <p>{ note.content }</p>
      <div className="note-footer">
        <small>{ new Date(note.createdAt).toLocaleString() }</small>
        <div>
          <button onClick={ () => onEdit(note.id) }>✏️</button>
          <button onClick={ () => onDelete(note.id) }>🗑️</button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
