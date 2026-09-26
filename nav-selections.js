let left_decor = document.getElementsByClassName("decor-cont")
let speed_setting = document.getElementsByClassName("speed-setting")
let arrows = document.getElementsByClassName("shadowed-x");

const volumeSlider = document.getElementById("volume-control");

let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");

let option1_content = document.getElementById("option1-content");
let option2_content = document.getElementById("option2-content");
let option3_content = document.getElementById("option3-content");

option1.addEventListener("click", function(){
    option1_content.classList.remove("hidden");
    option2_content.classList.add("hidden");
    option3_content.classList.add("hidden");
    album_cont.classList.add("hidden");
    link_cont.classList.add("hidden");
});

option2.addEventListener("click", function(){
    option1_content.classList.add("hidden");
    option2_content.classList.remove("hidden");
    option3_content.classList.add("hidden");
    album_cont.classList.add("hidden");
    link_cont.classList.remove("hidden");
});

option3.addEventListener("click", function(){
    option1_content.classList.add("hidden");
    option2_content.classList.add("hidden");
    option3_content.classList.remove("hidden");
    album_cont.classList.remove("hidden");
    link_cont.classList.add("hidden");
});

left_decor[0].addEventListener("click", function(){
    option1_content.classList.add("hidden");
    option2_content.classList.add("hidden");
    option3_content.classList.add("hidden");
    album_cont.classList.add("hidden");
    link_cont.classList.add("hidden");
});

speed_setting[0].addEventListener("click", function(){
    console.log(arrows[0])
    arrows[0].style.animationDuration = "1s";
    arrows[1].style.animationDuration = "1s";
});

speed_setting[1].addEventListener("click", function(){
    console.log(arrows[1])
    arrows[0].style.animationDuration = "4s";
    arrows[1].style.animationDuration = "4s";
});

let album_cont = document.getElementById("albums");
let link_cont = document.getElementById("links")

let song_cont = document.getElementById("song-cont");
let currentPlayingSong = null;

const audioPlayer = new Audio();

if (volumeSlider) {
    audioPlayer.volume = Number(volumeSlider.value);
    volumeSlider.addEventListener("input", function (event) {
        audioPlayer.volume = Number(event.target.value);
    });
}

const albumSongs = {
    "Late Registration": [
        { title: "Heard 'Em Say", src: 'songs/late_registration_heard_em_say.mp3' },
        { title: 'Drive Slow', src: 'songs/late_registration_drive_slow.mp3' },
        { title: 'Touch The Sky', src: 'songs/late_registration_touch_the_sky.mp3' },
        { title: "Diamonds", src: 'songs/late_registration_diamonds.mp3' },
        { title: "Celebration", src: 'songs/late_registration_celebration.mp3' }
    ],
    "Graduation": [
        { title: "Morning", src: 'songs/graduation_morning.mp3' },
        { title: 'Everthing I Am', src: 'songs/graduation_everything.mp3' },
        { title: 'Flashing Lights', src: 'songs/graduation_lights.mp3' },
        { title: "Good Life", src: 'songs/graduation_life.mp3' },
        { title: "Big Brother", src: 'songs/graduation_brother.mp3' }
    ],
    "k-Random": [
        { title: "We Major", src: 'songs/random_major.mp3' },
        { title: 'Hey Mama', src: 'songs/random_mama.mp3' },
        { title: 'Late', src: 'songs/random_late.mp3' },
        { title: "See Me Again", src: 'songs/random_see_me_again.mp3' },
        { title: "Through The Wire", src: 'songs/random_wire.mp3' },
        { title: "Dress", src: 'songs/random_dress.mp3' }
    ],
    "Luv Sic": [
        { title: "Luv pt1", src: 'songs/luv_sic_pt1.mp3' },
        { title: 'Luv pt2', src: 'songs/luv_sic_pt2.mp3' },
        { title: 'Luv pt3', src: 'songs/luv_sic_pt3.mp3' },
        { title: "Luv pt4", src: 'songs/luv_sic_pt4.mp3' },
        { title: "Luv pt5", src: 'songs/luv_sic_pt5.mp3' },
        { title: "Luv pt6", src: 'songs/luv_sic_pt6.mp3' },
        { title: "Perfect Circle", src: 'songs/luv_sic_circle.mp3' }
    ]
};

const artists = {
  kanye: ["Late Registration", "Graduation", "k-Random"],
  chill: ["Klaus Veen", "instrumentals"],
  doom: ["Operation Doomsday", "Random1", "d-Instrumentals"],
  nujabes: ["Luv Sic", "n-Random", "n-Instrumentals"]
};

document.querySelectorAll('[data-artist]').forEach(item => {
    item.addEventListener("click", function () {
        const artist = item.dataset.artist;
        const albums = artists[artist];

        album_cont.innerHTML = "";

        albums.forEach(album => {
            const div = document.createElement('div');
            div.className = 'option-small shadowed-text';
            div.textContent = album;
            div.addEventListener('click', () => showSongs(album));
            album_cont.appendChild(div);
        });
    });
});

function setPlayingSong(songElement) {
    if (currentPlayingSong && currentPlayingSong !== songElement) {
        currentPlayingSong.classList.remove('playing');
    }

    if (songElement) {
        songElement.classList.add('playing');
        currentPlayingSong = songElement;
    }
}

function playSong(song) {
    pause.src = "stop.png"
    progress_bar1.style.width = "0%";
    progress_bar2.style.width = "0%";
    audioPlayer.src = song.src;
    if (volumeSlider) {
        audioPlayer.volume = volumeSlider.value;
    }
    audioPlayer.play().catch(() => {});
}

function showSongs(album) {
    currentPlayingSong = null;
    song_cont.innerHTML = '';

    const songs = albumSongs[album];

    songs.forEach((song, idx) => {
        const div = document.createElement('div');
        div.className = 'song pixelated';
        div.textContent = song.title || `Track ${idx+1}`;
        div.addEventListener('click', function(){
            playSong(song);
            setPlayingSong(this);
        });
        div.addEventListener('mouseover', function(){ this.style.cssText = 'transform: translateY(-50px) !important'; });
        div.addEventListener('mouseleave', function(){ this.style.transform = 'translateY(0px)'; });
        song_cont.appendChild(div);
    });
}

let pause = document.getElementById("pause");

pause.addEventListener("click", function(){
    if (pause.src.endsWith("stop.png")) {
        pause.src = "song-trav.png"
        audioPlayer.pause()
    }
    else {
        pause.src = "stop.png"
        audioPlayer.play()
    }
})

document.addEventListener("keydown", function (e) {
    if (e.code === "Space" && e.target === document.body) {
        e.preventDefault();
        if (audioPlayer.paused) {
            audioPlayer.play();
            pause.src = "stop.png"
        } else {
            audioPlayer.pause();
            pause.src = "song-trav.png"
        }
    }
});

let progress_bar1 = document.getElementById("progress-bar1");
let progress_bar2 = document.getElementById("progress-bar2");

audioPlayer.addEventListener("timeupdate", function() {

    const percent = (audioPlayer.currentTime / audioPlayer.duration) * 200;
    const firstPercent = Math.min(percent, 100);
    const secondPercent = Math.max(0, percent - 100);

    progress_bar1.style.width = firstPercent + "%";
    progress_bar2.style.width = Math.min(secondPercent, 100) + "%";
});

let forward = document.getElementById("forward");
let back = document.getElementById("back");

forward.addEventListener("click", function(){
    audioPlayer.currentTime += 5
});

back.addEventListener("click", function(){
    audioPlayer.currentTime -= 5
});


/* non music links */

const links = {
  usual: ["Search", "Youtube"],
  useful: ["Excalidraw", "nuffin"],
  tools: ["RemoveBG"],
  dnd: ["Big PDF"]
};

const link_URLS = {
  "Search": "",
  "Youtube": "https://www.youtube.com/",
  "Excalidraw": "https://excalidraw.com/",
  "RemoveBG": "https://www.canva.com/features/background-remover/",
  "Big PDF": "https://media.dndbeyond.com/compendium-images/srd/5.2/SRD_CC_v5.2.pdf"
};

document.querySelectorAll('[data-link]').forEach(item => {
    item.addEventListener("click", function () {
        const link_group = item.dataset.link;
        const group_links = links[link_group] || [];

        link_cont.innerHTML = "";

        group_links.forEach(link => {
            const div = document.createElement('div');
            div.className = 'option-small shadowed-text';
            div.textContent = link;
            if(!(link == "Search")) {
                div.addEventListener('click', () => changeURL(link_URLS[link] || '#'));
            } else {
                div.addEventListener('click', () => Searchbox());
            }
            link_cont.appendChild(div);
        });
    });
});

function changeURL(url) {
    if (!url || url === '#') return;
    window.open(url, '_blank', 'noopener,noreferrer');
}

function Searchbox() {
    console.log("test");
}