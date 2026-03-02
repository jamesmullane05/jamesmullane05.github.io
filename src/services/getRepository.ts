"use server";
import { Repository } from "./repo";


let repoInstance: Repository;
export async function getRepository(): Promise<Repository> {
    
    const leetcodeusername: string = "jamesmullane05"
    const githubusername: string = "jamesmullane05"
    

    if ( !leetcodeusername || !githubusername ) {
        throw new Error("Missing environment variables for repository setup");
    }

    if (!repoInstance) {
        repoInstance = new Repository(githubusername, leetcodeusername);
    }
    return repoInstance;
}