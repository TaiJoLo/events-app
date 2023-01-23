import prisma from "../../../lib/prisma";

export default function test() {
  const { method } = req;
  const { email, eventId } = req.body;
  console.log("email is here: ", email, eventId);
  return {};
}

// export default async function handler(req, res) {
//   const { method } = req;

//   if (method === "POST") {
//     const { email, eventId } = req.body;
//     console.log("email is here: ", email, eventId);

//     if (!email | !email.includes("@")) {
//       res.status(422).json({ message: "Invalid email address" });
//     }

//     const result = await prisma.emails.create({
//       data: {
//         email: email,
//         eventId: eventId,
//       },
//     });
//     res.json(result);

//     res.status(201).json({
//       message: `You have been registered successfully with the email: ${email} for the event: ${eventId}`,
//     });
//   }
// }
