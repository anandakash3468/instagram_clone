import { Dialog, DialogContent, DialogTitle, Grid } from '@mui/material'
import React, { useState } from 'react'
import UserData from "../../../../utils/UserData.json";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ReactPlayer from 'react-player';
import Comments from './Comments/Comments';
const PostList = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedPostType, setSelectedPostType] = useState(null)
    const handleImageClick = (posts) => {

        setSelectedImage(posts.url);
        setSelectedPostType(posts.postType)

    }
    const handleClose = () => {
        setSelectedImage(null);
    };
    return (
        <>
            <ImageList cols={3} gap={8}>
                {UserData.posts.map((item) => (
                    <ImageListItem key={item.id}>
                        {
                            item.postType === "videos" ?
                                (
                                    <ReactPlayer controls url={item.url} autoplay width="100%" style={{ minHeight: "400px", maxHeight: "400px" }} onClick={() => handleImageClick(item)} />
                                ) : (
                                    <img
                                        style={{ minHeight: "400px", maxHeight: "400px" }}
                                        srcSet={`${item.thumbnailUrl}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.thumbnailUrl}?w=161&fit=crop&auto=format`}
                                        alt={item.title}
                                        loading="lazy"
                                        onClick={() => handleImageClick(item)}
                                    />
                                )
                        }
                    </ImageListItem>
                ))}
            </ImageList>

            <Dialog maxWidth="lg" fullWidth open={Boolean(selectedImage)} onClose={handleClose}>
                <DialogTitle>{UserData.userName}</DialogTitle>
                <DialogContent style={{ display: 'flex', alignItems: 'stretch' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6}>
                            {selectedPostType === "videos" ? (
                                <ReactPlayer url={selectedImage} autoplay width="100%"  sx={{ height: '600px', overflowY: 'auto'}}/>
                            ) : (
                                <img src={selectedImage} alt="Preview" style={{ maxWidth: '100%', minHeight:'600px', maxHeight:'600px' }} />
                            )}
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Comments />
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
         
        </>

    )
}

export default PostList

