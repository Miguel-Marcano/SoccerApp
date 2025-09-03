import React from "react";
import './openPage.css';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { useNavigate } from 'react-router-dom';


function Cover () {

    const navigate = useNavigate();

    const handleGoToCreateProfile = () => {
        navigate('/createProfile'); // Redirects to the '/about' route
    };

    const handleGoToMain = () => {
        navigate('/main'); // Redirects to the '/main' route
    };

    return (
    <div>
        <h1>Welcome to the Home Page!</h1>
        <p>The app to keep track of all your games, stats and more!</p>
        <img className="logo" src="https://images.vexels.com/media/users/3/132208/isolated/svg/b6c63f2ec9d7dc0b53c71d47dc800561.svg" />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ justifyContent: "center" }}>
            <Grid size={2}>
                <Button className="button" variant="contained" sx={{ display: "block", margin: "auto", bgcolor: "#031238" }} onClick={handleGoToCreateProfile}>Sign Up</Button>
            </Grid>
            <Grid size={2}>
                <Button className="button" variant="contained" sx={{ display: "block", margin: "auto", bgcolor: "#031238" }} onClick={handleGoToMain}>Login</Button>
            </Grid>
        </Grid>
        
        
    </div>
  );
}

export default Cover;