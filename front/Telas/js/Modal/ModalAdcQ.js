document.addEventListener('DOMContentLoaded', () => {
    function createModal() {
        const modalHtml = `
        <dialog id="modalQ">
        <div class="modal-container-q">
        <div class="modal-header-q">
            <img src="/front/Telas/components/imgModalProvas.svg" alt="Luminária" style="width : 6rem">
            <div class="close-btn">
                <button><a href="#">Fechar</a></button>
            </div>
            <div class="tittle-q">
                <h1>Adicionar nova questão</h1>
                <p>Aqui você pode adicionar uma nova questão, compartilha-la com<br>
                    outros professores (opcional) e definir qual o seu grau de<br> dificuldade!</p>
            </div>
        </div>
        
        <div class="modal-hero-q">
            <div class="enun-q">
                <p>Enunciado</p>
                <textarea name="enun-inp" id="enun">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever...
                </textarea>
            </div>

            <div class="ques-inp-q">
                <input type="checkbox" id="ques-inp" name="comp">
                <label for="comp">Questão múltipla escolha</label>
            </div>

            <div class="class-q">
                <p>Ano</p>
                <select id="class-op" name="opcao">
                    <option value="valor1">6ºA</option>
                    <option value="valor2">6ºB</option>
                    <option value="valor3">7ºA</option>
                </select>
            </div>
            <div class="mat-q">
                <p>Matéria</p>
                <select id="mat-op" name="opcao">
                    <option value="valor1">História</option>
                    <option value="valor2">Matemática</option>
                    <option value="valor3">Geografia</option>
                </select>
            </div>
            <div class="cont-q">
                <p>Conteúdo</p>
                <input type="text" name="cont" id="cont-inp" value="Ex: Egito">
            </div>
    
            <div class="dif-q">
                <p>Nível de dificuldade</p>
                <button id="easyq-btn"><a href="#">Fácil</a></button>
                <button id="medq-btn"><a href="#">Médio</a></button>
                <button id="hardq-btn"><a href="#">Difícil</a></button>
            </div>
            
            <div class="img-inp">
                <p>Imagem</p>
                <input type="file" id="img-inp" name="img" accept="image/*" hidden>
                <label for="img-inp" class="custom-file-label">Selecionar imagem 
                    <img src="/front/Telas/components/imgSlcImg.svg" alt="imagem" style="width : 1.2rem">
                </label>
            </div>

            <div class="comp-inp-q">
                <input type="checkbox" id="comp-inp" name="comp">
                <label for="comp">Compartilhar com outros professores</label>
            </div>
        </div>
        
        <div class="modal-footer-q">
            <div class="cleanq-btn">
                <button><a href="#">Limpar</a></button>
            </div>
    
            <div class="makeq-btn" id="makeq-btn">
                <button><a href="#">Criar questão</a></button>
            </div>
        </div>
    </div>
    </dialog>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }
    
    createModal();

    const button = document.querySelector(".button-adc");
    const modal = document.querySelector("dialog");
    const btnClose = document.querySelector(".close-btn button");

    button.addEventListener('click', function(event) {
        event.preventDefault();
        modal.showModal();
    });

    btnClose.addEventListener('click', function(event) {
        event.preventDefault();
        modal.close();
    });
});
