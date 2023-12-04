import { database } from "@/firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email) {
            throw new Error(!name ? "name should be provided" : "email should be provided");
        }

        let userObj = {
            name, email, message
        };
        const docRef = await addDoc(collection(database, "users"), { userObj });
        return NextResponse.json(`User added successfully with id ${docRef.id}`, { status: 201 });
    } catch (error) {
        console.log("[CONTACT] POST", error);
        return new NextResponse("Internal server error", { status: 500 });
    }
}