function modal() {

    let modal = document.getElementById("modal");
    modal.style.display = "block"
    let rolagem = document.getElementById("rolagem");
    rolagem.style.overflow = "hidden";
    window.scrollTo(0, 0);

}


function calcular() {

    let homens = document.getElementById("homens").value
    if (homens == "") homens = parseInt(0); else homens = parseInt(homens);

    console.log(homens)

    let mulheres = document.getElementById("mulheres").value
    if (mulheres == "") mulheres = parseInt(0); else mulheres = parseInt(mulheres);

    console.log(mulheres)

    let criancas = document.getElementById("criancas").value
    if (criancas == "") criancas = parseInt(0); else criancas = parseInt(criancas);

    console.log(criancas)


    let duracao = document.getElementById("duracao").value
    if (duracao == "") duracao = parseInt(0); else duracao = parseInt(duracao);

    console.log(duracao)


    if (homens == 0 && mulheres == 0 && criancas == 0) {
        alert("Digite quantas pessoas irão participar")
        window.location.reload()}
        
        else {

    
    modal()

        let carne
        let cerveja
        let agua
        let acompanhamentos


        if (duracao < 6) {
            carne = (homens * 0.4) + (mulheres * 0.3) + (criancas * 0.2)
            cerveja = (homens + mulheres) * 1.5
            agua = ((homens + mulheres) * 1.5) + (criancas * 0.75)
            acompanhamentos = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.2)
        }

        else {
            carne = (homens * 0.55) + (mulheres * 0.45) + (criancas * 0.35)
            cerveja = (homens + mulheres) * 2
            agua = ((homens + mulheres) * 2) + (criancas * 1.5)
            acompanhamentos = (homens * 0.35) + (mulheres * 0.35) + (criancas * 0.35)
        }

        let acompanhamento = document.querySelector('input[name="acompanhamento"]:checked');
        if (acompanhamento.value == "sim") {
            let resultado_acompanhamento = document.getElementById("acompanhamentos")
            resultado_acompanhamento.innerText = Math.ceil(acompanhamentos) + " kg de acompanhamentos"
        }
        else {

            let check = document.getElementById("check")
            check.style.display = "none"
            let hr = document.getElementById("hr")
            hr.style.display = "none"

        }

        let resultado_carne = document.getElementById("carne")
        resultado_carne.innerText = Math.ceil(carne) + " kg de carne"

        let resultado_cerveja = document.getElementById("cerveja")
        resultado_cerveja.innerText = Math.ceil(cerveja) + " litros de cerveja"

        let resultado_agua = document.getElementById("agua")
        resultado_agua.innerText = Math.ceil(agua) + " litros de água/refri/suco"

        let itens = document.getElementsByClassName("itens")

        for (let i = 0; i < itens.length; i++) {

            itens[i].innerText = Math.ceil((homens + mulheres + criancas) * 1.5)

        }

    }
}

function fechar() {
    window.location.reload();
}