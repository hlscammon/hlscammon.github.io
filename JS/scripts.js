video_is_playing = false ;

play_button = document.getElementById('playbutton') ;
video = document.getElementById('homepage_video1') ;

// the play button is listening for a mouse click.
// when clicked, it disappears and plays the video!
play_button.addEventListener('click', function () {

    play_button = document.getElementById('playbutton') ;

    if ( ! video_is_playing ) {
        play_button.style.display = 'none' ;
        video.play() ;
        video_is_playing = true ;    
    } 

});

// the video is listening for a mouse click.
// when clicked, it pauses the video!
video.addEventListener('click', function () {
    if ( video_is_playing ) {
        video.pause() ;
        play_button.style.display = 'block' ;
        video_is_playing = false ;    
    }

});

