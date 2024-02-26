import React from 'react';
import CommentsData from "../../../../../utils/CommentsData.json";
import { Box, Card, Grid, Typography } from '@mui/material';

const Comments = () => {
    return (
        <Box sx={{ height: '600px', overflowY: 'auto' }}>
            {CommentsData ? (
                CommentsData.comments.map((item, index) => (
                    <Card key={index} style={{ marginBottom: '8px', padding: '8px' }}>
                        <Grid container spacing={0.1} style={{ margin: 0 }}>
                            <Grid item sm={3} md={3}>
                                <Box>
                                    <img style={{ borderRadius: "50%", minWidth: '50px',maxWidth: '50px', minHeight:'50px',maxHeight:'50px' }} src={item.profileUrl} alt="test" />
                                </Box>
                            </Grid>
                            <Grid item sm={9} md={9}>
                                <Box sx={{ mt: 1 }}>
                                    <Typography component="h6" variant="h5">{item.commentedBy}</Typography>
                                </Box>
                                <Box>
                                    <Typography component="h6" variant="h6">{item.comments}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                ))
            ) : (
                <Typography variant="h6">No Comments Found</Typography>
            )}
        </Box>
    );
}

export default Comments;
