import { action, KeyDownEvent, SingletonAction, WillAppearEvent } from "@elgato/streamdeck";
// import { ShopifyAPI } from "./shopify-api"; // To be implemented later

type PriceUpdateSettings = {
    productId?: string;
    currentPrice?: number;
    adjustmentAmount?: number;
    adjustmentType?: 'fixed' | 'percentage';
};

@action({ UUID: "com.kolaborate-platforms.shopify-stream-deck-plugin.priceUpdate" })
export class QuickPriceUpdate extends SingletonAction<PriceUpdateSettings> {
    override async onWillAppear(ev: WillAppearEvent<PriceUpdateSettings>): Promise<void> {
        const { settings } = ev.payload;
        // Simplified for testing
        settings.currentPrice = settings.currentPrice || 10.00;
        await ev.action.setSettings(settings);
        await ev.action.setTitle(`$${settings.currentPrice}`);
        
        // Full implementation later:
        // if (settings.productId) {
        //     const price = await ShopifyAPI.getProductPrice(settings.productId);
        //     settings.currentPrice = price;
        //     await ev.action.setSettings(settings);
        //     await ev.action.setTitle(`$${price}`);
        // }
    }

    override async onKeyDown(ev: KeyDownEvent<PriceUpdateSettings>): Promise<void> {
        const { settings } = ev.payload;
        // Simple increment for testing
        settings.currentPrice = (settings.currentPrice || 10.00) + 1.00;
        await ev.action.setSettings(settings);
        await ev.action.setTitle(`$${settings.currentPrice}`);
        
        // Full implementation later:
        // if (settings.productId && settings.currentPrice) {
        //     let newPrice: number;
        //     if (settings.adjustmentType === 'percentage') {
        //         newPrice = settings.currentPrice * (1 + (settings.adjustmentAmount! / 100));
        //     } else {
        //         newPrice = settings.currentPrice + (settings.adjustmentAmount ?? 0);
        //     }
        //     await ShopifyAPI.updateProductPrice(settings.productId, newPrice);
        //     settings.currentPrice = newPrice;
        //     await ev.action.setSettings(settings);
        //     await ev.action.setTitle(`$${newPrice}`);
        // }
    }
}