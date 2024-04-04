import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-cover bg-fixed bg-slate-50 md:bg-[url("/assets/light_bg.png")] dark:bg-[url("/assets/dark_bg.jpg")] dark:text-slate-50'>
        <div className='dark:bg-trans-black py-8 '>
          {children}
        </div>
      </body>
    </html>
  )
}
