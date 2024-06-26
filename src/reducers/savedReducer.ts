import { savedActionTypes } from "../actions";
import { Campaign, Npc } from "../models";

export interface SavedInitialState {
  campaigns: Array<Campaign>;
  npcs: Array<Npc>;
}

const savedInitialState: SavedInitialState = {
  campaigns: [],
  npcs: []
};

export const savedReducer = (state = savedInitialState, action: any) => {
  switch (action.type) {
    case savedActionTypes.CREATE_CAMPAIGN:
      return {
        ...state,
        campaigns: [...state.campaigns, action.campaign]
      };
    case savedActionTypes.SAVE_CAMPAIGN:
      if (action.campaign) {
        let savedCampaigns = state.campaigns.filter(campaign => {
          return campaign.id !== action.campaign.id;
        });
        return {
          ...state,
          campaigns: [...savedCampaigns, action.campaign]
        };
      } else {
        return state;
      }
    case savedActionTypes.SAVE_NPC:
      let npcs = state.npcs.filter(char => char.id !== action.npc.id);
      return {
        ...state,
        npcs: [...npcs.concat(action.npc)]
      };
    case savedActionTypes.DELETE_NPC:
      return {
        ...state,
        npcs: [...state.npcs.filter(npc => npc.id !== action.id)]
      };
    default:
      return state;
  }
};
