'use strict';

const pauseSelector = '#web-player > player-controls > main-playback-buttons > button.mat-focus-indicator.pause-track.mat-icon-button.mat-button-base';
const albumSelector = '#web-player > div > nav-sidebar > div.current-track.ng-star-inserted > media-image > img';
const currentTimeSelector = '#web-player > div > nav-sidebar > div.current-track.ng-star-inserted > media-image > img';

Connector.playerSelector = '#web-player > player-controls';
Connector.artistSelector = '.artist-name';
Connector.trackSelector = '.track-name';
Connector.playButtonSelector = '#web-player > player-controls > main-playback-buttons > button.mat-focus-indicator.play-track.mat-icon-button.mat-button-base';
Connector.pauseButtonSelector = pauseSelector;
Connector.durationSelector = '.track-length';
Connector.currentTimeSelector = currentTimeSelector;
Connector.trackArtSelector = '#web-player > div > nav-sidebar > div.current-track.ng-star-inserted > media-image > img';

Connector.getAlbum = () => {
	// Artist / Album
	const artistAlbumStr = $(albumSelector).attr('alt');
	if (artistAlbumStr) {
		return artistAlbumStr;
	}

	return null;
};

Connector.isPlaying = () => {
	return $(pauseSelector).hasClass('hidden') && $(currentTimeSelector).text() !== '0:00';
};
