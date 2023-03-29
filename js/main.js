const burger = document.querySelector('.burger');
const mobMenu = document.querySelector('.desk_top');
const li2 = document.querySelector('.list2');
const li3 = document.querySelector('.list3');
const li4 = document.querySelector('.list4');
const li5 = document.querySelector('.list5');

li2.addEventListener('click', () => {
  burger.classList.remove('activ');
});
li3.addEventListener('click', () => {
  burger.classList.remove('activ');
  mobMenu.classList.toggle('activ');
});
li4.addEventListener('click', () => {
  burger.classList.remove('activ');
  mobMenu.classList.toggle('activ');
});
li5.addEventListener('click', () => {
  burger.classList.remove('activ');
  mobMenu.classList.toggle('activ');
});

burger.addEventListener('click', () => {
  burger.classList.toggle('activ');
  mobMenu.classList.toggle('activ');
});

const driver1 = {
  imageSrc: './assets/images.jpeg',
  name: 'competitor',
  rank: '1st',
  id: 'firstdriver',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
};

const driver2 = {
  imageSrc: './assets/images1.jpeg',
  name: 'competitor',
  rank: '2nd',
  id: 'secondarydriver',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
};

const driver3 = {
  imageSrc: './assets/images2.jpeg',
  name: 'competitor',
  rank: '3rd',
  id: 'thirddriver',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
};

const driver4 = {
  imageSrc: './assets/images3.jpeg',
  name: 'competitor',
  rank: '4th',
  id: 'fourthdriver',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
};

const driver5 = {
  imageSrc: './assets/images4.jpeg',
  name: 'competitor',
  rank: '5th',
  id: 'fithdriver',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
};

const driver6 = {
  imageSrc: './assets/images5.jpeg',
  name: 'competitor',
  rank: '6th',
  id: 'sixthdriver',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
};

const drivers = [driver1, driver2, driver3, driver4, driver5, driver6];

for (let i = 0; i < drivers.length; i += 1) {
  const driver = document.createElement('div');
  driver.classList.add('mb-3', 'col-md-6');
  driver.innerHTML = `
    <div class="row driver">
    <div class="col-4 sp_img">
    <img src="${drivers[i].imageSrc}" class="img-fluid" alt="...">
  </div>
  <div class="col-8">
    <div class="cardbody">
      <h2 class="cardtitle">${drivers[i].name}</h2>
      <p class="rank">${drivers[i].rank}.</p>
      <p class="cardtext">${drivers[i].text}
      </p>
    </div>
  </div>
  `;
  document.querySelector('.driver_cont').appendChild(driver);
}