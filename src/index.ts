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

type lat = number | string;
type lng = number | string;

@customElement('x-map')
export class TMap extends LitElement {
    @property() lat = '13.926841663282733';
    @property() lng = '100.52599680608748';
    @property() zoom = 16;

    map;
    marker;
    popup;
    count:number = 0;

    init():void {
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
            this.addMarker();

            this.fadeOut(this.renderRoot.querySelector('.overlay'), 600, () => {
                this.renderRoot.classList.add('ready');
                this.renderRoot.dispatchEvent(new CustomEvent("ready"));
            })
        })
    }

    addMarker():void {
        if (this.marker) {
            this.marker.remove();
        }

        this.marker = new maplibregl.Marker({color: 'red'})
        this.marker.setLngLat([this.lng, this.lat]);
        this.marker.addTo(this.map);
    }

    fadeOut(el:HTMLElement, duration:number = 600, cb?:func) {
        let keyframes = [
            {"opacity": 1},
            {"opacity": 0}
        ]

        let settings = {
            duration: duration,
            iterations: 1,
            fill: 'both'
        }

        let animation = el.animate(keyframes, settings);  

        if (typeof cb === 'function') {
            animation.addEventListener('finish', evt => {
                cb();
            })
        }

        return this;      
    }

    setLocation(lat:lat, lng:lng) {
        return new Promise(resolve => {
            this.renderRoot.setAttribute('lat', lat);
            this.renderRoot.setAttribute('lng', lng);
            
            setTimeout(() => {
                resolve();
            }, 1500)            
        })
    }

    setPopup(info:info) {
        if (!info) return;

        if (this.popup) {
            this.popup.remove();
        }

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

        this.popup = new maplibregl.Popup().setHTML(sb.join(''));
        this.marker.setPopup(this.popup);    
    }

    createRenderRoot():void {
        return this;
    }

    render():void {
        return (
            html`
                <div class="map-container"></div>
                <div class="overlay">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" style="fill: currentColor;transform: ;msFilter:;"><path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></svg>                        
                </div>
            `
        )
    }

    firstUpdated():void {
        this.init();
    }

    updated():void {
        if (this.count) {
            const location = [this.lng, this.lat];
            this.map.panTo(location);

            setTimeout(() => {
                this.addMarker();
            }, 1000)

            return;
        }

        this.count++;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'x-map': TMap
  }
}
