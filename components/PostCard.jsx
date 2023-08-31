import { Typography, Box, Button } from "@mui/material";

function PostCard({ post, openDelete, onDelete,onEdit }) {
  return <Box sx={(theme) => ({ border: `1px solid ${theme.palette.grey[200]}`, p: 2, mb: 1 })}>
    <Typography gutterBottom>{post.title}</Typography>
    <Typography gutterBottom>{post.body}</Typography>
    <Typography gutterBottom>{post.createAdd}</Typography>

    <Button variant="contained" sx={{ mr: 1 }} onClick={onEdit}>ویرایش</Button>
    <Button variant="outlined" color="error"
      onClick={ onDelete}
    >حذف</Button>
  </Box>

}

export default PostCard;