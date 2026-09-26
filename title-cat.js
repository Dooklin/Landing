let title = document.querySelector("title")
let doing = false
const _frames = [
    "elcome Home",
    "lcome Home",
    "come Home",
    "ome Home",
    "me Home ",
    "e Home -",
    " Home - ",
    "Home - -",
    "ome - - ",
    "me - - -",
    "e - - - ",
    " - - - -",
    " - - - - ",
    " - - - - -",
    " - - - - <",
    " - - - - <o",
    " - - - <o.",
    " - - - <o.o",
    " - - - <o.o>",
    " - - - <o.o>",
    " - - - <o.o>",
    " - - - <o.o>",
    " - - - <o.o>",
    " - - - <0.0>",
    " - - - <0.0>",
    " - - - <o.o>",
    " - - - <o.o>",
    " - - - <o.o>",
    " - - - <o.o",
    " - - - <o.",
    " - - - - <o",
    " - - - - <",
    " - - - - -",
    " - - - ",
    "e - - - ",
    "me - - -",
    "ome - -",
    "Home -",
    " Home",
    "e Home",
    "me Home",
    "ome Home",
    "come Home",
    "lcome Home",
    "elcome Home",
    "Welcome Home"
]

function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function catHello(delay = 100) {
    if (doing == true) {return}
    doing = true
    for (const frame of _frames) {
        title.textContent = frame
        await _sleep(delay)
    }
    doing = false
}