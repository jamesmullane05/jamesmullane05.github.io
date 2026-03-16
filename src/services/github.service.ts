import React from 'react'
import {GithubProfile} from "../types/GithubApiResponse"
import { GithubRepo } from '../types/GithubApiResponse'
export class GithubService {
    private username: string;

    constructor(username: string){
        this.username = username;
    }

    async getProfile(): Promise<GithubProfile>{
       const data: Response = await fetch(`https://api.github.com/repos/${this.username}`, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                Accept: "application/vnd.github+json",
            },
            cache: "no-store"
        })
       if (!data.ok) { throw new Error("Failed to fetch repositories")}
       const profile: GithubProfile = await data.json()
       return profile
    }

    async getProjects(): Promise<GithubRepo[]>{
        const data: Response = await fetch(`https://api.github.com/users/${this.username}/repos`, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                Accept: "application/vnd.github+json",
            },
            cache: "no-store"
        })
        if (!data.ok) { throw new Error("Failed to fetch repositories")}
        const projects: GithubRepo[] = await data.json()
        return projects
    }

    async getRepoData(project:string): Promise<GithubRepo>{
        const data: Response = await fetch(`https://api.github.com/repos/${this.username}/${project}`, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                Accept: "application/vnd.github+json",
            },
            cache: "no-store"
        });
        if (!data.ok) { throw new Error("Failed to fetch repositories")}
        const repo: GithubRepo = await data.json();
        return repo
    }
}