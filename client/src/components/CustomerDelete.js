import React from "react";
import Button from '@mui/material/Button';
import { Dialog } from "@mui/material";
import { DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { DialogContentText } from "@mui/material";
import Typography from "@mui/material/Typography";


class CustomerDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    handleClickOpen = () => {
        this.setState({
            open: true
        });

    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }

    deleteCustomer(id){
        const url = 'http://localhost:5000/api/customers/'+id;
        fetch(url, {
            method: 'DELETE',
        });
        this.props.stateRefresh();
    }
    render() {
        return (
            <div>
            <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>삭제</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle onClose={this.handleClose}>삭제 경고</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Typography gutterBottom>
                                선택한 고객정보가 삭제 됩니다.
                            </Typography>                            
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" onClick={this.handleClose} color="primary">
                            취소
                        </Button>
                        <Button variant="contained" onClick={()=>this.deleteCustomer(this.props.id)} color="primary">
                            삭제
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default CustomerDelete;