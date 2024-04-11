import '@/app/globals.css';
import { Viewport } from 'next';
import { getServerSession } from 'next-auth';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession()
  return (
    <html lang="rr">
       <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <div>
          sdfsdf
          {
            !!session && (
              <div>{session.user?.email} </div>
            )
          }
        </div>
     
    </html>
  );
}
export const viewport: Viewport = {
    themeColor: "#000000",
    initialScale: 1,
    width: "device-width",
    maximumScale: 1,
};