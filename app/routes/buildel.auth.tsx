import { BuildelAuth } from "@buildel/buildel-auth";
import { ActionFunctionArgs, json } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  const apiKey = process.env.BUILDEL_API_KEY;

  if (!apiKey) {
    throw new Error("BUILDEL_API_KEY is not defined");
  }

  const { socket_id: socketId, channel_name: channelName } =
    await request.json();

  const buildelAuth = new BuildelAuth(apiKey);

  const authData = buildelAuth.generateAuth(socketId, channelName);

  return json(authData);
}
