// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
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
];


// Object containing each Guardian's preferred genre
const guardians = {
    'Star-Lord': "Rock",
    'Gamora': "Pop",
    'Drax': "R&B", 
    'Rocket': "Rock",
    'Groot': "Pop"
};

    // Function to generate playlist based on preferred genre
// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlists = {}; // playlists object for each Guardian

    for (let guardian in guardians) { // Iterate over each Guardian
        const genre = guardians[guardian];   // Get the Guardian's preferred genre
        const playlist = songs    
            .filter(song => song.genre === genre)  // the filter() method creates a new array of only songs of each guardians genre
            .map(song => ({ title: song.title, artist: song.artist })); // the map() method created a new object, that contains title and artist key: value pairs.
        playlists[guardian] = playlist;  // This then stores the playlist created in the playlists object above
    }

    // Display the playlists 
    const playlistsElement = document.getElementById('playlists');  // retrieves html element 'playlists'
    for (let guardian in playlists) {                       // iterates over each guardian in the playlists object
        // template literal used to create string for each playlist that includes guardians name and their playlist. Template literal used also in the map() to add CSS styling :
        const playlistDiv = `
                <h3>${guardian}'s Playlist</h3><br>
                ${playlists[guardian].map(song => `
                    <span class="song-title">${song.title}</span> by <span class="song-artist">${song.artist}</span><br>
                `).join('')}
        `;
        playlistsElement.innerHTML += playlistDiv;     // adds in the template literal as html content. += appends it instead of replacing it.
    }

}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);

        