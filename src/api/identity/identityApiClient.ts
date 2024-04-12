import client from "../client";

export type SignUpRequest = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const signUpRequest = async (data: SignUpRequest) => {
  return await client.post("/identity/sign-up", data);
};

const requests = {
  signUpRequest,
};

export default requests;
