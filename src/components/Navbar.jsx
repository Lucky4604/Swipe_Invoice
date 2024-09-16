import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Import the custom CSS for animations

const Navbar = () => {
	const location = useLocation();
	const isOnProduct = location.pathname.includes("products");

	return (
		<nav className="navbar navbar-dark  py-3">
			<div className="container-fluid justify-content-center">
				<div className="d-flex">
					{/* Invoice Card */}
					<Link
						to="/"
						className={`card nav-card text-white mx-3 ${!isOnProduct ? "bg-primary" : "bg-secondary"}`}
						style={{ width: "120px", height: "50px", textDecoration: "none" }}
					>
						<div className="card-body d-flex justify-content-center align-items-center">
							<h5 className="card-title">Invoice</h5>
						</div>
					</Link>

					{/* Product Card */}
					<Link
						to="/products"
						className={`card nav-card text-white mx-3 ${isOnProduct ? "bg-primary" : "bg-secondary"}`}
						style={{ width: "120px", height: "50px", textDecoration: "none" }}
					>
						<div className="card-body d-flex justify-content-center align-items-center">
							<h5 className="card-title">Product</h5>
						</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
