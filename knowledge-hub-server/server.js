// server/index.js
import express, { json } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// GET all notes
app.get("/api/notes", async (req, res) => {
  const notes = await prisma.note.findMany();
  res.json(notes);
});

// POST new note
app.post("/api/notes", async (req, res) => {
  const { title, content } = req.body;
  const note = await prisma.note.create({
    data: { title, content },
  });
  res.json(note);
});

// PUT update note
app.put("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const note = await prisma.note.update({
    where: { id: Number(id) },
    data: { title, content },
  });
  res.json(note);
});

// DELETE note
app.delete("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.note.delete({ where: { id: Number(id) } });
  res.json({ deleted: true });
});

app.listen(4000, () => {
  console.log("🚀 Server running on http://localhost:4000");
});
