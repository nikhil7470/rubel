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
<iframe width="923" height="519" src="https://www.youtube.com/embed/fE-0Hy1OV3Y" title="shivling ki anokhi kahani" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><iframe width="984" height="519" src="https://www.youtube.com/embed/4UkJ-AziPu0" title="Chhaila | Shreya Ghoshal x Sunidhi Chauhan | Salim Sulaiman | Shraddha Pandit | Bhoomi 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    );
}

export default VideoPlayer;
