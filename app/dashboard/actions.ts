"use server";

import { auth } from "@/lib/auth";
import { db } from "@/database";
import { conversation } from "@/database/schema";
import { revalidatePath } from "next/cache";
import { ratelimit } from "@/lib/ratelimit";

type ActionResult =
  | { success: true; id: string }
  | { success: false; error: string };

export async function generateConversation(): Promise<ActionResult> {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return {
        success: false,
        error: "Please sign in to start a conversation.",
      };
    }

    const { success } = await ratelimit.limit(session.user.id);
    if (!success) {
      return {
        success: false,
        error:
          "You've reached the daily chat limit. Please try again tomorrow.",
      };
    }

    const [newConversation] = await db
      .insert(conversation)
      .values({
        userId: session.user.id,
        title: "New Chat",
      })
      .returning();

    if (!newConversation) {
      return {
        success: false,
        error: "Could not create conversation. Please try again.",
      };
    }

    revalidatePath("/dashboard", "layout");

    return { success: true, id: newConversation.id };
  } catch (error) {
    console.error("generateConversation error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
