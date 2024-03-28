import React, { useState, useRef } from 'react';
import { Grid, Typography, Button } from '@mui/material';

function AudioPlayer({ audioFile }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center" marginTop={3}>
            <Grid item>
                <Typography variant="h6">Audio Player</Typography>
                <audio ref={audioRef} controls style={{visibility:"hidden"}}>
                    <source src={URL.createObjectURL(audioFile)} type="audio/mpeg" />
                </audio>
                <Button variant="contained" onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</Button>
            </Grid>
        </Grid>
    );
}

export default AudioPlayer;


// import React, { useState, useRef } from 'react';
// import { ReactMic } from 'react-mic';

// function AudioRecorder() {
//     const [isRecording, setIsRecording] = useState(false);
//     const [audioBlob, setAudioBlob] = useState(null);
//     const [audioURL, setAudioURL] = useState('');
//     const audioRef = useRef(null);

//     const startRecording = () => {
//         setIsRecording(true);
//     };

//     const stopRecording = () => {
//         setIsRecording(false);
//     };

//     const onSave = (recordedBlob) => {
//         setAudioBlob(recordedBlob.blob);
//         setAudioURL(recordedBlob.blobURL);
//     };

//     const playAudio = () => {
//         audioRef.current.play();
//     };

//     const pauseAudio = () => {
//         audioRef.current.pause();
//     };

//     return (
//         <div>
//             <ReactMic
//                 record={isRecording}
//                 onStop={onSave}
//                 mimeType="audio/wav"
//             />
//             <div>
//                 <button onClick={startRecording}>Start Recording</button>
//                 <button onClick={stopRecording}>Stop Recording</button>
//                 <button onClick={playAudio}>Play Audio</button>
//                 <button onClick={pauseAudio}>Pause Audio</button>
//             </div>
//             {audioBlob && (
//                 <audio ref={audioRef} controls>
//                     <source src={audioURL} type="audio/wav" />
//                 </audio>
//             )}
//         </div>
//     );
// }

// export default AudioRecorder;
