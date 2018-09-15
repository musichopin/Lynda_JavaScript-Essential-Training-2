const IMAGES = document.querySelectorAll("img"); // 15 tane
const SIZES = {
    showcase: "100vw",
    reason: "(max-width: 799px) 100vw, 372px",
    feature: "(max-width: 799px) 100vw, 558px",
    story: "(max-width: 799px) 100vw, 670px",
};

function makeSrcset(imgSrc) {
    let markup = [];
    let width = 400;

    for (let i = 0; i<5; i++) {
        markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";
// 5 sets of "images/mainpromo/welcome01-400.jpg + 400w" where w changes
        width+=400;
    }

    return markup.join();
}

for (let i = 0; i<IMAGES.length; i++) { // 15 tane
    let imgSrc = IMAGES[i].getAttribute("src");//images/mainpromo/welcome01-800.jpg
    imgSrc = imgSrc.slice(0,-8);//images/mainpromo/welcome
    let srcset = makeSrcset(imgSrc);
    IMAGES[i].setAttribute("srcset", srcset);

    let type = IMAGES[i].getAttribute("data-type");
    let sizes = SIZES[type];
    IMAGES[i].setAttribute("sizes", sizes);
}
