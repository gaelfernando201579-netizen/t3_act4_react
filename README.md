# Actividad 4: Proyecto en React (t3_act4_react)
Por: Gael Fernando Ortíz Pérez

Este es un proyecto escolar creado con React y Vite. Se trata de una aplicación web simple que funciona como un Gestor de Tareas mediante componentes funcionales, props y estado.

## Cuestionario
**a) ¿Qué diferencia hay entre props y state en React?**
Las `props` (propiedades) son inmutables (de solo lectura) y sirven para pasar información de un componente padre a un componente hijo. El `state` (estado) es una memoria interna, privada y mutable del componente; si el estado cambia, el componente se vuelve a renderizar automáticamente para reflejar los cambios.

**b) ¿Por qué es importante usar una key al renderizar una lista de elementos?**
La `key` es un identificador único que ayuda a React a identificar qué elementos han cambiado, se han agregado o se han eliminado de una lista. Esto mejora enormemente el rendimiento, ya que React no necesita volver a renderizar (pintar) toda la lista en el Virtual DOM, sino únicamente el nodo exacto que sufrió la modificación.

**c) Explica con tus palabras qué hace la función useState y da un ejemplo de dónde la usaste.**
El Hook `useState` es una función de React que nos permite "recordar" valores a lo largo del ciclo de vida del componente e interactuar con la interfaz. Nos devuelve dos cosas: el valor actual del estado y una función para actualizarlo.
*Ejemplo en la aplicación:* Lo utilicé en `App.jsx` para almacenar el arreglo de tareas con `const [tasks, setTasks] = useState([...])`. Cuando hago clic en un botón, uso `setTasks` para actualizar si la tarea está completada o no, y React repinta la pantalla de inmediato.

**d) Enlace del Repositorio de GitHub:**
[https://github.com/gaelfernando201579-netizen/t3_act4_react](https://github.com/gaelfernando201579-netizen/t3_act4_react)

**e) Enlace del Proyecto Desplegado en GitHub Pages:**
[https://gaelfernando201579-netizen.github.io/t3_act4_react/](https://gaelfernando201579-netizen.github.io/t3_act4_react/)
