const url = 'https://api.adviceslip.com/advice/';

const getAdvice = async () => {
   const id = Math.floor(Math.random() * 224)
   const response = await fetch(url+id);
   const json = await response.json()
   adviceId.innerHTML = `Advice # ${json.slip.id}`
   adviceText.innerHTML = `"${json.slip.advice}"`;
}
window.addEventListener('load', () => {
   getAdvice()
})
const button = document.querySelector('#button')
button.addEventListener('click', () => getAdvice())