import React from 'react';

function TaskCard({ title, isCompleted, onToggle }) {
    return (
        <div style={{ 
        border: '1px solid #ccc', 
        padding: '15px', 
        margin: '10px 0',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: isCompleted ? '#e8f5e9' : '#fff'
        }}>
        <h3 style={{ textDecoration: isCompleted ? 'line-through' : 'none', margin: 0 }}>
        {title}
        </h3>
        <button 
            onClick={onToggle}
            style={{ padding: '8px', cursor: 'pointer' }}
        >
        {isCompleted ? 'Desmarcar ❎' : 'Completar ✅'}
        </button>
        </div>
    );
}

export default TaskCard;