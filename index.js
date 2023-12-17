const url = 'https://myanimelist.p.rapidapi.com/anime/top/all';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6c4aa858a6mshb2af3e40f22f733p1b3984jsn633f26ac6b54', 
    'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com',
  },
};

async function fetchAnimeData() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    for (const anime of data) {
      const button = document.createElement('button');
      button.classList.add('anime-button');
      
      
      button.textContent = anime.title;
      
   
      button.addEventListener('click', function () {
        displayAnimeDetails(anime);
      });

     
      document.getElementById('animeList').appendChild(button);
    }
  } catch (error) {
    console.error(error);
  }
}

function displayAnimeDetails(anime) {
  const contentContainer2 = document.getElementById('content-container2');
  contentContainer2.innerHTML = ''; 

  
  const titleLink = document.createElement('a');
  titleLink.textContent = anime.title;
  titleLink.href = anime.myanimelist_url;
  titleLink.target = '_blank'; 

 
  const picture = document.createElement('img');
  picture.src = anime.picture_url;
  picture.alt = anime.title;

 
  const infoParagraph = document.createElement('p');
  infoParagraph.innerHTML = `
    <strong>Rank:</strong> ${anime.rank}<br>
    <strong>Score:</strong> ${anime.score}<br>
    <strong>Type:</strong> ${anime.type}<br>
    <strong>Aired On:</strong> ${anime.aired_on}<br>
    <strong>Members:</strong> ${anime.members}
  `;

  contentContainer2.appendChild(titleLink);
  contentContainer2.appendChild(picture);
  contentContainer2.appendChild(infoParagraph);
}

async function init() {
  await fetchAnimeData();
}

init();
