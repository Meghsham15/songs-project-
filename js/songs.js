const songs = [
    { id: 1, songName: "Ahimsa(Error 404 Remix)", filePath: "./songs/1.mp3", cover: "./covers/1.jpg" },
    { id: 2, songName: "Salty Water", filePath: "./songs/2.mp3", cover: "./covers/2.jpg" },
    { id: 3, songName: "Falling Stars", filePath: "./songs/3.mp3", cover: "./covers/3.jpg" },
    { id: 4, songName: "Plucks", filePath: "./songs/4.mp3", cover: "./covers/4.jpg" },
    { id: 5, songName: "Jeeja Kalrah Kyun Aaya", filePath: "./songs/5.mp3", cover: "./covers/5.jpg" },
    { id: 6, songName: "Moombah City", filePath: "./songs/6.mp3", cover: "./covers/6.jpg" },
    { id: 7, songName: "Ritviz&Nucleya - Baarat(Error 404 Remix)", filePath: "./songs/7.mp3", cover: "./covers/7.jpg" },
    { id: 8, songName: "Duaa(Error 404 Remix)", filePath: "./songs/8.mp3", cover: "./covers/8.jpg" },
    { id: 9, songName: "South Mania 2(Error 404)", filePath: "./songs/9.mp3", cover: "./covers/9.jpg" },
    { id: 10, songName: "Make You Mine(PUBLIC)", filePath: "./songs/10.mp3", cover: "./covers/10.jpg" },
];


// module.exports = songs;
let songsContainer = document.getElementById('songItemContainer');
for (let i = 0; i < songs.length; i++) {
    // Assuming ele is an object with an id property
    let ele = songs[i];

    // Create the outer div
    const songItemDiv = document.createElement('div');
    songItemDiv.className = 'songItem';
    songItemDiv.id = `songItem${ele.id}`;

    // Create the image element
    const imageElement = document.createElement('img');
    imageElement.className = 'imge';
    imageElement.src = ele.cover;
    imageElement.alt = '1';

    // Create the song name span element
    const songNameSpan = document.createElement('span');
    songNameSpan.className = `songName song${ele.id}`;
    songNameSpan.innerText = ele.songName;

    // Create the play button image element
    const playImageElement = document.createElement('img');
    playImageElement.src = './img/play.svg';
    playImageElement.alt = '';
    playImageElement.className = 'songItemPlay';
    playImageElement.id = ele.id;

    // Create the timestamp div
    const timeStampDiv = document.createElement('div');
    timeStampDiv.className = 'txt';
    timeStampDiv.textContent = '05:30';

    // Create the inner span for the timestamp
    const timeStampSpan = document.createElement('span');
    timeStampSpan.className = 'timeStamp';
    timeStampSpan.appendChild(timeStampDiv);
    timeStampSpan.appendChild(playImageElement);

    // Create the songListPlay span
    const songListPlaySpan = document.createElement('span');
    songListPlaySpan.className = 'songListPlay';
    songListPlaySpan.appendChild(timeStampSpan);

    // Append all elements to the outer div
    songItemDiv.appendChild(imageElement);
    songItemDiv.appendChild(songNameSpan);
    songItemDiv.appendChild(songListPlaySpan);

    // Append the entire structure to the document body (you can adjust the target element as needed)
    songsContainer.appendChild(songItemDiv);

}

export default songs;