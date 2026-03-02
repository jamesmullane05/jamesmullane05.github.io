import { GithubService } from "@/src/services/github.service"
import { LeetcodeService } from "@/src/services/leetcode.service"
import { GithubProfile, GithubRepo } from "@/src/types/GithubApiResponse";
import { LeetCodeUserProfile, LeetCodeSubmissionList, LeetCodeSubmissionStatus, LeetCodeSubmission, LeetCodeRecentAcSubmission } from "@/src/types/LeetCodeApiResponse";

export class Repository{

    private github: GithubService;
    private leetcode: LeetcodeService;


    constructor(gitusername: string, leetcodeusername: string){
        this.github = new GithubService(gitusername)
        this.leetcode = new LeetcodeService(leetcodeusername)

    }

    async getGitProfile(){
        const data: GithubProfile = await this.github.getProfile()
        const newobject = {name: data.name}
        return newobject
    }

    async getGitProjects(): Promise<Project[]>{
        const data: GithubRepo[] = await this.github.getProjects()
        return data.map(this.GitRepoToProjects)
    }

    async getGitProjectByName(projectname: string): Promise<Project>{
        const repo: GithubRepo = await this.github.getRepoData(projectname)
        return this.GitRepoToProjects(repo)
    }
/*
    async getLeetcodeProfile(){
        const repo: LeetCodeUserProfile = await this.leetcode.getLeetCodeStats();
        if (repo.matchedUser.tagProblemCounts?.advanced.length && repo.matchedUser.tagProblemCounts?.fundamental.length && repo.matchedUser.tagProblemCounts?.intermediate.length){
            return {
                username : repo.matchedUser.username,
                count : repo.matchedUser.tagProblemCounts?.advanced.length + repo.matchedUser.tagProblemCounts?.fundamental.length + repo.matchedUser.tagProblemCounts?.intermediate.length ?? 0
            }
        }
    }
        */

    async getLeetcodeCompletedProblems(): Promise<LeetcodeProblem[]> {
        const submissions: LeetCodeRecentAcSubmission[] = await this.leetcode.getLeetCodeSubmissions();

        return submissions.map((submission) => ({
            title: submission.title,
            lang: submission.lang,
            }));
        }


    GitRepoToProjects(repo: GithubRepo): Project{
        return {
            name: repo.name,
            language: repo.language,
            description: repo.description,
            lastUpdated: repo.updated_at,
            link: repo.html_url
        }
    }

    
}



export type Project = {
    name: string,
    language: string,
    description: string,
    lastUpdated: string,
    link: string
}

export type Leetcode = {
    username: string, 
    count: number 
}

export type LeetcodeProblem = {
      title: string;
      lang: string;
}