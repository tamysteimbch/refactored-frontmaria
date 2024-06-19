document.addEventListener('DOMContentLoaded', () => {
    function createModal() {
        const modalHtml = `
        <dialog id="modalEditQ">
        <div class="modal-container-e">
        <div class="modal-header-e">
            <img src="/front/Telas/components/imgModalProvas.svg" alt="Luminária" style="width : 6rem">
            <div id="close-btn" class="close-btn">
                <button><a href="#">Fechar</a></button>
            </div>
            <div class="tittle-e">
                <h1>Editar questão</h1>
                <p>Aqui você pode editar o valor da sua questão ou removê-la da sua prova</p>
            </div>
        </div>
        
        <div class="modal-hero-e">
            <div class="cont-e">
                <p>Valor</p>
                <input type="text" name="cont" id="cont-inp" value="Ex: 1,5">
            </div>
    
        <div class="modal-footer-e">
            <div class="remove-btn">
                <button><a href="#">Remover</a></button>
            </div>
    
            <div class="atz-btn">
                <button><a href="#">Atualizar</a></button>
            </div>
        </div>
    </div>
    </dialog>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }
    
    createModal();

    const button = document.querySelector(".edit-btn");
    const modal = document.querySelector("#modalEditQ");
    const btnClose = document.querySelector("#close-btn");

    button.addEventListener('click', function(event) {
        event.preventDefault();
        modal.showModal();
    });

    btnClose.addEventListener('click', function(event) {
        event.preventDefault();
        modal.close();
    });
});
