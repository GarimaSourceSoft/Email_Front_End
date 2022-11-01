/* eslint-disable no-duplicate-case */
/* eslint-disable import/no-anonymous-default-export */
import {
  EMAILS_INBOX,
  EMAILS_OUTBOX,
  //EMAILS_UNREAD,
  SELECTED_EMAIL,
  INDEX_EMAIL,
} from "../Actions/Type";
const initialState = {
  // ["inbox"] ["aryansource@gmail.com"]
  inbox: {},
  outbox: {},
 // unread: {  },

  selectemail: { email: "", type: '' },
 // indexemail :{index: '', email: "", type: ''},

  indexemail :{index: ''},
};




export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case EMAILS_INBOX:
      return { ...state, inbox: payload };
    case EMAILS_OUTBOX:
      return { ...state, outbox: payload };
    // case EMAILS_UNREAD:
    //   return { ...state, unread: payload };
    case SELECTED_EMAIL:
      return { ...state, selectemail: payload };
    case INDEX_EMAIL:
        return { ...state, indexemail: payload };

    default:
      return state;
  }
};

