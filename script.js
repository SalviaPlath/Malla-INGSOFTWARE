function desbloquear() {
  const items = document.querySelectorAll(".item");
  items.forEach(item => {
    item.classList.remove("bloqueado");
  });
  alert("¡Malla desbloqueada!");
}
