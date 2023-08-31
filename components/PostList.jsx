import { Typography, Paper,Box } from "@mui/material";
import PostCard from "./PostCard";



function PostList({ Post, setToggleDeleteDialog,setToggleFormDialog, setDeletePost, formik }) {
  return (
    <Paper sx={{ width: "100%", height: '100vh', overflow: "auto" }}>
      {Post.length === 0 &&
      <Box sx={{height:"100%" ,width:"100%", display:"grid", placeItems:"center"}}>
        <Typography variant="h6">هیچ پستی وجود ندارد</Typography>
        </Box>
      }
      {Post.map(post => {
        return <PostCard key={post.id} post={post}
          onDelete={() => {
            setToggleDeleteDialog(true);
            setDeletePost(post.id);
          }}
          onEdit={() => {
            setToggleFormDialog(true);
            formik.setFieldValue("title", post.title)
            formik.setFieldValue("body", post.body)
            formik.setFieldValue('id', post.id)
          }}
        />
      })}
    </Paper>
  );
}

export default PostList;