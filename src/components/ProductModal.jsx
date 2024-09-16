import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Modal from "react-bootstrap/Modal";

const ProductModal = (props) => {
	return (
		<div>
			<Modal
				show={props.showModal}
				onHide={props.closeModal}
				size="lg"
				centered
				className="product-modal"
			>
				<Modal.Header closeButton>
					<Modal.Title className="text-primary">Product Details</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="product-details p-4">
						{/* Left Side */}
						<div className="detail-card p-3 rounded bg-white shadow-sm">
							<h5 className="fw-bold text-dark">Product Information</h5>
							<hr />
							<h6 className="fw-semibold text-muted mb-3">
								<span className="text-dark">Product ID: </span>
								{props.info.id || "N/A"}
							</h6>
							<h6 className="fw-semibold text-muted mb-3">
								<span className="text-dark">Product Number: </span>
								{props.info.productNumber || "N/A"}
							</h6>
							<h6 className="fw-semibold text-muted mb-3">
								<span className="text-dark">Product Name: </span>
								{props.info.productName || "N/A"}
							</h6>
							<h6 className="fw-semibold text-muted mb-3">
								<span className="text-dark">Category: </span>
								{props.info.category || "N/A"}
							</h6>
						</div>

						{/* Right Side */}
						<div className="price-card p-3 rounded bg-white shadow-sm text-end">
							<h5 className="fw-bold text-dark">Pricing</h5>
							<hr />
							<h6 className="fw-semibold text-muted">
								<span className="text-dark">Price: </span>
								{`${props.info.currency || "$"} ${props.info.price || "0.00"}`}
							</h6>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default ProductModal;
