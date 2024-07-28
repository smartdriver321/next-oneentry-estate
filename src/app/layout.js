import { Inter } from 'next/font/google'
import './globals.css'
import Header from './_components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Smart Estate Property',
	description: 'Rent & Sale your Property',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
