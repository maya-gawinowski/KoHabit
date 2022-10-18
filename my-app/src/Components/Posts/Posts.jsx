import Box from '@mui/material/Box';
import PostCard from './PostCard';

function Posts() {
    return(
        <Box sx={{ width: '100%', m: '2rem' }}>
        <h1>Our Posts</h1>
        <PostCard></PostCard>
    </Box>
    )
    
}

export default Posts;