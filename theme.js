let theme = localStorage.getItem("gcent-theme");
if (theme == "undefined" || theme == null || theme == undefined) {
    theme = "light";
    localStorage.setItem("gcent-theme", "light");
}
console.log(typeof(theme))
console.log(theme)
changeColorScheme(theme, true);
function changeColorScheme(newTheme, forced) {
    let setThemeTo;
    if (!newTheme) {
        if (theme == "light") {
            setThemeTo = "dark";
        } else if (theme == "light") {
            setThemeTo = "light";
        } else {
            setThemeTo = "light";
        }
    } else {
        switch (newTheme) {
            case "dark":
                console.log("changing to dark")
                setThemeTo = "dark";
                break;
            case "light":
                console.log("changing to light")
                setThemeTo = "light";
                break;
            default:
                if (theme == "light") {
                    setThemeTo = "dark";
                } else if (theme == "light") {
                    setThemeTo = "light";
                } else {
                    setThemeTo = "light";
                }
                break;
        }
    }
    if (theme == setThemeTo && !forced) { return; }
    document.documentElement.dataset.theme = setThemeTo;
    if (!forced) {
        theme = setThemeTo
        localStorage.setItem("gcent-theme", theme);
        console.log("theme = " + theme);
    }
}