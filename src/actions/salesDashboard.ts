import { action, KeyDownEvent, SingletonAction, WillAppearEvent } from "@elgato/streamdeck";
// import { ShopifyAPI } from "./shopify-api"; // To be implemented later

type SalesDashboardSettings = {
    metrics?: {
        totalSales: number;
        orderCount: number;
        averageOrderValue: number;
    };
    lastUpdate?: number;
    displayMode?: 'rotating' | 'fixed';
    currentMetricIndex?: number;
};

@action({ UUID: "com.kolaborate-platforms.shopify-stream-deck-plugin.salesDashboard" })
export class SalesDashboard extends SingletonAction<SalesDashboardSettings> {
    // private updateInterval?: NodeJS.Timer;
    // private rotateInterval?: NodeJS.Timer;
    // private currentAction?: typeof SingletonAction.prototype;

    override async onWillAppear(ev: WillAppearEvent<SalesDashboardSettings>): Promise<void> {
        // const { settings } = ev.payload;
        // this.currentAction = ev.action;
        // settings.currentMetricIndex ??= 0;
        
        // // Simple test data
        // settings.metrics = {
        //     totalSales: 1000,
        //     orderCount: 10,
        //     averageOrderValue: 100
        // };
        
        // if (settings.displayMode === 'rotating') {
        //     this.rotateInterval = setInterval(async () => {
        //         await this.rotateMetric(settings);
        //     }, 10 * 1000);
        // }

        // await this.updateDisplay(settings);
    }

    // override async onWillDisappear(): Promise<void> {
    //     if (this.rotateInterval) {
    //         clearInterval(this.rotateInterval);
    //     }
    //     if (this.updateInterval) {
    //         clearInterval(this.updateInterval);
    //     }
    // }

    // private async rotateMetric(settings: SalesDashboardSettings): Promise<void> {
    //     if (!this.currentAction) return;
        
    //     settings.currentMetricIndex = ((settings.currentMetricIndex ?? 0) + 1) % 3;
    //     await this.currentAction.setSettings(settings);
    //     await this.updateDisplay(settings);
    // }

    // private async updateDisplay(settings: SalesDashboardSettings): Promise<void> {
    //     if (!this.currentAction || !settings.metrics) return;

    //     let displayText: string;
    //     switch (settings.currentMetricIndex) {
    //         case 0:
    //             displayText = `$${settings.metrics.totalSales}`;
    //             break;
    //         case 1:
    //             displayText = `Orders: ${settings.metrics.orderCount}`;
    //             break;
    //         case 2:
    //             displayText = `AVG: $${settings.metrics.averageOrderValue}`;
    //             break;
    //         default:
    //             displayText = `$${settings.metrics.totalSales}`;
    //     }
        
    //     await this.currentAction.setTitle(displayText);
    // }

    override async onKeyDown(ev: KeyDownEvent<SalesDashboardSettings>): Promise<void> {
        // if (ev.payload.settings.displayMode === 'fixed') {
        //     await this.rotateMetric(ev.payload.settings);
        // }
    }
}