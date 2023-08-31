
import DeleteDialog from "@/components/DeleteDialog";
import DilogForm from "@/components/DilogForm";
import PostList from "@/components/PostList";
import createPost from "@/services/createPost";
import deletePostById from "@/services/deletePostById";
import getAllPosts from "@/services/getAllPosts";
import updateById from "@/services/updateById";
import { Typography, Box, Container, Grid, Button, Paper, Dialog, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";

const validationSchema = yup.object({
  title: yup.string().required("مقدار مناسب را قرار دهید"),
  body: yup.string().required("مقدار مناسب را قرار دهید"),
})

// const inter = Inter({ subsets: ['latin'] })
// export const Post = [
//   { id: 1, title: "title1", content: "awe wg ", createAdd: "2023-02-01" },
//   { id: 2, title: "title2", content: "afe ef ", createAdd: "2023-02-01" },
//   { id: 3, title: "title3", content: "s efqfq feqqf", createAdd: "2023-02-01" },
//   { id: 4, title: "title4", content: "qwfqf32r2 ef qff", createAdd: "2023-02-01" },
//   { id: 5, title: "title5", content: "liulll ef qff", createAdd: "2023-02-01" },
//   { id: 6, title: "title6", content: "k fjhl;luqef aafqe", createAdd: "2023-02-01" },
//   { id: 7, title: "title7", content: "323242 2t2ef qff", createAdd: "2023-02-01" }
// ]

export default function Home({ Post = [] }) {

  const [toggleFormDialog, setToggleFormDialog] = useState(false)
  const [toggleDeleteDialog, setToggleDeleteDialog] = useState(false)
  // const [EditPutDialog, setEditPutDialog] = useState(false)

  const [deletePost, setDeletePost] = useState(null)
  // const [editPut, setEditPut] = useState(null)
  const [allPosts, setAllPosts] = useState(Post)

  const formik = useFormik({
    initialValues: {
      id: null,
      title: '',
      body: ''
    },
    validationSchema,
    onSubmit: async (values, formikHelpers) => {
      try {
        if (values.id) {
          const res = await updateById(values);
          const edited=(prev) => 
            prev.map((post) => {

              if (post.id === values.id) {
                return res.data
              }
              return post;
            })
            setAllPosts(edited)
        } else {
          const res = await createPost(values);
          // Post.push(res)
          // Post.unshift(res)
          setAllPosts((prev) => [res, ...prev]);

          // console.log(formikHelpers);
        }

        formikHelpers.resetForm();
        setToggleFormDialog(false)

      } catch (error) {
        console.log(error);
      } finally {
        formikHelpers.setSubmitting(false)
      }
    }
  })
  console.log(deletePost);

  const handleDelete = async () => {
    setToggleDeleteDialog(false)
    if (!deletePost) return;
    try {
      await deletePostById(deletePost);

      // return res
      setAllPosts(prev => prev.filter((post) => post.id !== deletePost))
      // console.log("salammm",posts)

    } catch (error) {
      console.log(error);
    }

  }
  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch();
  //     setPosts(res.data);
  //   })()
  // }, [])

  return <Box sx={(theme) => ({
    minHeight: "100hv",
    backgroundColor: theme.palette.grey[300],
  })}
  >
    {/* <Container sx={{ border: { xl: '1px solid red' } }}>
      <Typography variant="h1">Home Page</Typography>
    </Container> */}

    <Container maxWidth="md" sx={{ py: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          {/* <Box sx={{ height: '100px', border: "1px solid red", width: "100%" }} /> */}
          <Button variant="contained" fullWidth onClick={() => setToggleFormDialog(true)}>افزودن</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={9} >
          <PostList Post={allPosts}
            setToggleDeleteDialog={setToggleDeleteDialog}
            setDeletePost={setDeletePost}
            formik={formik}
            // setEditPutDialog={setEditPutDialog}
            setToggleFormDialog={setToggleFormDialog}
          />
        </Grid>
      </Grid>
    </Container>

    <DilogForm open={toggleFormDialog} close={() => {setToggleFormDialog(false);formik.resetForm()}} formik={formik}
    // openEdit={toggleEditDialog} closeEdit={() => setToggleEditDialog(false)} 
    />

    <DeleteDialog
      open={toggleDeleteDialog}
      onClose={() => {setToggleDeleteDialog(false);formik.resetForm()}}
      handleDelete={handleDelete}
    />

  </Box>

}


export async function getServerSideProps() {

  const Post = await getAllPosts();
  console.log('sallllam1', Post);

  // console.log(Post);
  return {
    props: {
      Post: Post
    },
  };
}