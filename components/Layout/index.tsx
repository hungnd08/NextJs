const Header = () => {
	return <h3>This is Header</h3>;
};

const Footer = () => {
	return <h3>This is Footer</h3>;
};

const Layout = ({ color, children }) => {
	return (
		<div style={{ backgroundColor: color }}>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
