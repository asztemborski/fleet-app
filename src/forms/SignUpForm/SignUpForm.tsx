"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "use-intl";

import FormField from "@/components/FormField";
import Input from "@/components/Input";
import {
  IconAppWindowFilled,
  IconKeyFilled,
  IconLockFilled,
  IconMailFilled,
} from "@tabler/icons-react";

import SIGNUP_FORM_RULES, { PASSOWRD_MIN_LENGTH } from "./signUpFormRules";

export type SignUpFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const DEFAULT_FORM_VALUES: SignUpFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const t = useTranslations();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: SignUpFormValues) => {
    console.log(data);
    setIsLoading(true);
  };

  return (
    <form id="signUpForm" onSubmit={handleSubmit(onSubmit)}>
      <FormField
        component={Input}
        fieldName="firstName"
        label={t("first_name_label")}
        placeholder={t("first_name_placeholder")}
        rules={SIGNUP_FORM_RULES.firstName}
        error={t(errors.firstName?.message)}
        control={control}
        icon={<IconAppWindowFilled size="20px" />}
        disabled={isLoading}
        className="bg-card"
      />
      <FormField
        component={Input}
        fieldName="lastName"
        label={t("last_name_label")}
        placeholder={t("last_name_placeholder")}
        rules={SIGNUP_FORM_RULES.lastName}
        control={control}
        error={t(errors.lastName?.message)}
        icon={<IconAppWindowFilled size="20px" />}
        disabled={isLoading}
        className="bg-card"
      />
      <FormField
        component={Input}
        fieldName="email"
        label={t("email_label")}
        placeholder={t("email_placeholder")}
        rules={SIGNUP_FORM_RULES.email}
        control={control}
        error={t(errors.email?.message)}
        icon={<IconMailFilled size="20px" />}
        disabled={isLoading}
        className="bg-card"
      />
      <FormField
        component={Input}
        type="password"
        fieldName="password"
        label={t("password_label")}
        placeholder={t("password_placeholder")}
        rules={SIGNUP_FORM_RULES.password}
        control={control}
        error={t(errors.password?.message, { number: PASSOWRD_MIN_LENGTH })}
        icon={<IconKeyFilled size="20px" />}
        disabled={isLoading}
        className="bg-card"
      />
      <FormField
        component={Input}
        fieldName="confirmPassword"
        type="password"
        label={t("confirm_password_label")}
        placeholder={t("confirm_password_placeholder")}
        rules={SIGNUP_FORM_RULES.confirmPassword}
        control={control}
        error={t(errors.confirmPassword?.message, {
          number: PASSOWRD_MIN_LENGTH,
        })}
        icon={<IconLockFilled size="20px" />}
        disabled={isLoading}
        className="bg-card"
      />
    </form>
  );
};

export default SignUpForm;
