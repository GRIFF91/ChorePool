import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
import API from '../../utils/API';
import Nav from '../../components/nav/nav';

class addChore extends Component {

  state = {
    name: '',
    description: ''
  }

  addChore = () => {
    const { name, description } = this.state;
    API.addChore(name, description)
    .then(res => {
      console.log('Chore Added')
      this.setState({ name: '', description: '' })
    })
    .catch( err => console.log(err) );
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.addChore();
  }

    render() {
        return (
          <div>
            <Nav history={this.props.history} />
            <Container fluid>
              <div className="card text-white bg-primary mb-3">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Add A Chore</label>
                        <input
                          name="name"
                          type="addChore"
                          className="form-control"
                          id="AddAChore"
                          value={this.state.name}
                          onChange={this.handleInputChange}
                        />
                    </div>

                        <label htmlFor="description">Chore Description</label>
                        <textarea
                          name="description"
                          className="form-control"
                          rows="3"
                          value={this.state.description}
                          onChange={this.handleInputChange}
                        > </textarea>
                          <br />
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={this.handleSubmit}
                        > Submit </button>
                
                </form>
              </div>
            </Container>
          </div>
        );
    }
}

export default addChore;