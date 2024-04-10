import '@/app/ui/global.css';
import { Viewport } from 'next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="rr">
       <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      <body >{children}</body>
    </html>
  );
}
export const viewport: Viewport = {
    themeColor: "#000000",
    initialScale: 1,
    width: "device-width",
    maximumScale: 1,
};