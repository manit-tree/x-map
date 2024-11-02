# x-map

MAP Web Component, developed using LIT

### ./src/index.ts

```ts
import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import maplibregl from 'https://cdn.skypack.dev/maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { icons } from './icons.ts';
import './style.css';

interface info {
    title:string;
    address:string;
    tel?:string;
    email?:string;
}

@customElement('x-map')
export class TMap extends LitElement {
    @property()
    lat = '13.926841663282733';

    @property()
    lng = '100.52599680608748';

    @property()
    zoom = 16;

    map;
    marker;

    init() {
        const location = [this.lng, this.lat];
        let map_container = this.renderRoot.querySelector('.map-container');

        this.map = new maplibregl.Map({
            style: 'https://tiles.openfreemap.org/styles/bright',
            center: location,
            zoom: this.zoom,
            container: map_container
        })

        this.map.scrollZoom.disable();

        this.marker = new maplibregl.Marker({
            color: 'red'
        })

        this.map.on('load', () => {
            const nav = new maplibregl.NavigationControl({showCompass: false});
            this.map.addControl(nav, 'top-right');

            this.marker.setLngLat(location);
            this.marker.addTo(this.map);
        })
    }

    setPopup(info:info) {
        if (!info) return;

        let sb = new Array();

        sb.push('<div class="info">');
        sb.push('<h4 class="title">' + (info.title ?? 'ไอยารา ฟาร์มาซี') + '</h4>');
        sb.push('<p class="address">' + (info.address ?? '27/18 ต.บ้านใหม่ อ.ปากเกร็ด จ.นนทบุรี  11120') + '</p>');

        if (info.tel) {
            sb.push('<p class="tel">' + icons['phone'] + ' <a href="tel:' + info.tel + '" target="_blank">' + info.tel +'</a></p>');
        }

        if (info.email) {
            sb.push('<p class="email">' + icons['email'] + ' <a href="mailto:' + info.email +'" target="_blank">' + info.email +'</a></p>');
        }

        sb.push('<p class="location">' + icons['marker'] + '<a href="https://www.google.com/maps?q=loc:' + this.lat +',' + this.lng + '" target="_blank">' + this.lat.substr(0, 9) +',' + this.lng.substr(0, 9) +'</a></p>');
        sb.push('<p class="direction">' + icons['car'] + ' <a href="https://www.google.com/maps/dir/?api=1&destination=' + this.lat + ',' + this.lng + '" target="_blank">วิธีการเดินทาง</a></p>');
        sb.push('</div>');

        this.marker.setPopup(new maplibregl.Popup().setHTML(sb.join('')));
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return (
            html`
                <div class="map-container"></div>
            `
        )
    }

    updated() {
        this.init();
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'x-map': TMap
  }
}
```

### icons.ts

```ts
export const icons = {
    "phone":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" style=\"fill: currentColor;transform: ;msFilter:;\"><path d=\"m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z\"></path></svg>",
    "email":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" style=\"fill: currentColor;transform: ;msFilter:;\"><path d=\"M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z\"></path></svg>",
    "marker":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" style=\"fill: currentColor;transform: ;msFilter:;\"><path d=\"M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z\"></path></svg>",
    "car":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" style=\"fill: currentColor;transform: ;msFilter:;\"><path d=\"m20.772 10.155-1.368-4.104A2.995 2.995 0 0 0 16.559 4H7.441a2.995 2.995 0 0 0-2.845 2.051l-1.368 4.104A2 2 0 0 0 2 12v5c0 .738.404 1.376 1 1.723V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h12v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.277A1.99 1.99 0 0 0 22 17v-5a2 2 0 0 0-1.228-1.845zM7.441 6h9.117c.431 0 .813.274.949.684L18.613 10H5.387l1.105-3.316A1 1 0 0 1 7.441 6zM5.5 16a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5.5 16zm13 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18.5 16z\"></path></svg>"
}
```

### style.css

```css
x-map {
    display: block;
    width: 100%;
    height: 100%;

    .map-container {
        width: 100%;
        height: 100%;
    
        .maplibregl-popup-content {
            width: 280px;

            .info {
                font-size: 12px;
                line-height: 1.45em;

                & > * {
                    display: flex;
                    align-items: center;
                    gap: 0.5em;
                }
            
                .title {
                    font-size: 1.075em;
                    font-weight: bold;
                    margin-bottom: 0.5em;
                    color: var(--title-color, inherit);
                }

                .address {
                    margin-bottom: 1em;
                }

                svg {
                    color: var(--icon-color, inherit);
                }

                a {
                    text-decoration: none;
                }
            }

            button {
                top: 3px;
                right: 3px;
            }
        }
    }
}
```

### package.json

```json
{
  "name": "@8columns/map",
  "description": "Map Component",
  "version": "1.0.0",
  "main": "./dist/index.es.js",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "push":"git add . && git commit -m \"update\" && git push"
  },
  "author": "Mr.Manit Treeprapankit",
  "license": "MIT",
  "dependencies": {
    "lit": "^3.2.1"
  },
  "devDependencies": {
    "typescript": "~5.6.2",
    "vite": "^5.4.10",
    "vite-plugin-css-injected-by-js": "^3.4.0"
  }
}
```

### vite.config.js

```js
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
    plugins: [
        cssInjectedByJsPlugin()
    ],
    build: {
        outDir: './dist',
        minify: 'esbuild',
        sourcemap: false,
        emptyOutDir: true,   
        lib: {
            entry: './src/index.ts',
            formats: ['es'],
            fileName: (format) => `[name].[format].js`
        },
        esbuild: {
            minify: true
        }
    }
}
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```
