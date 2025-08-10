import type { Task } from '../types/task';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onToggle: (task: Task) => void;
  onDelete: (id?: number) => void;
    onEdit: (id: number, data: { title: string; description: string }) => void;
}

function TaskList({ tasks, onToggle, onDelete, onEdit }: TaskListProps) {
  return (
    <ul className='task-list'>
      {tasks.map(task => (
        <TaskItem 
        key={task.id} 
        task={task} 
        onToggle={onToggle} 
        onDelete={onDelete}
        onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default TaskList;