//
//  Dono
//  recup.js
//
//  Ryan M
//


var mediaConstraints = { audio: true, video: true };

// Get user media
navigator.getUserMedia(mediaConstraints, onMediaSuccess, onMediaError);

/// On media capture success perform this
function onMediaSuccess(stream) {
    var mediaRecorder = new MediaStreamRecorder(stream);
    mediaRecorder.mimeType = 'video/webm';
    mediaRecorder.ondataavailable = function (blob) {
        // POST/PUT "Blob" using FormData/XHR2
        var blobURL = URL.createObjectURL(blob);
        document.write('<a href="' + blobURL + '">' + blobURL + '</a>');
    };
    mediaRecorder.start(3000);
}

/// On media capture failure perform this
function onMediaError(e) {
    console.error('media error', e);
}