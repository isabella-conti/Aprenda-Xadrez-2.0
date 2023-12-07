// Seleciona o botão do WhatsApp pelo ID
var whatsappButton = document.getElementById("whatsapp-button");

// Verifica se o botão foi encontrado no DOM
if (whatsappButton) {
    // Adiciona um ouvinte de evento de clique ao botão
    whatsappButton.addEventListener("click", function() {
        // URL do link para o WhatsApp (substitua com o seu número de telefone)
        var whatsappUrl = "https://api.whatsapp.com/send?phone=555436984082";
        
        // Abre a página do WhatsApp em uma nova aba/janela
        window.open(whatsappUrl, "_blank");
    });
}
