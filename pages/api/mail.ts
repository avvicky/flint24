import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "POST") {
        const {
            name,
            email,
            message,
        }: { name: string; email: string; message: string } = req.body;

        const subject = `${name.toUpperCase()} sent you a message from Portfolio`;
        const bodyHtml = `Name: ${name}<br>Email: ${email}<br>Message: ${message}`;
        const bodyText = `Name: ${name}\r\nEmail: ${email}\r\nMessage: ${message}`;
        console.log(process.env.MAIL_FROM,process.env.MAIL_TO,process.env.ELASTIC_EMAIL_API_KEY);
        const data = {
            apikey: process.env.ELASTIC_EMAIL_API_KEY,
            subject,
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_TO,
            bodyHtml,
            bodyText,
            isTransactional: true,
        };

        try {
            await axios.post('https://api.elasticemail.com/v2/email/send', data);
            res.status(200).json({ message: "Your message was sent successfully." });
        } catch (err) {
            res.status(500).json({ message: `There was an error sending your message. ${err}` });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}