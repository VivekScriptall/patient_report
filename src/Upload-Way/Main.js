import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import Record_img from './Record/Record_img';
import Option from './Option';
import Upload_img from './Upload/Upload_img'
import Gallery_chart from './Gallery/Gallery_chart';
import AudioPlayer from './Gallery/Audioplayer';

const Main = () => {
  

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '80vh'}}>
            <Grid item sx={{ width: '95%', height: "80vh", m: '30px auto', borderRadius: "10px", boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',overflowY:"auto" }}>
                    <Grid container spacing={2} mt={2} justifyContent="center" alignItems="center" style={{ height: '95%'}} >
                        <Option/>
                    </Grid>
            </Grid>
           
        </Grid>

    );
};

export default Main;
