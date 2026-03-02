export const LEETCODE_API_URL = "https://leetcode.com/graphql/";

export const GET_USER_STATS_QUERY = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        ranking
        reputation
        starRating
        userAvatar
      }
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
      badges {
        id
        displayName
        icon
      }
      languageProblemCount {
        languageName
        problemsSolved
      }
    }
  }
`;

export const GET_USER_SUBMISSIONS_QUERY = `query recentAC($username: String!, $limit: Int!) { recentAcSubmissionList(username: $username, limit: $limit) { id title titleSlug timestamp lang } }`
