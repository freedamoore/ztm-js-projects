const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//prompt user to select a media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        //catch error here
        console.log('whoops, error here: ', error);
    }
}

button.addEventListener('click', async () => {
    //Disable Button
    button.disabed = true;
    //Start Picture in Picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabed = false;
});

// On Load
selectMediaStream();