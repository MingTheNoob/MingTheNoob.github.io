window.onload = function() {
    const error = text => {
        document.title = "Downloader - Failed";
        document.body.innerHTML = text;
    };
    if (!window.location.search) error("Nothing to download");
    else window.DownloadApi.convert(window.location.search, error);
};