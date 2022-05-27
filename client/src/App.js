import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';

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
    return (
      <div>
        {
          customers.map(c => { return (<Customer
                key={c.id}
                id = {c.id}
                image = {c.image}
                name= {c.name}
                birthday= {c.birth}
                gender = {c.gender}
                job= {c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
