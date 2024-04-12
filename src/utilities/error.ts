export type Error = {
  code: string;
  path: string;
  message: string;
};

export type ErrorResponse = {
  title: string;
  code: string;
  errors: Error[];
  source: string;
  statusCode: number;
};

export const DEFAULT_ERROR_RESPONSE: ErrorResponse = {
  title: "There was an error while handling your request.",
  code: "Threve.InternalError",
  errors: [],
  source: "",
  statusCode: 500,
};

const isApiError = (error: unknown): error is ErrorResponse => {
  if (error && typeof error === "object" && "code" in error && "title" in error)
    return true;

  return false;
};

export default isApiError;
