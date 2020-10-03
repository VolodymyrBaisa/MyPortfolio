//Variables
//Selectors
const burgerMenuEl = $("#menuBurger");
const navBurgerMenuEl = $("#navBurgerMenu > ul > li ");
const navMenuSvgEl = $(".nav-menu-svg");
//Events
burgerMenuEl.click(onClickBurgerMenu);
//Functions
function onClickBurgerMenu() {
    const width = navMenuSvgEl.css("width").replace("px", "");
    if (width === "0")
        navMenuSvgEl.animate({ width: 35 + "%" }, () =>
            navBurgerMenuEl.addClass("active")
        );
    else {
        navBurgerMenuEl.removeClass("active");
        navMenuSvgEl.animate({ width: 0 });
    }
}
