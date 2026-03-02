import { LEETCODE_API_URL, GET_USER_STATS_QUERY, GET_USER_SUBMISSIONS_QUERY } from "./leetcode.graphql";
import type { LeetCodeApiResponse, LeetCodeGraphQLResponse, LeetCodeUserProfile, LeetCodeUserSubmissionsData, LeetCodeSubmissionList, LeetCodeRecentAcSubmissionsData, LeetCodeRecentAcSubmission } from "@/src/types/LeetCodeApiResponse";

export class LeetcodeService {
  private username: string;

  constructor(username: string){
    this.username = username
  }


async getLeetCodeSubmissions(): Promise<LeetCodeRecentAcSubmission[]> {
  const response: Response = await fetch(LEETCODE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Referer: "https://leetcode.com",
      Origin: "https://leetcode.com",
    },
    body: JSON.stringify({
      query: GET_USER_SUBMISSIONS_QUERY,
      variables: { username: this.username, limit: 50 },
    }),
  });

  if (!response.ok) throw new Error("Failed to fetch LeetCode submissions");

  const json: LeetCodeGraphQLResponse<LeetCodeRecentAcSubmissionsData> =
    await response.json();

  if (json.errors?.length) {
    throw new Error(json.errors.map(e => e.message).join("; "));
  }

  const list = json.data?.recentAcSubmissionList;
  if (!list) throw new Error("Invalid LeetCode response");

  return list;
}

}




/*
export async function getLeetCodeStats(username: string): Promise<LeetCodeUserProfile> {
  const response = await fetch(LEETCODE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Referer: "https://leetcode.com",
    },
    body: JSON.stringify({
      query: GET_USER_STATS_QUERY,
      variables: { username },
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch LeetCode stats");
  }

  const json: LeetCodeGraphQLResponse<LeetCodeApiResponse> = await response.json();

  if (json.errors?.length) {
    throw new Error(json.errors.map(e => e.message).join("; "));
  }

  return json.data.matchedUser;
}*/


/*
  async getLeetCodeStats(): Promise<LeetCodeUserProfile> {
  const response = await fetch(LEETCODE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Referer: "https://leetcode.com",
    },
    body: JSON.stringify({
      query: GET_USER_STATS_QUERY,
      variables: { username: this.username },
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch LeetCode stats");
  }

  const json: LeetCodeGraphQLResponse<LeetCodeApiResponse> = await response.json();

  if (json.errors?.length) {
    throw new Error(json.errors.map(e => e.message).join("; "));
  }

  return json.data.matchedUser;
}*/