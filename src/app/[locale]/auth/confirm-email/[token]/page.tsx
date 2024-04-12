import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import Button from "@/components/Button";
import Card, {
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/Card";
import { API_URL } from "@/constants/common";
import { EMAIL_CONFIRM_PAGE_MESSAGES } from "@/constants/translations";
import { Link } from "@/utilities/navigation";
import { IconCircleCheckFilled, IconCircleXFilled } from "@tabler/icons-react";

type ConfirmEmailPageProps = {
  params: { token: string };
};

const confirmEmailRequest = async (
  confirmationToken: string
): Promise<boolean> => {
  return fetch(`${API_URL}/identity/confirm-email/${confirmationToken}`)
    .then((res) => res.ok)
    .catch(() => false);
};

const ConfirmEmailPage = async ({ params }: ConfirmEmailPageProps) => {
  const t = await getTranslations(EMAIL_CONFIRM_PAGE_MESSAGES);

  const success = await confirmEmailRequest(params.token);

  return (
    <main className=" bg-card  flex justify-center items-center ">
      <Card className="px-40 py-10 bg-[#101214] flex flex-col items-center">
        <CardTitle className="text-3xl font-bold">
          {t(success ? "success.title" : "error.title")}
        </CardTitle>
        <CardContent className=" flex flex-col items-center justify-center space-y-10 py-10">
          {success && <IconCircleCheckFilled size={"150px"} />}
          {!success && <IconCircleXFilled size={"150px"} />}
          <CardDescription className="text-lg">
            {t(success ? "success.description" : "error.description")}
          </CardDescription>
          <Link href={success ? "/auth/sign-in" : "/"}>
            <Button
              className="font-bold tracking-widest px-6 py-6 rounded-[5px] text-lg border"
              variant="secondary"
            >
              {t(success ? "success.signIn" : "error.back")}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
};

export default ConfirmEmailPage;
