document.addEventListener("keydown", function (e) {
    if (e.key.toLowerCase() === "y") {
        e.preventDefault();
        window.open("https://www.youtube.com/", "_blank", "noopener,noreferrer");
    }
});