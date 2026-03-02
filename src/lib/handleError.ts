import { NextResponse } from "next/server";

export function handleError(err: unknown) {
    let message: string = "Unexpected error";
    let status: number = 500;

    if (err instanceof Error) {
        message = err.message;
    }

    if (
        typeof err === "object" &&
        err !== null &&
        "status" in err &&
        typeof (err as { status?: unknown }).status === "number"
    ) {
        status = (err as { status: number }).status;
    }

    return new NextResponse(message, { status });
}