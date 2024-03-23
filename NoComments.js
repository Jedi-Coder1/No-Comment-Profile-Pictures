// Handle Both Shorts And Normal Videos
console.log("No Comments PFP's Loaded")
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

function random_bg_color() {
    var x = Math.floor(Math.random() * 256)
    var y = Math.floor(Math.random() * 256)
    var z = Math.floor(Math.random() * 256)
    return "rgb(" + x + "," + y + "," + z + ")"
}
function createPFP(text) {
    var canvas = document.createElement("canvas")
    canvas.width = 40
    canvas.height = 40
    var ctx = canvas.getContext("2d")
    ctx.fillStyle = random_bg_color()
    // color background
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    // add character
    ctx.font = "25px Roboto"
    ctx.textAlign = "center"
    ctx.fillStyle = "rgb(255,255,255)"
    ctx.fillText(text, 20, 28)
    var dataUrl = canvas.toDataURL()
    canvas.remove()
    return dataUrl
}

function HandleVideo() {
    // observer
    var VideoObserver = new MutationObserver(function(mutations, observer) {
        
    });
    VideoObserver.observe(document.body, {childList: true, attributes: true});
}

function HandleShorts() {
    // observer
    var ShortsObserver = new MutationObserver(function(mutations, observer) {
        
    });
    ShortsObserver.observe(document.body, {childList: true, attributes: true});
}

window.onload = function() {
    // check if shorts or normal video
    if (document.location.href.includes("/watch?v=")) {
        // Is Normal Video
        HandleVideo()
    } else if (document.location.href.includes("/shorts/")) {
        // Is Short Form Video
        HandleShorts()
    }
}