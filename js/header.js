let currentLocation = window.location.pathname;

pathReturn="";
if(currentLocation != "/C:/Users/artem/Desktop/ermitage/SLAM/TP-bootstrap-Artem-Berezin/index.html"){
    pathReturn = "../";
}

document.write('\
    <header class="row">\
        <div class="col-md-3 d-none d-md-block photo"><img src="'+pathReturn+'images/profil.jpg"></div>\
        <div class="col-md-9 bandeau"><img src="'+pathReturn+'images/bandeau.gif"></div>\
    </header>\
    \
    \
    <nav class="navbar navbar-expand-lg">\
        <div class="container-fluid">\
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
                <span class="navbar-toggler-icon"></span>\
            </button>\
            <div class="collapse navbar-collapse" id="navbarSupportedContent">\
                <ul class="navbar-nav mx-auto">\
                    <li class="nav-item">\
                        <a class="nav-link active" aria-current="page" href="'+pathReturn+'index.html">Home</a>\
                    </li>\
                    <li class="nav-item">\
                        <a class="nav-link" href="'+pathReturn+'html/competences.html">Compétences</a>\
                    </li>\
                    <li class="nav-item">\
                        <a class="nav-link" href="'+pathReturn+'html/contact.html">Contact</a>\
                    </li>\
                </ul>\
            </div>\
        </div>\
    </nav>\
')