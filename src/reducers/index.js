import { combineReducers } from 'redux';
import userImages from './userImagesReducer';
import invites from './InvitesContainer';
import userPartners from './userPartnersReducers';
import allArtists from './allArtistsReducer';
import profileImages from './profileImagesReducer';
import profilePartners from './profilePartnersReducer';
import artistInfo from './artistInfoReducer';
import galleryInfo from './galleryInfoReducer';
 
export default combineReducers({
  userImages,
  userPartners,
  invites,
  profileImages,
  profilePartners,
  artistInfo,
  galleryInfo,
  allArtists
});
