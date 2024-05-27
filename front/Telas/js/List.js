document.addEventListener("DOMContentLoaded", function() {
    const provas = [
        { data: "01 de maio de 2024", turma: "6ºA", conte: "Revolução industrial", status: "Corrigido", dificuldade: "dif-m" },
        { data: "02 de maio de 2024", turma: "6ºB", conte: "Industrialismo", status: "Corrigido", dificuldade: "dif-d" },
        { data: "03 de maio de 2024", turma: "7ºA", conte: "Colonialismo", status: "Pendente", dificuldade: "dif-f" },
        { data: "04 de maio de 2024", turma: "7ºB", conte: "Era Vargas", status: "Pendente", dificuldade: "dif-m" },
        { data: "05 de maio de 2024", turma: "8ºA", conte: "Guerra Fria", status: "Corrigido", dificuldade: "dif-d" },
        { data: "06 de maio de 2024", turma: "8ºB", conte: "Ditadura Militar", status: "Corrigido", dificuldade: "dif-f" },
        { data: "07 de maio de 2024", turma: "9ºA", conte: "Redemocratização", status: "Corrigido", dificuldade: "dif-m" },
        { data: "08 de maio de 2024", turma: "9ºB", conte: "Era Lula", status: "Pendente", dificuldade: "dif-d" },
        { data: "09 de maio de 2024", turma: "10ºA", conte: "Globalização", status: "Pendente", dificuldade: "dif-f" },
        { data: "10 de maio de 2024", turma: "10ºB", conte: "Crise de 2008", status: "Corrigido", dificuldade: "dif-m" }
    ];

    const listContainer = document.getElementById('list');

    provas.forEach(prova => {
        const provaDiv = document.createElement('div');
        provaDiv.className = 'prova';

        const difMDiv = document.createElement('div');
        difMDiv.className = prova.dificuldade;

        const dataDiv = document.createElement('div');
        dataDiv.className = 'data';
        dataDiv.innerHTML = `<p>Data da prova</p><p>${prova.data}</p>`;

        const turmaDiv = document.createElement('div');
        turmaDiv.className = 'turma';
        turmaDiv.innerHTML = `<p>Turma</p><p>${prova.turma}</p>`;

        const conteDiv = document.createElement('div');
        conteDiv.className = 'conte';
        conteDiv.innerHTML = `<p>Conteúdo</p><p>${prova.conte}</p>`;

        const statusDiv = document.createElement('div');
        statusDiv.className = 'status';
        statusDiv.innerHTML = `<p>Status</p><p>${prova.status}</p>`;

        provaDiv.appendChild(difMDiv);
        provaDiv.appendChild(dataDiv);
        provaDiv.appendChild(turmaDiv);
        provaDiv.appendChild(conteDiv);
        provaDiv.appendChild(statusDiv);

        listContainer.appendChild(provaDiv);
    });
});
