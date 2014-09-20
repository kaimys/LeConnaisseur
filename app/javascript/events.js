	
	function addEvents(){
            if(!cehtml){
                myVideo.addEventListener("loadedmetadata", function () {
                        //vLength = video.duration.toFixed(1),
                        //trace("loadedmetadata");
                }, false);

                myVideo.addEventListener("pause", function () {
                   paused();
                }, false);

                myVideo.addEventListener("playing", function () {
                            playing();
                }, false);


                //  Download and playback status events.
                myVideo.addEventListener("loadstart", function () {
                        connected();
                }, false);

                myVideo.addEventListener("loadeddata", function () {
                        buffered();
                }, false);

                myVideo.addEventListener("ended", function () {
                        complete();
                }, false);
            
            }else{
                 myVideo.onPlayStateChange=checkPlayerState;
            }
	}
	
        
        function checkPlayerState(){
            
            // TODO duplicate events
            var playState = myVideo.playState;

            switch (playState){
                    case 0: /* stopped*/

                    break;

                    case 1: /* playing*/
                         playing();
                    break;

                    case 2: /* paused*/
                         paused();
                    break;

                    case 3: /* connecting*/
                         connected();
                    break;

                    case 4: /* buffering*/
                         buffered();
                    break;

                    case 5: /* finished*/
                         complete();
                    break;

            }

	}
        
        
        
	/*
        loadstart        Browser starts loading data
        progress         Browser loads data
        suspend          Browser does not load data, waiting
        abort            Data loading was aborted
        error            An error occured
        emptied          Data not present unexpectedly
        stalled          Data transfer stalled
        play             Video started playing (fired with play())
        pause            Video has paused (fired with pause())
        loadedmetadata   Metadata loaded
        loadeddata       Data loaded
        waiting          Waiting for more data
        playing          Playback started
        canplay          Video can be played, but possibly must stop to buffer content
        canplaythrough   Enough data to play the whole video
        seeking          seeking is true (browser seeks a position)
        seeked           seeking is now false (position found)
        timeupdate       currentTime was changed
        ended            Video has ended
        ratechange       Playback rate has changed
        durationchange   Duration has changed (for streams)
        volumechange     Volume has changed
	*/
	