import { database } from "@/firebase-config";
import { push, ref, set } from "firebase/database";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email) {
            throw new Error(!name ? "name should be provided" : "email should be provided");
        }

        const usersRef = ref(database, "users");
        const newUserRef = push(usersRef);
        set(newUserRef, {
            name,
            email,
            message
        }).then(console.log)
            .catch(error => {
                console.log(error);
            });

        return NextResponse.json("User added successfully", { status: 201 });
    } catch (error) {
        console.log("[CONTACT] POST", error);
        return new NextResponse("Internal server error", { status: 500 });
    }
}