import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { PLAYER_FORM } from '../../../../constants/routes'
import { slugify } from '../../../../utils/utils'
import { deleteChar } from '../../../../actions/campaignActions'
import * as charTypes from '../../../../constants/characterTypes'
import { handleCharacterIcon } from '../../../../utils/characterIconUtil'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal, Button, Col, Card } from 'reactstrap'
import './style.css'

class PlayerListCard extends Component {
   constructor(props) {
      super(props)
      this.state = {
         deletingNpc: false,
      }
   }

   // Delete redux action
   handleDelete = () => {
      this.props.deleteChar(this.props.id, charTypes.PC)
   }

   toggleDeleteModal = () => {
      this.setState({ deletingNpc: !this.state.deletingNpc })
   }

   render() {
      return (
         <Col md="6" lg="4" className="my-2 ml-0">
            <Card className="p-3">
               <div className="d-flex justify-content-between">
                  <div className="d-flex">
                     <div className="characterIcon mr-3 mt-2">
                        {handleCharacterIcon(this.props.characterClass)}
                     </div>
                     <div>
                        <div className="d-flex flex-column justify-content-between">
                           <div>
                              <h5> {this.props.name} </h5>
                              <h6> {this.props.playerName} </h6>
                           </div>
                           <div>
                              <span className="font-weight-light">
                                 {this.props.characterLevel &&
                                    'Level ' + this.props.characterLevel}{' '}
                                 {this.props.characterRace &&
                                    this.props.characterRace}{' '}
                                 {this.props.characterClass &&
                                    this.props.characterClass}
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="d-flex flex-column justify-content-start text-right ml-3 text-nowrap">
                     {this.props.armor_class && (
                        <span className="my-1">
                           {this.props.armor_class}
                           <FontAwesomeIcon
                              icon="shield-alt"
                              className="mt-1 ml-1"
                           />
                        </span>
                     )}
                     {this.props.hit_points && (
                        <span className="my-1">
                           {this.props.hit_points}
                           <FontAwesomeIcon
                              icon="heartbeat"
                              className="mt-1 ml-1"
                           />
                        </span>
                     )}
                     {this.props.initMod && (
                        <span className="my-1">
                           {this.props.initMod}
                           <FontAwesomeIcon
                              icon="dice-d20"
                              className="mt-1 ml-1"
                           />
                        </span>
                     )}
                  </div>
               </div>
               <hr />
               <div className="d-flex justify-content-end">
                  <Link
                     to={{
                        pathname: `${PLAYER_FORM}${slugify(this.props.name)}`,
                        state: {
                           playerId: this.props.id,
                        },
                     }}>
                     <span className="font-weight-light cursor-pointer">
                        Edit
                     </span>
                     <FontAwesomeIcon icon="edit" className="mt-1 ml-2" />
                  </Link>
                  <span
                     className="font-weight-light ml-3 cursor-pointer"
                     onClick={this.toggleDeleteModal}>
                     Delete
                     <FontAwesomeIcon icon="times" className="mt-1 ml-2" />
                  </span>
               </div>
            </Card>

            <Modal
               isOpen={this.state.deletingNpc}
               toggle={this.toggleDeleteModal}>
               <div className="p-3">
                  <h3>Permanently Delete {this.props.name}? </h3>
                  <p className="font-weight-light">
                     You will not be able to recover the data for{' '}
                     {this.props.name} once deleted.
                  </p>
                  <div className="mt-2">
                     <Button color="success" onClick={this.handleDelete}>
                        Yes
                     </Button>
                     <Button
                        className="ml-2"
                        color="danger"
                        onClick={this.toggleDeleteModal}>
                        No
                     </Button>
                  </div>
               </div>
            </Modal>
         </Col>
      )
   }
}

const mapDispatchToProps = dispatch => {
   return {
      deleteChar: (id, type) => dispatch(deleteChar(id, type)),
   }
}

export default connect(
   null,
   mapDispatchToProps
)(PlayerListCard)
