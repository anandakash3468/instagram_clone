import { Box, Grid } from '@mui/material'
import React from 'react';
import { createTheme } from '@mui/material/styles';
import UserImageIcon from "../../../../assets/Images/userIcon.jpg";
import getLPTheme from '../../../../globals/Themes/getLPthems';
import { useTheme } from '../../../../ThemeContext';
import UserData from "../../../../utils/UserData.json"
const ProfileSection = () => {
  const { mode, } = useTheme();

  const LPtheme = createTheme(getLPTheme(mode));
  return (
    <>
      <Box sx={{
        // p: 2,/
        display: 'flex', flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        boxShadow: mode === "dark" ? "rgb(255 255 255 / 30%) 0px 1px 2px 0px, rgb(255 255 255 / 15%) 0px 2px 6px 2px" : LPtheme.shadows[2]
      }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}  >
            <img alt="complex" src={UserImageIcon} style={{ height: '180px', width: '180px' }} />
          </Grid>

          <Grid item xs={12} sm={6} md={9}  >
            <Grid container spacing={2}>
              <Grid item xs={12} style={{ margin: 0 }} >
                <h2>{UserData.userName}</h2>
              </Grid>
              <Grid item xs={4} >
                {UserData.posts.length} posts
              </Grid>
              <Grid item xs={4} >
                {UserData.followers} followers
              </Grid>
              <Grid item xs={4} >
                {UserData.following} following
              </Grid>
              <Grid item xs={12} >
                {UserData.bio}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ProfileSection
