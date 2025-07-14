document.addEventListener("DOMContentLoaded", () => {
  const materias = document.querySelectorAll(".materia");
  const desbloqueadas = new Set();

  function actualizarEstado() {
    materias.forEach((el) => {
      const prereq = el.dataset.prereq.split(",").filter(p => p);
      const cumplido = prereq.every(p => desbloqueadas.has(p));
      if (cumplido || prereq.length === 0) {
        el.classList.remove("bloqueada");
      } else {
        el.classList.add("bloqueada");
      }
    });
  }

  materias.forEach((el) => {
    el.classList.add("bloqueada");

    el.addEventListener("click", () => {
      if (el.classList.contains("bloqueada")) return;

      const id = el.dataset.id;
      if (desbloqueadas.has(id)) {
        desbloqueadas.delete(id);
        el.classList.remove("seleccionada");
      } else {
        desbloqueadas.add(id);
        el.classList.add("seleccionada");
      }

      actualizarEstado();
    });
  });

  actualizarEstado();
});
