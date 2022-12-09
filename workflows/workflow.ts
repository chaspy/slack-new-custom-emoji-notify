import { DefineWorkflow, Schema } from 'deno-slack-sdk/mod.ts'
import { ResponseFunctionDefinition } from '../functions/response.ts'

/**
 * A Workflow is a set of steps that are executed in order.
 * Each step in a Workflow is a function.
 * https://api.slack.com/future/workflows
 */
const Workflow = DefineWorkflow({
  callback_id: 'workflow',
  title: 'Send a message',
  description: 'Send a message to channel',
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
    required: ['subtype', 'name'],
  },
})

const FunctionStep = Workflow.addStep(ResponseFunctionDefinition, {
  subtype: Workflow.inputs.subtype,
  name: Workflow.inputs.name,
})

Workflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: 'UPDATEME',
  message: FunctionStep.outputs.response,
})

export default Workflow
