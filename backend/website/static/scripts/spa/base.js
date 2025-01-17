    console.log("base.js loaded");
    
    let isLoading = false;
    let scriptArray = [];
    
    function handleRouting() {
        // Récupérer le hash de l'URL
        const hash = location.hash;
        console.log(location.hash);
        const langMatch = path.match(/^\/(fr|en|ar|uy)\//);
        if (langMatch) {
            console.log("langMatch is " + langMatch[1]);
            const lang = langMatch[1];
        }
        else {
            console.log("langMatch is null");
            const lang = "fr";
        }
        // updateLang(lang);
    }


    // Fonction pour charger le contenu de la page
    function loadContent() {
    console.log(isLoading);
    // Empêcher le chargement multiple
    if (isLoading) return; // Ne pas exécuter si une action de navigation est déjà en cours
    isLoading = true;

    // Supprimer l'écouteur d'événement hashchange
    window.removeEventListener('hashchange', loadContent);


    // Mettre à jour l'URL sans recharger la page
    history.replaceState({}, '', location.hash);

    // Supprimez l'élément <canvas> avant de charger une nouvelle page
    var canvasElement = document.querySelector('canvas');
    if (canvasElement) {
        canvasElement.remove();
    }

    // Récupérer le hash de l'URL
        var hash = location.hash;
        console.log(location.hash);
        var content = document.getElementById('content');
        var url = '';
        
            switch(hash) {
                case '#index':
                    url = 'index/';
                    break;
                case '#login':
                    url = 'login/';
                    break;
                case "#games_page":
                    url = "games_page/";
                    break;
                case '#AI':
                    url = 'AI/';
                    break;
                case '#pong3D':
                    url = 'pong3D/';
                    break;
                case '#register':
                    url = 'register/';
                    break;
                case "#memory_game":
                    url = "memory_game/";
                    break;
                case "#account_settings":
                    url = "account_settings/";
                    break;
                case "#friends":
                    url = "friends/";
                    break;
                case "#accueil":
                    url = "accueil/";
                    break;
                case "#about_us":
                    url = "about_us/";
                    break;
                case "#verify_otp":
                    url = "verify_otp/";
                    break;
                case "#enable_2fa":
                    url = "enable_2fa/";
                    break;
                case "#profil":
                    url = "profil/";
                    break;
                case "#start_AI":
                    url = "start_AI/";
                    break;
                case "#lobby":
                    url = "lobby/";
                    break;
                default:
                    url = "error_404/";
            }
           // Utiliser AJAX pour récupérer le contenu
        var xhr = new XMLHttpRequest();
        console.log(" essai pour log URL " + url);
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                // Insérer le contenu récupéré dans l'élément 'content'
                content.innerHTML = "";
                content.innerHTML = this.responseText;
                
                //Supprimer les scripts actuels
                //console.log("script array length is " + scriptArray.length);
                if (scriptArray && scriptArray.length > 0) {
                    console.log("script array length is " + scriptArray.length);
                    for (var i = 0; i < scriptArray.length; i++) {
                        console.log( "les scripts a effacer sont " + scriptArray[i].src);
                        scriptArray[i].remove();
                    }
                    scriptArray = [];
                }
                //let scriptArray = [];
                
                // Créer une nouvelle balise <script>
                var script = document.createElement('script');

                    switch(hash) {
                        case '#index':
                            //console.log("Loading index.js");
                            script.src = "{% static 'scripts/spa/index.js' %}";
                            scriptArray.push(script);
                            break;
                        case '#start_AI':
                            //console.log("Loading start_AI.js");
                            script.src = "{% static 'scripts/games/start_AI.js' %}";
                            scriptArray.push(script);
                            break;
                        case '#login':
                            //console.log("Loading login.js");
                            script.src = "{% static 'scripts/spa/login.js' %}";
                            scriptArray.push(script);
                            break;
                        case '#AI':
                            //console.log("Loading AI.js");
                            script.src = "{% static 'scripts/games/three.min.js' %}";
                            scriptArray.push(script);                          
                            break;
                        case '#friends':
                            //console.log("Loading friends.js");
                            script.src = "{% static 'scripts/user/friends.js' %}";
                            scriptArray.push(script);                          
                            break;
                        case '#pong3D':
                            //console.log("Loading pong.js");
                            script.src = "{% static 'scripts/games/pong3D.js' %}";
                            scriptArray.push(script);
                            break;
                        case '#accueil':
                            //console.log("Loading accueil.js");
                            script.src = "{% static 'scripts/spa/accueil.js' %}";
                            scriptArray.push(script);
                            break;
                        case '#register':
                            //console.log("Loading register.js");
                            script.src = "{% static 'scripts/spa/register.js' %}";
                            scriptArray.push(script);
                            break;
                        case "#memory_game":
                            //console.log("Loading memory_game.js");
                            script.src = "{% static 'scripts/games/memory_game.js' %}";
                            scriptArray.push(script);
                            break;
                        case "#account_settings":
                            //console.log("Loading account_settings.js");
                            script.src = "{% static 'scripts/spa/account_settings.js' %}";
                            scriptArray.push(script);
                            break;
                        case "#password_change":
                            //console.log("Loading password_change.js");
                            script.src = "{% static 'scripts/spa/password_change.js' %}";
                            scriptArray.push(script);
                            break;
                        case "#enable_2fa":
                            //console.log("Loading enable_2fa.js");
                            script.src = "{% static 'scripts/spa/enable_2fa.js' %}";
                            scriptArray.push(script);
                            break;
                        case "#verify_otp":
                            //console.log("Loading verify_otp.js");
                            script.src = "{% static 'scripts/spa/verify_otp.js' %}";
                            scriptArray.push(script);
                            break;
                        case "#profil":
                            //console.log("Loading profil.js");
                            script.src = "{% static 'scripts/stats/stats.js' %}";
                            scriptArray.push(script);
                            break;
                        case "#games_page":
                            //console.log("Loading games_page.js");
                            script.src = "{% static 'scripts/spa/games_page.js' %}";
                            scriptArray.push(script);
                            break;
                        default:
                            console.log("no script to load");
                    }
                    setTimeout(function() {
        document.head.appendChild(script);
    }, 500); // 500 est le délai en millisecondes

    window.addEventListener('hashchange', loadContent);
    isLoading = false;


    }

    else {
    // Gérer les erreurs
    content.innerHTML = 'Erreur 404: page introuvable';
    isLoading = false;
    }
};
        xhr.onerror = function() {
            // Gérer les erreurs de réseau
            content.innerHTML = 'Erreur de réseau.';
            //isLoading = false;
        };
        xhr.send();

    }


    // Écouter l'événement hashchange
    window.addEventListener('hashchange', loadContent);

    // Écouter l'événement popstate pour gérer le retour et le précédent
    window.addEventListener('popstate', loadContent);

    
    // Charger le contenu au chargement initial de la page
    document.addEventListener('DOMContentLoaded', loadContent)