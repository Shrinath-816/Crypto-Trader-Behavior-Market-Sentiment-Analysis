import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load tasks");
    }
  };

  const createTask = async () => {
    if (!title.trim()) return;
    try {
      await API.post("/tasks", { title });
      setTitle("");
      fetchTasks();
    } catch {
      alert("Failed to create task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch {
      alert("Failed to delete task");
    }
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditingTitle(task.title);
  };

  const updateTask = async (id) => {
    if (!editingTitle.trim()) return;
    try {
      await API.put(`/tasks/${id}`, { title: editingTitle });
      setEditingId(null);
      setEditingTitle("");
      fetchTasks();
    } catch {
      alert("Failed to update task");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h2>My Tasks</h2>

      {/* Add Task */}
      <input
        placeholder="New task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="button" onClick={createTask}>
        Add Task
      </button>

      {/* Task List */}
      <ul style={{ marginTop: "20px", paddingLeft: 0 }}>
        {tasks.length === 0 && (
          <p style={{ textAlign: "center", opacity: 0.7 }}>
            No tasks yet
          </p>
        )}

        {tasks.map((t) => (
          <li
            key={t.id}
            style={{
              listStyle: "none",
              background: "#0b1c26",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
            }}
          >
            {editingId === t.id ? (
              <>
                <input
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => updateTask(t.id)}
                >
                  Save
                </button>
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{t.title}</span>

                <div>
                  <button
                    type="button"
                    style={{ width: "auto", marginRight: "8px" }}
                    onClick={() => startEdit(t)}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    style={{
                      width: "auto",
                      backgroundColor: "#e63946",
                    }}
                    onClick={() => deleteTask(t.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}



