import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Delete } from '@mui/icons-material';
import { Grid, Card, CardContent, Typography, Button, Box,AppBar,Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from '../Redux/ActionUpdated';



function Gallery_chart({ patientDetail, loading, error, fetchData }) {
    // const [patientDetail,setpatientDetail]=useState('')
    const navigate=useNavigate()
    // useEffect(()=>{
    //     fetch("http://localhost:8000/Detail")
    //     .then((res)=>{return res.json()})
    //     .then((data)=>{
    //         setpatientDetail(data)
    //     })
    // },[])
    // console.log(patientDetail);

    useEffect(()=>{
        fetchData();
    },[fetchData])

    if(patientDetail)
    {
        console.log(patientDetail);
    }
    const handleNewAUdio=()=>{
      navigate("/")
    }
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
            <div style={{width:"100%",display:"flex",justifyContent:"end",alignItems:"center",paddingTop:"15px"}}>
                <Button variant="contained" style={{marginRight:"10px"}} onClick={handleNewAUdio}>
                    + Create NEw Audio
                </Button>
            </div> 
            <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '80vh'}}>
                <Grid item sx={{ width: '95%', height: "80vh", m: '30px auto', borderRadius: "10px", boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',overflowY:"auto" }}>
                    <Grid container spacing={2} mt={2} justifyContent="center" alignItems="center" style={{ height: '95%'}} >
                        <TableContainer component={Paper}>            
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">No.</TableCell>
                                        <TableCell align="center">Patient name</TableCell>
                                        <TableCell align="center">Audio File</TableCell>
                                        <TableCell align="center">DAte</TableCell>
                                        <TableCell align="center"></TableCell>
                                        <TableCell align="center">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                    <TableBody>
                                    {patientDetail.map((row) => (
                                        <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell align="center">{row.id}</TableCell>
                                        <TableCell align="center" component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="center"><audio controls></audio></TableCell>
                                        <TableCell align="center">{row.date}</TableCell>
                                        <TableCell align="center">
                                            <img src='/image/eye.svg' height={20} width={20}/>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Delete></Delete>
                                        </TableCell>

                                        </TableRow>
                                    ))}
                                    </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
    </>

    );
}

const mapStateToProps = (state) => ({
    patientDetail: state.data.patientDetail,
    loading: state.data.loading,
    error: state.data.error,
  });
  
  const mapDispatchToProps = {
    fetchData,
  };

export default connect(mapStateToProps,mapDispatchToProps)(Gallery_chart);