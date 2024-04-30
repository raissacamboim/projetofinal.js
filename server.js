document.addEventListener("DOMContentLoaded", function (){
    const projetos = [
        {
            titulo: "Computação Gráfica",
            descricao: "Sou uma designer gráfico apaixonado por criar projetos visualmente impactantes. Possuo habilidades avançadas em Photoshop e Illustrator, o que me permite criar desde edições complexas de imagens até ilustrações vetoriais criativas. Estou sempre em busca de novos desafios e oportunidades para colocar minha criatividade em prática!",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj60pyKAJKFrC_3ScwzitAv1uOR19tQsVQJOZPMPDf1LN92MKiFJ6tAbHiTWw9NNWxi2Y&usqp=CAU",
            observacao: "Este trabalho foi desenvolvido como parte de uma atividade na qual tínhamos o desafio de substituir o rosto de uma pessoa por outro e criar uma marca fictícia para um produto. Decidi criar a marca de maquiagem de uma influenciadora que admiro muito. A partir dessa proposta, utilizei minhas habilidades em Photoshop e Illustrator para criar a imagem apresentada.",
        },
        {
            titulo: "Analise de Sistemas",
            descricao: "No curso de Análise de Sistemas, adquiri habilidades essenciais para entender, projetar e desenvolver sistemas de informação eficientes. Aprendi a identificar requisitos de software, criar diagramas e modelos de dados, e projetar interfaces de usuário intuitivas. Compreendi a importância da comunicação eficaz com os clientes.",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF8PA6oE6VW_chL6H1CAFwWFMRc2cLNLkhSJp4F20GWaVuJbWDi6hkufxtQWPXhf0DKw&usqp=CAU",
        },
        {
            titulo: "Psicologia Organizacional ",
            descricao: "Na disciplina de Psicologia Organizacional na TI, aprendi sobre comportamento humano, relações interpessoais e dinâmica de grupos no ambiente de trabalho. Compreendi a importância da motivação, liderança e trabalho em equipe, além de temas como gestão de mudanças e resolução de conflitos.",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2QCzR0jpgBZRPxORsPH9kCwLFZqFGZ60lQQ48apa-kg&s",
        },
    ];
  
    const listaProjetos = document.getElementById("lista-projetos");
    const conteudoExibido = document.getElementById("conteudo-exibido");
    const tituloConteudo = document.getElementById("titulo-conteudo");
    const descricaoConteudo = document.getElementById("descricao-conteudo");
    const imagemConteudo = document.getElementById("imagem-conteudo");
    const observacaoConteudo = document.getElementById("observacao-conteudo");
  
    projetos.forEach((projeto) => {
        const ul = document.createElement("ul");
        const button = document.createElement("button");
        button.textContent = projeto.titulo;
        button.addEventListener("click", function () {
            tituloConteudo.textContent = projeto.titulo;
            descricaoConteudo.textContent = projeto.descricao;
            imagemConteudo.setAttribute("src", projeto.imagem);
            observacaoConteudo.textContent = projeto.descricao;
  
            conteudoExibido.style.display = "block"; 
        });
        ul.appendChild(button);
        listaProjetos.appendChild(ul);
    });
    window.onclick = function (event) {
        if (event.target == conteudoExibido) {
            conteudoExibido.style.display = "none";
        }
    };
  });