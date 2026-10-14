import { useState } from 'react';
import Header from './components/Header';
import TaskCard from './components/TaskCard';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Terminar reporte de Base de Datos', isCompleted: false },
    { id: 2, title: 'Diseñar el flyer de Botcitos Hots FC', isCompleted: true },
    { id: 3, title: 'Práctica de Redes en Ubuntu Server', isCompleted: false },
    { id: 4, title: 'Terminar el sprint de Gestión', isCompleted: false },
    { id: 5, title: 'Diseñar el logo de Sistemas', isCompleted: true },
    { id: 6, title: 'Práctica de PLF', isCompleted: false }
  ]);

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif', padding: '20px' }}>
      <Header />
      
      <div>
        <h2>Tus pendientes:</h2>
        
        {tasks.map((task) => (
          <TaskCard 
            key={task.id} 
            title={task.title} 
            isCompleted={task.isCompleted} 
            onToggle={() => toggleTask(task.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;