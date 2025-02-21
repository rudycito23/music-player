const playListSongs = document.getElementById("playListSongs");

const playButton = document.getElementById("play");
const puaseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

const allSongs = [
  {
    id: 0,
    title: "Scratching The Surface",
    artist: "Q. Larson",
    duration: "4:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Q. Larson",
    duration: "4:15",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
  },
  {
    id: 3,
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
  },
  {
    id: 4,
    title: "Never Not Favored",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
  },
  {
    id: 5,
    title: "From the Ground Up",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
  },
  {
    id: 6,
    title: "Walking on Air",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
  },
  {
    id: 7,
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: 8,
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
  },
  {
    id: 9,
    title: "Chasing That Feeling",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
  },
];

const audio = new Audio();

//  the spread operator is used to make a copy of all the elements from one array into a new array;
//  it can also concatenate two arrays into one.
//  In this case, we are using it to copy all the songs from the allSongs array into the userData object.
let userData = {
  songs: [...allSongs],
  currentSong: null,
  currentSongTime: 0,
};

//  arrow functions: if it has one one parameter, you can omit the parentheses around the parameter;
//  if the function body is a single expression, you can omit the return keyword and the curly braces;
//  if the function body is a block of code, you must include the return keyword and the curly braces;
//  if the function has multiple parameters, you must include the parentheses around the parameters

//  display the songs in the UI; create a function that takes in an array argument;
//  when the songs are displayed, it should show the title, artis, song duration, and delete button
const renderSongs = (array) => {
  //  map() method iterates through an array and returns a new array based on the values of an existing array;
  //  it takes a callback function (which is a function that is passed to another function as an argument)
  //  and passes each element of the array to the callback function;
  const songsHTML = array.map((song) => {
    //  add a return statement with backticks to interpolate all the elements responsible for displaying the song details;
    //  create an li element with an id of song-${song.id} and a class of playlist-song;
    return `
    <li id="song-${song.id}" class="playlist-song">
    <button class="playlist-song-info">
    <span class="playlist-song-title">${song.title}</span>
    <span class="playlist-song-artist">${song.artist}</span>
    <span class="playlist-song-duration">${song.duration}</span>
    </button>
    <button class="playlist-song-delete" aria-label="Delete ${song.title}">
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><use href="assets/images/delete-1-svgrepo-com.svg"></use></svg>
    </button>
    </li>`;
  }).join("");

  playListSongs.innerHTML = songsHTML;
  renderSongs(userData?.songs);
};
