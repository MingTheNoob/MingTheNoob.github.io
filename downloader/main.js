window.onload = function() {
    const error = text => {
        document.title = "Downloader - Failed";
        document.body.innerHTML = text;
    };
    if (!window.location.search) error("Nothing to download. You can just head back to https://ming.jp.net");
    else window.DownloadApi.convert(window.location.search, error);
};