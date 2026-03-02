import { NextResponse } from "next/server";
import { getRepository } from "@/src/services/getRepository";
import {handleError} from "../../../../lib/handleError"
import { Repository, LeetcodeProblem } from "@/src/services/repo";
export async function GET(): Promise<Response> {
    try {
        const repo: Repository = await getRepository();
        const data: LeetcodeProblem[] = await repo.getLeetcodeCompletedProblems();
        return NextResponse.json(data);
    } catch (error: unknown) {
        return handleError(error);
    }
} 

