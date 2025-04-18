
if (window.location.href.indexOf("songsterr.com") != -1) {
    
    const xPath = "/html/body/div[1]/div/div[5]/div[2]/div/p/a";
    
    function removeOverlay() {
        var link = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (link != null) {
            document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
        }
    }
    console.log("Songsterr Hacks: Removing overlay");
    setInterval(removeOverlay, 10);
   
}