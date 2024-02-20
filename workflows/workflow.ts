import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

/**
 * A Workflow is a set of steps that are executed in order.
 * Each step in a Workflow is a function.
 * https://api.slack.com/future/workflows
 */
const workflow = DefineWorkflow({
  callback_id: "workflow",
  title: "Send a message",
  description: "Send a message to channel",
  input_parameters: {
    properties: {
      subtype: {
        type: Schema.types.string,
      },
      name: {
        type: Schema.types.string,
      },
      channelId: {
        type: Schema.slack.types.channel_id,
      },
    },
    required: ["subtype", "name"],
  },
});

workflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: "UPDATEME",
  message: `New custom emoji :${workflow.inputs.name}: as \`:${workflow.inputs.name}:\` has been added :sparkles:`,
});

export default workflow;
