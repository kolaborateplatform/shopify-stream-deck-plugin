import streamDeck, { LogLevel } from "@elgato/streamdeck";

// Import our Shopify actions
import { OrderStatusToggle } from "./actions/orderStatus";
import { StockAlertMonitor } from "./actions/stockAlert";
import { QuickPriceUpdate } from "./actions/quickPrice";
import { SalesDashboard } from "./actions/salesDashboard";



// Enable trace logging for development
// TODO: Consider reducing log level in production
streamDeck.logger.setLevel(LogLevel.TRACE);

// Register all Shopify actions
streamDeck.actions.registerAction(new OrderStatusToggle());
streamDeck.actions.registerAction(new StockAlertMonitor());
streamDeck.actions.registerAction(new QuickPriceUpdate());
streamDeck.actions.registerAction(new SalesDashboard());

// Optional: Add error handling for connection
// streamDeck.connect().catch(error => {
//     console.error('Failed to connect to Stream Deck:', error);
//     process.exit(1);
// });

// Optional: Add disconnection handling
// streamDeck.devices.on('disconnected', () => {
//     console.log('Disconnected from Stream Deck');
//     // Cleanup any resources if needed
// });

// Optional: Add websocket connection error handling
// streamDeck.devices.on('error', (error) => {
//     console.error('Stream Deck connection error:', error);
//     // Implement appropriate error handling
// });

// Optional: Log when successfully connected
// streamDeck.devices.on('connected', () => {
//     console.log('Successfully connected to Stream Deck');
//     // Initialize any global resources if needed
// });