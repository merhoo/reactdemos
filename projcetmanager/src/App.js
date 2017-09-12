import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProjects from './Components/AddProjects';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      projects:[]
    }
  }

  componentWillMount() {
    this.setState({projects: [
      {
        title: 'Business Website',
        category: "Web design"
      },
      {
        title: 'Social app',
        category: "Mobile design"
      },
      {
        title: 'Ecommerce',
        category: "Web dev"
      }
    ]})
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProjects addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
