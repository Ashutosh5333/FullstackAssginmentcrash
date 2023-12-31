import * as types from "./actionTypes";
import axios from "axios";
import { url } from "./api";

// --------  ADD Post DATA ----------

const AdddataReq = () => {
  return {
    type: types.ADD_DATA_REQUEST,
  };
};
const AdddataSucess = (payload) => {
  return {
    type: types.ADD_DATA_SUCCESS,
    payload,
  };
};
const AdddataFail = () => {
  return {
    type: types.ADD_DATA_FAILURE,
  };
};

//  ---------- get All post ------------ //

const getpostdataReq = () => {
  return {
    type: types.GET_DATA_REQUEST,
  };
};
const getpostdataSucess = (payload) => {
  return {
    type: types.GET_DATA_SUCCESS,
    payload,
  };
};
const getpostdataFail = () => {
  return {
    type: types.GET_DATA_FAILURE,
  };
};

//  ---------- get All post Single ------------ //

const getsingledataReq = () => {
  return {
    type: types.GETSINGLE_DATA_REQUEST,
  };
};
const getsingledataSucess = (payload) => {
  return {
    type: types.GETSINGLE_DATA_SUCCESS,
    payload,
  };
};
const getsingledataFail = () => {
  return {
    type: types.GETSINGLE_DATA_FAILURE,
  };
};

//  --------- My Post --------  //

const MypostReq = () => {
  return {
    type: types.MYPOST_DATA_REQUEST,
  };
};
const MyPostSucess = (payload) => {
  return {
    type: types.MYPOST_DATA_SUCCESS,
    payload,
  };
};
const MyPostFail = () => {
  return {
    type: types.MYPOST_DATA_FAILURE,
  };
};

// --------------- Delete Post ----------------  //

const DeleteDatareq = () => {
  return {
    type: types.DELETE_DATA_REQUEST,
  };
};
const Deletedatasucess = () => {
  return {
    type: types.DELETE_DATA_SUCCESS,
  };
};
const Deletedatafai = () => {
  return {
    type: types.DELETE_DATA_FAILURE,
  };
};

// -------------------- Updated ----------------- //

const updatedpostReq = () => {
  return {
    type: types.EDIT_DATA_REQUEST,
  };
};
const updateducess = (payload) => {
  return {
    type: types.EDIT_DATA_SUCCESS,
    payload,
  };
};
const updatedFail = () => {
  return {
    type: types.EDIT_DATA_FAILURE,
  };
};

const token = JSON.parse(localStorage.getItem("token"));

// console.log("token",token)
// --------------- Get All post list ----------------- //

export const getAllPostData = (dispatch) => {
  dispatch(getpostdataReq());
  return axios
    .get(`${url}/insta/socialpost`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return dispatch(getpostdataSucess(res.data));
    })
    .catch((e) => {
      return dispatch(getpostdataFail());
    });
};

// -----------  get Single post  ------------  //

export const getSinglePostData = (_id) => (dispatch) => {
  dispatch(getsingledataReq());
  return axios
    .get(`${url}/insta/socialpost/${_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return dispatch(getsingledataSucess(res.data));
    })
    .catch((e) => {
      return dispatch(getsingledataFail());
    });
};

//  --------------- Get MyPost ---------------- //

export const GetMyPost = (dispatch) => {
  dispatch(MypostReq());
  return axios
    .get(`${url}/insta/socialpost`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return dispatch(MyPostSucess(res.data));
    })
    .catch((e) => {
      return dispatch(MyPostFail());
    });
};

// ---------------- Delete Post ------------------ //

export const DeletePost = (_id) => (dispatch) => {
  dispatch(DeleteDatareq());
  return axios
    .delete(`${url}/insta/socialdelete/${_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return dispatch(Deletedatasucess(res));
    })
    .catch((e) => {
      return dispatch(Deletedatafai());
    });
};

// -------------  Updated post   ----------- //

export const UpdatedPost = (_id, payload) => (dispatch) => {
  dispatch(updatedpostReq());
  return axios
    .patch(`${url}/insta/socialupdate/${_id}`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return dispatch(updateducess(res.data));
    })
    .catch((e) => {
      return dispatch(updatedFail());
    });
};

export const AddPost = (payload) => (dispatch) => {
  dispatch(AdddataReq());
  return axios
    .post(`${url}/insta/create`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return dispatch(AdddataSucess(res.data));
    })
    .catch((e) => {
      return dispatch(AdddataFail());
    });
};
