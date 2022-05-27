import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper  from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    with : '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080
  }
});

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : 'jeonsanggyun',
  'birth' : '961222-1234567',
  'gender' : '남자',
  'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : 'test',
    'birth' : 'test-1234567',
    'gender' : '남자',
    'job' : '대학생'
    },
    {
      'id' : 3,
      'image' : 'https://placeimg.com/64/64/any',
      'name' : 'rwrhjwrh',
      'birth' : 'test-wehewh',
      'gender' : '남자',
      'job' : '대학생'
      }
]

class App extends Component{
  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return (<Customer key={c.id} id = {c.id} image = {c.image} name= {c.name}  birthday= {c.birth}  gender = {c.gender}  job= {c.job}/>)})}            
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
//export default App;