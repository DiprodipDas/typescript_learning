
// with getElementById
// const input = document.getElementById("email") as HTMLInputElement
// const button = document.getElementById("send") as HTMLButtonElement

// another way (with querySelectorById)
const input = document.querySelector<HTMLInputElement>("#email") // # not needed when use getElementById!!!
const button = document.querySelector<HTMLButtonElement>("#send")

if(button && input){
button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(`Subscription is done for ${input.value}`);
});
}
