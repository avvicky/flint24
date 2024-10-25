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
        const { name, email, message }: { name: string; email: string; message: string } = req.body;

        // EmailJS-specific data format
        const data = {
            service_id: process.env.EMAILJS_SERVICE_ID, // Replace with actual environment variable
            template_id: process.env.EMAILJS_TEMPLATE_ID, // Replace with actual environment variable
            user_id: process.env.EMAILJS_USER_ID, // Replace with actual environment variable
            template_params: {
                'username': name,
                'email': email,
                'message': message,
            },
        };
        console.log(data);
        try {
            await axios.post('https://api.emailjs.com/api/v1.0/email/send', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            res.status(200).json({ message: "Your message was sent successfully." });
        } catch (err) {
            res.status(500).json({ message: `There was an error sending your message. ${err}` });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
