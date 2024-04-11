export type Error = {
  Code: string;
  Path: string;
  Message: string;
};

export type ErrorResponse = {
  Title: string;
  Code: string;
  Errors: Error[];
  Source: string;
  StatusCode: number;
};

export const DEFAULT_ERROR_RESPONSE: ErrorResponse = {
  Title: "There was an error while handling your request.",
  Code: "Threve.InternalError",
  Errors: [],
  Source: "",
  StatusCode: 500,
};

const isApiError = (error: unknown): error is ErrorResponse => {
  if (error && typeof error === "object" && "Code" in error && "Title" in error)
    return true;

  return false;
};

export default isApiError;
