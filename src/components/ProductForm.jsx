import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useProductListData } from "../redux/hooks";
import { addProduct, updateProduct } from "../redux/slices/productsSlice";
import { updateInvoiceOnProductUpdate } from "../redux/slices/invoicesSlice";
import generateRandomId from "../utils/generateRandomId";
import getAbsCurrency from "../utils/getAbsCurrency";



const ProductForm = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	const isEdit = location.pathname.includes("edit");

	const { getOneProduct, listSize } = useProductListData();

	const [formData, setFormData] = useState(() =>

		isEdit
			? getOneProduct(params.id)
			: {
					id: generateRandomId(),
					productNumber: listSize + 1,
					productName: "",
					price: "",
					category: "",
					currency: "$",
			  }
			
	);


	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			!formData.productName ||
			!formData.price ||
			!formData.category
		) {
		
			alert("Please fill in all fields");
			return;
		}

		if (formData.price < 1) {
			alert("Price cannot be less than 1");
			return;
		}

		try {
			if (isEdit) {
				const { id } = params;
				const currProduct = getOneProduct(id);
				const priceDiff = formData.price - getAbsCurrency(parseFloat(currProduct.price), currProduct.currency, formData.currency);
				dispatch(updateProduct({ id, updatedProduct: formData }));
				dispatch(updateInvoiceOnProductUpdate({ productId: id, priceDiff, newPrice: formData.currency }));
				alert("Product updated successfully ");
				
			} else {
				dispatch(addProduct(formData));
				alert("Product added successfully ");
				
			}
			navigate("/products");
		} catch (error) {
			alert("An error occurred, please try again");
		}
	};

	return (
		<Row>
			<Card className="p-4 p-xl-5 my-3 my-xl-4">
				<div className="d-flex align-items-center">
					<BiArrowBack size={18} />
					<div className="fw-bold mt-1 mx-2 cursor-pointer">
						<Link to="/products">
							<h5>Go Back</h5>
						</Link>
					</div>
				</div>

				<Form onSubmit={handleSubmit}>
					<Row className="mb-3">
						<Form.Group as={Col} sm="6" controlId="productNumber">
							<Form.Label className="fw-bold">Product Number:</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter product number"
								name="productNumber"
								value={formData.productNumber}
								onChange={({ target: { name, value } }) =>
									setFormData((prev) => ({
										...prev,
										[name]: parseFloat(value),
									}))
								}
								
								min="1"
								required
							/>
						</Form.Group>
						<Form.Group as={Col} sm="6" controlId="productName">
							<Form.Label className="fw-bold">Product Name:</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter product name"
								name="productName"
								value={formData.productName}
								onChange={({ target: { name, value } }) =>
									setFormData((prev) => ({
										...prev,
										[name]: value,
									}))
								}
								
								required
							/>
						</Form.Group>
					</Row>
					<Row className="mb-3">
						<Form.Group as={Col} sm="6" controlId="price">
							<Form.Label className="fw-bold">Price:</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter price"
								name="price"
								value={formData.price}
								onChange={({ target: { name, value } }) =>
									setFormData((prev) => ({
										...prev,
										[name]: parseFloat(value),
									}))
								}
								
								min="1"
								required
							/>
						</Form.Group>
						<Form.Group as={Col} sm="6" controlId="category">
							<Form.Label className="fw-bold">Category:</Form.Label>
							<Form.Select
								name="category"
								value={formData.category}
								onChange={({ target: { name, value } }) =>
									setFormData((prev) => ({
										...prev,
										[name]: value,
									}))
								}
								
								required
								className="btn btn-light my-1"
								aria-label="Change Category"
								
							>
								<option value="">Select category</option>
								<option value="household">Household</option>
								<option value="tech">Tech</option>
								<option value="fashion">Fashion</option>
							</Form.Select>
						</Form.Group>
					</Row>
					<Row className="mb-3">
						<Form.Group as={Col} sm="6" controlId="currency">
						
							<Form.Label className="fw-bold">Currency:</Form.Label>
							<Form.Select
								name="currency"
								value={formData.currency}
								onChange={({ target: { name, value } }) =>
									setFormData((prev) => ({
										...prev,
										[name]: value,
									}))
								
								}
								className="btn btn-light my-1"
								
							>
								<option value="$">USD (United States Dollar)</option>
								<option value="£">GBP (British Pound Sterling)</option>
								<option value="¥">JPY (Japanese Yen)</option>
								<option value="$">CAD (Canadian Dollar)</option>
								<option value="$">AUD (Australian Dollar)</option>
								<option value="$">SGD (Singapore Dollar)</option>
								<option value="¥">CNY (Chinese Renminbi)</option>
								<option value="₿">BTC (Bitcoin)</option>
							</Form.Select>
						</Form.Group>
					</Row>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Card>

		</Row>
	);
};


export default ProductForm;
