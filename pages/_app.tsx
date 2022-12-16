import Head from 'next/head'
import type { AppProps } from 'next/app'
import { MyNavBar } from 'components/navigation_bar/navigation_bar';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import './app.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div id="body">
			<Head>
        		<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* Navigation Bar */}
			<MyNavBar></MyNavBar>
			<div id="content">
				<Component {...pageProps} />
			</div>
			<footer className="footer">
				<div id="copyright">
					<p id="copyright"> &copy; {(new Date().getFullYear())} Salmaan Saeed </p>
				</div>
			</footer>
		</div>
		);
}

