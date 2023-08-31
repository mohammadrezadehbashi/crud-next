import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

function DeleteDialog({ open, onClose, handleDelete }) {
    return (
        <Dialog sx={{ mt: 3 }} open={open} onClose={onClose}>
            <Box sx={{ p: 2 }}>
                <DialogTitle>
                <Typography gutterBottom variant="h5" >حذف پست</Typography>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="h6" gutterBottom sx={{ my: 2, textAlign: 'center' }}>آیا برای پاک کردن این مورد مطمئن هستید ؟</Typography>
                </DialogContent>
                <DialogActions>
                    <Button sx={{ mt: 4 }} variant="contained" color="error" onClick={handleDelete} fullWidth>حذف</Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}

export default DeleteDialog;