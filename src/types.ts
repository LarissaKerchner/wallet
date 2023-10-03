export type ActionEmail = {
  type: string,
  payload: string
};

export type EmailState = {
  email: string
};

export type StateType = {
  user: EmailState
};
