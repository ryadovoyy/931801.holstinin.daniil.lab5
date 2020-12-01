const buttons = document.querySelectorAll('.post button');
const curtain = document.querySelector('.curtain');
const modalHeading = document.querySelector('.modal h1');
const modalText = document.querySelector('.modal p');

buttons.forEach(button => {
  button.onclick = () => {
    const postHeading = button.parentNode.firstElementChild.innerHTML;
    const postText = button.parentNode.lastElementChild.innerHTML;
    modalHeading.innerHTML = postHeading;
    modalText.innerHTML = postText;
    curtain.style.display = 'flex';
  };
});

curtain.onclick = () => {
  curtain.style.display = 'none';
};
