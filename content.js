
function simulateKeyPress(character) {
    var event = new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        key: character,
        charCode: character.charCodeAt(0),
        keyCode: character.charCodeAt(0)
    });
    console.log("Simulating key press: " + character);
    document.dispatchEvent(event);
}

if (window.location.href.indexOf("songsterr.com") != -1) {
    
    setTimeout(() => {
        // check aria-label of this xpath: /html/body/div/div/section/aside/div/div[1]/div[2]/div/div
        var element = document.evaluate("/html/body/div/div/section/aside/div/div[1]/div[2]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (element && element.getAttribute("aria-label") === "Switch to original audio | Press V to toggle") {
            simulateKeyPress("v");
        }
    }, 1000);
    

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