// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/Components/Layout";

export default function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}
