const button = document.getElementById('generate-btn');
const animeImage = document.getElementById('anime-image');

button.addEventListener('click', async () => {
  // Fetch a random anime image from waifu.pics API
  try {
    const response = await fetch('https://api.waifu.pics/sfw/waifu');
    if (!response.ok) {
      throw new Error('Failed to fetch anime image');
    }
    const data = await response.json();
    animeImage.src = data.url;
    animeImage.style.display = 'block';
  } catch (error) {
    console.error(error);
    alert('Could not load an anime image. Try again later.');
  }
});
