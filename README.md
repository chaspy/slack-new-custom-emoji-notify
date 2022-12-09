# slack-new-custom-emoji-notify

![example.png](assets/example.png)

Notify specific channels when custom emoji is added)

## How to run

1. Create a slack channel to notify
1. Get channel ID (You can see it with copy a link of the channel. https://workspace.slack.com/archives/this-part)
1. Update `channel_id` of workflow.ts
1. Create trigger with `slack trigger create --trigger-def triggers/trigger.ts"
1. `slack deploy`
