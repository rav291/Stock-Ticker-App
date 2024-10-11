import React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

type LoaderProps = {
  loading: Boolean; // bug point
  children: React.ReactNode;
  className?: string,
  noPadding?: boolean
};

export const Loader = ({ loading, children, className, noPadding }: LoaderProps) => {
  return loading ? (
    <div className={cn(className || "w-full h-full py-5 flex flex-col gap-4 justify-center items-center")}>
      <Skeleton className="h-[160px] w-[300px] rounded-xl" />
      <div className="space-y-2 space-x-2">
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
    </div>
  ) : (
    children
  );
};
