const textSearch = "continue with interruptions";

function removeOverlay() {
    var lnks = document.getElementsByTagName("a");
    for (var i = 0; i < lnks.length; i++) {
        if (lnks[i].textContent == textSearch) {
            lnks[i].click();
            break;
        }
    }
}

setInterval(removeOverlay, 100);