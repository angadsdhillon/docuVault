"use client";

import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function SyncButton() {
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 2000);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleSync}
      isLoading={isSyncing}
      aria-label="Sync emails now"
    >
      {!isSyncing && <RefreshCw className="h-4 w-4" aria-hidden />}
      Sync now
    </Button>
  );
}
