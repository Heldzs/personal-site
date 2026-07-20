import axios from "axios";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export const contactService = {
  async sendMessage(data: ContactFormData) {
    const response = await axios.post(
      "https://formsubmit.co/ajax/helderjjobs@gmail.com",
      {
        ...data,
        _subject: "Novo contato do Portfólio!",
        _captcha: "false",
        _template: "box",
      },
    );

    return response.data;
  },
};
