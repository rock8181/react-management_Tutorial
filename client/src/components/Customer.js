import React from "react";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))`
    & .MuiTooltip-tooltip {
      background: green;
    }
  `;
class Customer extends React.Component {
  render() {
      return (    
        <TableRow>
            <TableCell>{this.props.id}</TableCell>
            <TableCell><img src={this.props.image} alt="profile"></img></TableCell>
            <TableCell>{this.props.name}</TableCell>
            <TableCell>{this.props.birthday}</TableCell>
            <TableCell>{this.props.gender}</TableCell>
            <TableCell>
                {this.props.job}
                <StyledTooltip title="I am navy">
                    <Button variant="contained" color="primary">
                        Styled tooltip
                    </Button>
                </StyledTooltip>
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    This is an error alert — <strong>check it out!</strong>
                </Alert>   
            </TableCell>            
        </TableRow>
      )  
  }
}

class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;