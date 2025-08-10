import { useEffect, useState } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from './api/task';
import type { Task } from './types/task';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterSearch from './components/FilterSearch';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<'all' | 'done' | 'undone'>('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    getTasks().then(res => setTasks(res.data)).finally(() => setLoading(false));
  }, []);

  const handleAdd = async (task: Omit<Task, 'id'>) => {
    await createTask(task);
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleToggle = async (task: Task) => {
    if (!task.id) return;
    await updateTask(task.id, { ...task, status: !task.status });
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleDelete = async (id?: number) => {
    if (!id) return;
    await deleteTask(id);
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleEdit= async(id:number,data:{title:string; description:string}) => {
    await updateTask(id, data);
    const res=await getTasks();
    setTasks(res.data);
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done' && !task.status) return false;
    if (filter === 'undone' && task.status) return false;
    if (
      search.trim() &&
      !(task.title?.toLowerCase().includes(search.toLowerCase()) ||
        task.description?.toLowerCase().includes(search.toLowerCase()))
    ) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <h1>ToDoList</h1>
      <FilterSearch filter={filter} setFilter={setFilter} search={search} setSearch={setSearch} />
      <TaskForm onAdd={handleAdd} />
      {loading ? 
      <p>Loading...</p> : 
      <TaskList 
      tasks={filteredTasks} 
      onToggle={handleToggle} 
      onDelete={handleDelete}
      onEdit={handleEdit}
      />}
    </div>
  );
}

export default App;