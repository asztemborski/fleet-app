import { NextIntlClientProvider, useMessages } from "next-intl";
import { ReactNode } from "react";

import { INPUT_ERROR_MESSAGES } from "@/constants/translations";

export const ERROR_MESSAGES = {
  required: "required",
  minLength: "min_length",
  passwordMatch: "password_match",
  invalidEmail: "invalid_email",
};

type ErrorMessagesProviderProps = {
  children: ReactNode;
};

const ErrorMessagesProvider = ({ children }: ErrorMessagesProviderProps) => {
  const messages = useMessages();

  const messagesKeys = Object.values(ERROR_MESSAGES);

  const errorMessaegs = Object.fromEntries(
    Object.entries(messages[INPUT_ERROR_MESSAGES]).filter(([key]) =>
      messagesKeys.includes(key)
    )
  );

  return (
    <NextIntlClientProvider messages={errorMessaegs}>
      {children}
    </NextIntlClientProvider>
  );
};

export default ErrorMessagesProvider;
