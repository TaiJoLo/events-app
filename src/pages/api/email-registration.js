import prisma from "../../../lib/prisma";

export default async function test(req, res) {
  const { method } = req;
  const { email, eventId, cityId } = req.body;

  if (!eventId) {
    return res.status(404).json({
      status: 404,
      message: "Events data not found",
    });
  }
  if (method === "POST") {
    if (!email | !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
    } else {
      const match = await prisma.emails.findMany({
        where: {
          email: email,
          event_id: eventId,
          city_id: cityId,
        },
      });
      console.log("match:", match);
      if (match.length !== 0) {
        res.status(409).json({
          message: `This email: ${email} has already been registered `,
        });
      } else {
        const result = await prisma.emails.create({
          data: {
            email: email,
            event_id: eventId,
            city_id: cityId,
          },
        });

        res.status(201).json({
          data: result,
          message: `You have been registered successfully with the email: ${email} for the event: ${eventId}`,
        });
      }
    }
  }
}
