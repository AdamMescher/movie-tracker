export const loginRequested = (state = false, action) => {
  switch (action.type) {
  case 'LOGIN_REQUESTED':
    return action.status;
  default:
    return state;
  }
};

export const loginFailure = (state = false, action) => {
  switch (action.type) {
  case 'LOGIN_FAILURE':
    return action.status;
  default:
    return state;
  }
};

export const loginSuccessful = (state = false, action) => {
  switch (action.type) {
  case 'LOGIN_SUCCESSFUL':
    return true;
  case 'LOG_OUT':
    return false;
  default:
    return state;
  }
};

export const currentUserID = (state = -1, action) => {
  switch (action.type) {
  case 'LOGIN_SUCCESSFUL':
    return action.userData.data.id;
  case 'LOG_OUT':
    return -1;
  default:
    return state;
  }
};

export const currentUserName = (state = '', action) => {
  switch (action.type) {
  case 'LOGIN_SUCCESSFUL':
    return action.userData.data.name;
  case 'LOG_OUT':
    return '';
  default:
    return state;
  }
};

export const createUserRequested = (state = false, action) => {
  switch (action.type) {
  case 'CREATE_USER_REQUESTED':
    return action.status;
  default:
    return state;
  }
};

export const createUserFailure = (state = false, action) => {
  switch (action.type) {
  case 'CREATE_USER_FAILURE':
    return action.status;
  default:
    return state;
  }
};

export const createUserSuccess = (state = false, action) => {
  switch (action.type) {
  case 'CREATE_USER_SUCCESS':
    return action.status;
  default:
    return state;
  }
};
