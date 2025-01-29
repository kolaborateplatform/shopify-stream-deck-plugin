import { action, KeyDownEvent, SingletonAction, WillAppearEvent } from "@elgato/streamdeck";
// import { ShopifyAPI } from "./shopify-api"; // To be implemented later

type OrderStatus = 'unfulfilled' | 'fulfilled';

type OrderStatusSettings = {
    orderId?: string;
    currentStatus?: OrderStatus;
    fulfillmentLocation?: string;
    notifyCustomer?: boolean;
};

@action({ UUID: "com.kolaborate-platforms.shopify-stream-deck-plugin.orderStatus" })
export class OrderStatusToggle extends SingletonAction<OrderStatusSettings> {
    override async onWillAppear(ev: WillAppearEvent<OrderStatusSettings>): Promise<void> {
        const { settings } = ev.payload;
        // Simplified for testing
        settings.currentStatus = settings.currentStatus || 'unfulfilled';
        await ev.action.setSettings(settings);
        await ev.action.setTitle(`Order: ${settings.currentStatus}`);
        
        // Full implementation later:
        // if (settings.orderId) {
        //     const status = await ShopifyAPI.getOrderStatus(settings.orderId);
        //     settings.currentStatus = status;
        //     await ev.action.setSettings(settings);
        //     await ev.action.setTitle(`Order: ${status}`);
        // }
    }

    override async onKeyDown(ev: KeyDownEvent<OrderStatusSettings>): Promise<void> {
        const { settings } = ev.payload;
        // Simple toggle for testing
        settings.currentStatus = settings.currentStatus === 'fulfilled' ? 'unfulfilled' : 'fulfilled';
        await ev.action.setSettings(settings);
        await ev.action.setTitle(`Order: ${settings.currentStatus}`);
        
        // Full implementation later:
        // if (settings.orderId) {
        //     const newStatus = settings.currentStatus === 'fulfilled' ? 'unfulfilled' : 'fulfilled';
        //     await ShopifyAPI.updateOrderStatus(settings.orderId, newStatus);
        //     settings.currentStatus = newStatus;
        //     await ev.action.setSettings(settings);
        //     await ev.action.setTitle(`Order: ${newStatus}`);
        // }
    }
}