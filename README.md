# Invoice Management System

## Overview

This application is designed to manage invoices and associated products efficiently. It provides functionality for creating and editing invoices, managing product information, and handling currency conversion with real-time values.

## Features

1. **Invoice Creation**:
   - Create and manage invoices with associated products.
   - View and modify product details in the 'Products' tab.
   - Ensure changes in product details are reflected in all associated invoices.

2. **Products Tab**:
   - **Display Products**: All products used in invoices are listed in a new 'Products' tab.
   - **Modify Products**: Users can update product information, and these updates will be reflected in all associated invoices.

3. **Dynamic Product Information Update**:
   - **Edit Existing Products**: Updates to product details will automatically reflect in both the 'Products' tab and all existing invoices where the product is used.
   - **Add New Products**: Adding products with different values to new invoices will update the product details in the 'Products' tab and all invoices where they appear.

4. **Validation**:
   - Ensure all changes made in the 'Products' tab are validated.
   - Update the Redux store to maintain application state consistency.



## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/YourUsername/YourRepository.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd YourRepository
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Configure Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add your API keys and other configuration settings:
     ```
     REACT_APP_CURRENCY_API_KEY=your_api_key_here
     ```

5. **Run the Application**:
   ```bash
   npm start
   ```

## Usage

- **Creating Invoices**: Navigate to the invoice creation page and add details including products.
- **Managing Products**: Access the 'Products' tab to view and update product information.
- **Currency Conversion**: Select the desired currency to see updated product prices.

