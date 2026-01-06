import { useState, useEffect } from "react";
import "./Kanban.css";

function Kanban() {
  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("normal");
  const [loaded, setLoaded] = useState(false); // 🔒 bandera clave

  /* ===============================
     CARGAR DESDE LOCALSTORAGE
  ================================ */
  useEffect(() => {
    const savedTodo = JSON.parse(localStorage.getItem("todo"));
    const savedInProgress = JSON.parse(localStorage.getItem("inProgress"));
    const savedDone = JSON.parse(localStorage.getItem("done"));

    if (savedTodo) setTodo(savedTodo);
    if (savedInProgress) setInProgress(savedInProgress);
    if (savedDone) setDone(savedDone);

    setLoaded(true); // ✅ ya cargó, ahora sí se puede guardar
  }, []);

  /* ===============================
     GUARDAR EN LOCALSTORAGE
     (solo cuando ya cargó)
  ================================ */
  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem("todo", JSON.stringify(todo));
    localStorage.setItem("inProgress", JSON.stringify(inProgress));
    localStorage.setItem("done", JSON.stringify(done));
  }, [todo, inProgress, done, loaded]);

  /* ===============================
     FUNCIONES
  ================================ */
  const addTask = () => {
    if (!newTask.trim()) return;

    setTodo([
      ...todo,
      {
        id: Date.now(),
        text: newTask,
        priority,
      },
    ]);

    setNewTask("");
  };

  const moveTask = (task, from, toSetter, fromSetter) => {
    fromSetter(from.filter((t) => t.id !== task.id));
    toSetter((prev) => [...prev, task]);
  };

  const deleteTask = (task, list, setter) => {
    setter(list.filter((t) => t.id !== task.id));
  };

  /* ===============================
     PROGRESO
  ================================ */
  const total = todo.length + inProgress.length + done.length;
  const progress = total === 0 ? 0 : Math.round((done.length / total) * 100);

  const progressColor =
    progress < 30 ? "#ef4444" : progress < 70 ? "#facc15" : "#22c55e";

  /* ===============================
     JSX
  ================================ */
  return (
    <div className="kanban-page">
      <h1 className="kanban-title">Tablero Kanban</h1>
      <p className="kanban-subtitle">
        Organiza tus tareas usando una metodología ágil y visual.
      </p>

      {/* PROGRESO */}
      <div className="progress-container">
        <p>Progreso del proyecto: {progress}%</p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%`, background: progressColor }}
          />
        </div>
      </div>

      {/* NUEVA TAREA */}
      <div className="task-form">
        <input
          type="text"
          placeholder="Nueva tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <select onChange={(e) => setPriority(e.target.value)}>
          <option value="normal">Normal</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>

        <button onClick={addTask}>Agregar</button>
      </div>

      {/* TABLERO */}
      <div className="board">
        {/* POR HACER */}
        <div className="column">
          <div className="column-header">
            <span>Por hacer</span>
            <span className="badge">{todo.length}</span>
          </div>

          {todo.map((task) => (
            <div key={task.id} className={`task-card ${task.priority}`}>
              {task.text}
              <div className="actions">
                <button
                  onClick={() =>
                    moveTask(task, todo, setInProgress, setTodo)
                  }
                >
                  ➜
                </button>
                <button onClick={() => deleteTask(task, todo, setTodo)}>
                  🗑
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* EN PROCESO */}
        <div className="column">
          <div className="column-header">
            <span>En proceso</span>
            <span className="badge">{inProgress.length}</span>
          </div>

          {inProgress.map((task) => (
            <div key={task.id} className={`task-card ${task.priority}`}>
              {task.text}
              <div className="actions">
                <button
                  onClick={() =>
                    moveTask(task, inProgress, setDone, setInProgress)
                  }
                >
                  ✔
                </button>
                <button
                  onClick={() =>
                    moveTask(task, inProgress, setTodo, setInProgress)
                  }
                >
                  ↩
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* TERMINADO */}
        <div className="column">
          <div className="column-header">
            <span>Terminado</span>
            <span className="badge">{done.length}</span>
          </div>

          {done.map((task) => (
            <div key={task.id} className="task-card done">
              ✔ {task.text}
              <div className="actions">
                <button
                  onClick={() =>
                    moveTask(task, done, setInProgress, setDone)
                  }
                >
                  ↩
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Kanban;