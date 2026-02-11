const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

//clicked yes
yesBtn.addEventListener("click", (e) => {
    console.log('yes')
    // alert("I love you too! ❤️"); // Show celebration
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');
    const askPage = document.querySelector(".ask");
    askPage.classList.add('hidden');
});


//clicked no
let noCount = 0;
noBtn.addEventListener("click", (e) => {
    noCount++;
    console.log(`no counts: ${noCount}`);

    switch (noCount) {
        case 1:
            noBtn.style.position = "relative";
            noBtn.style.translate = "5rem 5rem";
            noBtn.textContent = "sure?";
            break;
        case 2:
            noBtn.style.translate = "0 0";
            noBtn.textContent = "wiw";
            break;
        case 3:
            noBtn.style.scale = "0.9";
            yesBtn.style.scale = "1.1";
            noBtn.textContent = "dont";
            break;        
        case 4:
            noBtn.style.scale = "0.8";
            yesBtn.style.scale = "1.2";
            noBtn.textContent = "plsss";
            break;
        case 5:
            noBtn.textContent = ":((";
            break;
        case 6:
            noBtn.style.display = "none";
            yesBtn.style.width = "80%";
            yesBtn.style.height = "100%";
            yesBtn.textContent = "u have no other choice but yes!! >:(";
            yesBtn.style.animation = "yesBtnColorChange 1s ease-in-out infinite alternate";
            break;
        default:
            break;
    }
});