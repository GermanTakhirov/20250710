
function menuButtonOpen()
{
    const box = document.getElementById("menu-b");
    const menu = document.getElementById("navM");
    const close = document.getElementById("backgroundClose");
    document.body.style.background = "linear-gradient(to right bottom, white, grey)";
    menu.style.display = "none";
    box.style.display = "flex";
    close.style.display = "block";

}
function exit()
{
    const box = document.getElementById("menu-b");
    const menu = document.getElementById("navM");
    const close = document.getElementById("backgroundClose");

    menu.style.display = "flex";
    close.style.display = "none";

    box.style.display = "none";
    document.body.style.background = "linear-gradient(to right bottom, red, blue)";
}