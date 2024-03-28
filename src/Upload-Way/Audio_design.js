import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { PlayArrow, Pause, Delete } from '@mui/icons-material';

function Audio_design(props) {
    const { audioURL } = props;
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying((prevState) => !prevState);
    };

    const handleDelete = () => {
        // Add your delete logic here
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, width: "45vw", borderRadius: "20px", boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)' }}>
            <div>
                {/* Audio Element */}
                {audioURL && (
                    <audio controls>
                        <source src={audioURL} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                )}
            </div>
            <div>
                {/* Play/Pause Button */}
                <IconButton onClick={handlePlayPause}>
                    {isPlaying ? <Pause /> : <PlayArrow />}
                </IconButton>
                {/* Delete Button */}
                <IconButton onClick={handleDelete}>
                    <Delete />
                </IconButton>
            </div>
        </div>
    );
}

export default Audio_design;
