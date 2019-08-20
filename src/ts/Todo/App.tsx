import React, {PureComponent, ReactNode, FormEvent, FormEventHandler} from "react"
import {Button, ListGroupItem, ListGroup, InputGroup, FormGroup, FormControl, Glyphicon} from "react-bootstrap"
import TodoItem from "./TodoItem"

interface Props {}

interface State {
  data: string[],
  inputValue: string
}

export default class App extends PureComponent<Props, State> {
  state = {
    data: [],
    inputValue: ""
  }

  handleAddSubmit = () => {
    this.setState(({data, inputValue}) => {
      if (inputValue) {
        data.push(inputValue)
      }
      return {data: [...data], inputValue: ""}
    })
  }

  handleAddChange = (event: any) => this.setState({inputValue: event.target.value})

  handleDelete = (index: number) => {
    this.setState(({data}) => {
      data.splice(index, 1)
      return {data: [...data]}
    })
  }

  handleEdit = (index: number, value: string) => {
    this.setState(({data}) => {
      data[index] = value
      return {data: [...data]}
    })
  }

  render() {
    const {data} = this.state

    return (
      <div>
        <ListGroup>
          {data.map((item, i) =>
            <TodoItem
              key={i}
              value={item}
              onDelete={() => this.handleDelete(i)}
              onEdit={(value) => this.handleEdit(i, value)} />
          )}
          {data.length === 0 && <i>Nothing added</i>}
        </ListGroup>

        <FormGroup>
          <InputGroup>
            <FormControl type="text" value={this.state.inputValue} onChange={this.handleAddChange} />
            <InputGroup.Button>
              <Button onClick={this.handleAddSubmit}>Add</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>

      </div>
    )
  }
}
