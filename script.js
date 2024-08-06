const prev = document.querySelector('.prev');
const playpause = document.querySelector('.playpause');
const next = document.querySelector('.next');
const audio = document.querySelector('.audio');
const title = document.querySelector('.title');

// Songs list
const SongsList = [
    {
        path: "[iSongs.info] 02 - Puvvulaku Rangeyyala.mp3",
        songname: "Puvvulaku Rangeyyala"
    },
    {
        path: "Naa Chitti Cheliya.mp3",
        songname: "Naa Chitti Cheliya"
    },
    {
        path: "[iSongs.info] 02 - Hello Hello.mp3",
        songname: "Hello Hello"
    },
    {
        path: "[iSongs.info] 01 - Oy! Oy!.mp3",
        songname: "Oy! Oy!"
    }
];

let Songs = false;

function PlaySong() {
    Songs = true;
    audio.play();
    playpause.classList.add('active');
    playpause.innerHTML = '<ion-icon name="pause"></ion-icon>';
}

function PauseSong() {
    Songs = false;
    audio.pause();
    playpause.classList.remove('active');
    playpause.innerHTML = '<ion-icon name="musical-notes"></ion-icon>';
}

playpause.addEventListener('click', () => (Songs ? PauseSong() : PlaySong()));

function LoadSong(song) {
    title.textContent = song.songname;
    audio.src = song.path;
}

let i = 0;
LoadSong(SongsList[i]);

function PrevSong() {
    i--;
    if (i < 0) {
        i = SongsList.length - 1;
    }
    LoadSong(SongsList[i]);
    PlaySong();
}

prev.addEventListener('click', PrevSong);

function NextSong() {
    i++;
    if (i > SongsList.length - 1) {
        i = 0;
    }
    LoadSong(SongsList[i]);
    PlaySong();
}

next.addEventListener('click', NextSong);
