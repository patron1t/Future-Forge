import { AlertCircle } from "lucide-react";

export function ComingSoonBanner({ title }: { title: string }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm text-primary shadow-sm">
      <div className="flex items-center gap-2 font-medium">
        <AlertCircle className="h-4 w-4" />
        Coming soon: {title}
      </div>
    </div>
  );
}
