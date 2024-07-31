import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

// On bootstrap sur le AppModule et non plus sur le AppComponent (Standalone)
// + "bootstrap" dans ngModule
platformBrowserDynamic().bootstrapModule(AppModule);