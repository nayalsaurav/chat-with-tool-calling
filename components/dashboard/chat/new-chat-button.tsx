"use client";

import { useRouter } from "next/navigation";
import { generateConversation } from "@/app/dashboard/actions";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export function NewChatButton() {
  const router = useRouter();

  async function handleClick() {
    try {
      const result = await generateConversation();
      if (!result.success) {
        toast.error(result.error);
        return;
      }
      router.push(`/dashboard/chat/${result.id}`);
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <Button onClick={handleClick} className="mt-2 gap-2">
      <Plus size={16} />
      New Chat
    </Button>
  );
}
