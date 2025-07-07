import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NoteCard from "../components/NoteCard";
import { Note } from "../types/Notes";

describe("NoteCard", () => {
  const dummyNote: Note = {
    id: 1,
    title: "Test Note",
    content: "This is a test note",
    createdAt: new Date().toISOString(),
  };

  const onEdit = jest.fn();
  const onDelete = jest.fn();

  it("renders note details", () => {
    render(<NoteCard note={ dummyNote } onEdit={ onEdit } onDelete={ onDelete } />);
    expect(screen.getByText("Test Note")).toBeInTheDocument();
    expect(screen.getByText("This is a test note")).toBeInTheDocument();
  });

  it("calls onEdit when ✏️ button is clicked", () => {
    render(<NoteCard note={ dummyNote } onEdit={ onEdit } onDelete={ onDelete } />);
    fireEvent.click(screen.getByText("✏️"));
    expect(onEdit).toHaveBeenCalledTimes(1);
  });

  it("calls onDelete when 🗑️ button is clicked", () => {
    render(<NoteCard note={ dummyNote } onEdit={ onEdit } onDelete={ onDelete } />);
    fireEvent.click(screen.getByText("🗑️"));
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
