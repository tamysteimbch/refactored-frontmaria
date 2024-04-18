document.addEventListener("DOMContentLoaded", function() {
  const scrollbarThumb = document.querySelector(".scrollbar-thumb");
  const scrollbar = document.querySelector(".scrollbar");
  const carrosselContainer = document.querySelector(".carrossel-container"); 

  let isDragging = false;
  let startX;
  let scrollLeft;

  // Adiciona um evento de rolagem para atualizar a posição da alça
  carrosselContainer.addEventListener("scroll", updateScrollbarThumbPosition);

  scrollbarThumb.addEventListener("mousedown", function(e) {
    isDragging = true;
    startX = e.clientX - scrollbarThumb.getBoundingClientRect().left;
    scrollLeft = carrosselContainer.scrollLeft;

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  function onMouseMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX - startX - scrollbar.getBoundingClientRect().left;
    const dragDistance = x;
    const scrollDistance = dragDistance * (carrosselContainer.scrollWidth / scrollbar.clientWidth);
    carrosselContainer.scrollLeft = scrollLeft + scrollDistance;
    updateScrollbarThumbPosition();

    // Adiciona console.log para verificar valores das variáveis
    console.log("x:", x);
    console.log("dragDistance:", dragDistance);
    console.log("scrollDistance:", scrollDistance);
    console.log("carrosselContainer.scrollLeft:", carrosselContainer.scrollLeft);
  }

  function onMouseUp() {
    isDragging = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  window.addEventListener('resize', updateScrollbarThumbPosition);

  function updateScrollbarThumbPosition() {
    const scrollPercentage = carrosselContainer.scrollLeft / (carrosselContainer.scrollWidth - carrosselContainer.clientWidth);
    const thumbPosition = scrollPercentage * (scrollbar.clientWidth - scrollbarThumb.clientWidth);
    scrollbarThumb.style.left = thumbPosition + 'px';

    // Adiciona console.log para verificar valores das variáveis
    console.log("scrollPercentage:", scrollPercentage);
    console.log("thumbPosition:", thumbPosition);
  }
});
