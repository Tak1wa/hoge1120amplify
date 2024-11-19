import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.guest()]),
  Chat: a.conversation({
    aiModel: a.ai.model('Claude 3 Haiku'),
    systemPrompt: 'You are a helpful assistant',
  })
  .authorization((allow) => allow.owner())
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
});