function activateMenu(object) {
    class Menu {
        constructor(object) {
            this.closeBtn = document.querySelector(object.closeButton);
            this.openBtn = document.querySelector(object.openButton);
            this.menuItem = document.querySelector(object.menu);
            this.menu([this.closeBtn, this.openBtn, this.menuItem]);
        };
        menu([close, open, menu]) {
            const launchMenu = ([close, open, menu]) => {
                const listenButtons = ([button, item1, item2, action]) => {
                    return button.addEventListener("click", function() {
                        this.style.display = "none";
                        item1.style.display = "block";
                        if (action === 0) item2.style.display = "none";
                        if (action === 1) item2.style.display = "flex";
                    });
                };
                listenButtons([open, close, menu, 1]);
                listenButtons([close, open, menu, 0]);
            };
            return launchMenu([close, open, menu]);
        };
    };
    let menu = new Menu(object);
};
activateMenu({
    closeButton: ".close-menu",
    openButton: ".open-menu",
    menu: ".menu-navigation"
});