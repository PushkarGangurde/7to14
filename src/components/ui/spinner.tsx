'use client';

import { cn } from "@/lib/utils";
import { Loader } from "@/components/Loader";

function Spinner({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("inline-flex items-center justify-center", className)} {...props}>
      <Loader fullScreen={false} size={24} />
    </div>
  );
}

export { Spinner };
