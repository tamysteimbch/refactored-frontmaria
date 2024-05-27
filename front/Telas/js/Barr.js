document.addEventListener("DOMContentLoaded", function() {
  const scrollbarThumb = document.querySelector(".scrollbar-thumb");
  const scrollbar = document.querySelector(".scrollbar");
  const carrosselContainer = document.querySelector(".carrossel-container");

  let isDragging = false;
  let startX;
  let scrollLeft;

  scrollbarThumb.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - scrollbarThumb.offsetLeft;
    scrollLeft = carrosselContainer.scrollLeft;
    document.body.style.userSelect = 'none'; // Prevenir seleção de texto durante o arrasto
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.userSelect = ''; // Permitir seleção de texto novamente
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollbar.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste a sensibilidade do arrasto
    scrollbarThumb.style.left = `${Math.min(Math.max(0, x - startX), scrollbar.offsetWidth - scrollbarThumb.offsetWidth)}px`;
    carrosselContainer.scrollLeft = scrollLeft + walk;
  });

  // Sincronizar a posição do thumb com a rolagem do container
  carrosselContainer.addEventListener("scroll", () => {
    const scrollRatio = carrosselContainer.scrollLeft / (carrosselContainer.scrollWidth - carrosselContainer.clientWidth);
    scrollbarThumb.style.left = `${scrollRatio * (scrollbar.offsetWidth - scrollbarThumb.offsetWidth)}px`;
  });

  // Ajustar o tamanho do thumb com base no tamanho do container e do conteúdo
  const adjustThumbSize = () => {
    const ratio = carrosselContainer.clientWidth / carrosselContainer.scrollWidth;
    scrollbarThumb.style.width = `${ratio * scrollbar.offsetWidth}px`;
  };

  window.addEventListener("resize", adjustThumbSize);
  adjustThumbSize();
});
