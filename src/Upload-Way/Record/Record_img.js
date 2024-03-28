import React, { useState, useRef } from 'react';
import { Grid, Card, CardContent, Typography, Button, Box, AppBar, Toolbar } from '@mui/material';
import { ReactMic } from 'react-mic';
import Option from '../Option';

function Record_img() {
  const [isRecording, setIsRecording] = useState(false);
  const [audiopresent, setAudioPresent] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const audioRef = useRef(null);

  const startRecording = () => {
    setIsRecording(true);
    console.log('start recording');
  };

  const stopRecording = () => {
    setIsRecording(false);
    console.log('pause recording');
    setAudioPresent(true);
  };

  const onSave = (recordedBlob) => {
    setAudioURL(recordedBlob.blobURL);
    console.log('save recording');
    // Here you can send the audioURL to your backend
    // For example: sendAudioToBackend(recordedBlob.blobURL);
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
              <Card style={{ border: "none", boxShadow: "none", marginTop: "10px", textAlign: "center" }}>
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="/image/record.svg" alt="Image" style={{ height: "140px", width: "140px" }} />
                  <Box mt={2} mb={2}>
                    {/* Hidden ReactMic component */}
                    <ReactMic
                      record={isRecording}
                      onStop={onSave}
                      onStart={startRecording}
                      mimeType="audio/wav"
                      className='react_Mic'
                    />
                    {/* Start/Pause Recording button */}
                    {isRecording ? (
                      <Button variant="contained" onClick={stopRecording}>
                        Pause Recording
                      </Button>
                    ) : (
                      <Button variant="contained" onClick={startRecording}>
                        Start Recording
                      </Button>
                    )}
                  </Box>
                  {/* Display audio player if audio is present */}
                  {audiopresent && (
                    <audio ref={audioRef} src={audioURL} controls />
                  )}
                </CardContent>
              </Card>
              {/* Next Button */}
              <Button variant="contained" style={{marginTop:-10 ,marginBottom:10}}>
                Next
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Record_img;
