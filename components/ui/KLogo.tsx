import Link from "next/link";
import { Button } from "./button";

export function KLogo() {
  return (
    <Button className="text-rose-600 text-2xl" variant="ghost" asChild>
      <Link href="/" role="link" aria-label="kyo as logo, go to home">
        kyo
      </Link>
    </Button>
  );
}
