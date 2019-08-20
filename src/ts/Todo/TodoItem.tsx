import React, {PureComponent} from "react"
import {Button, ListGroupItem, ListGroup, InputGroup, FormGroup, FormControl, Glyphicon} from "react-bootstrap"

interface Props {
  value: string
  onDelete: () => void
  onEdit: (value: string) => void
}

interface State {
  isEditting: boolean,
  newValue: string
}

export default class TodoItem extends PureComponent<Props, State> {
  state = {
    isEditting: false,
    newValue: ""
  }

  handleStartEditting = () => this.setState({isEditting: true, newValue: this.props.value})

  handleChange = (event: any) => this.setState({newValue: event.target.value})

  handleEdit = () => {
    const {onEdit} = this.props
    onEdit(this.state.newValue)
    this.setState({isEditting: false})
  }

  render() {
    const {value, onDelete} = this.props
    const {newValue} = this.state

    return (
      <ListGroupItem>
        {this.state.isEditting &&
          <InputGroup>
          <FormControl type="text" value={newValue} onChange={this.handleChange} />
          <InputGroup.Button>
            <Button onClick={this.handleEdit}>Save</Button>
          </InputGroup.Button>
        </InputGroup>
        }
        {!this.state.isEditting &&
          <>
            {value}
            <Glyphicon className="pull-right" glyph="remove" onClick={onDelete} />
            <Glyphicon className="pull-right" glyph="edit" onClick={this.handleStartEditting} />
          </>
        }

      </ListGroupItem>
    )
  }
}
