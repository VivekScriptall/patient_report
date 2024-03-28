import React from 'react';
import { Grid, Card, CardContent, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Option() {
const navigate =useNavigate()
  const handleRecordingClick=()=>{
    navigate("/Record_img")
  }
  const handleUploadClick=()=>{
    navigate("/Upload_img")
  }
  const handleGalleryClick=()=>{
    navigate("/Gallery_chart")
  }
    return (

        <Grid container spacing={2} mt={2} justifyContent="center" alignItems="center" style={{ height: '95%'}}>
          {/* Card 1 */}
          <Grid item>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={handleRecordingClick}>
              <CardContent sx={{padding:"10px 50px"}}>
                <img src="/image/record.svg"/>
                <Typography variant="h6">Recording</Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Card 2 */}
          <Grid item>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={handleUploadClick}>
              <CardContent  sx={{padding:"17px 50px"}}>
                <img src="/image/upload.svg"/>
                <Typography variant="h6">Upload file</Typography>
                </CardContent>
            </Card>
          </Grid>
          {/* Card 3 */}
          <Grid item>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={handleGalleryClick}>
              <CardContent  sx={{padding:"17px 70px"}}>
                <img src="/image/gallery.svg"/>
                <Typography variant="h6">Gallery</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    );
}

export default Option;