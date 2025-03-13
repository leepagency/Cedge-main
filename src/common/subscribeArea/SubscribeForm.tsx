"use client";
import { useLocale, useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { mailSubscriptionSchema } from "@/validation/mailSubscription.schema";
import { MailSubscriptionForm } from "@/types";
import { mailSubscription } from "@/actions/mailSubscription.action";
import { Button, TextField } from "@mui/material";

const SubscribeForm = () => {
  const localActive = useLocale();
  const t = useTranslations("subscribe");

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(mailSubscriptionSchema),

    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<MailSubscriptionForm> = async (data) => {
    await mailSubscription(data, localActive).then(() => {
      reset({ email: "" });
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="subscribe-form-container"
    >
      <Controller
        name={"email"}
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            sx={{
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fff !important",
              },
            }}
            className="subscribe-input-container"
            placeholder={t("enter-email")}
            {...field}
            error={fieldState.error ? true : false}
            InputProps={{
              style: {
                backgroundColor: "rgba(13, 13, 23, 1)",
                borderRadius: "12px",
                color: "#fff",
                minHeight: 0,
                height: "100%",
                paddingBlock: 0,
              },
            }}
          />
        )}
      />

      <Button
        className="subscribe-form-btn"
        variant="contained"
        disableElevation
        disabled={isSubmitting}
        type="submit"
      >
        {t("send")}
      </Button>
    </form>
  );
};
export default SubscribeForm;
