const fs = require('fs');
const plist = require('plist');
 
const xml = plist.parse(fs.readFileSync('3PM.xml', 'utf8'))

let playlists = []

get_playlist(xml).forEach(song => {
  playlists.push(`${song['Name']} / ${song['Artist']}`) 
  console.log(`${song['Name']} / ${song['Artist']}`)
})


function get_playlist(xml) {
  const tracks = xml.Tracks
  const playlist = xml.Playlists[0]['Playlist Items']
  const setori = []
  playlist.forEach(track => {
    const id = track['Track ID']
    setori.push(tracks[id])
  });
  return setori
}

