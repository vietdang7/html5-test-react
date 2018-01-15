import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import Container from './components/container.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      partitions: []
    }
  }

  getPartitions(){
    this.setState(
      {
        partitions: [
          {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            phone: '(358)405-334433'
          },
          {
            id: 2,
            name: 'Victoria	Lamb',
            email: 'seanq@verizon.net',
            phone: '(441) 563-5846'
          },
          {
            id: 3,
            name: 'Tabitha Munoz',
            email: 'nasarius@yahoo.ca',
            phone: '(868) 336-8660'
          },
          {
            id: 4,
            name: 'Jerry Harmon',
            email: 'arachne@hotmail.com',
            phone: '(211) 354-2944'
          },
          {
            id: 5,
            name: 'Clara Strickland',
            email: 'bogjobber@msn.com',
            phone: '(116) 374-7839'
          },
          {
            id: 6,
            name: 'Krista	Rodriquez',
            email: 'ganter@icloud.com',
            phone: '(363) 562-6479'
          },
          {
            id: 7,
            name: 'Dorothy Parks',
            email: 'konit@yahoo.ca',
            phone: '(287) 376-7908'
          },
          {
            id: 8,
            name: 'Ian Wolfe',
            email: 'carmena@comcast.net',
            phone: '(862) 450-7550'
          },
          {
            id: 9,
            name: 'Lila	Mendoza',
            email: 'dkrishna@aol.com',
            phone: '(483) 409-4549'
          },
          {
            id: 10,
            name: 'Lynn	Sims',
            email: 'ahmad@icloud.com',
            phone: '(633) 150-7581'
          },
          {
            id: 11,
            name: 'Loretta Greene',
            email: 'keiji@icloud.com',
            phone: '(659) 409-2946'
          },
          {
            id: 12,
            name: 'Marion	Fuller',
            email: 'mpiotr@comcast.net',
            phone: '(610) 552-0753'
          },
          {
            id: 13,
            name: 'Fredrick	Jacobs',
            email: 'sbmrjbr@live.com',
            phone: '(656) 569-8803'
          },
          {
            id: 14,
            name: 'Kelley	Nunez',
            email: 'kobayasi@hotmail.com',
            phone: '(577) 859-0166'
          },
          {
            id: 15,
            name: 'Jill	Mcdonald',
            email: 'johnh@icloud.com',
            phone: '(264) 139-1939'
          },
          {
            id: 16,
            name: 'Shannon Montgome',
            email: 'smeier@icloud.com',
            phone: '(996) 563-4061'
          },
          {
            id: 17,
            name: 'Angela	Swanson',
            email: 'kramulous@yahoo.com',
            phone: '(319) 208-9258'
          },
          {
            id: 18,
            name: 'Ellen Bennett',
            email: 'jemarch@aol.com',
            phone: '(144) 887-0550'
          },
          {
            id: 19,
            name: 'Danny Howard',
            email: 'sassen@verizon.net',
            phone: '(438) 701-5421'
          },
          {
            id: 20,
            name: 'Yvette	Hodges',
            email: 'nichoj@outlook.com',
            phone: '(114) 209-6884'
          },
        ]
      }
    )
  }

  componentWillMount(){
    this.getPartitions();
  }

  render() {
    return (
      <div>
        <Header />
        <Container partitions={this.state.partitions} />
      </div>
    );
  }
}

export default App;
