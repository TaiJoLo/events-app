import prisma from "../../../lib/prisma";

export default async function test(req, res) {
  const { email, eventId, cityId } = req.body;
  console.log("req.body_eamil_registration:", email, eventId);
  const result = await prisma.emails.create({
    data: {
      email: email,
      event_id: eventId,
      city_id: cityId,
    },
  });

  res.status(201).json(result, {
    message: `You have been registered successfully with the email: ${email} for the event: ${eventId}`,
  });
}
