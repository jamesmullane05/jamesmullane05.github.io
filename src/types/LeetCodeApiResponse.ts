// types/leetcode/LeetCodeApiResponse.ts
// Aligned with the JSON you pasted: { "data": { "matchedUser": ... } }

export type LeetCodeGraphQLResponse<T> = {
  data?: T;
  errors?: Array<{ message: string }>;
};

export interface LeetCodeApiResponse {
  matchedUser: LeetCodeUserProfile;
  userContestRanking?: LeetCodeUserContestRanking | null;
  userContestRankingHistory?: LeetCodeUserContestHistory[];
}

export interface LeetCodeUserContestHistory {
  attended: boolean;
  trendDirection: string;
  problemsSolved: number;
  totalProblems: number;
  finishTimeInSeconds: number;
  rating: number;
  ranking: number;
  contest: {
    title: string;
    startTime: number; // timestamp
  };
}

export interface LeetCodeUserContestRanking {
  attendedContestsCount: number;
  rating: number;
  globalRanking: number;
  totalParticipants: number;
  topPercentage: number;
}

export interface LeetCodeUserProfile {
  username: string;
  profile: {
    ranking: number;
    reputation: number;
    starRating: number;
    userAvatar: string;
    realName?: string;
    aboutMe?: string;
    school?: string;
    websites?: string[];
    countryName?: string;
    company?: string;
    jobTitle?: string;
    skillTags?: string[];
  };

  // ✅ matches your pasted output: matchedUser.submitStats.acSubmissionNum
  submitStats: {
    acSubmissionNum: {
      difficulty: "All" | "Easy" | "Medium" | "Hard";
      count: number;
      submissions: number;
    }[];
  };

  // In your pasted output it's [], and sometimes LeetCode may omit fields,
  // so keep badge fields optional for safety.
  badges: {
    id?: number;
    displayName?: string;
    icon?: string;
    creationDate?: string;
  }[];

  languageProblemCount: {
    languageName: string;
    problemsSolved: number;
  }[];

  // Not present in your pasted JSON (depends on query), so optional
  tagProblemCounts?: {
    advanced: {
      tagName: string;
      tagSlug: string;
      problemsSolved: number;
    }[];
    intermediate: {
      tagName: string;
      tagSlug: string;
      problemsSolved: number;
    }[];
    fundamental: {
      tagName: string;
      tagSlug: string;
      problemsSolved: number;
    }[];
  };

  // Optional (depends on query)
  contestBadge?: {
    name: string;
    expired: boolean;
    hoverText: string;
    icon: string;
  };
}



// types/leetcode/LeetCodeSubmissionsResponse.ts

export type LeetCodeSubmissionStatus =
  | "Accepted"
  | "Wrong Answer"
  | "Time Limit Exceeded"
  | "Memory Limit Exceeded"
  | "Runtime Error"
  | "Compile Error"
  | "Output Limit Exceeded"
  | "Unknown"; // safety

export interface LeetCodeSubmission {
  id: string;
  title: string;
  titleSlug: string;
  statusDisplay: LeetCodeSubmissionStatus | string; // keep string for safety
  lang: string;
  timestamp: string; // LeetCode returns this as a stringified unix timestamp often
  runtime?: string | null;
  memory?: string | null;
}

export interface LeetCodeSubmissionList {
  hasNext: boolean;
  submissions: LeetCodeSubmission[];
}

export interface LeetCodeUserSubmissionsData {
  data: {
      submissionList: LeetCodeSubmissionList;
  }
}






export type Submission = {
  id: string;
  title: string;
  titleSlug: string;
  timestamp: string; // usually string unix time
  lang: string;
  statusDisplay: string; // "Accepted", ...
  runtime?: string | null;
  memory?: string | null;
};

export type SubmissionListData = {
  submissionList: {
    hasNext: boolean;
    submissions: Submission[];
  };
};

export type SolvedProblem = {
  title: string;
  titleSlug: string;
  lastAcceptedTimestamp: number;
};


export interface LeetCodeRecentAcSubmission {
  id: string;
  title: string;
  titleSlug: string;
  timestamp: string; // LeetCode usually returns unix seconds as a string
  lang: string;
}

export interface LeetCodeRecentAcSubmissionsData {
  recentAcSubmissionList: LeetCodeRecentAcSubmission[];
}