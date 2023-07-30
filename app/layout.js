import {Poppins} from 'next/font/google'
import Header from './components/Header'
import './globals.css'

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const metadata = {
    title: 'Сплит цент, заправка, ремонт. Цена от 999р. Заказать!',
    description: 'Сплит заправка  ремонт. Позвоните и узнайте подробнее.',
    keywords: 'Сплит система, заправка ремонт обслуживание цена стоимость быстро'
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={poppins.className}>
        <Header/>
        <main className='container'>{children}</main>
        </body>
        </html>
    )
}
