// tools/safeFetch.ts

export type SafeFetchResult<T> = {
  data: T | null
  error: string | null
  status: number
}

export async function safeFetch<T>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<SafeFetchResult<T>> {
  try {
    const res = await fetch(input, init)

    const contentType = res.headers.get("content-type") || ""
    if (!res.ok) {
      const errorText = await res.text()
      return {
        data: null,
        error: errorText || `Request failed with status ${res.status}`,
        status: res.status,
      }
    }
    if (contentType.includes("application/json")) {
      const data = (await res.json()) as T
      return {
        data,
        error: null,
        status: res.status,
      }
    }
    const text = await res.text()
    return {
      data: null,
      error: `Expected JSON but received: ${text}`,
      status: res.status,
    }
  } catch (error) {
    return {
      data: null,
      error:
        error instanceof Error
          ? error.message
          : "Unknown fetch error occurred",
      status: 0,
    }
  }
}