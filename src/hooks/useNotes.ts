import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import { useCallback, useEffect, useState } from "react"
import { createNoteAsync, deleteNoteAsync, fetchNotesAsync, updateNoteAsync } from "../redux/notesSlice"
import { Note } from "../types/Notes"

export const useNotes = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {notes, loading, error} = useSelector((state: RootState) => state.notes)

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() =>{
    dispatch(fetchNotesAsync())
  }, [dispatch])

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

  return{
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
  }
}