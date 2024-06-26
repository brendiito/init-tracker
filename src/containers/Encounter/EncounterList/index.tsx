import React, { Component } from "react";
import { connect } from "react-redux";
import { Row } from "reactstrap";
import EncounterListCard from "./EncounterListCard";
import { Encounter } from "../../../models";

interface Props {
  encounters: Array<Encounter>;
}

class EncounterList extends Component<Props & {}> {
  render() {
    return (
      <div className="my-2">
        <h3>Saved Encounters</h3>
        <hr />
        {this.props.encounters.length > 0 ? (
          <Row>
            {this.props.encounters.map(encounter => {
              return (
                <EncounterListCard key={encounter.id} encounter={encounter} />
              );
            })}
          </Row>
        ) : (
          "You haven't made any encounters yet, make one!"
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  encounters: state.loaded.encounters
});

export default connect<Props, {}>(mapStateToProps)(EncounterList);
