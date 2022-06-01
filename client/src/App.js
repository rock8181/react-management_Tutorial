import React, {Component} from 'react';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import './App.css';
import Paper  from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const styles = theme => ({
  root: {
    with : '100%',
    minWidth: 1080,
  },
  menu: {
    marginTop : 15,
    marginLeft: 15,
    display: 'flex',
    justifyContent: 'center',
  },
  paper : {
    marginLeft: 18,
    marginRight: 18
  },
  progress: {
    margin: theme.spacing(2)
  },
  grow:{
    flexGrow: 1,
  },
  tableHead:{
    fontSize:'1.0rem',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  linearprogress: {
    margin: theme.spacing(2)
  }
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
    customers:"",
    completed:0,
    searchKeyword:'',
    }
  }
  
  stateRefresh = () => {
    this.setState({
      customers: "",
      completed: 0,
      searchKeyword:'',
    });
    this.callApi()
      .then(res => this.setState({customers : res}))
      .catch(err => console.log(err));
  }

  componentDidMount(){
    console.log('componentDidMount')
    this.timer = setInterval(this.progress, 100);   
    this.callApi()
      .then(res => this.setState({customers : res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    console.log('async')
    const reponse = await fetch('http://localhost:5000/api/customers');
    const body = await reponse.json();
    console.log(body)
    return body

  }

  progress = () => {
    const {completed} = this.state;
    //console.log(completed)
    this.setState({completed : completed > 140 ? 0 : completed + 4});
  }

  handleVauleChange = (event) => {
    let nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  }
  render(){
    const filteredComponents = (data) => {
      data =  data.filter((c) => {
        console.log(Object.keys(c))        
        //object에서 특정 값 찾기
        return Object.keys(c).some((key) => {
          return c[key].toString().toLowerCase().indexOf(this.state.searchKeyword.toLowerCase()) !== -1;
        });
        //return Object.keys(c).find(key => c[key].indexOf(this.state.searchKeyword) > -1)
      });
      return data.map((c) => {
        return <Customer stateRefresh={this.stateRefresh} key={c.id} id = {c.id} image = {c.image} name= {c.name}  birthday= {c.birthday}  gender = {c.gender}  job= {c.job}/>;
      });
    }
    const { classes } = this.props;
    const cellist = ["번호", "프로필 이미지", "이름", "생년월일","성별", "직업", "설정"];
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              고객 관리 시스템
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="검색하기"
                inputProps={{ 'aria-label': 'search' }}
                name="searchKeyword"
                value={this.state.searchKeyword}
                onChange={this.handleVauleChange}
              />
            </Search>
          </Toolbar>
        </AppBar>
        <div className={classes.menu}>
          <CustomerAdd stateRefresh={this.stateRefresh}/>
        </div>
        <Paper className={classes.paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {cellist.map(cell => {
                  return <TableCell className={classes.tableHead}>{cell}</TableCell>
                })}                
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? 
                //this.state.customers.map(c => { return (<Customer stateRefresh={this.stateRefresh} key={c.id} id = {c.id} image = {c.image} name= {c.name}  birthday= {c.birthday}  gender = {c.gender}  job= {c.job}/>)}):
                filteredComponents(this.state.customers):               
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress className = {classes.progress} variant ="determinate" value={this.state.completed} />
                    <LinearProgress className = {classes.linearprogress} />
                  </TableCell>
                </TableRow>  
              }
            </TableBody>
          </Table>
        </Paper>        
      </div>
    );
  }
}

export default withStyles(styles)(App);
//export default App;