document.addEventListener('DOMContentLoaded', () => {
    function createModal() {
        const modalHtml = `
        <dialog id="modalProva" class="modalProva">
            <div class="modal-container-p">
                <div class="modal-header-p">
                    <img src="/front/Telas/components/imgModalProvas.svg" alt="Luminária" style="width : 8rem">
                    <div class="close-btn-p">
                        <button id="closeModalBtn"><a>Fechar</a></button>
                    </div>
                    <div class="mtittle">
                        <h1>Adicionar nova prova</h1>
                        <p>Aqui você pode gerar a sua prova, o gabarito (opcional) e salvá-la <br> em sua conta!</p>
                    </div>
                </div>
                
                <div class="modal-hero-p">
                    <div class="date-p">
                        <p>Data da prova</p>
                        <input type="text" name="date" id="date-inp" value="01 de maio de 2024">
                    </div>
                    <div class="class-p">
                        <p>Turma</p>
                        <select id="class-op" name="opcao">
                            <option value="valor1">6ºA</option>
                            <option value="valor2">6ºB</option>
                            <option value="valor3">7ºA</option>
                        </select>
                    </div>
                    <div class="mat-p">
                        <p>Matéria</p>
                        <select id="mat-op" name="opcao">
                            <option value="valor1">História</option>
                            <option value="valor2">Matemática</option>
                            <option value="valor3">Geografia</option>
                        </select>
                    </div>
                    <div class="cont-p">
                        <p>Conteúdo</p>
                        <input type="text" name="cont" id="cont-inp" value="Ex: Egito">
                    </div>
                    <div class="cabe-p">
                        <p>Cabeçalho</p>
                        <select id="cabe-op" name="opcao">
                            <option value="valor1">Escola Tarcila do Ama...</option>
                            <option value="valor2"></option>
                            <option value="valor3"></option>
                        </select>
                    </div>
            
                    <div class="dif-p">
                        <p>Dificuldade</p>
                        <button id="easy-btn"><a href="#">Fácil</a></button>
                        <button id="med-btn"><a href="#">Médio</a></button>
                        <button id="hard-btn"><a href="#">Difícil</a></button>
                    </div>
            
                    <div class="gaba-inp-p">
                        <input type="checkbox" id="gaba-inp" name="gaba" value="Gerar gabarito">
                        <label for="gaba">Gerar gabarito</label>
                    </div>
                    
                    <div class="comp-inp-p">
                        <input type="checkbox" id="comp-inp" name="comp" value="Compartilhar com outros professores">
                        <label for="comp">Compartilhar com outros professores</label>
                    </div>
                </div>
                
                <div class="modal-footer">
                    <div class="clean-btn-p">
                        <button><a href="#">Limpar</a></button>
                    </div>
            
                    <div class="make-btn-p">
                        <button><a href="#">Criar prova</a></button>
                    </div>
                </div>
            </div>
        </dialog>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }
    
    createModal();

    const button = document.querySelector(".prova");
    const modal = document.querySelector("#modalProva");
    const btnClose = document.querySelector("#closeModalBtn");

    button.addEventListener('click', function(event) {
        event.preventDefault();
        modal.showModal();
    });

    btnClose.addEventListener('click', function(event) {
        event.preventDefault();
        modal.close();
    });
});
