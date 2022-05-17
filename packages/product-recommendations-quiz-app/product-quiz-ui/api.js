import { Client } from "@gadget-client/Quiz-Tutorial-BQ";

export const api = new Client({
  authenticationMode: {
    apiKey: process.env.API_KEY,
  },
});
