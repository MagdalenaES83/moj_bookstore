import React from "react";
import { Link } from "react-router-dom";

const NotFound =() => {
	return (
		<div className="mt-5"
			style={{
                
				width: "100vw",
				height: "50vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<img
				alt="notfound"
				src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png"
			/>
			
			<Link to="/home"><h3>Go to main page </h3></Link> 
		</div>
	);
}


export default NotFound