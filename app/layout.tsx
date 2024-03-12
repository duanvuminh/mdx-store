import { ReactNode } from "react";
import "./globals.css";

import { KAuth } from "@/components/KAuth";
import { KHeaderSearch } from "@/components/KHeaderSearch";
import { Providers } from "@/components/Provider";
import { UseAuth } from "@/components/Trigger";
import { layoutController } from "@/lib/page-controller/layout-controller";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await layoutController.getData();
  const dic = await layoutController.getDic();
  return (
    <Providers user={user}>
      <html lang="en">
        <body>
          <UseAuth />
          <KAuth fallBack={<KHeaderSearch dictionary={dic} />}>
            <div className="px-1 w-full">{children}</div>
          </KAuth>
        </body>
      </html>
    </Providers>
  );
}
