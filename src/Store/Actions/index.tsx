/* eslint-disable no-unreachable */
import {
  getDataApi,
} from "../../ApiWrapper";
import {
  EMAILS_INBOX,
  EMAILS_OUTBOX,
  // EMAILS_UNREAD,
  SELECTED_EMAIL,
  INDEX_EMAIL,
} from "./Type";

const setEmailInbox: any = (payload: any) => ({
  type: EMAILS_INBOX,
  payload:payload, 
});

const setEmailOutbox: any = (payload: any) => ({
  type: EMAILS_OUTBOX,
  payload:payload, 
});

// const setEmailUnread: any = (payload: any) => ({
//   type: EMAILS_UNREAD,
//   payload:payload, 
// });


export const setSelectedEmail: any = (payload: any) => ({
  type: SELECTED_EMAIL,
  payload:payload, 
});

export const setIndexEmail: any = (payload: any) => ({
  type: INDEX_EMAIL,
  payload:payload, 
});




// Get data from endpoint
export const getPayload =
  (baseEndPoint: String, queryParams: any = {}) =>
  (dispatch: any) => {
    return getDataApi(baseEndPoint, queryParams)
      .then((response) => response.data)
      .then((data) => {
        switch (baseEndPoint) {
          case EMAILS_INBOX:
            dispatch(setEmailInbox(data.data_summary
              ));
            break;
          case EMAILS_OUTBOX:
              dispatch(setEmailOutbox(data.data_summary));
              break;
        //  case EMAILS_UNREAD:
        //         dispatch(setEmailUnread(data.data_summary));
        //         break;

        //  case SELECTED_EMAIL:
        //           dispatch(setEmailUnread(data.data_summary));
        //           break;
  


          default:
            return data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  













// export const SubmitPost: any =
//   (baseEndPoint: String, queryParams: any = {}) =>
//   (dispatch: any) => {
//     return postDataApi(baseEndPoint, queryParams)
//       .then((response) => response.data)
//       .then((data) => {
//         switch (baseEndPoint) {
          
//           default:
//             return data;
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         return JSON.parse(error);
//       });
//   };

// export const SubmitUpdate =
//   (baseEndPoint: String, queryParams: any = {}) =>
//   (dispatch: any) => {
//     return patchDataApi(baseEndPoint, queryParams)
//       .then((response) => response.data)
//       .then((data) => {
//         switch (baseEndPoint) {
//           default:
//             return data;
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         return JSON.parse(error);
//       });
//   };

// export const SubmitEdited =
//   (baseEndPoint: String, queryParams: any = {}) =>
//   (dispatch: any) => {
//     return DeleteDataApi(baseEndPoint, queryParams)
//       .then((response) => response.data)
//       .then((data) => {
//         switch (baseEndPoint) {
          
//           default:
//             return data;
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         return JSON.parse(error);
//       });
//   };
