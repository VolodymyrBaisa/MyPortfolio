//Variables
//Selectors
const burgerMenuEl = $("#menuBurger");
const navBurgerMenuEl = $("#navBurgerMenu > ul > li ");
const navMenuSvgEl = $(".nav-menu-svg");
const logoEl = $("#logo");
const allLinksEl = $("a");
const rootEl = $("html, body");
const logoSvgEl = $(".logo-svg");
const sendEmailEl = $("#submit");
const nameEl = $("#name");
const emailEl = $("#email");
const messageEl = $("#message");
//Events
burgerMenuEl.click(onClickBurgerMenu);
allLinksEl.click(onLinkClick);
sendEmailEl.click(onSubmitClick);
//Functions
function onClickBurgerMenu() {
    const width = navMenuSvgEl.css("width").replace("px", "");
    if (width === "0")
        navMenuSvgEl.animate({ width: 20 + "vw" }, () =>
            navBurgerMenuEl.addClass("active")
        );
    else {
        navBurgerMenuEl.removeClass("active");
        navMenuSvgEl.animate({ width: 0 });
    }
}
function onLinkClick(event) {
    if (this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
        rootEl.animate(
            { scrollTop: $(hash).offset().top - logoSvgEl.height() + "px" },
            800
        );
    }
}

function onSubmitClick() {
    window.open(
        `mailto:biosvova@gmail.com?body=name:${nameEl.val()}%0D%0Aemail:${emailEl.val()}%0D%0A${messageEl.val()}`
    );
}
