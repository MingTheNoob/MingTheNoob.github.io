var downloadModal = document.getElementById("downloadModal");
var downloadModalHeader = document.getElementById("downloadModalHeader");

// Open modal
var htdsDlBtn = document.getElementById("htdsDlBtn");
var wwdiiDlBtn = document.getElementById("wwdiiDlBtn");

var downloadPdfBtn = document.getElementById("downloadPdfBtn");
var downloadDocxBtn = document.getElementById("downloadDocxBtn");
var downloadOdtBtn = document.getElementById("downloadOdtBtn");
var downloadTxtBtn = document.getElementById("downloadTxtBtn");
var downloadHtmlBtn = document.getElementById("downloadHtmlBtn");

if (htdsDlBtn) {
    htdsDlBtn.addEventListener("click", function () {
        downloadModal.classList.add("d-block");
        downloadModal.classList.remove("d-none");

        downloadModalHeader.innerHTML = `
            Download <span class="downloadModalHeaderPaperTitle">How to Define Socialism</span>
        `;

        downloadPdfBtn.addEventListener("click", function () {
            window.open("../../papers/socsci/how-to-define-socialism/htds.pdf", "_blank");
        });
        downloadDocxBtn.addEventListener("click", function () {
            window.open("../../papers/socsci/how-to-define-socialism/htds.docx", "_blank");
        });
        downloadOdtBtn.addEventListener("click", function () {
            window.open("../../papers/socsci/how-to-define-socialism/htds.odt", "_blank");
        });
        downloadTxtBtn.addEventListener("click", function () {
            window.open("../../papers/socsci/how-to-define-socialism/htds.txt", "_blank");
        });
        downloadHtmlBtn.addEventListener("click", function () {
            window.open("../../papers/socsci/how-to-define-socialism/htds.html", "_blank");
        });
    });
}

if (wwdiiDlBtn) {
    wwdiiDlBtn.addEventListener("click", function () {
        downloadModal.classList.add("d-block");
        downloadModal.classList.remove("d-none");

        downloadModalHeader.innerHTML = `
            Download <span class="downloadModalHeaderPaperTitle">Why Workplace Democracy is Important</span>
        `;

        downloadPdfBtn.addEventListener("click", function () {
            window.open("../../papers/socsci/why-workplace-democracy-is-important/wwdii.pdf", "_blank");
        });
        downloadDocxBtn.addEventListener("click", function () {
            window.open("../../papers/socsci/why-workplace-democracy-is-important/wwdii.docx", "_blank");
        });
        downloadOdtBtn.addEventListener("click", function () {
            window.open("../../papers/socsci/why-workplace-democracy-is-important/wwdii.odt", "_blank");
        });
        downloadTxtBtn.addEventListener("click", function () {
            window.open("../../papers/socsci/why-workplace-democracy-is-important/wwdii.txt", "_blank");
        });
        downloadHtmlBtn.addEventListener("click", function () {
            window.open("../../papers/socsci/why-workplace-democracy-is-important/wwdii.html", "_blank");
        });
    });
}

// Button to close the modal
var closeDownloadModalBtn = document.getElementById("closeDownloadModalBtn");

closeDownloadModalBtn.addEventListener("click", function() {
    downloadModal.classList.remove("d-block");
    downloadModal.classList.add("d-none");
});
