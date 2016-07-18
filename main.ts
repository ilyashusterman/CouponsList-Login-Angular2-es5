import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
// Our main component
import { AppComponent } from './app.component';

// Our main routes
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,HTTP_PROVIDERS
])
.catch(err => console.error(err));
