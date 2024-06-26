import React, { Component } from "react";
import { Link } from "react-router-dom";
import routes from "../../../../constants/routes";
import { slugify } from "../../../../utils/utils";
import { ListGroupItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Npc } from "../../../../models";

interface Props {
  onDelete: (id: string, name: string) => void;
  npc: Npc;
}

class SavedNpcListCard extends Component<Props> {
  handleDelete = () => {
    this.props.onDelete(this.props.npc.id, this.props.npc.name);
  };
  render() {
    return (
      <ListGroupItem className="my-1">
        <div className="d-flex justify-content-between">
          <div>
            <p className="font-weight-bold">{this.props.npc.name}</p>
            <span className="font-italic">
              {this.props.npc.size} {this.props.npc.type}
            </span>
          </div>
          <div className="d-flex flex-column justify-content-around">
            {/* Link to NPC form with the NPC data */}
            <Link
              className="text-right"
              to={{
                pathname: `${routes.npcForm}${slugify(this.props.npc.name)}`,
                state: {
                  npc: { ...this.props.npc },
                  editing: true
                }
              }}
            >
              <span className="font-weight-light cursor-pointer ">
                Edit
                <FontAwesomeIcon icon="edit" className="ml-2" />
              </span>
            </Link>
            <span
              onClick={this.handleDelete}
              className="font-weight-light cursor-pointer"
            >
              Delete
              <FontAwesomeIcon icon="times" className="ml-2" />
            </span>
          </div>
        </div>
      </ListGroupItem>
    );
  }
}

export default SavedNpcListCard;
