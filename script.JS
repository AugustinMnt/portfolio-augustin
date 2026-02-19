const bouton = document.getElementById('BoutonHome');
const zone = document.getElementById('zone-animation');

document.getElementById('BoutonHome').addEventListener('click', function(e) {
    e.preventDefault();
    const targetUrl = this.getAttribute('href');
    
    // On fait grossir le texte et les vagues pour créer l'immersion
    document.body.style.transition = "transform 0.8s ease-in, opacity 0.8s ease-in";
    document.body.style.transformOrigin = "center";
    document.body.style.transform = "scale(5)";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = targetUrl;
    }, 800);
});