import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_PROMPT = `You are TutorAI, a friendly and expert AI teaching assistant on an online tutoring platform. Your role is to help students learn by:

- Providing clear, step-by-step explanations
- Using examples and analogies to make concepts easier to understand
- Encouraging students and keeping a positive, supportive tone
- Asking follow-up questions to check understanding when appropriate
- Covering subjects including math, science, programming, history, literature, and more
- Formatting responses with markdown when helpful (bullet points, bold for emphasis, code blocks for programming)

Keep your responses concise but thorough. If a question is ambiguous, ask for clarification. Always be accurate — if you're unsure about something, say so honestly.`;

export async function POST(request) {
  try {
    const { messages } = await request.json();

    // Using the explicitly provided API key as a fallback if the environment variable is missing
    const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyDXAOphCHAWyepqR6-2xPI889hC1JuofJA';
    if (!apiKey) {
      return Response.json(
        { error: 'GEMINI_API_KEY is not configured.' },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      systemInstruction: SYSTEM_PROMPT
    });

    // Build chat history from messages (exclude the latest user message)
    let history = messages.slice(0, -1).map((msg) => ({
      role: msg.role === 'ai' ? 'model' : 'user',
      parts: [{ text: msg.text }],
    }));
    
    // Google Gemini API rule: Chat history MUST strictly alternate and MUST start with a 'user' message. 
    // We clean up the frontend's initial greeting message to prevent crashes!
    if (history.length > 0 && history[0].role === 'model') {
      history = history.slice(1);
    }

    const chat = model.startChat({
      history: history,
    });

    const latestMessage = messages[messages.length - 1].text;

    // Stream the response
    const result = await chat.sendMessageStream(latestMessage);

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return Response.json(
      { error: 'Failed to generate response. ' + error.message },
      { status: 500 }
    );
  }
}
