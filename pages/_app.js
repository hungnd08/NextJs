import "../components/Switcher/index.scss";
import "../components/SingleBox/index.scss";
import variables from "../sass/variables.module.scss";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../store/store";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Layout color={variables.primaryColor}>
					<Component {...pageProps} />
				</Layout>
			</QueryClientProvider>
		</Provider>
	);
}
