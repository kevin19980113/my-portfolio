"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/actions";
import { ContactFormSchemaType, contactFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { FaPaperPlane } from "react-icons/fa";
import { ImSpinner3 } from "react-icons/im";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
  });

  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:jeny95kr@gmail.com">
          jeny95kr@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col gap-y-4 dark:text-black"
        onSubmit={handleSubmit(async (contactData) => {
          const { validatingErrors, errorMessage } = await sendEmail(
            contactData
          );
          if (validatingErrors) {
            const errorMessage = `${Object.values(validatingErrors).join(
              "\n"
            )}`;
            toast.error(errorMessage);
            return;
          }
          if (errorMessage) {
            toast.warning(errorMessage);
            return;
          }
          toast.success("Your message has been sent successfully!!");
          reset();
        })}
      >
        <Input
          {...register("senderEmail")}
          placeholder="Your email"
          className={cn(
            {
              "focus-visible:ring-red-500": errors.senderEmail,
            },
            "dark:text-white"
          )}
        />
        {errors?.senderEmail && (
          <p className="text-sm text-red-500 mr-auto">
            {errors.senderEmail.message}
          </p>
        )}
        <Textarea
          {...register("contactMessage")}
          placeholder="Your message"
          className={cn(
            {
              "focus-visible:ring-red-500": errors.contactMessage,
            },
            "h-40 dark:text-white"
          )}
        />
        {errors?.contactMessage && (
          <p className="text-sm text-red-500 mr-auto">
            {errors.contactMessage.message}
          </p>
        )}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="group flex items-center justify-center gap-x-2"
        >
          {isSubmitting ? (
            <ImSpinner3 className="animate-spin size-6 text-whit ml-4" />
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane
                className="text-xs opacity-70 transition-all group-hover:translate-x-1 
                group-hover:-translate-y-1"
              />{" "}
            </>
          )}
        </Button>
      </form>
    </motion.section>
  );
}
