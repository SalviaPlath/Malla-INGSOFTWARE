// Malla Interactiva - Ingeniería de Software
// Archivo base para agregar funcionalidades interactivas

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Malla Interactiva cargada correctamente.");

  // Ejemplo: Mostrar alerta al hacer clic en una materia
  const materias = document.querySelectorAll(".semestre li");

  materias.forEach((materia) => {
    materia.style.cursor = "pointer";
    materia.addEventListener("click", () => {
      alert(`📘 ${materia.textContent}`);
    });
  });
});
