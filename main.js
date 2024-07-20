const wordElement = document.querySelector(".word-length")
const CharacterElement = document.querySelector(".character-length")
const paragraphElement = document.querySelector(".paragraph")

paragraphElement.addEventListener('input', ()=>{
    //Character
    let paragraph = paragraphElement.value;
    let characterCount = paragraph.length;
    CharacterElement.innerHTML = characterCount;

    //words
    wordElement.innerHTML = wordsCount(paragraph);

})

function wordsCount(str) {
    const arr = str.split(' ');
    return arr.filter(word => word !== '').length
}