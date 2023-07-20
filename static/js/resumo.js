function loadingResposta(){
    $("#texto_completo").val('Aguarde, o Bot está respondendo a sua pergunta...').prop('readonly', true);
    $("#btn-envia-texto-completo").prop('disabled', true);
}

function resetLoading(){
    $("#texto_completo").val('').prop('readonly', false);
    $("#btn-envia-texto-completo").prop('disabled', false);
}

function btnProcessar(textoCompleto){
    if(textoCompleto){
        loadingResposta();
        $.getJSON('/resumir', {
            texto_completo: textoCompleto
        }, function(data) {
            console.log(data.resposta);
            resetLoading();
        });
        return false;
    }
}

