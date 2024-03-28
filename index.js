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
function generatePlaylist(guardians, songs) {
    const guardianPlaylists = {}; // created a variable to store the playlists object for each Guardian

    for (let guardian in guardians) { // Iterates over each Guardian in guardians object
        const genre = guardians[guardian];   // assigned a variable to the Guardian's(key) preferred genre(value), based on guardians object
        const playlist = songs    
            .filter(song => song.genre === genre) // the filter() method creates a new array(playlist) of only songs that match the guardians genre
            .map(song => ({ title: song.title, artist: song.artist })); // the map() method creates a new object that contains just title and artist key: value pairs.
        guardianPlaylists[guardian] = playlist;  //  adds the playlist for each guardian to the guardianPlaylists object

        // Display the playlists 
        const containerElement = document.createElement('div');
        containerElement.id = 'playlist'; // Set the id of the container element to 'playlist' for CSS styling
        document.body.appendChild(containerElement); // Appends the container element to the document body
    
        for (let guardian in guardianPlaylists) { // iterates over each guardian in the guardianPlaylists object
            const playlistContent = // variable that stores HTML content for the guardian's playlist
                // template literal used to create string for each playlist that includes guardians playlist and their name.
                // Template literal used also in the map() method to add CSS styling :
                `
                <h2>${guardian}'s Playlist</h2>
                ${guardianPlaylists[guardian]
                    .map(song => 
                        `
                        <span class="song-title">${song.title}</span> by <span>${song.artist}</span><br>
                        `
                    )
                    .join('')
                }
                `;   // map() method iterates over song array and returns a new string array of song titles and artists. join() method joins the strings into one for the innerHTML.
            containerElement.innerHTML = playlistContent; // content inside the containerElement is replaced with playlistContent (the playlist string just generated)
        }
    }
}
// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);