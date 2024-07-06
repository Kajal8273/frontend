import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskDetail from './components/TaskDetail';

const App = () => {
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const refreshTasks = () => setRefresh(!refresh);
  const selectTask = (id) => setSelectedTaskId(id);
  const deselectTask = () => setSelectedTaskId(null);

  return (
    <div>
      <h1>Task Management</h1>
      <TaskForm
        taskId={selectedTaskId}
        refreshTasks={refreshTasks}
        deselectTask={deselectTask}
      />
      <TaskList selectTask={selectTask} />
      {selectedTaskId && <TaskDetail taskId={selectedTaskId} />}
    </div>
  );
};

export default App;
