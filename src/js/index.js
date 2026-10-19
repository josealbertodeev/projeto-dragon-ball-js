const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

function selecionarPersonagem(id) {
	personagens.forEach((personagem) => {
		personagem.hidden = personagem.id !== id;
	});

	botoes.forEach((botao) => {
		const ativo = botao.dataset.personagem === id;
		botao.classList.toggle("selecionado", ativo);
		botao.setAttribute("aria-pressed", String(ativo));
	});
}

botoes.forEach((botao) => {
	botao.addEventListener("click", () => {
		selecionarPersonagem(botao.dataset.personagem);
	});
});
