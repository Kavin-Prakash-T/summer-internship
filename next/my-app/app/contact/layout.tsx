export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        This is contact page layout
        {children}
        </>
  );
}
