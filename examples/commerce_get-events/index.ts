import { getEvent, getEvents } from "@coinbasejs/commerce";

const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("API_KEY not found");

// Get an event by id
const eventId = "400ecd4e-9952-412b-9726-bdb173762b05";
const event = await getEvent(eventId, apiKey);
console.log(JSON.stringify(event, null, 2));

// Get all events
const events = await getEvents(apiKey);
console.log(JSON.stringify(events.data, null, 2));
