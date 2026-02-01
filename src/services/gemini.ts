export interface AIInsightsResponse {
  success: boolean;
  insights?: string;
  businessName?: string;
  error?: string;
  message?: string;
  retryAfter?: number;
}

/**
 * Fetches AI-powered insights for a business from the backend API
 * @param businessName - The name of the business to analyze
 * @returns Promise with AI-generated insights or error message
 */
export async function getAIInsights(businessName: string): Promise<string> {
  if (!businessName || businessName.trim().length === 0) {
    return "Please enter a business name to analyze.";
  }

  try {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ businessName: businessName.trim() }),
    });

    const data: AIInsightsResponse = await response.json();

    if (!response.ok) {
      // Handle specific error cases
      if (response.status === 429) {
        const retryMessage = data.retryAfter
          ? `Please try again in ${data.retryAfter} seconds.`
          : 'Please try again later.';
        return `Rate limit exceeded. ${retryMessage}`;
      }

      if (response.status === 400) {
        return data.message || 'Invalid business name provided.';
      }

      if (response.status === 503) {
        return 'The AI service is temporarily unavailable. Please contact support.';
      }

      return data.message || 'Unable to generate insights at this time. Please try again.';
    }

    return data.insights || 'No insights were generated. Please try again.';

  } catch (error) {
    console.error('AI Insights Error:', error);

    if (error instanceof TypeError && error.message.includes('fetch')) {
      return 'Unable to connect to the server. Please check your connection and try again.';
    }

    return 'An unexpected error occurred. Please try again later.';
  }
}
