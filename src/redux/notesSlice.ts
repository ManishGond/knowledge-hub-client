// src/redux/notesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../types/Notes";
import {
  fetchNotes,
  createNote,
  updateNote,
  deleteNote
} from "../api/notes";

interface NotesState {
  notes: Note[];
  loading: boolean;
  error: string | null;
}

const initialState: NotesState = {
  notes: [],
  loading: false,
  error: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess(state, action: PayloadAction<Note[]>) {
      state.notes = action.payload;
      state.loading = false;
    },
    fetchFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },

    addNote(state, action: PayloadAction<Note>) {
      state.notes.push(action.payload);
    },

    updateNoteSuccess(state, action: PayloadAction<Note>) {
      const idx = state.notes.findIndex((n) => n.id === action.payload.id);
      if (idx !== -1) state.notes[idx] = action.payload;
    },

    deleteNoteSuccess(state, action: PayloadAction<number>) {
      state.notes = state.notes.filter((n) => n.id !== action.payload);
    },
  },
});

// ✅ Thunks
export const fetchNotesAsync = () => async (dispatch: any) => {
  dispatch(fetchStart());
  try {
    const notes = await fetchNotes();
    dispatch(fetchSuccess(notes));
  } catch {
    dispatch(fetchFailure("Failed to fetch notes"));
  }
};

export const createNoteAsync = (note: Partial<Note>) => async (dispatch: any) => {
  try {
    const newNote = await createNote(note);
    dispatch(addNote(newNote));
  } catch {
    dispatch(fetchFailure("Failed to create note"));
  }
};

export const updateNoteAsync =
  (id: number, note: Partial<Note>) => async (dispatch: any) => {
    try {
      const updated = await updateNote(id, note);
      dispatch(updateNoteSuccess(updated));
    } catch {
      dispatch(fetchFailure("Failed to update note"));
    }
  };

export const deleteNoteAsync = (id: number) => async (dispatch: any) => {
  try {
    await deleteNote(id);
    dispatch(deleteNoteSuccess(id));
  } catch {
    dispatch(fetchFailure("Failed to delete note"));
  }
};

export const {
  fetchStart,
  fetchSuccess,
  fetchFailure,
  addNote,
  updateNoteSuccess,
  deleteNoteSuccess,
} = notesSlice.actions;

export default notesSlice.reducer;
