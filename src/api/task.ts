import axios from 'axios';
import type { Task } from '../types/task';

const API_URL = import.meta.env.API_URL || 'http://localhost:3000/tasks';

export const getTasks = () => axios.get<Task[]>(API_URL);
export const createTask = (task: Task) => axios.post<Task>(API_URL, task);
export const updateTask = (id: number, task: Task) => axios.put<Task>(`${API_URL}/${id}`, task);
export const deleteTask = (id: number) => axios.delete(`${API_URL}/${id}`); 
