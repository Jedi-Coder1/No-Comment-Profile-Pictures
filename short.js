// shorts comment handler
function random_bg_color() {
    var x = Math.floor(Math.random() * 256)
    var y = Math.floor(Math.random() * 256)
    var z = Math.floor(Math.random() * 256)
    var bgColor = "rgb(" + x + "," + y + "," + z + ")"
    return bgColor
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
    return canvas.toDataURL()
}