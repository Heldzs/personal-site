import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactService, ContactFormData } from "@/services/contactService";

export function useContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const submitForm = async (data: ContactFormData) => {
    try {
      await contactService.sendMessage(data);

      setStatus("success");
      reset();

      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");

      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return {
    register,
    onSubmit: handleSubmit(submitForm),
    isSubmitting,
    status,
  };
}
