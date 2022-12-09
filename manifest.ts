import { Manifest } from "deno-slack-sdk/mod.ts";
import Workflow from "./workflows/workflow.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "new-custom-emoji",
  description: "Notify when new custom emoji is added",
  icon: "assets/new-custom-emojo.png",
  workflows: [Workflow],
  outgoingDomains: [],
  botScopes: ["chat:write", "chat:write.public", "reactions:read"],
});
