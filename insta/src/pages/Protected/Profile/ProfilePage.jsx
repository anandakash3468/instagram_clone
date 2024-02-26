import { Box, Divider } from '@mui/material'
import React from 'react'
import ProfileTabs from './components/ProfileTabs'
import ProfileSection from './components/ProfileSection'

const ProfilePage = () => {
  return (
    <Box>
    <ProfileSection/>
    <Divider/>
    <ProfileTabs/>
    <Divider/>
    </Box>
  )
}

export default ProfilePage