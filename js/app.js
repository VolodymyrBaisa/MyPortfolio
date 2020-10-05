//Variables
//Selectors
const burgerMenuEl = $("#menuBurger");
const navBurgerMenuEl = $("#navBurgerMenu > ul > li ");
const navMenuSvgEl = $(".nav-menu-svg");
const logoEl = $("#logo");
const allLinksEl = $("a");
const rootEl = $("html, body");
//Events
burgerMenuEl.click(onClickBurgerMenu);
allLinksEl.click(onLinkClick);
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
    console.log("click");
    if (this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
        rootEl.animate(
            { scrollTop: $(hash).offset().top },
            800,
            () => (window.location.hash = hash)
        );
    }
}
