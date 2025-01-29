import { action, SingletonAction, WillAppearEvent } from "@elgato/streamdeck";
// import { ShopifyAPI } from "./shopify-api"; // To be implemented later

type StockAlertSettings = {
    threshold?: number;
    productIds?: string[];
    lastCheck?: number;
    isLowStock?: boolean;
};

@action({ UUID: "com.kolaborate-platforms.shopify-stream-deck-plugin.stockAlert" })
export class StockAlertMonitor extends SingletonAction<StockAlertSettings> {
    private checkInterval?: NodeJS.Timer;

    override async onWillAppear(ev: WillAppearEvent<StockAlertSettings>): Promise<void> {
        const { settings } = ev.payload;
        settings.threshold ??= 5;
        settings.isLowStock = false;
        
        // Simple interval for testing
        this.checkInterval = setInterval(async () => {
            await this.checkStock(ev);
        }, 5 * 60 * 1000);

        await this.checkStock(ev);
    }

    private async checkStock(ev: WillAppearEvent<StockAlertSettings>): Promise<void> {
        const { settings } = ev.payload;
        // Simplified for testing
        await ev.action.setTitle(`Stock OK`);
        
        // Full implementation later:
        // if (settings.productIds?.length) {
        //     const lowStockItems = await ShopifyAPI.checkStockLevels(
        //         settings.productIds,
        //         settings.threshold!
        //     );
        //     settings.isLowStock = lowStockItems.length > 0;
        //     await ev.action.setSettings(settings);
        //     await ev.action.setTitle(`Low Stock: ${lowStockItems.length}`);
        //     if (settings.isLowStock) {
        //         await ev.action.showAlert();
        //     }
        // }
    }
}