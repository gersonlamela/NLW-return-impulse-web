import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adaptor";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3836297d482e30",
    pass: "1d793a455f7da6",
  },
});
export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Gerson Lamela <gersonlamela7@gmail.com>",
      subject,
      html: body,
    });
  }
}
