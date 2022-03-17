import React, { Component } from 'react'

export class Userlist extends Component {
  state = { dataFromApi: [], isLoading: true, error: null };

  constructor(props) {
    super(props);
    console.log('constructor called --- ');

  }

  componentWillUnmount(){
    // console.log('componentDidMount called --- ');

  }

  async componentDidMount() {
    // console.log('componentDidMount called --- ');
    // let url = 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/by-code.json';
    let url = 'https://jsonplaceholder.typicode.com/users';

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ dataFromApi: data, isLoading: false });

    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  }

  populateData() {
    // let url = 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/by-code.json';

    const { dataFromApi, isLoading, error } = this.state;

    if (error) {
      return <div>{error}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return dataFromApi.map(element => (
      <div key={element.id}>

        <div className="col">
          <div className="col-sm-6">
            <div className="card" style={{
              marginTop: '2%',
              marginBottom: '2%'
            }}>
              <div className="card-body" style={{
                backgroundColor: this.props.mode === 'dark' ? '#010d19' : 'white',
                color: this.props.mode === 'dark' ? 'white' : 'black'
            }}>
                <h5 className="card-title">{element.name}</h5>
                <div className="card-text">Username: {element.username}</div>
                <div className="card-text">Email id: {element.email}</div>
                <div className="card-text">City: {element.address.city}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    console.log('render called --- ');
    return <div>{this.populateData()}</div>;

  }
}

export default Userlist
