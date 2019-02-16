import React from "react";
import { FormGroup, Input } from "reactstrap";
import * as charTypes from "../../constants/characterClasses";

class CharacterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      ...this.props,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.props.listener(name, value, null);
  }

  render() {
    return (
      <div>
        <FormGroup>
          <Input
            onChange={this.handleChange}
            type="select"
            name="characterClass"
            id="characterClass"
            defaultValue={this.props.charClass}
          >
            <option value="">Select Class</option>
            <option value={charTypes.BARBARIAN}>Barbarian</option>
            <option value={charTypes.BARD}>Bard</option>
            <option value={charTypes.CLERIC}>Cleric</option>
            <option value={charTypes.DRUID}>Druid</option>
            <option value={charTypes.FIGHTER}>Fighter</option>
            <option value={charTypes.MONK}>Monk</option>
            <option value={charTypes.PALADIN}>Paladin</option>
            <option value={charTypes.RANGER}>Ranger</option>
            <option value={charTypes.ROGUE}>Rogue</option>
            <option value={charTypes.SORCERER}>Sorcerer</option>
            <option value={charTypes.WARLOCK}>Warlock</option>
            <option value={charTypes.WIZARD}>Wizard</option>
          </Input>
        </FormGroup>
      </div>
    );
  }
}

export default CharacterClass;
