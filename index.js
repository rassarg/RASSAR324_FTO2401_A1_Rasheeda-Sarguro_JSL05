// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songList = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Confessions", artist: "Usher", genre: "R&B" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Break My Stride", artist: "Blue Lagoon", genre: "Pop" },
    { title: "Wannabe", artist: "Spice Girls", genre: "Pop" },
    { title: "Numb", artist: "Linkin Park", genre: "Rock" },
    { title: "Revelry", artist: "Kings of Leon", genre: "Rock"},
    { title: "Toxic", artist: "Britney Spears", genre: "Pop"}
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B", 
    "Rocket": "Rock",
    "Groot": "Pop"
    // Add preferences for Drax, Rocket, and Groot
};


// Function to generate playlist based on preferred genre 

function generatePlaylist(guardians, songList) {
    // Use the map() function to create playlists for each Guardian
    const starlordPlaylist = songList.map(songList => songList.genre === "Rock");
    //console.log(starlordPlaylist.join(","));
    const gamoraPlaylist = songList.map(songList => songList.genre === "Pop");
    const draxPlaylist = songList.map(songList => songList.genre === "R&B");
    const rocketPlaylist = songList.map(songList => songList.genre === "Rock");
    const grootPlaylist = songList.map(songList => songList.genre === "Pop");

   
}   
//Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songList);

