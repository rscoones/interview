const React = require('react');
const Store = require('interview/stores/Store');
const ActionCreators = require('interview/actions/ActionCreators');
const {Button, Jumbotron, ListGroupItem, ListGroup} = require('react-bootstrap');

const App = React.createClass({
  getInitialState() {
    return {
      data: Store.get()
    };
  },

  _onChange() {
    this.setState({data: Store.get()});
  },

  componentWillMount() {
    Store.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    Store.removeChangeListener(this._onChange);
  },

  handleClick() {
    const data = prompt();
    ActionCreators.create(data);
  },

  render () {
    const {data} = this.state;

    return (
      <div>
        <Jumbotron>
          <h1>Test App</h1>
        </Jumbotron>

        <ListGroup>
          {data.length > 0 ?
            data.map((item, i) =>
              <ListGroupItem key={i}>{item}</ListGroupItem>
            )
          :
            <ListGroupItem><i>Nothing added</i></ListGroupItem>
          }
        </ListGroup>
        <Button onClick={this.handleClick}>Add</Button>
      </div>
    )
  }
})

module.exports = App;
