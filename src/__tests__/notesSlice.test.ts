import notesReducer, {
  fetchStart,
  fetchSuccess,
  fetchFailure,
} from "../redux/notesSlice";
import { Note } from "../types/Notes";

describe("notesSlice reducer", () => {
  const initialState = {
    notes: [],
    loading: false,
    error: null,
  };

  it("should handle fetchNotesStart", () => {
    const state = notesReducer(initialState, fetchStart());
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  it("should handle fetchNotesSuccess", () => {
    const mockNotes: Note[] = [
      { id: 1, title: "Test", content: "Hello", createdAt: new Date().toISOString() },
    ];
    const state = notesReducer(initialState, fetchSuccess(mockNotes));
    expect(state.notes).toEqual(mockNotes);
    expect(state.loading).toBe(false);
  });

  it("should handle fetchNotesFailure", () => {
    const state = notesReducer(initialState, fetchFailure("Error!"));
    expect(state.error).toBe("Error!");
    expect(state.loading).toBe(false);
  });
});
