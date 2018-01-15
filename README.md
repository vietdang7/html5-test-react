# HTML5 Test
The website is created for a HTML5 Test of Integrify programme. The question can be found [here](https://github.com/digiaonline/docs/tree/master/recruitment/html5)
This is the second version with some integration of React library.

## Example site:
[Deploy on Heroku](https://html5-test-vd.herokuapp.com/)

## Code Example
Here are some lines of example code:
1. index.js:
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App'
import 'font-awesome/css/font-awesome.min.css';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
2. app.js:
```
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
 ...

```

## Getting Started
### Prerequisites
- You need to have a code editor like **Atom** or **Sublime**
- You have lasest version of Node
- You need to install Create-React-App for build environment, please follow this [guideline](https://github.com/facebookincubator/create-react-app)

### Installation
- Clone this project (Using `git`command: `https://github.com/vietdang7/html5-test-react.git` or through your GitDesktop application)
- Copy and overwrite all folders and files to you application (which is created at create-react-app steps)

## Testing
1. In your application folder, run `npm start`
2. Open project folder in your code editor for editing

## How I deploy this application to Heroku?
I am following this [guideline](https://github.com/mars/create-react-app-buildpack) 
- In your application folder, run 
```
  git init
  heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
  git add .
  git commit -m "Start with create-react-app"
  git push heroku master
  heroku open
```
`$APP_NAME` is the name of your application.

## Built With
- HTML5
- CSS3
- Javascript
- jQuery
- CSS Reset from Meyerweb.com
- React 

## Unfinished parts
There are unfinised parts in this project due to my limited skills. This should be a fully functional React App.
- Use Create React App to scaffold your application...COMPLETED

- Generate 20 participants that contain randomized values for the following properties: id, name, email address, and phone number...COMPLETED

- Render a table that displays the participants on individual rows... COMPLETED

- Create a form for adding new participants to the table (remember to validate the form) ...NOT COMPLETED

- Make each participant editable by clicking on a table cell (inline editing) NOT COMPLETED

- Add support for deleting rows... NOT COMPLETED

- Make each column sortable upon clicking on a column header ... NOT COMPLETED

- Write a developer-friendly installation guide... COMPLETED

- Deploy a live build on the internet... COMPLETED

- Follow the design as accurately as possible (sizes and colors)... COMPLETED

## Contribution
If you want to make contribution for this project, feel free to `fork` this project and make `pull request`

## License

- Copyright of HTML5 Test is belong to [Digiaonline](https://github.com/digiaonline).
- This project is licensed under the MIT license
