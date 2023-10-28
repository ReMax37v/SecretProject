const text = document.getElementsByTagName('h1')[0];
const body = document.getElementsByTagName('body')[0];

let cnt = 1;

document.addEventListener('click', () => {
    text.innerText = "Killbot"
    if(cnt == 1) {
        cnt = 1 - cnt;
        body.style.backgroundColor = "red"
        text.style.color = "green"
    }
        else {
            body.style.backgroundColor = "green"
            text.style.color = "red"
            cnt = 1 - cnt;
        }
})