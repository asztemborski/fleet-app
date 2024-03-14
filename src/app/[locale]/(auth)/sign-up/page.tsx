import { useTranslations } from "next-intl";

import Button from "@/components/Button";
import Card, {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import {
  INPUT_ERROR_MESSAGES,
  SIGNUP_FORM_MESSAGES,
  SIGNUP_PAGE_MESSAGES,
} from "@/constants/translations";
import MessagesProvider from "@/containers/MessagesProvider";
import SignUpForm from "@/forms/SignUpForm";
import { Link } from "@/utilities/navigation";
import { IconChevronLeft } from "@tabler/icons-react";

export default function SignUpPage() {
  const t = useTranslations(SIGNUP_PAGE_MESSAGES);

  return (
    <main className=" bg-card  flex justify-center items-center px-[30vw]">
      <Link
        href="/"
        className="invisible md:visible flex flex-row items-center absolute left-24 top-14 "
      >
        <IconChevronLeft />
        <p className="pl-1">{t("back")}</p>
      </Link>
      <div className="w-full max-h-screen">
        <Card className="bg-[#101214]  h-full min-w-max">
          <CardHeader className="flex flex-col items-center space-y-3">
            <CardTitle className="text-3xl font-bold">{t("sign_up")}</CardTitle>
            <CardDescription>{t("description")}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col space-y-2">
            <MessagesProvider
              namespaces={[SIGNUP_FORM_MESSAGES, INPUT_ERROR_MESSAGES]}
            >
              <SignUpForm />
            </MessagesProvider>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-6">
            <span className="text-sm mt-[-15px]">
              {t("agreements")}{" "}
              <Link className="underline" href="/terms">
                {t("terms_and_policy")}
              </Link>
            </span>
            <div className="w-full px-10">
              <Button
                type="submit"
                form="signUpForm"
                variant="secondary"
                className="w-full rounded-xl font-extrabold  tracking-widest text-md bg-card text-white border"
              >
                {t("sign_up")}
              </Button>
            </div>

            <p className="text-sm">
              {t("account_exists")}{" "}
              <Link className="underline" href="/sign-in">
                {t("log_in")}
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
