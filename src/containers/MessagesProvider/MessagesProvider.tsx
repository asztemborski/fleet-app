import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages,
} from "next-intl";
import { ReactNode } from "react";

type MessagesProviderProps = {
  children: ReactNode;
  namespaces: (keyof AbstractIntlMessages)[];
};

const MessagesProvider = ({ children, namespaces }: MessagesProviderProps) => {
  const messages = useMessages();

  const flattenedMessages = Object.fromEntries(
    namespaces.flatMap((namespace) => {
      const currentNamespace = messages[namespace];
      if (!currentNamespace) return [];

      return Object.entries(currentNamespace).map(([key, value]) => {
        if (typeof value === "object" && value !== null) {
          return Object.entries(value).map(([subKey, subValue]) => [
            subKey,
            subValue,
          ]);
        }
        return [key, value];
      });
    })
  );

  return (
    <NextIntlClientProvider messages={flattenedMessages}>
      {children}
    </NextIntlClientProvider>
  );
};

export default MessagesProvider;
