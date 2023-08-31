import { Typography, Box, Container, Grid, Button, Paper, Dialog, TextField, DialogTitle, DialogContent, DialogActions } from "@mui/material";


function DilogForm({ formik, open, close }) {


    return (
        <Dialog onClose={close} open={open}>
            <Paper
                sx={{
                    // height: '400px',
                    width: "400px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1
                }}>
                <DialogTitle>
                    <Typography variant="h6" >{formik.values.id ? "ویرایش پست " : "ایجاد پست جدید"}</Typography>
                </DialogTitle>
                <DialogContent>
                    <TextField label="Title" fullWidth
                        value={formik.values.title}
                        onChange={formik.handleChange('title')}
                        onBlur={formik.handleBlur('title')}
                        error={formik.touched.title && formik.errors.title}
                        helperText={formik.touched.title && formik.errors.title}
                        sx={{ mb: 2 }}
                    />
                    <TextField label="body" fullWidth value={formik.values.body}
                        onChange={formik.handleChange('body')}
                        onBlur={formik.handleBlur('body')}
                        error={formik.touched.body && formik.errors.body}
                        helperText={formik.touched.body && formik.errors.body}
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" fullWidth
                        disabled={
                            !formik.isValid ||
                            formik.isSubmitting ||
                            (!formik.dirty &&
                                formik.isValid)
                        }

                        onClick={() => formik.handleSubmit()}

                    >{formik.values.id ? "ویرایش" : "ایجاد"}</Button>
                </DialogActions>
            </Paper>
        </Dialog>
    );
}

export default DilogForm;