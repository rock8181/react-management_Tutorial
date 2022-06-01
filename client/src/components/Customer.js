import React , { useEffect, useState } from "react";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import CustomerDelete from './CustomerDelete';
import ECharts, { EChartsReactProps } from 'echarts-for-react';

const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))`
    & .MuiTooltip-tooltip {
      background: green;
    }
  `;

class Customer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options :{
                title: {
                  text: 'Basic Radar Chart'
                },
                legend: {
                  data: ['Allocated Budget', 'Actual Spending']
                },
                radar: {
                  // shape: 'circle',
                  indicator: [
                    { name: 'Sales', max: 6500 },
                    { name: 'Administration', max: 16000 },
                    { name: 'Information Technology', max: 30000 },
                    { name: 'Customer Support', max: 38000 },
                    { name: 'Development', max: 52000 },
                    { name: 'Marketing', max: 25000 }
                  ]
                },
                series: [
                  {
                    name: 'Budget vs spending',
                    type: 'radar',
                    data: [
                      {
                        value: [4200, 3000, 20000, 35000, 50000, 18000],
                        name: 'Allocated Budget'
                      },
                      {
                        value: [5000, 14000, 28000, 26000, 42000, 21000],
                        name: 'Actual Spending'
                      }
                    ]
                  }
                ]
              }
                };
    }    
    render() {
        return (    
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile" height="64" width="64"></img></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>
                    {this.props.job}
                    <ECharts
                    option={this.state.options}
                    opts={{ renderer: 'svg', width: 'auto', height: 'auto' }}
                    />
                </TableCell>
                <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>          
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