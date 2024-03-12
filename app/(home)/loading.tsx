import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col p-2 space-y-3">
      <Skeleton className="h-10 rounded-xl" />
      <ul className="space-y-8">
        <li className="flex flex-col space-y-3">
          <Skeleton className="h-40 w-full rounded-xl" />
          <Skeleton className="h-4 w-32 rounded-xl" />
          <Skeleton className="h-4 rounded-xl" />
          <Skeleton className="h-4 w-32 rounded-xl" />
        </li>
        <li className="flex flex-col space-y-3">
          <Skeleton className="h-40 w-full rounded-xl" />
          <Skeleton className="h-4 w-32 rounded-xl" />
          <Skeleton className="h-4 rounded-xl" />
          <Skeleton className="h-4 w-32 rounded-xl" />
        </li>
      </ul>
    </div>
  );
}
