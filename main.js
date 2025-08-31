let platforms = {
    "fancade": {
        "name": "Fancade",
        "image": "https://www.fancade.com/images/fancade.jpg",
        "link": "https://play.fancade.com?max_w=999999&max_h=9999999/"
    },
    "poki": {
        "name": "Poki",
        "image": "https://play-lh.googleusercontent.com/FBwBJqAv2KjTXRDRaEkrY3r2PJUWZbru1Y-6VyQY4Sku776mLJ2fIh1nMqzsmGdXUPI",
        "link": "https://poki.com/"
    }
}

let icons = {
    "game": `<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gamepad2-icon lucide-gamepad-2" version="1.1" id="svg4" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs4" /> <path d="M 6.6777344,-0.29101563 C 6.0919122,-0.29087912 5.512547,-0.23616889 4.9394531,-0.12695312 4.6562336,-0.07297936 4.376695,-0.00722482 4.1015625,0.07226562 3.8498282,0.14499592 3.5769206,0.23449226 3.2929688,0.34570313 3.0150223,0.45456196 2.7577384,0.57304688 2.5214844,0.69140625 2.0170871,0.94410101 1.5422086,1.2395278 1.0996094,1.5722656 0.84698221,1.762186 0.630426,1.9470332 0.45703125,2.1035156 0.29482753,2.2498986 0.08018363,2.4511986 -0.13867187,2.6875 -0.70272819,3.2965197 -1.1888382,3.9847551 -1.5800781,4.7441406 c -0.1379468,0.2677508 -0.2557716,0.5303947 -0.3554688,0.7773438 -0.211281,0.5233413 -0.3802227,1.075725 -0.4960937,1.65625 -0.053901,0.2700471 -0.093803,0.5387909 -0.1230469,0.8046875 -9.878e-4,0.00856 -0.00298,0.017377 -0.00391,0.025391 -0.00141,0.013107 -0.00256,0.025976 -0.00391,0.039063 -0.014075,0.1202083 -0.015509,0.1358811 -0.00586,0.064453 C -2.6296301,8.6211614 -3.2910156,13.806099 -3.2910156,16 c 0,1.138438 0.2329704,2.232388 0.6542968,3.228516 0.090945,0.215017 0.2038256,0.461794 0.3476563,0.726562 0.1229296,0.226293 0.2624816,0.458287 0.4160156,0.685547 0.3079658,0.455849 0.6505745,0.863465 1.00976565,1.222656 0.18928977,0.18929 0.38650648,0.365053 0.58789062,0.53125 0.16811697,0.138743 0.38198727,0.307742 0.63476563,0.478516 0.22726023,0.153534 0.4592541,0.293086 0.6855469,0.416015 0.2647681,0.143831 0.5115449,0.256712 0.7265625,0.347657 0.4798022,0.202939 1.0010151,0.371431 1.5625,0.486328 C 3.884372,24.235672 4.443381,24.291016 5,24.291016 c 1.0914329,0 2.0738327,-0.194815 3.0644531,-0.628907 0.3483505,-0.152648 0.634955,-0.311051 0.8457032,-0.4375 0.291149,-0.174689 0.5308938,-0.347842 0.6835937,-0.46289 0.1563943,-0.117832 0.3350085,-0.261474 0.523438,-0.427735 0.260301,-0.229678 0.515625,-0.482422 0.625,-0.591797 l 0.451171,-0.451171 h 1.613282 l 0.451172,0.451171 c 0.109375,0.109375 0.364698,0.362119 0.625,0.591797 0.188429,0.166261 0.367043,0.309903 0.523437,0.427735 0.903573,0.680774 1.96522,1.250983 3.546875,1.460937 0.321986,0.04274 0.668015,0.06836 1.046875,0.06836 0.847265,0 1.677677,-0.128213 2.464844,-0.373047 0.284529,-0.0885 0.539586,-0.18647 0.763672,-0.28125 0.215017,-0.09094 0.461794,-0.203826 0.726562,-0.347657 0.226293,-0.122929 0.458287,-0.262481 0.685547,-0.416015 0.252778,-0.170774 0.466649,-0.339773 0.634766,-0.478516 0.40816,-0.336844 0.782296,-0.71098 1.11914,-1.11914 0.138743,-0.168117 0.307742,-0.381988 0.478516,-0.634766 0.153534,-0.22726 0.293086,-0.459254 0.416015,-0.685547 0.143831,-0.264768 0.256712,-0.511545 0.347657,-0.726562 0.09478,-0.224086 0.192752,-0.479143 0.28125,-0.763672 0.07708,-0.247814 0.146944,-0.514733 0.205078,-0.798828 0.112625,-0.550388 0.167969,-1.109397 0.167969,-1.666016 0,-2.19398 -0.661441,-7.3793003 -0.722657,-7.8886719 l -0.002,-0.023437 c 1.46e-4,-7.249e-4 -0.0027,-0.025647 -0.0039,-0.037109 l -0.0039,-0.044922 c -4.1e-4,-0.00351 -0.0015,-0.008 -0.002,-0.011719 -0.02948,-0.2706012 -0.07109,-0.5440286 -0.125,-0.8144531 -0.0641,-0.3215329 -0.141169,-0.6104108 -0.210938,-0.84375 C 26.149746,6.0986228 26.054936,5.8173872 25.935547,5.5214844 25.293715,3.9307261 24.233897,2.5755175 22.902344,1.5742187 22.466868,1.2467504 21.991148,0.94731155 21.480469,0.69140625 20.217953,0.05875053 18.799421,-0.2906331 17.320312,-0.29101563 Z" id="path5" style="fill:var(--background-highlight);fill-opacity:1;stroke:none;stroke-opacity:1" transform="matrix(0.78477453,0,0,0.78477453,2.5827056,2.5827056)" /> <line x1="7.2913527" x2="10.430451" y1="11.215225" y2="11.215225" id="line1" style="stroke-width:1.56955" /> <line x1="8.8609018" x2="8.8609018" y1="9.6456766" y2="12.784775" id="line2" style="stroke-width:1.56955" /> <line x1="14.354323" x2="14.362171" y1="12" y2="12" id="line3" style="stroke-width:1.56955" /> <line x1="16.708647" x2="16.716496" y1="10.430451" y2="10.430451" id="line4" style="stroke-width:1.56955" /> <path d="M 16.175001,6.5065783 H 7.8249995 A 3.1390981,3.1390981 0 0 0 4.7031664,9.3239189 c -0.00471,0.040808 -0.00785,0.079262 -0.013341,0.1192857 -0.063567,0.528938 -0.5375706,4.4842014 -0.5375706,5.6958934 a 2.3543236,2.3543236 0 0 0 2.3543236,2.354324 c 0.7847745,0 1.1771618,-0.392387 1.5695491,-0.784775 L 9.1857986,15.598976 A 1.5695491,1.5695491 0 0 1 10.29547,15.139098 h 3.40906 a 1.5695491,1.5695491 0 0 1 1.109672,0.459878 l 1.109671,1.109671 c 0.392387,0.392388 0.784774,0.784775 1.569549,0.784775 a 2.3543236,2.3543236 0 0 0 2.354323,-2.354324 c 0,-1.212476 -0.474003,-5.1669554 -0.53757,-5.6958934 -0.0055,-0.039239 -0.0086,-0.078477 -0.01334,-0.1185009 A 3.1390981,3.1390981 0 0 0 16.175001,6.5065783 Z m 0,0 H 7.8249995 A 3.1390981,3.1390981 0 0 0 4.7031664,9.3239189 c -0.00471,0.040808 -0.00785,0.079262 -0.013341,0.1192857 -0.063567,0.528938 -0.5375706,4.4842014 -0.5375706,5.6958934 a 2.3543236,2.3543236 0 0 0 2.3543236,2.354324 c 0.7847745,0 1.1771618,-0.392387 1.5695491,-0.784775 L 9.1857986,15.598976 A 1.5695491,1.5695491 0 0 1 10.29547,15.139098 h 3.40906 a 1.5695491,1.5695491 0 0 1 1.109672,0.459878 l 1.109671,1.109671 c 0.392387,0.392388 0.784774,0.784775 1.569549,0.784775 a 2.3543236,2.3543236 0 0 0 2.354323,-2.354324 c 0,-1.212476 -0.474003,-5.1669554 -0.53757,-5.6958934 -0.0055,-0.039239 -0.0086,-0.078477 -0.01334,-0.1185009 A 3.1390981,3.1390981 0 0 0 16.175001,6.5065783 Z m 0,0 H 7.8249995 A 3.1390981,3.1390981 0 0 0 4.7031664,9.3239189 c -0.00471,0.040808 -0.00785,0.079262 -0.013341,0.1192857 -0.063567,0.528938 -0.5375706,4.4842014 -0.5375706,5.6958934 a 2.3543236,2.3543236 0 0 0 2.3543236,2.354324 c 0.7847745,0 1.1771618,-0.392387 1.5695491,-0.784775 L 9.1857986,15.598976 A 1.5695491,1.5695491 0 0 1 10.29547,15.139098 h 3.40906 a 1.5695491,1.5695491 0 0 1 1.109672,0.459878 l 1.109671,1.109671 c 0.392387,0.392388 0.784774,0.784775 1.569549,0.784775 a 2.3543236,2.3543236 0 0 0 2.354323,-2.354324 c 0,-1.212476 -0.474003,-5.1669554 -0.53757,-5.6958934 -0.0055,-0.039239 -0.0086,-0.078477 -0.01334,-0.1185009 A 3.1390981,3.1390981 0 0 0 16.175001,6.5065783 Z m 0,0 H 7.8249995 A 3.1390981,3.1390981 0 0 0 4.7031664,9.3239189 c -0.00471,0.040808 -0.00785,0.079262 -0.013341,0.1192857 -0.063567,0.528938 -0.5375706,4.4842014 -0.5375706,5.6958934 a 2.3543236,2.3543236 0 0 0 2.3543236,2.354324 c 0.7847745,0 1.1771618,-0.392387 1.5695491,-0.784775 L 9.1857986,15.598976 A 1.5695491,1.5695491 0 0 1 10.29547,15.139098 h 3.40906 a 1.5695491,1.5695491 0 0 1 1.109672,0.459878 l 1.109671,1.109671 c 0.392387,0.392388 0.784774,0.784775 1.569549,0.784775 a 2.3543236,2.3543236 0 0 0 2.354323,-2.354324 c 0,-1.212476 -0.474003,-5.1669554 -0.53757,-5.6958934 -0.0055,-0.039239 -0.0086,-0.078477 -0.01334,-0.1185009 A 3.1390981,3.1390981 0 0 0 16.175001,6.5065783 Z" id="path4" style="stroke-width:1.56955" /></svg>`,
    "platform": `<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hard-drive-icon lucide-hard-drive" version="1.1" id="svg3" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs3" /> <path d="M 7.2382812,-1.2910156 C 4.478219,-1.289551 1.9499863,0.26904652 0.71484375,2.7460938 L 0.7109375,2.7539063 -3.2910156,10.75 V 18 c 0,4.026162 3.26485347,7.291016 7.2910156,7.291016 h 16 c 4.026162,0 7.291016,-3.264854 7.291016,-7.291016 V 10.75 L 23.289062,2.7539063 C 22.055571,0.27159257 19.526004,-1.2895485 16.759766,-1.2910156 Z" id="path3" style="display:inline;fill:var(--background-highlight);fill-opacity:1;stroke:none" transform="matrix(0.78477456,0,0,0.78477456,2.5827053,2.5827053)" /> <line x1="19.847746" x2="4.1522546" y1="12" y2="12" id="line1" style="stroke-width:1.56955" /> <path d="M 6.8597267,6.5929033 4.1522544,12 v 4.708647 a 1.5695491,1.5695491 0 0 0 1.5695492,1.569549 H 18.278196 a 1.5695491,1.5695491 0 0 0 1.56955,-1.569549 V 12 L 17.140273,6.5929033 A 1.5695491,1.5695491 0 0 0 15.735527,5.7218036 H 8.2644731 A 1.5695491,1.5695491 0 0 0 6.8597267,6.5929033 Z" id="path1" style="display:inline;stroke-width:1.56955" /> <line x1="7.2913527" x2="7.2992005" y1="15.139098" y2="15.139098" id="line2" style="stroke-width:1.56955" /> <line x1="10.43045" x2="10.438299" y1="15.139098" y2="15.139098" id="line3" style="stroke-width:1.56955" /></svg>`
}

let localGames = {
    "drivemad": {
        "name": "Drive Mad",
        // "image": "https://www.fancade.com/images/5F084A0BCE06B710.jpg",
        "image": "https://play-lh.googleusercontent.com/7l3WAPbei9MXrxnCzImpXi2VxjEBtgDl0htwvTnA-YqpJAuQJPpSiby1oB8LZMgD0IAy",
        "platform": "fancade",
        "link": "https://play.fancade.com/5F084A0BCE06B710?max_w=999999&max_h=9999999&istart=1"
    },
    "roper": {
        "name": "Roper",
        "image": "https://play-lh.googleusercontent.com/45oLc43WdDFIuDY8EVtp2J4JGTxKFmtYy-NDFvn0FpmMMiOrXZ_LIAa9tS24Pwy8zrc",
        "platform": "fancade",
        "link": "https://play.fancade.com/5EA3060C267794F9?max_w=999999&max_h=9999999&istart=1"
    },
    "fancade": {
        "name": "Fancade",
        "image": "https://www.fancade.com/images/fancade.jpg",
        "platform": "platform",
        "link": "https://play.fancade.com/"
    },
    "poki": {
        "platform": "platform"
    },
    "minecraft": {
        "name": "Minecraft",
        "image": "https://feedback.minecraft.net/hc/theming_assets/01HZH4GFS6HZFCFWQPVZT51JSB",
        "imageType": "padded",
        "platform": "standalone",
        "link": "https://minecraft.net/"
    },
    "slowroads": {
        "name": "slow roads",
        "image": "games/slow-roads.svg",
        "platform": "standalone",
        "link": "https://slowroads.io/"
    },
    "oldslowroads": {
        "name": "old slow roads",
        "image": "https://old.slowroads.io/static/media/splash-logo-placeholder-7b.2d60164d.png",
        "imageType": "padded invert-white",
        "platform": "standalone",
        "link": "https://old.slowroads.io/"
    }
}

function loadGames(gameList) {
    let gameHolder = document.getElementById("games");
    gameList.forEach(gameId => {
        let gameDocument = document.createElement("div");
        let gameImage = document.createElement("div");
        gameImage.classList = "image";
        if (localGames[gameId].platform && localGames[gameId].platform == "platform") {
            gameImage.innerHTML = `<img src="${platforms[gameId].image}">`;
        } else {
            if (localGames[gameId].imageType) {
                gameImage.classList.add(...localGames[gameId].imageType.split(" "));
            }
            gameImage.innerHTML = `<img src="${localGames[gameId].image}">`;
        }
        gameDocument.append(gameImage);
        if (localGames[gameId].platform) {
            switch (localGames[gameId].platform) {
                case "standalone": {
                    let gamePlatform = document.createElement("div");
                    gamePlatform.classList = "platform icon";
                    gamePlatform.innerHTML = icons.game;
                    gameDocument.append(gamePlatform);
                    break;
                }
                case "platform": {
                    let gamePlatform = document.createElement("div");
                    gamePlatform.classList = "platform icon";
                    gamePlatform.innerHTML = icons.platform;
                    gameDocument.append(gamePlatform);
                    break;
                }
                default: {
                    let gamePlatform = document.createElement("div");
                    gamePlatform.classList = "platform";
                    gamePlatform.innerHTML = `<img src="${platforms[localGames[gameId].platform].image}">`;
                    gameDocument.append(gamePlatform);
                    break;
                }
            }
        }
        let gameContent = document.createElement("div");
        gameContent.classList = "content";
        if (localGames[gameId].platform && localGames[gameId].platform == "platform") {
            gameContent.innerText = platforms[gameId].name;
        } else {
            gameContent.innerText = localGames[gameId].name;
        }
        gameDocument.append(gameContent);
        let gamePlayButton = document.createElement("div");
        gamePlayButton.classList = "play-container";
        if (localGames[gameId].platform && localGames[gameId].platform == "platform") {
            gamePlayButton.innerHTML = '<div class="play">Visit</div>';
        } else {
            gamePlayButton.innerHTML = '<div class="play">Play</div>';
        }
        gamePlayButton.onclick = () => playGame(gameId);
        gameDocument.append(gamePlayButton);
        gameHolder.append(gameDocument);
    });
}

loadGames(["drivemad", "roper", "fancade", "poki", "minecraft", "slowroads", "oldslowroads"])

function playGame(game) {
    if (localGames[game].platform && localGames[game].platform == "platform") {
        window.location.href = platforms[game].link;
    } else {
        window.location.href = localGames[game].link;
    }
}