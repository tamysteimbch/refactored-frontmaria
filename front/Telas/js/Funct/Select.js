document.addEventListener('DOMContentLoaded', function() {
    const htmlContent = `
        <div class="select">
            <div class="facil">
                <div  id="facil"><p>Fácil</p></div>
                <div class="enun">
                    <h1>Enunciado</h1>
                    <p>Em qual ano aconteceu...</p>
                    <div class="pontos">
                        <p class="valor">Valor</p>
                        <p class="nota">1,0</p>
                        <div class="edit-btn">
                            <button id="edit-btn"><a href="#">Editar</a></button>
                        </div>
                    </div>
                </div>
              
                <div class="enun">
                    <h1>Enunciado</h1>
                    <p>Em qual ano aconteceu...</p>
                    <div class="pontos">
                        <p class="valor">Valor</p>
                        <p class="nota">1,0</p>
                        <div class="edit-btn">
                            <button id="edit-btn"><a href="#">Editar</a></button>
                        </div>
                    </div>
                </div>        
            </div>
            <div  class="medio">
                <div id="medio"><p>Médio</p></div>
                <div class="enun">
                    <h1>Enunciado</h1>
                    <p>Quais eventos que prec...</p>
                    <div class="pontos">
                        <p class="valor">Valor</p>
                        <p class="nota">2,5</p>
                        <div class="edit-btn">
                            <button id="edit-btn"><a href="#">Editar</a></button>
                        </div>
                    </div>
                </div>
                
                <div class="enun">
                    <h1>Enunciado</h1>
                    <p>Quais eventos que prec...</p>
                    <div class="pontos">
                        <p class="valor">Valor</p>
                        <p class="nota">2,5</p>
                        <div class="edit-btn">
                            <button id="edit-btn"><a href="#">Editar</a></button>
                        </div>
                    </div>
                </div>   
            </div>
            <div  class="dificil">
                <div id="dificil"><p>Difícil</p></div>
                <div class="enun">
                    <h1>Enunciado</h1>
                    <p>Disserte sobre o texto...</p>
                    <div class="pontos">
                        <p class="valor">Valor</p>
                        <p class="nota">5,0</p>
                        <div class="edit-btn">
                            <button id="edit-btn"><a href="#">Editar</a></button>
                        </div>
                    </div>
                </div>
                
                <div class="enun">
                    <h1>Enunciado</h1>
                    <p>Disserte sobre o texto...</p>
                    <div class="pontos">
                        <p class="valor">Valor</p>
                        <p class="nota">5,0</p>
                        <div class="edit-btn">
                            <button id="edit-btn"><a href="#">Editar</a></button>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    `;

    const footer = document.querySelector('.footer');
    if (footer) {
        const questoesContainer = document.createElement('div');
        questoesContainer.classList.add('questoes-container');
        questoesContainer.innerHTML = htmlContent;
        footer.appendChild(questoesContainer);
    } else {
        console.error('Elemento .footer não encontrado!');
    }
});
