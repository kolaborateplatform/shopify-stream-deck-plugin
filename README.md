# Shopify Stream Deck Plugin

A powerful Stream Deck plugin that brings Shopify store management to your fingertips. This plugin enables store owners and managers to monitor and control their Shopify stores directly from their Stream Deck device.

## Features

### 1. Sales Dashboard
- Real-time monitoring of key store metrics
- Rotating display showing:
  - Total Sales
  - Order Count
  - Average Order Value
- Toggle between fixed and rotating display modes with a single tap

### 2. Stock Alert Monitor
- Real-time inventory monitoring
- Customizable stock threshold alerts
- Visual alerts for low stock items
- Monitors specific products or entire inventory
- Automatic checks every 5 minutes

### 3. Quick Price Update
- Rapid price adjustments for products
- Direct access to product pricing
- Streamlined workflow for price management

### 4. Order Status Toggle
- Quick order status updates
- Monitor recent orders
- Streamlined order processing workflow

## Installation

1. Download the latest release from the Stream Deck Store
2. Double-click the downloaded file to install
3. Stream Deck will automatically recognize and install the plugin

## Configuration

### Prerequisites
- A Shopify store with Admin API access
- Stream Deck hardware
- Stream Deck software installed

### Initial Setup
1. Install the plugin
2. Configure your Shopify API credentials
3. Select which actions to add to your Stream Deck

## Development

### Requirements
- Node.js
- Bun package manager
- @elgato/streamdeck SDK

### Setup Development Environment
```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
bun install

# Build the plugin
bun run build
```

### Project Structure
```
src/
├── actions/
│   ├── salesDashboard.ts   # Sales monitoring functionality
│   ├── stockAlert.ts       # Inventory monitoring
│   ├── quickPrice.ts       # Price update functionality
│   └── orderStatus.ts      # Order management
├── plugin.ts               # Main plugin entry point
└── ...
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the development team at [support-email].

## Acknowledgments

- Built with [@elgato/streamdeck](https://www.npmjs.com/package/@elgato/streamdeck) SDK
- Powered by Shopify Admin API
- Created by Kolaborate Platforms 