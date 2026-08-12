// =========================
// SEÇÕES DO SITE
// =========================

const sections =
    document.querySelectorAll(".page-section");

const navLinks =
    document.querySelectorAll(".nav-link");

const navButtons =
    document.querySelectorAll(".nav-button");



function abrirSecao(nomeSecao) {

    sections.forEach((section) => {

        section.classList.remove(
            "active-section"
        );

    });


    const secaoEscolhida =
        document.getElementById(nomeSecao);


    if (secaoEscolhida) {

        secaoEscolhida.classList.add(
            "active-section"
        );

    }


    navLinks.forEach((link) => {

        link.classList.remove(
            "active-link"
        );

    });


    const linkAtual =
        document.querySelector(
            `.nav-link[data-section="${nomeSecao}"]`
        );


    if (linkAtual) {

        linkAtual.classList.add(
            "active-link"
        );

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



// =========================
// LINKS DO MENU
// =========================

navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            event.preventDefault();


            const secao =
                link.dataset.section;


            abrirSecao(secao);


            history.pushState(
                null,
                "",
                `#${secao}`
            );

        }
    );

});



// =========================
// BOTÕES DO INÍCIO
// =========================

navButtons.forEach((button) => {

    button.addEventListener(
        "click",
        (event) => {

            event.preventDefault();


            const secao =
                button.dataset.section;


            abrirSecao(secao);


            history.pushState(
                null,
                "",
                `#${secao}`
            );

        }
    );

});



// =========================
// ABRIR SEÇÃO PELO #
// =========================

const secaoInicial =
    window.location.hash.replace(
        "#",
        ""
    );


if (
    secaoInicial &&
    document.getElementById(secaoInicial)
) {

    abrirSecao(secaoInicial);

}



// =========================
// VÍDEO DO PROJETO
// =========================

const videoModal =
    document.getElementById("videoModal");

const projectVideo =
    document.getElementById("projectVideo");

const videoTitle =
    document.getElementById("videoTitle");

const videoClose =
    document.getElementById("videoClose");

const videoOverlay =
    document.querySelector(".video-overlay");

const videoButtons =
    document.querySelectorAll(
        ".project-video-button"
    );



// =========================
// ABRIR VÍDEO
// =========================

videoButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const caminhoVideo =
                button.dataset.video;

            const tituloProjeto =
                button.dataset.title;


            projectVideo.src =
                caminhoVideo;


            videoTitle.textContent =
                tituloProjeto;


            videoModal.classList.add(
                "open"
            );


            document.body.style.overflow =
                "hidden";


            projectVideo.load();

        }
    );

});



// =========================
// FECHAR VÍDEO
// =========================

function fecharVideo() {

    videoModal.classList.remove(
        "open"
    );


    projectVideo.pause();


    projectVideo.currentTime = 0;


    projectVideo.removeAttribute(
        "src"
    );


    projectVideo.load();


    document.body.style.overflow =
        "";

}



// BOTÃO X

videoClose.addEventListener(
    "click",
    fecharVideo
);



// CLICAR FORA

videoOverlay.addEventListener(
    "click",
    fecharVideo
);



// APERTAR ESC

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            videoModal.classList.contains("open")
        ) {

            fecharVideo();

        }

    }
);