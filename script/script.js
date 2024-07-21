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

function copyOnClick(event) {
    const target = event.target;
    console.log(target);
    // Copy the text inside the text field
    navigator.clipboard.writeText(target.textContent);

    const lastContent = target.textContent;
    target.textContent = "Скопировано!";

    setTimeout(() => {
        target.textContent = lastContent;
    }, 1500);
}

const copyElems = document.querySelectorAll(".copyOnClick");

copyElems.forEach((elem) => {
    elem.addEventListener("click", copyOnClick);
});

const scrollToElems = document.querySelectorAll(".scrollTo");

function scrollTo(event) {
    console.log("Hello");
    const target = event.target;
    const query = target.getAttribute("scrollTo");
    const scrollToElem = document.querySelector(query);
    console.log(scrollToElem);
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
