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
