import { createAnthropic } from '@ai-sdk/anthropic';
import { createOpenAI } from '@ai-sdk/openai';

export function getAnthropicModel(apiKey: string) {
  const anthropic = createAnthropic({
    apiKey,
    baseURL: process.env.BASE_URL,
  });

  return anthropic('claude-3-5-sonnet-20240620');
}

export function getOpenAIModel(apiKey: string) {
  const openai = createOpenAI({
    apiKey,
    baseURL: process.env.BASE_URL,
  });

  return openai('gpt-4o');
}
