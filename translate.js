let langFile = {
    "de": {
        "name": "Deutsch"
    },
    "en": {
        "name": "English"
    }
};
let allJson = {};
Object.keys(langFile).forEach((key) => {
    fetch("lang/"+key+".json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // parse directly as JSON
        })
        .then(data => {
            allJson[key] = data;
        })
        .catch(error => {
            console.error("Error loading the JSON file:", error);
        });
});
function getLang(language, key, variables=[]) {
    if (!allJson[language]) {
        return key;
    }
    if (!allJson[language][key]) {
        return key;
    }
    
    let newText = allJson[language][key].replace(/§\d+\//g, match => {
        // extract the number (strip the §)
        let num = parseInt(match.slice(1), 10);
        if (!variables[num]) {
            return `§${num}/`;
        }
        // return replacement
        return variables[num];
    });
    return newText;
}
function updateUI(language) {
    document.querySelector("h1").innerText = getLang(language, "brand.name");
    document.head.querySelector("title").innerText = getLang(language, "brand.name");
    document.querySelector("h2").innerText = getLang(language, "brand.sub");
}
setTimeout(() => {
    updateUI("en");
}, 100)