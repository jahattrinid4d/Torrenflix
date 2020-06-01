const fila = document.querySelector(".carousel-container");
const movies = document.querySelectorAll(".movie");

const angleLeft = document.getElementById("angle-left");
const angleRight = document.getElementById("angle-right");

// ---- EVENT LISTENER FOR AHE ANGLE LEFT ----
angleRight.addEventListener("click", () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector(".indicadores .activo");

	if (indicadorActivo.nextElementSibling) {
		indicadorActivo.nextElementSibling.classList.add("activo");
		indicadorActivo.classList.remove("activo");
	}
});

// ---- EVEN LISTENER FOR AHE ANGLE RIGHT ----
angleLeft.addEventListener("click", () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector(".indicadores .activo");

	if (indicadorActivo.previousSibling) {
		indicadorActivo.previousSibling.classList.add("activo");
		indicadorActivo.classList.remove("activo");
	}
});

// -- PAGINACION --

const pageNumber = Math.ceil(movies.length / 5);

for (let i = 0; i < pageNumber; i++) {
	const indicador = document.createElement("button");

	if (i === 0) {
		indicador.classList.add("activo");
	}

	document.querySelector(".indicadores").appendChild(indicador);

	indicador.addEventListener("click", (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector(".indicadores .activo").classList.remove("activo");
		e.target.classList.add("activo");
	});
}

// -- HOVER --

movies.forEach((movie) => {
	movie.addEventListener("mouseenter", (e) => {
		const element = e.currentTarget;
		setTimeout(() => {
			movies.forEach((movie) => movie.classList.remove("hover"));
			element.classList.add("hover");
		}, 300);
	});
});

fila.addEventListener("mouseleave", () => {
	movies.forEach((movie) => movie.classList.remove("hover"));
});
