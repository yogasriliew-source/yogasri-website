export const metadata = {
  title: "Yoga Sri",
  description: "Classical Hatha Yoga & Ayurveda"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f8f5f2",
        }}
      >
        {children}
      </body>
    </html>
  );
}
