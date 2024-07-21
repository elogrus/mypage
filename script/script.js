// if (window.screen.width <= 780) {
let prevScrollpos = window.scrollY;
window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-100%";
    }
    prevScrollpos = currentScrollPos;
};
// }

function copyOnClick(event) {
    const target = event.target;
    try {
        navigator.clipboard.writeText(target.textContent);

        const lastContent = target.textContent;
        target.textContent = "Скопировано!";

        setTimeout(() => {
            target.textContent = lastContent;
        }, 1500);
    } catch (error) {}
}

const copyElems = document.querySelectorAll(".copyOnClick");

copyElems.forEach((elem) => {
    elem.addEventListener("click", copyOnClick);
});

const scrollToElems = document.querySelectorAll(".scrollTo");

function scrollTo(event) {
    const target = event.currentTarget;
    const query = target.getAttribute("scrollTo");
    const scrollToElem = document.querySelector(query);
    // console.log(query);
    // console.log(scrollToElem);
    scrollToElem.scrollIntoView(
        {
            behavior: "smooth",
            block: "start",
        },
        {
            duration: 250,
        },
    );
}

scrollToElems.forEach((elem) => {
    elem.addEventListener("click", scrollTo);
});
