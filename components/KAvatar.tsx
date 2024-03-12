import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export function KAvatar({
  url,
  onClick,
  className,
}: {
  url?: string;
  onClick: () => void;
  className?: string;
}): React.ReactNode {
  return (
    <Avatar onClick={onClick} className={`h-8 w-8 m-1 ${className}`}>
      <AvatarImage src={url} />
      <AvatarFallback>
        <UserCircleIcon className="block h-8 w-8" aria-hidden="true" />
      </AvatarFallback>
    </Avatar>
  );
}
