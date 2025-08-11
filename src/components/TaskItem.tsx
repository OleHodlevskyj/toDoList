import { useState } from "react";
import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  onToggle: (task: Task) => void;
  onDelete: (id?: number) => void;
  onEdit: (id: number, data: { title: string; description: string }) => void;
}

function TaskItem({ task, onToggle, onDelete, onEdit }: TaskItemProps) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title || "");
  const [description, setDescription] = useState(task.description || "");

  const handleSave = () => {
    if (task.id) {
      onEdit(task.id, { title, description });
      setEditing(false);
    }
  };

  if (editing) {
    return (
      <li>
        <input className="edit-input" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input
          className="edit-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="edit-btn" onClick={handleSave}>Зберегти</button>
        <button className="cancel-btn" onClick={() => setEditing(false)}>Скасувати</button>
      </li>
    );
  }

  return (
    <li className={task.status ? "done" : ""}>
      <span onClick={() => onToggle(task)} style={{ cursor: "pointer" }}>
        <b>{task.title}</b> {task.description && `- ${task.description}`}
        {task.status ? " ✅" : ""}
      </span>
      <div className="button-container">
        <button className="edit-btn" onClick={() => setEditing(true)}>Редагувати</button>
        <button className="delete-btn" onClick={() => onDelete(task.id)}>Видалити</button>
      </div>
    </li>
  );
}

export default TaskItem;