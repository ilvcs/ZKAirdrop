import React from "react";
import TopBar from "./TopBar";

function Layout({ children }) {
	return (
		<div>
			<TopBar />
			<div className='page-content'>{children}</div>
		</div>
	);
}

export default Layout;
