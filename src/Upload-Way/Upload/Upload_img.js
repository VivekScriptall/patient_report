import React, { useState, useRef } from 'react';
import { Grid, Card, CardContent, Typography, Button, AppBar, Toolbar } from '@mui/material';
import { connect } from 'react-redux';
import { postData } from '../Redux/ActionUpdated'; // Import your Redux action
import Option from '../Option';
import { useNavigate } from 'react-router-dom';

function Upload_img({ postData }) {
    const [audioFile, setFile] = useState(null);
    const [audioURL, setAudioURL] = useState('');
    const audioRef = useRef(null);
    const navigate=useNavigate()

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
        setAudioURL(URL.createObjectURL(file)); // Set the audio URL when a file is selected
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setFile(file);
        setAudioURL(URL.createObjectURL(file)); // Set the audio URL when a file is dropped
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const title = "title is 123";

    const handleNext = () => {
        if (audioURL) {
            const audioElement = audioRef.current;
            const audioDuration = audioElement.duration;
            const audioTime = formatTime(audioDuration); // Format audio duration to HH:MM:SS

            // Create the data object with the desired structure
            const data = {
                audio: audioURL,
                timestamp: audioTime,
                title: title
            };

            // Dispatch the postData action with the data
            postData(data);
        } else {
            console.log("No audio URL available.");
        }

        alert("response was saved...!")
        navigate("/")
    };

    // Function to format audio duration to HH:MM:SS
    const formatTime = (durationInSeconds) => {
        const hours = Math.floor(durationInSeconds / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((durationInSeconds % 3600) / 60).toString().padStart(2, '0');
        const seconds = Math.floor(durationInSeconds % 60).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                            <Typography variant="h6" style={{ textAlign: "center", flexGrow: 1 }}>Patient Note Report</Typography>
                            <img src="/image/Frame.svg" alt="Logo" style={{ maxWidth: '100px', alignSelf: "flex-end" }} />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
                <Grid item sx={{ width: '95%', height: "80vh", m: '30px auto', borderRadius: "10px", boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)', overflowY: "auto" }}>
                    <Grid container spacing={2} mt={2} justifyContent="center" alignItems="center" style={{ height: '95%' }} >
                        <Grid item xs={12}>
                            <Option />
                            <Card style={{ border: "none", boxShadow: "none" }}>
                                <CardContent>
                                    <img src="/image/mp3_format.svg" alt="Image" style={{ height: "100px", width: "100px" }} />
                                    <div
                                        onDrop={handleDrop}
                                        onDragOver={handleDragOver}
                                        style={{
                                            border: '2px dashed #A689FF',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            padding: '20px',
                                            textAlign: 'center',
                                            cursor: 'pointer',
                                            backgroundColor: "#F9F3FF",
                                            width: "45vw",
                                            height: "100px",
                                            margin: '10px auto'
                                        }}
                                    >
                                        <Typography variant="body1">Drag and drop or</Typography>
                                        <input type="file" accept=".mp3,.wav" onChange={handleFileChange} style={{ position: 'absolute', top: '-9999px' }} />
                                        <label htmlFor="file-upload" variant="contained" component="span" style={{ borderBottom: '1px solid black', cursor: 'pointer', color: "#A689FF" }}>
                                            Browse files
                                        </label>
                                        <input id="file-upload" type="file" accept="audio/*" onChange={handleFileChange} style={{ display: 'none' }} />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: "10px" }}>
                                        {audioFile && <audio ref={audioRef} src={audioURL} controls />} {/* Display audio element with controls */}
                                    </div>
                                </CardContent>
                            </Card>
                            <Button variant="contained" onClick={handleNext} style={{ marginBottom: 10 }}>
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    postData: (data) => dispatch(postData(data)),
});

export default connect(null, mapDispatchToProps)(Upload_img);
