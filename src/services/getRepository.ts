"use server";
import { Repository } from "./repo";


let repoInstance: Repository;
export async function getRepository(): Promise<Repository> {
    
    const leetcodeusername: string = "jamesmullane05"
    const githubusername: string = "jamesmullane05"

    if (!repoInstance) {
        repoInstance = new Repository(githubusername, leetcodeusername);
    }
    return repoInstance;
}