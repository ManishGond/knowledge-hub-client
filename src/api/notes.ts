import axios from "axios";
import { Note } from "../types/Notes";

const API = 'http://localhost:4000/api';

export const fetchNotes = async (): Promise<Note[]> => {
  const res = await axios.get(`${API}/notes`);
  return res.data;
};

export const createNote = async (note: Partial<Note>): Promise<Note> => {
  const res = await axios.post(`${API}/notes`, note);
  return res.data;
};

export const updateNote = async (id: number, note: Partial<Note>): Promise<Note> => {
  const res = await axios.put(`${API}/notes/${id}`, note);
  return res.data;
};

export const deleteNote = async (id: number): Promise<void> => {
  await axios.delete(`${API}/notes/${id}`);
};