import {Dialog, Button, DialogActions,DialogTitle} from '@material-ui/core';

const DeleteDialog = ({ id, onOk, onCancel }) => {
    const open = id === "" ? false : true ;
        return (
            <Dialog open = {open}>
            <DialogTitle>削除してよろしいですか？</DialogTitle>
            <DialogActions>
            <Button onClick={() => onOk(id)}>はい</Button>
            <Button onClick={onCancel}>いいえ</Button>
            </DialogActions>
            </Dialog>
        );
    };
    


export default DeleteDialog;