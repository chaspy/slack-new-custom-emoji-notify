import { DefineFunction, Schema, SlackFunction } from 'deno-slack-sdk/mod.ts'

/**
 * Functions are reusable building blocks of automation that accept
 * inputs, perform calculations, and provide outputs. Functions can
 * be used independently or as steps in Workflows.
 * https://api.slack.com/future/functions/custom
 */
export const ResponseFunctionDefinition = DefineFunction({
  callback_id: 'response_function',
  title: 'Send a message',
  description: 'Generate a message',
  source_file: 'functions/response.ts',
  input_parameters: {
    properties: {
      subtype: {
        type: Schema.types.string,
        description: 'Message to the bot',
      },
      name: {
        type: Schema.types.string,
        description: 'Message to the bot',
      },
    },
    required: ['subtype', 'name'],
  },
  output_parameters: {
    properties: {
      response: {
        type: Schema.types.string,
        description: 'Response from the bot',
      },
    },
    required: ['response'],
  },
})

export default SlackFunction(ResponseFunctionDefinition, ({ inputs }) => {
  const response = `New custom emoji :${inputs.name}: has been added :sparkles:`
  return { outputs: { response } }
})
