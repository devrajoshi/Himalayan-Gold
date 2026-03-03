const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

export async function api<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    credentials: "include", // Required for cookies
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Something went wrong");
  }

  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}
