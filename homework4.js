
/*Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.*/

const dogs = document.querySelector('.dogs');
const url = 'https://dog.ceo/api/breeds/image/random/10';

const getData = async (url) => {
    const res = await fetch(url); 
    const data = await res.json(); 
    return data; 
};

try{
    async function renderImages() {
        const data = await getData(url);
        console.log(data);

        data.message.forEach((el, index) => {
            setTimeout(() => {
                dogs.innerHTML += `<img src="${el}" alt="pic" width="360px" height="360px" />`
            }, (index + 1)*3000);
        });
    }

    renderImages();
} catch (error) {
    console.error('Что-то пошло не так!');
}