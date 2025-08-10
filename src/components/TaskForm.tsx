import React, { useState } from 'react';
import type { Task } from '../types/task';

interface TaskFormProps {
  onAdd: (task: Omit<Task, 'id'>) => void;
}

function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, description, status: false });
    setTitle('');
    setDescription('');
  };

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <input
      className='add-input'
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        className='add-input'
        type="text"
        placeholder="Опис"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button className='add-btn' type="submit">Додати</button>
    </form>
  );
}

export default TaskForm;