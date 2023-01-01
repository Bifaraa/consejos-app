document.addEventListener("DOMContentLoaded", async () => {
  const traerConsejos = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    return data;
  };

  const crearDiv = (data) => {
    const cuerpo = document.createElement("div");
    cuerpo.classList.add(
      "order-1",
      "m-5",
      "flex",
      "flex-col",
      "justify-center",
      "items-center",
      "p-10",
      "cuerpo"
    );
    const card = document.querySelector(".card");
    const mensajeHtml = `
        <span class="id__mensaje">ADVICE #${data.slip.id} </span>
        <p> "${data.slip.advice}"</p>
        `;
    cuerpo.innerHTML = mensajeHtml;
    card.appendChild(cuerpo);
    styles();
  };

  const styles = () => {
    const spanId = document.querySelector(".id__mensaje");
    spanId.style.color = "#51FFA8";
    spanId.style.fontSize = "14px";
    const cita = document.querySelector(".card  p");
    cita.style.color = "#CDE2E8";
    cita.style.textAlign = "center";
    cita.style.margin = "1em";
  };

  const data = await traerConsejos();
  crearDiv(data);
  
  const boton = document.querySelector('.boton');
  boton.addEventListener('click', async () => {
    const cuerpoBorrar = document.querySelector('.cuerpo');
    cuerpoBorrar.parentNode.removeChild(cuerpoBorrar);
    const data = await traerConsejos();
    crearDiv(data);
  });
});
