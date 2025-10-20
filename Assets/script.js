emailjs.init("XdTpBKSrBdtpQti8j");

// Gestione dell'invio del form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const templateParams = {
        user_name: document.getElementById('nome').value,
        user_email: document.getElementById('email').value,
        message: document.getElementById('messaggio').value
    };
    
    emailjs.send('service_ucmekca', 'template_rijeund', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Messaggio inviato con successo!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.log('ERRORE:', error);
            alert('Errore nell\'invio: ' + error.text);
        });
});