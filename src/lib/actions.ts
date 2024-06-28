"use server";

import React from "react";
import { Resend } from "resend";
import ContactTemplate from "@/components/ContactTemplate";
import { ContactFormSchemaType, contactFormSchema } from "./schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (contactData: ContactFormSchemaType) => {
  const parsedContactData = contactFormSchema.safeParse(contactData);

  //validating on server side
  if (!parsedContactData.success) {
    return {
      validatingErrors: parsedContactData.error.flatten().fieldErrors,
    };
  }

  const { senderEmail, contactMessage } = parsedContactData.data;

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "jeny95kr@gmail.com",
    subject: `Message from ${senderEmail}`,
    reply_to: senderEmail,
    react: React.createElement(ContactTemplate, {
      senderEmail: senderEmail,
      message: contactMessage,
    }),
  });

  if (error) {
    return {
      errorMessage: error.message,
    };
  }

  return {
    data,
  };
};
