
var songInfo = function () {
};

SongInfo.prototype.getSongInfo = function(title, artist, album) {
  var songInfoObj = {
    title: title,
    artist: artist,
    album: album
  }
  return songInfoObj;
  }
};
