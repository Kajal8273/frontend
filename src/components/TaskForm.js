import React, { useState, useEffect } from 'react';
import { createTask, updateTask, getTaskById } from '../api';

const TaskForm = ({ taskId, refreshTasks, deselectTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (taskId) {
      const fetchTask = async () => {
        const result = await getTaskById(taskId);
        setTitle(result.data.title);
        setDescription(result.data.description);
        setDueDate(result.data.dueDate.split('T')[0]);
      };
      fetchTask();
    }
  }, [taskId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { title, description, dueDate };
    if (taskId) {
      await updateTask(taskId, task);
    } else {
      await createTask(task);
    }
    refreshTasks();
    setTitle('');
    setDescription('');
    setDueDate('');
    deselectTask();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <button type="submit">{taskId ? 'Update' : 'Add'} Task</button>
    </form>
  );
};

export default TaskForm;