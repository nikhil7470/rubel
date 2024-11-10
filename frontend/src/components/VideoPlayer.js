// frontend/src/components/VideoPlayer.js
import React, { useEffect } from 'react';

function VideoPlayer({ onVideoEnd }) {
    useEffect(() => {
        const loadPlayer = () => {
            if (window.YT) {
                new window.YT.Player('videoPlayer', {
                    events: {
                        'onStateChange': (event) => {
                            if (event.data === window.YT.PlayerState.ENDED) {
                                onVideoEnd();
                            }
                        }
                    }
                });
            } else {
                setTimeout(loadPlayer, 100);
            }
        };
        loadPlayer();
    }, [onVideoEnd]);

    return (
        <div className="video-container">
            <iframe width="923" height="519" src="https://www.youtube.com/embed/GloQBWWYTU4" title="Organic farming pros and cons ? Video no. 2 ! MOHINI the learner" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    );
}

export default VideoPlayer;
