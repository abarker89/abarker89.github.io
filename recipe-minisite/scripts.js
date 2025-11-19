document.addEventListener("DOMContentLoaded", () => {

    const submenuParents = document.querySelectorAll(".has-submenu");

    submenuParents.forEach(parent => {
        parent.addEventListener("click", (e) => {
            e.preventDefault();

            // close any open submenu that isn't this one
            submenuParents.forEach(other => {
                if (other !== parent) {
                    other.classList.remove("open");
                }
            });

            // toggle this submenu
            parent.classList.toggle("open");
        });
    });

    // optional: clicking anywhere else closes all menus
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".navbar")) {
            submenuParents.forEach(parent => parent.classList.remove("open"));
        }
    });
});
