import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { ProgressBarWrapper } from "@/components/progress-bar-wrapper";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramji Motivaras | Full-Stack Developer",
  description:
    "Professional portfolio of Ramji Motivaras, a full-stack developer with 4+ years of experience building web applications.",
  keywords: [
    "Ramji Motivaras",
    "Full-Stack Developer",
    "Web Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
  ],
  openGraph: {
    title: "Ramji Motivaras | Full-Stack Developer",
    description:
      "Professional portfolio of Ramji Motivaras, a full-stack developer with 4+ years of experience building web applications.",
    siteName: "Ramji Motivaras",
    url: "https://www.ramjimotivaras.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramji Motivaras | Full-Stack Developer",
    description:
      "Professional portfolio of Ramji Motivaras, a full-stack developer with 4+ years of experience building web applications.",
    creator: "@ramji_motivaras",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/ramji_motivaras.jpg" type="image/jpg" />
        <link rel="canonical" href="https://www.ramjimotivaras.com" />
      </head>
      <body className={`${inter.className} bg-black-100`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L77M2ZG6HP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L77M2ZG6HP');
          `}
        </Script>
        <Script id="schema-markup" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ramji Motivaras",
              "url": "https://www.ramjimotivaras.com/",
              "jobTitle": "Full-Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Ramji Motivaras"
              },
              "sameAs": [
               "https://github.com/rammotivaras",
                "https://www.linkedin.com/in/ram-motivaras/"
              ]
            }
          `}
        </Script>
        <ProgressBarWrapper />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <main className="flex-grow">{children}</main>
          </div>
          <Toaster />
          <div className="bg-black-100 max-w-7xl w-full flex justify-center items-center mx-auto sm:px-10 px-5">
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
