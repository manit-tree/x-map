(function(){"use strict";try{if(typeof document<"u"){var l=document.createElement("style");l.appendChild(document.createTextNode(`.maplibregl-map{font:12px/20px Helvetica Neue,Arial,Helvetica,sans-serif;overflow:hidden;position:relative;-webkit-tap-highlight-color:rgb(0 0 0/0)}.maplibregl-canvas{left:0;position:absolute;top:0}.maplibregl-map:fullscreen{height:100%;width:100%}.maplibregl-ctrl-group button.maplibregl-ctrl-compass{touch-action:none}.maplibregl-canvas-container.maplibregl-interactive,.maplibregl-ctrl-group button.maplibregl-ctrl-compass{cursor:grab;-webkit-user-select:none;-moz-user-select:none;user-select:none}.maplibregl-canvas-container.maplibregl-interactive.maplibregl-track-pointer{cursor:pointer}.maplibregl-canvas-container.maplibregl-interactive:active,.maplibregl-ctrl-group button.maplibregl-ctrl-compass:active{cursor:grabbing}.maplibregl-canvas-container.maplibregl-touch-zoom-rotate,.maplibregl-canvas-container.maplibregl-touch-zoom-rotate .maplibregl-canvas{touch-action:pan-x pan-y}.maplibregl-canvas-container.maplibregl-touch-drag-pan,.maplibregl-canvas-container.maplibregl-touch-drag-pan .maplibregl-canvas{touch-action:pinch-zoom}.maplibregl-canvas-container.maplibregl-touch-zoom-rotate.maplibregl-touch-drag-pan,.maplibregl-canvas-container.maplibregl-touch-zoom-rotate.maplibregl-touch-drag-pan .maplibregl-canvas{touch-action:none}.maplibregl-canvas-container.maplibregl-touch-drag-pan.maplibregl-cooperative-gestures,.maplibregl-canvas-container.maplibregl-touch-drag-pan.maplibregl-cooperative-gestures .maplibregl-canvas{touch-action:pan-x pan-y}.maplibregl-ctrl-bottom-left,.maplibregl-ctrl-bottom-right,.maplibregl-ctrl-top-left,.maplibregl-ctrl-top-right{pointer-events:none;position:absolute;z-index:2}.maplibregl-ctrl-top-left{left:0;top:0}.maplibregl-ctrl-top-right{right:0;top:0}.maplibregl-ctrl-bottom-left{bottom:0;left:0}.maplibregl-ctrl-bottom-right{bottom:0;right:0}.maplibregl-ctrl{clear:both;pointer-events:auto;transform:translate(0)}.maplibregl-ctrl-top-left .maplibregl-ctrl{float:left;margin:10px 0 0 10px}.maplibregl-ctrl-top-right .maplibregl-ctrl{float:right;margin:10px 10px 0 0}.maplibregl-ctrl-bottom-left .maplibregl-ctrl{float:left;margin:0 0 10px 10px}.maplibregl-ctrl-bottom-right .maplibregl-ctrl{float:right;margin:0 10px 10px 0}.maplibregl-ctrl-group{background:#fff;border-radius:4px}.maplibregl-ctrl-group:not(:empty){box-shadow:0 0 0 2px #0000001a}@media (forced-colors:active){.maplibregl-ctrl-group:not(:empty){box-shadow:0 0 0 2px ButtonText}}.maplibregl-ctrl-group button{background-color:transparent;border:0;box-sizing:border-box;cursor:pointer;display:block;height:29px;outline:none;padding:0;width:29px}.maplibregl-ctrl-group button+button{border-top:1px solid #ddd}.maplibregl-ctrl button .maplibregl-ctrl-icon{background-position:50%;background-repeat:no-repeat;display:block;height:100%;width:100%}@media (forced-colors:active){.maplibregl-ctrl-icon{background-color:transparent}.maplibregl-ctrl-group button+button{border-top:1px solid ButtonText}}.maplibregl-ctrl button::-moz-focus-inner{border:0;padding:0}.maplibregl-ctrl-attrib-button:focus,.maplibregl-ctrl-group button:focus{box-shadow:0 0 2px 2px #0096ff}.maplibregl-ctrl button:disabled{cursor:not-allowed}.maplibregl-ctrl button:disabled .maplibregl-ctrl-icon{opacity:.25}.maplibregl-ctrl button:not(:disabled):hover{background-color:#0000000d}.maplibregl-ctrl-group button:focus:focus-visible{box-shadow:0 0 2px 2px #0096ff}.maplibregl-ctrl-group button:focus:not(:focus-visible){box-shadow:none}.maplibregl-ctrl-group button:focus:first-child{border-radius:4px 4px 0 0}.maplibregl-ctrl-group button:focus:last-child{border-radius:0 0 4px 4px}.maplibregl-ctrl-group button:focus:only-child{border-radius:inherit}.maplibregl-ctrl button.maplibregl-ctrl-zoom-out .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23333' viewBox='0 0 29 29'%3E%3Cpath d='M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13z'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-zoom-in .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23333' viewBox='0 0 29 29'%3E%3Cpath d='M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5'/%3E%3C/svg%3E")}@media (forced-colors:active){.maplibregl-ctrl button.maplibregl-ctrl-zoom-out .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23fff' viewBox='0 0 29 29'%3E%3Cpath d='M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13z'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-zoom-in .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23fff' viewBox='0 0 29 29'%3E%3Cpath d='M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5'/%3E%3C/svg%3E")}}@media (forced-colors:active) and (prefers-color-scheme:light){.maplibregl-ctrl button.maplibregl-ctrl-zoom-out .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' viewBox='0 0 29 29'%3E%3Cpath d='M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13z'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-zoom-in .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' viewBox='0 0 29 29'%3E%3Cpath d='M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5'/%3E%3C/svg%3E")}}.maplibregl-ctrl button.maplibregl-ctrl-fullscreen .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23333' viewBox='0 0 29 29'%3E%3Cpath d='M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1z'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-shrink .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' viewBox='0 0 29 29'%3E%3Cpath d='M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1z'/%3E%3C/svg%3E")}@media (forced-colors:active){.maplibregl-ctrl button.maplibregl-ctrl-fullscreen .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23fff' viewBox='0 0 29 29'%3E%3Cpath d='M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1z'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-shrink .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23fff' viewBox='0 0 29 29'%3E%3Cpath d='M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1z'/%3E%3C/svg%3E")}}@media (forced-colors:active) and (prefers-color-scheme:light){.maplibregl-ctrl button.maplibregl-ctrl-fullscreen .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' viewBox='0 0 29 29'%3E%3Cpath d='M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1z'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-shrink .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' viewBox='0 0 29 29'%3E%3Cpath d='M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1z'/%3E%3C/svg%3E")}}.maplibregl-ctrl button.maplibregl-ctrl-compass .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23333' viewBox='0 0 29 29'%3E%3Cpath d='m10.5 14 4-8 4 8z'/%3E%3Cpath fill='%23ccc' d='m10.5 16 4 8 4-8z'/%3E%3C/svg%3E")}@media (forced-colors:active){.maplibregl-ctrl button.maplibregl-ctrl-compass .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23fff' viewBox='0 0 29 29'%3E%3Cpath d='m10.5 14 4-8 4 8z'/%3E%3Cpath fill='%23ccc' d='m10.5 16 4 8 4-8z'/%3E%3C/svg%3E")}}@media (forced-colors:active) and (prefers-color-scheme:light){.maplibregl-ctrl button.maplibregl-ctrl-compass .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' viewBox='0 0 29 29'%3E%3Cpath d='m10.5 14 4-8 4 8z'/%3E%3Cpath fill='%23ccc' d='m10.5 16 4 8 4-8z'/%3E%3C/svg%3E")}}.maplibregl-ctrl button.maplibregl-ctrl-terrain .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='%23333' viewBox='0 0 22 22'%3E%3Cpath d='m1.754 13.406 4.453-4.851 3.09 3.09 3.281 3.277.969-.969-3.309-3.312 3.844-4.121 6.148 6.886h1.082v-.855l-7.207-8.07-4.84 5.187L6.169 6.57l-5.48 5.965v.871ZM.688 16.844h20.625v1.375H.688Zm0 0'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-terrain-enabled .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='%2333b5e5' viewBox='0 0 22 22'%3E%3Cpath d='m1.754 13.406 4.453-4.851 3.09 3.09 3.281 3.277.969-.969-3.309-3.312 3.844-4.121 6.148 6.886h1.082v-.855l-7.207-8.07-4.84 5.187L6.169 6.57l-5.48 5.965v.871ZM.688 16.844h20.625v1.375H.688Zm0 0'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23333' viewBox='0 0 20 20'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate:disabled .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23aaa' viewBox='0 0 20 20'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Cpath fill='red' d='m14 5 1 1-9 9-1-1z'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-active .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%2333b5e5' viewBox='0 0 20 20'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-active-error .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23e58978' viewBox='0 0 20 20'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-background .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%2333b5e5' viewBox='0 0 20 20'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-background-error .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23e54e33' viewBox='0 0 20 20'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-waiting .maplibregl-ctrl-icon{animation:maplibregl-spin 2s linear infinite}@media (forced-colors:active){.maplibregl-ctrl button.maplibregl-ctrl-geolocate .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23fff' viewBox='0 0 20 20'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate:disabled .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23999' viewBox='0 0 20 20'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Cpath fill='red' d='m14 5 1 1-9 9-1-1z'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-active .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%2333b5e5' viewBox='0 0 20 20'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-active-error .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23e58978' viewBox='0 0 20 20'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-background .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%2333b5e5' viewBox='0 0 20 20'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-background-error .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23e54e33' viewBox='0 0 20 20'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7'/%3E%3C/svg%3E")}}@media (forced-colors:active) and (prefers-color-scheme:light){.maplibregl-ctrl button.maplibregl-ctrl-geolocate .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' viewBox='0 0 20 20'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate:disabled .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23666' viewBox='0 0 20 20'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Cpath fill='red' d='m14 5 1 1-9 9-1-1z'/%3E%3C/svg%3E")}}@keyframes maplibregl-spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}a.maplibregl-ctrl-logo{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='23' fill='none'%3E%3Cpath fill='%23000' fill-opacity='.4' fill-rule='evenodd' d='M17.408 16.796h-1.827l2.501-12.095h.198l3.324 6.533.988 2.19.988-2.19 3.258-6.533h.181l2.6 12.095h-1.81l-1.218-5.644-.362-1.71-.658 1.71-2.929 5.644h-.098l-2.914-5.644-.757-1.71-.345 1.71zm1.958-3.42-.726 3.663a1.255 1.255 0 0 1-1.232 1.011h-1.827a1.255 1.255 0 0 1-1.229-1.509l2.501-12.095a1.255 1.255 0 0 1 1.23-1.001h.197a1.25 1.25 0 0 1 1.12.685l3.19 6.273 3.125-6.263a1.25 1.25 0 0 1 1.123-.695h.181a1.255 1.255 0 0 1 1.227.991l1.443 6.71a5 5 0 0 1 .314-.787l.009-.016a4.6 4.6 0 0 1 1.777-1.887c.782-.46 1.668-.667 2.611-.667a4.6 4.6 0 0 1 1.7.32l.306.134c.21-.16.474-.256.759-.256h1.694a1.255 1.255 0 0 1 1.212.925 1.255 1.255 0 0 1 1.212-.925h1.711c.284 0 .545.094.755.252.613-.3 1.312-.45 2.075-.45 1.356 0 2.557.445 3.482 1.4q.47.48.763 1.064V4.701a1.255 1.255 0 0 1 1.255-1.255h1.86A1.255 1.255 0 0 1 54.44 4.7v9.194h2.217c.19 0 .37.043.532.118v-4.77c0-.356.147-.678.385-.906a2.42 2.42 0 0 1-.682-1.71c0-.665.267-1.253.735-1.7a2.45 2.45 0 0 1 1.722-.674 2.43 2.43 0 0 1 1.705.675q.318.302.504.683V4.7a1.255 1.255 0 0 1 1.255-1.255h1.744A1.255 1.255 0 0 1 65.812 4.7v3.335a4.8 4.8 0 0 1 1.526-.246c.938 0 1.817.214 2.59.69a4.47 4.47 0 0 1 1.67 1.743v-.98a1.255 1.255 0 0 1 1.256-1.256h1.777c.233 0 .451.064.639.174a3.4 3.4 0 0 1 1.567-.372c.346 0 .861.02 1.285.232a1.25 1.25 0 0 1 .689 1.004 4.7 4.7 0 0 1 .853-.588c.795-.44 1.675-.647 2.61-.647 1.385 0 2.65.39 3.525 1.396.836.938 1.168 2.173 1.168 3.528q-.001.515-.056 1.051a1.255 1.255 0 0 1-.947 1.09l.408.952a1.255 1.255 0 0 1-.477 1.552c-.418.268-.92.463-1.458.612-.613.171-1.304.244-2.049.244-1.06 0-2.043-.207-2.886-.698l-.015-.008c-.798-.48-1.419-1.135-1.818-1.963l-.004-.008a5.8 5.8 0 0 1-.548-2.512q0-.429.053-.843a1.3 1.3 0 0 1-.333-.086l-.166-.004c-.223 0-.426.062-.643.228-.03.024-.142.139-.142.59v3.883a1.255 1.255 0 0 1-1.256 1.256h-1.777a1.255 1.255 0 0 1-1.256-1.256V15.69l-.032.057a4.8 4.8 0 0 1-1.86 1.833 5.04 5.04 0 0 1-2.484.634 4.5 4.5 0 0 1-1.935-.424 1.25 1.25 0 0 1-.764.258h-1.71a1.255 1.255 0 0 1-1.256-1.255V7.687a2.4 2.4 0 0 1-.428.625c.253.23.412.561.412.93v7.553a1.255 1.255 0 0 1-1.256 1.255h-1.843a1.25 1.25 0 0 1-.894-.373c-.228.23-.544.373-.894.373H51.32a1.255 1.255 0 0 1-1.256-1.255v-1.251l-.061.117a4.7 4.7 0 0 1-1.782 1.884 4.77 4.77 0 0 1-2.485.67 5.6 5.6 0 0 1-1.485-.188l.009 2.764a1.255 1.255 0 0 1-1.255 1.259h-1.729a1.255 1.255 0 0 1-1.255-1.255v-3.537a1.255 1.255 0 0 1-1.167.793h-1.679a1.25 1.25 0 0 1-.77-.263 4.5 4.5 0 0 1-1.945.429c-.885 0-1.724-.21-2.495-.632l-.017-.01a5 5 0 0 1-1.081-.836 1.255 1.255 0 0 1-1.254 1.312h-1.81a1.255 1.255 0 0 1-1.228-.99l-.782-3.625-2.044 3.939a1.25 1.25 0 0 1-1.115.676h-.098a1.25 1.25 0 0 1-1.116-.68l-2.061-3.994zM35.92 16.63l.207-.114.223-.15q.493-.356.735-.785l.061-.118.033 1.332h1.678V9.242h-1.694l-.033 1.267q-.133-.329-.526-.658l-.032-.028a3.2 3.2 0 0 0-.668-.428l-.27-.12a3.3 3.3 0 0 0-1.235-.23q-1.136-.001-1.974.493a3.36 3.36 0 0 0-1.3 1.382q-.445.89-.444 2.074 0 1.2.51 2.107a3.8 3.8 0 0 0 1.382 1.381 3.9 3.9 0 0 0 1.893.477q.795 0 1.455-.33zm-2.789-5.38q-.576.675-.575 1.762 0 1.102.559 1.794.576.675 1.645.675a2.25 2.25 0 0 0 .934-.19 2.2 2.2 0 0 0 .468-.29l.178-.161a2.2 2.2 0 0 0 .397-.561q.244-.5.244-1.15v-.115q0-.708-.296-1.267l-.043-.077a2.2 2.2 0 0 0-.633-.709l-.13-.086-.047-.028a2.1 2.1 0 0 0-1.073-.285q-1.052 0-1.629.692zm2.316 2.706c.163-.17.28-.407.28-.83v-.114c0-.292-.06-.508-.15-.68a.96.96 0 0 0-.353-.389.85.85 0 0 0-.464-.127c-.4 0-.56.114-.664.239l-.01.012c-.148.174-.275.45-.275.945 0 .506.122.801.27.99.097.11.266.224.68.224.303 0 .504-.09.687-.269zm7.545 1.705a2.6 2.6 0 0 0 .331.423q.319.33.755.548l.173.074q.65.255 1.49.255 1.02 0 1.844-.493a3.45 3.45 0 0 0 1.316-1.4q.493-.904.493-2.089 0-1.909-.988-2.913-.988-1.02-2.584-1.02-.898 0-1.575.347a3 3 0 0 0-.415.262l-.199.166a3.4 3.4 0 0 0-.64.82V9.242h-1.712v11.553h1.729l-.017-5.134zm.53-1.138q.206.29.48.5l.155.11.053.034q.51.296 1.119.297 1.07 0 1.645-.675.577-.69.576-1.762 0-1.119-.576-1.777-.558-.675-1.645-.675-.435 0-.835.16a2 2 0 0 0-.284.136 2 2 0 0 0-.363.254 2.2 2.2 0 0 0-.46.569l-.082.162a2.6 2.6 0 0 0-.213 1.072v.115q0 .707.296 1.267l.135.211zm.964-.818a1.1 1.1 0 0 0 .367.385.94.94 0 0 0 .476.118c.423 0 .59-.117.687-.23.159-.194.28-.478.28-.95 0-.53-.133-.8-.266-.952l-.021-.025c-.078-.094-.231-.221-.68-.221a1 1 0 0 0-.503.135l-.012.007a.86.86 0 0 0-.335.343c-.073.133-.132.324-.132.614v.115a1.4 1.4 0 0 0 .14.66zm15.7-6.222q.347-.346.346-.856a1.05 1.05 0 0 0-.345-.79 1.18 1.18 0 0 0-.84-.329q-.51 0-.855.33a1.05 1.05 0 0 0-.346.79q0 .51.346.855.345.346.856.346.51 0 .839-.346zm4.337 9.314.033-1.332q.191.403.59.747l.098.081a4 4 0 0 0 .316.224l.223.122a3.2 3.2 0 0 0 1.44.322 3.8 3.8 0 0 0 1.875-.477 3.5 3.5 0 0 0 1.382-1.366q.527-.89.526-2.09 0-1.184-.444-2.073a3.24 3.24 0 0 0-1.283-1.399q-.823-.51-1.942-.51a3.5 3.5 0 0 0-1.527.344l-.086.043-.165.09a3 3 0 0 0-.33.214q-.432.315-.656.707a2 2 0 0 0-.099.198l.082-1.283V4.701h-1.744v12.095zm.473-2.509a2.5 2.5 0 0 0 .566.7q.117.098.245.18l.144.08a2.1 2.1 0 0 0 .975.232q1.07 0 1.645-.675.576-.69.576-1.778 0-1.102-.576-1.777-.56-.691-1.645-.692a2.2 2.2 0 0 0-1.015.235q-.22.113-.415.282l-.15.142a2.1 2.1 0 0 0-.42.594q-.223.479-.223 1.1v.115q0 .705.293 1.26zm2.616-.293c.157-.191.28-.479.28-.967 0-.51-.13-.79-.276-.961l-.021-.026c-.082-.1-.232-.225-.67-.225a.87.87 0 0 0-.681.279l-.012.011c-.154.155-.274.38-.274.807v.115c0 .285.057.499.144.669a1.1 1.1 0 0 0 .367.405c.137.082.28.123.455.123.423 0 .59-.118.686-.23zm8.266-3.013q.345-.13.724-.14l.069-.002q.493 0 .642.099l.247-1.794q-.196-.099-.717-.099a2.3 2.3 0 0 0-.545.063 2 2 0 0 0-.411.148 2.2 2.2 0 0 0-.4.249 2.5 2.5 0 0 0-.485.499 2.7 2.7 0 0 0-.32.581l-.05.137v-1.48h-1.778v7.553h1.777v-3.884q0-.546.159-.943a1.5 1.5 0 0 1 .466-.636 2.5 2.5 0 0 1 .399-.253 2 2 0 0 1 .224-.099zm9.784 2.656.05-.922q0-1.743-.856-2.698-.838-.97-2.584-.97-1.119-.001-2.007.493a3.46 3.46 0 0 0-1.4 1.382q-.493.906-.493 2.106 0 1.07.428 1.975.428.89 1.332 1.432.906.526 2.255.526.973 0 1.668-.185l.044-.012.135-.04q.613-.184.984-.421l-.542-1.267q-.3.162-.642.274l-.297.087q-.51.131-1.3.131-.954 0-1.497-.444a1.6 1.6 0 0 1-.192-.193q-.366-.44-.512-1.234l-.004-.021zm-5.427-1.256-.003.022h3.752v-.138q-.011-.727-.288-1.118a1 1 0 0 0-.156-.176q-.46-.428-1.316-.428-.986 0-1.494.604-.379.45-.494 1.234zm-27.053 2.77V4.7h-1.86v12.095h5.333V15.15zm7.103-5.908v7.553h-1.843V9.242h1.843z'/%3E%3Cpath fill='%23fff' d='m19.63 11.151-.757-1.71-.345 1.71-1.12 5.644h-1.827L18.083 4.7h.197l3.325 6.533.988 2.19.988-2.19L26.839 4.7h.181l2.6 12.095h-1.81l-1.218-5.644-.362-1.71-.658 1.71-2.93 5.644h-.098l-2.913-5.644zm14.836 5.81q-1.02 0-1.893-.478a3.8 3.8 0 0 1-1.381-1.382q-.51-.906-.51-2.106 0-1.185.444-2.074a3.36 3.36 0 0 1 1.3-1.382q.839-.494 1.974-.494a3.3 3.3 0 0 1 1.234.231 3.3 3.3 0 0 1 .97.575q.396.33.527.659l.033-1.267h1.694v7.553H37.18l-.033-1.332q-.279.593-1.02 1.053a3.17 3.17 0 0 1-1.662.444zm.296-1.482q.938 0 1.58-.642.642-.66.642-1.711v-.115q0-.708-.296-1.267a2.2 2.2 0 0 0-.807-.872 2.1 2.1 0 0 0-1.119-.313q-1.053 0-1.629.692-.575.675-.575 1.76 0 1.103.559 1.795.577.675 1.645.675zm6.521-6.237h1.711v1.4q.906-1.597 2.83-1.597 1.596 0 2.584 1.02.988 1.005.988 2.914 0 1.185-.493 2.09a3.46 3.46 0 0 1-1.316 1.399 3.5 3.5 0 0 1-1.844.493q-.954 0-1.662-.329a2.67 2.67 0 0 1-1.086-.97l.017 5.134h-1.728zm4.048 6.22q1.07 0 1.645-.674.577-.69.576-1.762 0-1.119-.576-1.777-.558-.675-1.645-.675-.592 0-1.12.296-.51.28-.822.823-.296.527-.296 1.234v.115q0 .708.296 1.267.313.543.823.855.51.296 1.119.297z'/%3E%3Cpath fill='%23e1e3e9' d='M51.325 4.7h1.86v10.45h3.473v1.646h-5.333zm7.12 4.542h1.843v7.553h-1.843zm.905-1.415a1.16 1.16 0 0 1-.856-.346 1.17 1.17 0 0 1-.346-.856 1.05 1.05 0 0 1 .346-.79q.346-.329.856-.329.494 0 .839.33a1.05 1.05 0 0 1 .345.79 1.16 1.16 0 0 1-.345.855q-.33.346-.84.346zm7.875 9.133a3.17 3.17 0 0 1-1.662-.444q-.723-.46-1.004-1.053l-.033 1.332h-1.71V4.701h1.743v4.657l-.082 1.283q.279-.658 1.086-1.119a3.5 3.5 0 0 1 1.778-.477q1.119 0 1.942.51a3.24 3.24 0 0 1 1.283 1.4q.445.888.444 2.072 0 1.201-.526 2.09a3.5 3.5 0 0 1-1.382 1.366 3.8 3.8 0 0 1-1.876.477zm-.296-1.481q1.069 0 1.645-.675.577-.69.577-1.778 0-1.102-.577-1.776-.56-.691-1.645-.692a2.12 2.12 0 0 0-1.58.659q-.642.641-.642 1.694v.115q0 .71.296 1.267a2.4 2.4 0 0 0 .807.872 2.1 2.1 0 0 0 1.119.313zm5.927-6.237h1.777v1.481q.263-.757.856-1.217a2.14 2.14 0 0 1 1.349-.46q.527 0 .724.098l-.247 1.794q-.149-.099-.642-.099-.774 0-1.416.494-.626.493-.626 1.58v3.883h-1.777V9.242zm9.534 7.718q-1.35 0-2.255-.526-.904-.543-1.332-1.432a4.6 4.6 0 0 1-.428-1.975q0-1.2.493-2.106a3.46 3.46 0 0 1 1.4-1.382q.889-.495 2.007-.494 1.744 0 2.584.97.855.956.856 2.7 0 .444-.05.92h-5.43q.18 1.005.708 1.45.542.443 1.497.443.79 0 1.3-.131a4 4 0 0 0 .938-.362l.542 1.267q-.411.263-1.119.46-.708.198-1.711.197zm1.596-4.558q.016-1.02-.444-1.432-.46-.428-1.316-.428-1.728 0-1.991 1.86z'/%3E%3Cpath d='M5.074 15.948a.484.657 0 0 0-.486.659v1.84a.484.657 0 0 0 .486.659h4.101a.484.657 0 0 0 .486-.659v-1.84a.484.657 0 0 0-.486-.659zm3.56 1.16H5.617v.838h3.017z' style='fill:%23fff;fill-rule:evenodd;stroke-width:1.03600001'/%3E%3Cg style='stroke-width:1.12603545'%3E%3Cpath d='M-9.408-1.416c-3.833-.025-7.056 2.912-7.08 6.615-.02 3.08 1.653 4.832 3.107 6.268.903.892 1.721 1.74 2.32 2.902l-.525-.004c-.543-.003-.992.304-1.24.639a1.87 1.87 0 0 0-.362 1.121l-.011 1.877c-.003.402.104.787.347 1.125.244.338.688.653 1.23.656l4.142.028c.542.003.99-.306 1.238-.641a1.87 1.87 0 0 0 .363-1.121l.012-1.875a1.87 1.87 0 0 0-.348-1.127c-.243-.338-.688-.653-1.23-.656l-.518-.004c.597-1.145 1.425-1.983 2.348-2.87 1.473-1.414 3.18-3.149 3.2-6.226-.016-3.59-2.923-6.684-6.993-6.707m-.006 1.1v.002c3.274.02 5.92 2.532 5.9 5.6-.017 2.706-1.39 4.026-2.863 5.44-1.034.994-2.118 2.033-2.814 3.633-.018.041-.052.055-.075.065q-.013.004-.02.01a.34.34 0 0 1-.226.084.34.34 0 0 1-.224-.086l-.092-.077c-.699-1.615-1.768-2.669-2.781-3.67-1.454-1.435-2.797-2.762-2.78-5.478.02-3.067 2.7-5.545 5.975-5.523m-.02 2.826c-1.62-.01-2.944 1.315-2.955 2.96-.01 1.646 1.295 2.988 2.916 2.999h.002c1.621.01 2.943-1.316 2.953-2.961.011-1.646-1.294-2.988-2.916-2.998m-.005 1.1c1.017.006 1.829.83 1.822 1.89s-.83 1.874-1.848 1.867c-1.018-.006-1.829-.83-1.822-1.89s.83-1.874 1.848-1.868m-2.155 11.857 4.14.025c.271.002.49.305.487.676l-.013 1.875c-.003.37-.224.67-.495.668l-4.14-.025c-.27-.002-.487-.306-.485-.676l.012-1.875c.003-.37.224-.67.494-.668' style='color:%23000;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:%23000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:evenodd;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:%23000;solid-opacity:1;vector-effect:none;fill:%23000;fill-opacity:.4;fill-rule:evenodd;stroke:none;stroke-width:2.47727823;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto' transform='translate(15.553 2.85)scale(.88807)'/%3E%3Cpath d='M-9.415-.316C-12.69-.338-15.37 2.14-15.39 5.207c-.017 2.716 1.326 4.041 2.78 5.477 1.013 1 2.081 2.055 2.78 3.67l.092.076a.34.34 0 0 0 .225.086.34.34 0 0 0 .227-.083l.019-.01c.022-.009.057-.024.074-.064.697-1.6 1.78-2.64 2.814-3.634 1.473-1.414 2.847-2.733 2.864-5.44.02-3.067-2.627-5.58-5.901-5.601m-.057 8.784c1.621.011 2.944-1.315 2.955-2.96.01-1.646-1.295-2.988-2.916-2.999-1.622-.01-2.945 1.315-2.955 2.96s1.295 2.989 2.916 3' style='clip-rule:evenodd;fill:%23e1e3e9;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.47727823;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:.4' transform='translate(15.553 2.85)scale(.88807)'/%3E%3Cpath d='M-11.594 15.465c-.27-.002-.492.297-.494.668l-.012 1.876c-.003.371.214.673.485.675l4.14.027c.271.002.492-.298.495-.668l.012-1.877c.003-.37-.215-.672-.485-.674z' style='clip-rule:evenodd;fill:%23fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.47727823;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:.4' transform='translate(15.553 2.85)scale(.88807)'/%3E%3C/g%3E%3C/svg%3E");background-repeat:no-repeat;cursor:pointer;display:block;height:23px;margin:0 0 -4px -4px;overflow:hidden;width:88px}a.maplibregl-ctrl-logo.maplibregl-compact{width:14px}@media (forced-colors:active){a.maplibregl-ctrl-logo{background-color:transparent;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='23' fill='none'%3E%3Cpath fill='%23000' fill-opacity='.4' fill-rule='evenodd' d='M17.408 16.796h-1.827l2.501-12.095h.198l3.324 6.533.988 2.19.988-2.19 3.258-6.533h.181l2.6 12.095h-1.81l-1.218-5.644-.362-1.71-.658 1.71-2.929 5.644h-.098l-2.914-5.644-.757-1.71-.345 1.71zm1.958-3.42-.726 3.663a1.255 1.255 0 0 1-1.232 1.011h-1.827a1.255 1.255 0 0 1-1.229-1.509l2.501-12.095a1.255 1.255 0 0 1 1.23-1.001h.197a1.25 1.25 0 0 1 1.12.685l3.19 6.273 3.125-6.263a1.25 1.25 0 0 1 1.123-.695h.181a1.255 1.255 0 0 1 1.227.991l1.443 6.71a5 5 0 0 1 .314-.787l.009-.016a4.6 4.6 0 0 1 1.777-1.887c.782-.46 1.668-.667 2.611-.667a4.6 4.6 0 0 1 1.7.32l.306.134c.21-.16.474-.256.759-.256h1.694a1.255 1.255 0 0 1 1.212.925 1.255 1.255 0 0 1 1.212-.925h1.711c.284 0 .545.094.755.252.613-.3 1.312-.45 2.075-.45 1.356 0 2.557.445 3.482 1.4q.47.48.763 1.064V4.701a1.255 1.255 0 0 1 1.255-1.255h1.86A1.255 1.255 0 0 1 54.44 4.7v9.194h2.217c.19 0 .37.043.532.118v-4.77c0-.356.147-.678.385-.906a2.42 2.42 0 0 1-.682-1.71c0-.665.267-1.253.735-1.7a2.45 2.45 0 0 1 1.722-.674 2.43 2.43 0 0 1 1.705.675q.318.302.504.683V4.7a1.255 1.255 0 0 1 1.255-1.255h1.744A1.255 1.255 0 0 1 65.812 4.7v3.335a4.8 4.8 0 0 1 1.526-.246c.938 0 1.817.214 2.59.69a4.47 4.47 0 0 1 1.67 1.743v-.98a1.255 1.255 0 0 1 1.256-1.256h1.777c.233 0 .451.064.639.174a3.4 3.4 0 0 1 1.567-.372c.346 0 .861.02 1.285.232a1.25 1.25 0 0 1 .689 1.004 4.7 4.7 0 0 1 .853-.588c.795-.44 1.675-.647 2.61-.647 1.385 0 2.65.39 3.525 1.396.836.938 1.168 2.173 1.168 3.528q-.001.515-.056 1.051a1.255 1.255 0 0 1-.947 1.09l.408.952a1.255 1.255 0 0 1-.477 1.552c-.418.268-.92.463-1.458.612-.613.171-1.304.244-2.049.244-1.06 0-2.043-.207-2.886-.698l-.015-.008c-.798-.48-1.419-1.135-1.818-1.963l-.004-.008a5.8 5.8 0 0 1-.548-2.512q0-.429.053-.843a1.3 1.3 0 0 1-.333-.086l-.166-.004c-.223 0-.426.062-.643.228-.03.024-.142.139-.142.59v3.883a1.255 1.255 0 0 1-1.256 1.256h-1.777a1.255 1.255 0 0 1-1.256-1.256V15.69l-.032.057a4.8 4.8 0 0 1-1.86 1.833 5.04 5.04 0 0 1-2.484.634 4.5 4.5 0 0 1-1.935-.424 1.25 1.25 0 0 1-.764.258h-1.71a1.255 1.255 0 0 1-1.256-1.255V7.687a2.4 2.4 0 0 1-.428.625c.253.23.412.561.412.93v7.553a1.255 1.255 0 0 1-1.256 1.255h-1.843a1.25 1.25 0 0 1-.894-.373c-.228.23-.544.373-.894.373H51.32a1.255 1.255 0 0 1-1.256-1.255v-1.251l-.061.117a4.7 4.7 0 0 1-1.782 1.884 4.77 4.77 0 0 1-2.485.67 5.6 5.6 0 0 1-1.485-.188l.009 2.764a1.255 1.255 0 0 1-1.255 1.259h-1.729a1.255 1.255 0 0 1-1.255-1.255v-3.537a1.255 1.255 0 0 1-1.167.793h-1.679a1.25 1.25 0 0 1-.77-.263 4.5 4.5 0 0 1-1.945.429c-.885 0-1.724-.21-2.495-.632l-.017-.01a5 5 0 0 1-1.081-.836 1.255 1.255 0 0 1-1.254 1.312h-1.81a1.255 1.255 0 0 1-1.228-.99l-.782-3.625-2.044 3.939a1.25 1.25 0 0 1-1.115.676h-.098a1.25 1.25 0 0 1-1.116-.68l-2.061-3.994zM35.92 16.63l.207-.114.223-.15q.493-.356.735-.785l.061-.118.033 1.332h1.678V9.242h-1.694l-.033 1.267q-.133-.329-.526-.658l-.032-.028a3.2 3.2 0 0 0-.668-.428l-.27-.12a3.3 3.3 0 0 0-1.235-.23q-1.136-.001-1.974.493a3.36 3.36 0 0 0-1.3 1.382q-.445.89-.444 2.074 0 1.2.51 2.107a3.8 3.8 0 0 0 1.382 1.381 3.9 3.9 0 0 0 1.893.477q.795 0 1.455-.33zm-2.789-5.38q-.576.675-.575 1.762 0 1.102.559 1.794.576.675 1.645.675a2.25 2.25 0 0 0 .934-.19 2.2 2.2 0 0 0 .468-.29l.178-.161a2.2 2.2 0 0 0 .397-.561q.244-.5.244-1.15v-.115q0-.708-.296-1.267l-.043-.077a2.2 2.2 0 0 0-.633-.709l-.13-.086-.047-.028a2.1 2.1 0 0 0-1.073-.285q-1.052 0-1.629.692zm2.316 2.706c.163-.17.28-.407.28-.83v-.114c0-.292-.06-.508-.15-.68a.96.96 0 0 0-.353-.389.85.85 0 0 0-.464-.127c-.4 0-.56.114-.664.239l-.01.012c-.148.174-.275.45-.275.945 0 .506.122.801.27.99.097.11.266.224.68.224.303 0 .504-.09.687-.269zm7.545 1.705a2.6 2.6 0 0 0 .331.423q.319.33.755.548l.173.074q.65.255 1.49.255 1.02 0 1.844-.493a3.45 3.45 0 0 0 1.316-1.4q.493-.904.493-2.089 0-1.909-.988-2.913-.988-1.02-2.584-1.02-.898 0-1.575.347a3 3 0 0 0-.415.262l-.199.166a3.4 3.4 0 0 0-.64.82V9.242h-1.712v11.553h1.729l-.017-5.134zm.53-1.138q.206.29.48.5l.155.11.053.034q.51.296 1.119.297 1.07 0 1.645-.675.577-.69.576-1.762 0-1.119-.576-1.777-.558-.675-1.645-.675-.435 0-.835.16a2 2 0 0 0-.284.136 2 2 0 0 0-.363.254 2.2 2.2 0 0 0-.46.569l-.082.162a2.6 2.6 0 0 0-.213 1.072v.115q0 .707.296 1.267l.135.211zm.964-.818a1.1 1.1 0 0 0 .367.385.94.94 0 0 0 .476.118c.423 0 .59-.117.687-.23.159-.194.28-.478.28-.95 0-.53-.133-.8-.266-.952l-.021-.025c-.078-.094-.231-.221-.68-.221a1 1 0 0 0-.503.135l-.012.007a.86.86 0 0 0-.335.343c-.073.133-.132.324-.132.614v.115a1.4 1.4 0 0 0 .14.66zm15.7-6.222q.347-.346.346-.856a1.05 1.05 0 0 0-.345-.79 1.18 1.18 0 0 0-.84-.329q-.51 0-.855.33a1.05 1.05 0 0 0-.346.79q0 .51.346.855.345.346.856.346.51 0 .839-.346zm4.337 9.314.033-1.332q.191.403.59.747l.098.081a4 4 0 0 0 .316.224l.223.122a3.2 3.2 0 0 0 1.44.322 3.8 3.8 0 0 0 1.875-.477 3.5 3.5 0 0 0 1.382-1.366q.527-.89.526-2.09 0-1.184-.444-2.073a3.24 3.24 0 0 0-1.283-1.399q-.823-.51-1.942-.51a3.5 3.5 0 0 0-1.527.344l-.086.043-.165.09a3 3 0 0 0-.33.214q-.432.315-.656.707a2 2 0 0 0-.099.198l.082-1.283V4.701h-1.744v12.095zm.473-2.509a2.5 2.5 0 0 0 .566.7q.117.098.245.18l.144.08a2.1 2.1 0 0 0 .975.232q1.07 0 1.645-.675.576-.69.576-1.778 0-1.102-.576-1.777-.56-.691-1.645-.692a2.2 2.2 0 0 0-1.015.235q-.22.113-.415.282l-.15.142a2.1 2.1 0 0 0-.42.594q-.223.479-.223 1.1v.115q0 .705.293 1.26zm2.616-.293c.157-.191.28-.479.28-.967 0-.51-.13-.79-.276-.961l-.021-.026c-.082-.1-.232-.225-.67-.225a.87.87 0 0 0-.681.279l-.012.011c-.154.155-.274.38-.274.807v.115c0 .285.057.499.144.669a1.1 1.1 0 0 0 .367.405c.137.082.28.123.455.123.423 0 .59-.118.686-.23zm8.266-3.013q.345-.13.724-.14l.069-.002q.493 0 .642.099l.247-1.794q-.196-.099-.717-.099a2.3 2.3 0 0 0-.545.063 2 2 0 0 0-.411.148 2.2 2.2 0 0 0-.4.249 2.5 2.5 0 0 0-.485.499 2.7 2.7 0 0 0-.32.581l-.05.137v-1.48h-1.778v7.553h1.777v-3.884q0-.546.159-.943a1.5 1.5 0 0 1 .466-.636 2.5 2.5 0 0 1 .399-.253 2 2 0 0 1 .224-.099zm9.784 2.656.05-.922q0-1.743-.856-2.698-.838-.97-2.584-.97-1.119-.001-2.007.493a3.46 3.46 0 0 0-1.4 1.382q-.493.906-.493 2.106 0 1.07.428 1.975.428.89 1.332 1.432.906.526 2.255.526.973 0 1.668-.185l.044-.012.135-.04q.613-.184.984-.421l-.542-1.267q-.3.162-.642.274l-.297.087q-.51.131-1.3.131-.954 0-1.497-.444a1.6 1.6 0 0 1-.192-.193q-.366-.44-.512-1.234l-.004-.021zm-5.427-1.256-.003.022h3.752v-.138q-.011-.727-.288-1.118a1 1 0 0 0-.156-.176q-.46-.428-1.316-.428-.986 0-1.494.604-.379.45-.494 1.234zm-27.053 2.77V4.7h-1.86v12.095h5.333V15.15zm7.103-5.908v7.553h-1.843V9.242h1.843z'/%3E%3Cpath fill='%23fff' d='m19.63 11.151-.757-1.71-.345 1.71-1.12 5.644h-1.827L18.083 4.7h.197l3.325 6.533.988 2.19.988-2.19L26.839 4.7h.181l2.6 12.095h-1.81l-1.218-5.644-.362-1.71-.658 1.71-2.93 5.644h-.098l-2.913-5.644zm14.836 5.81q-1.02 0-1.893-.478a3.8 3.8 0 0 1-1.381-1.382q-.51-.906-.51-2.106 0-1.185.444-2.074a3.36 3.36 0 0 1 1.3-1.382q.839-.494 1.974-.494a3.3 3.3 0 0 1 1.234.231 3.3 3.3 0 0 1 .97.575q.396.33.527.659l.033-1.267h1.694v7.553H37.18l-.033-1.332q-.279.593-1.02 1.053a3.17 3.17 0 0 1-1.662.444zm.296-1.482q.938 0 1.58-.642.642-.66.642-1.711v-.115q0-.708-.296-1.267a2.2 2.2 0 0 0-.807-.872 2.1 2.1 0 0 0-1.119-.313q-1.053 0-1.629.692-.575.675-.575 1.76 0 1.103.559 1.795.577.675 1.645.675zm6.521-6.237h1.711v1.4q.906-1.597 2.83-1.597 1.596 0 2.584 1.02.988 1.005.988 2.914 0 1.185-.493 2.09a3.46 3.46 0 0 1-1.316 1.399 3.5 3.5 0 0 1-1.844.493q-.954 0-1.662-.329a2.67 2.67 0 0 1-1.086-.97l.017 5.134h-1.728zm4.048 6.22q1.07 0 1.645-.674.577-.69.576-1.762 0-1.119-.576-1.777-.558-.675-1.645-.675-.592 0-1.12.296-.51.28-.822.823-.296.527-.296 1.234v.115q0 .708.296 1.267.313.543.823.855.51.296 1.119.297z'/%3E%3Cpath fill='%23e1e3e9' d='M51.325 4.7h1.86v10.45h3.473v1.646h-5.333zm7.12 4.542h1.843v7.553h-1.843zm.905-1.415a1.16 1.16 0 0 1-.856-.346 1.17 1.17 0 0 1-.346-.856 1.05 1.05 0 0 1 .346-.79q.346-.329.856-.329.494 0 .839.33a1.05 1.05 0 0 1 .345.79 1.16 1.16 0 0 1-.345.855q-.33.346-.84.346zm7.875 9.133a3.17 3.17 0 0 1-1.662-.444q-.723-.46-1.004-1.053l-.033 1.332h-1.71V4.701h1.743v4.657l-.082 1.283q.279-.658 1.086-1.119a3.5 3.5 0 0 1 1.778-.477q1.119 0 1.942.51a3.24 3.24 0 0 1 1.283 1.4q.445.888.444 2.072 0 1.201-.526 2.09a3.5 3.5 0 0 1-1.382 1.366 3.8 3.8 0 0 1-1.876.477zm-.296-1.481q1.069 0 1.645-.675.577-.69.577-1.778 0-1.102-.577-1.776-.56-.691-1.645-.692a2.12 2.12 0 0 0-1.58.659q-.642.641-.642 1.694v.115q0 .71.296 1.267a2.4 2.4 0 0 0 .807.872 2.1 2.1 0 0 0 1.119.313zm5.927-6.237h1.777v1.481q.263-.757.856-1.217a2.14 2.14 0 0 1 1.349-.46q.527 0 .724.098l-.247 1.794q-.149-.099-.642-.099-.774 0-1.416.494-.626.493-.626 1.58v3.883h-1.777V9.242zm9.534 7.718q-1.35 0-2.255-.526-.904-.543-1.332-1.432a4.6 4.6 0 0 1-.428-1.975q0-1.2.493-2.106a3.46 3.46 0 0 1 1.4-1.382q.889-.495 2.007-.494 1.744 0 2.584.97.855.956.856 2.7 0 .444-.05.92h-5.43q.18 1.005.708 1.45.542.443 1.497.443.79 0 1.3-.131a4 4 0 0 0 .938-.362l.542 1.267q-.411.263-1.119.46-.708.198-1.711.197zm1.596-4.558q.016-1.02-.444-1.432-.46-.428-1.316-.428-1.728 0-1.991 1.86z'/%3E%3Cpath d='M5.074 15.948a.484.657 0 0 0-.486.659v1.84a.484.657 0 0 0 .486.659h4.101a.484.657 0 0 0 .486-.659v-1.84a.484.657 0 0 0-.486-.659zm3.56 1.16H5.617v.838h3.017z' style='fill:%23fff;fill-rule:evenodd;stroke-width:1.03600001'/%3E%3Cg style='stroke-width:1.12603545'%3E%3Cpath d='M-9.408-1.416c-3.833-.025-7.056 2.912-7.08 6.615-.02 3.08 1.653 4.832 3.107 6.268.903.892 1.721 1.74 2.32 2.902l-.525-.004c-.543-.003-.992.304-1.24.639a1.87 1.87 0 0 0-.362 1.121l-.011 1.877c-.003.402.104.787.347 1.125.244.338.688.653 1.23.656l4.142.028c.542.003.99-.306 1.238-.641a1.87 1.87 0 0 0 .363-1.121l.012-1.875a1.87 1.87 0 0 0-.348-1.127c-.243-.338-.688-.653-1.23-.656l-.518-.004c.597-1.145 1.425-1.983 2.348-2.87 1.473-1.414 3.18-3.149 3.2-6.226-.016-3.59-2.923-6.684-6.993-6.707m-.006 1.1v.002c3.274.02 5.92 2.532 5.9 5.6-.017 2.706-1.39 4.026-2.863 5.44-1.034.994-2.118 2.033-2.814 3.633-.018.041-.052.055-.075.065q-.013.004-.02.01a.34.34 0 0 1-.226.084.34.34 0 0 1-.224-.086l-.092-.077c-.699-1.615-1.768-2.669-2.781-3.67-1.454-1.435-2.797-2.762-2.78-5.478.02-3.067 2.7-5.545 5.975-5.523m-.02 2.826c-1.62-.01-2.944 1.315-2.955 2.96-.01 1.646 1.295 2.988 2.916 2.999h.002c1.621.01 2.943-1.316 2.953-2.961.011-1.646-1.294-2.988-2.916-2.998m-.005 1.1c1.017.006 1.829.83 1.822 1.89s-.83 1.874-1.848 1.867c-1.018-.006-1.829-.83-1.822-1.89s.83-1.874 1.848-1.868m-2.155 11.857 4.14.025c.271.002.49.305.487.676l-.013 1.875c-.003.37-.224.67-.495.668l-4.14-.025c-.27-.002-.487-.306-.485-.676l.012-1.875c.003-.37.224-.67.494-.668' style='color:%23000;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:%23000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:evenodd;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:%23000;solid-opacity:1;vector-effect:none;fill:%23000;fill-opacity:.4;fill-rule:evenodd;stroke:none;stroke-width:2.47727823;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto' transform='translate(15.553 2.85)scale(.88807)'/%3E%3Cpath d='M-9.415-.316C-12.69-.338-15.37 2.14-15.39 5.207c-.017 2.716 1.326 4.041 2.78 5.477 1.013 1 2.081 2.055 2.78 3.67l.092.076a.34.34 0 0 0 .225.086.34.34 0 0 0 .227-.083l.019-.01c.022-.009.057-.024.074-.064.697-1.6 1.78-2.64 2.814-3.634 1.473-1.414 2.847-2.733 2.864-5.44.02-3.067-2.627-5.58-5.901-5.601m-.057 8.784c1.621.011 2.944-1.315 2.955-2.96.01-1.646-1.295-2.988-2.916-2.999-1.622-.01-2.945 1.315-2.955 2.96s1.295 2.989 2.916 3' style='clip-rule:evenodd;fill:%23e1e3e9;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.47727823;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:.4' transform='translate(15.553 2.85)scale(.88807)'/%3E%3Cpath d='M-11.594 15.465c-.27-.002-.492.297-.494.668l-.012 1.876c-.003.371.214.673.485.675l4.14.027c.271.002.492-.298.495-.668l.012-1.877c.003-.37-.215-.672-.485-.674z' style='clip-rule:evenodd;fill:%23fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.47727823;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:.4' transform='translate(15.553 2.85)scale(.88807)'/%3E%3C/g%3E%3C/svg%3E")}}@media (forced-colors:active) and (prefers-color-scheme:light){a.maplibregl-ctrl-logo{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='23' fill='none'%3E%3Cpath fill='%23000' fill-opacity='.4' fill-rule='evenodd' d='M17.408 16.796h-1.827l2.501-12.095h.198l3.324 6.533.988 2.19.988-2.19 3.258-6.533h.181l2.6 12.095h-1.81l-1.218-5.644-.362-1.71-.658 1.71-2.929 5.644h-.098l-2.914-5.644-.757-1.71-.345 1.71zm1.958-3.42-.726 3.663a1.255 1.255 0 0 1-1.232 1.011h-1.827a1.255 1.255 0 0 1-1.229-1.509l2.501-12.095a1.255 1.255 0 0 1 1.23-1.001h.197a1.25 1.25 0 0 1 1.12.685l3.19 6.273 3.125-6.263a1.25 1.25 0 0 1 1.123-.695h.181a1.255 1.255 0 0 1 1.227.991l1.443 6.71a5 5 0 0 1 .314-.787l.009-.016a4.6 4.6 0 0 1 1.777-1.887c.782-.46 1.668-.667 2.611-.667a4.6 4.6 0 0 1 1.7.32l.306.134c.21-.16.474-.256.759-.256h1.694a1.255 1.255 0 0 1 1.212.925 1.255 1.255 0 0 1 1.212-.925h1.711c.284 0 .545.094.755.252.613-.3 1.312-.45 2.075-.45 1.356 0 2.557.445 3.482 1.4q.47.48.763 1.064V4.701a1.255 1.255 0 0 1 1.255-1.255h1.86A1.255 1.255 0 0 1 54.44 4.7v9.194h2.217c.19 0 .37.043.532.118v-4.77c0-.356.147-.678.385-.906a2.42 2.42 0 0 1-.682-1.71c0-.665.267-1.253.735-1.7a2.45 2.45 0 0 1 1.722-.674 2.43 2.43 0 0 1 1.705.675q.318.302.504.683V4.7a1.255 1.255 0 0 1 1.255-1.255h1.744A1.255 1.255 0 0 1 65.812 4.7v3.335a4.8 4.8 0 0 1 1.526-.246c.938 0 1.817.214 2.59.69a4.47 4.47 0 0 1 1.67 1.743v-.98a1.255 1.255 0 0 1 1.256-1.256h1.777c.233 0 .451.064.639.174a3.4 3.4 0 0 1 1.567-.372c.346 0 .861.02 1.285.232a1.25 1.25 0 0 1 .689 1.004 4.7 4.7 0 0 1 .853-.588c.795-.44 1.675-.647 2.61-.647 1.385 0 2.65.39 3.525 1.396.836.938 1.168 2.173 1.168 3.528q-.001.515-.056 1.051a1.255 1.255 0 0 1-.947 1.09l.408.952a1.255 1.255 0 0 1-.477 1.552c-.418.268-.92.463-1.458.612-.613.171-1.304.244-2.049.244-1.06 0-2.043-.207-2.886-.698l-.015-.008c-.798-.48-1.419-1.135-1.818-1.963l-.004-.008a5.8 5.8 0 0 1-.548-2.512q0-.429.053-.843a1.3 1.3 0 0 1-.333-.086l-.166-.004c-.223 0-.426.062-.643.228-.03.024-.142.139-.142.59v3.883a1.255 1.255 0 0 1-1.256 1.256h-1.777a1.255 1.255 0 0 1-1.256-1.256V15.69l-.032.057a4.8 4.8 0 0 1-1.86 1.833 5.04 5.04 0 0 1-2.484.634 4.5 4.5 0 0 1-1.935-.424 1.25 1.25 0 0 1-.764.258h-1.71a1.255 1.255 0 0 1-1.256-1.255V7.687a2.4 2.4 0 0 1-.428.625c.253.23.412.561.412.93v7.553a1.255 1.255 0 0 1-1.256 1.255h-1.843a1.25 1.25 0 0 1-.894-.373c-.228.23-.544.373-.894.373H51.32a1.255 1.255 0 0 1-1.256-1.255v-1.251l-.061.117a4.7 4.7 0 0 1-1.782 1.884 4.77 4.77 0 0 1-2.485.67 5.6 5.6 0 0 1-1.485-.188l.009 2.764a1.255 1.255 0 0 1-1.255 1.259h-1.729a1.255 1.255 0 0 1-1.255-1.255v-3.537a1.255 1.255 0 0 1-1.167.793h-1.679a1.25 1.25 0 0 1-.77-.263 4.5 4.5 0 0 1-1.945.429c-.885 0-1.724-.21-2.495-.632l-.017-.01a5 5 0 0 1-1.081-.836 1.255 1.255 0 0 1-1.254 1.312h-1.81a1.255 1.255 0 0 1-1.228-.99l-.782-3.625-2.044 3.939a1.25 1.25 0 0 1-1.115.676h-.098a1.25 1.25 0 0 1-1.116-.68l-2.061-3.994zM35.92 16.63l.207-.114.223-.15q.493-.356.735-.785l.061-.118.033 1.332h1.678V9.242h-1.694l-.033 1.267q-.133-.329-.526-.658l-.032-.028a3.2 3.2 0 0 0-.668-.428l-.27-.12a3.3 3.3 0 0 0-1.235-.23q-1.136-.001-1.974.493a3.36 3.36 0 0 0-1.3 1.382q-.445.89-.444 2.074 0 1.2.51 2.107a3.8 3.8 0 0 0 1.382 1.381 3.9 3.9 0 0 0 1.893.477q.795 0 1.455-.33zm-2.789-5.38q-.576.675-.575 1.762 0 1.102.559 1.794.576.675 1.645.675a2.25 2.25 0 0 0 .934-.19 2.2 2.2 0 0 0 .468-.29l.178-.161a2.2 2.2 0 0 0 .397-.561q.244-.5.244-1.15v-.115q0-.708-.296-1.267l-.043-.077a2.2 2.2 0 0 0-.633-.709l-.13-.086-.047-.028a2.1 2.1 0 0 0-1.073-.285q-1.052 0-1.629.692zm2.316 2.706c.163-.17.28-.407.28-.83v-.114c0-.292-.06-.508-.15-.68a.96.96 0 0 0-.353-.389.85.85 0 0 0-.464-.127c-.4 0-.56.114-.664.239l-.01.012c-.148.174-.275.45-.275.945 0 .506.122.801.27.99.097.11.266.224.68.224.303 0 .504-.09.687-.269zm7.545 1.705a2.6 2.6 0 0 0 .331.423q.319.33.755.548l.173.074q.65.255 1.49.255 1.02 0 1.844-.493a3.45 3.45 0 0 0 1.316-1.4q.493-.904.493-2.089 0-1.909-.988-2.913-.988-1.02-2.584-1.02-.898 0-1.575.347a3 3 0 0 0-.415.262l-.199.166a3.4 3.4 0 0 0-.64.82V9.242h-1.712v11.553h1.729l-.017-5.134zm.53-1.138q.206.29.48.5l.155.11.053.034q.51.296 1.119.297 1.07 0 1.645-.675.577-.69.576-1.762 0-1.119-.576-1.777-.558-.675-1.645-.675-.435 0-.835.16a2 2 0 0 0-.284.136 2 2 0 0 0-.363.254 2.2 2.2 0 0 0-.46.569l-.082.162a2.6 2.6 0 0 0-.213 1.072v.115q0 .707.296 1.267l.135.211zm.964-.818a1.1 1.1 0 0 0 .367.385.94.94 0 0 0 .476.118c.423 0 .59-.117.687-.23.159-.194.28-.478.28-.95 0-.53-.133-.8-.266-.952l-.021-.025c-.078-.094-.231-.221-.68-.221a1 1 0 0 0-.503.135l-.012.007a.86.86 0 0 0-.335.343c-.073.133-.132.324-.132.614v.115a1.4 1.4 0 0 0 .14.66zm15.7-6.222q.347-.346.346-.856a1.05 1.05 0 0 0-.345-.79 1.18 1.18 0 0 0-.84-.329q-.51 0-.855.33a1.05 1.05 0 0 0-.346.79q0 .51.346.855.345.346.856.346.51 0 .839-.346zm4.337 9.314.033-1.332q.191.403.59.747l.098.081a4 4 0 0 0 .316.224l.223.122a3.2 3.2 0 0 0 1.44.322 3.8 3.8 0 0 0 1.875-.477 3.5 3.5 0 0 0 1.382-1.366q.527-.89.526-2.09 0-1.184-.444-2.073a3.24 3.24 0 0 0-1.283-1.399q-.823-.51-1.942-.51a3.5 3.5 0 0 0-1.527.344l-.086.043-.165.09a3 3 0 0 0-.33.214q-.432.315-.656.707a2 2 0 0 0-.099.198l.082-1.283V4.701h-1.744v12.095zm.473-2.509a2.5 2.5 0 0 0 .566.7q.117.098.245.18l.144.08a2.1 2.1 0 0 0 .975.232q1.07 0 1.645-.675.576-.69.576-1.778 0-1.102-.576-1.777-.56-.691-1.645-.692a2.2 2.2 0 0 0-1.015.235q-.22.113-.415.282l-.15.142a2.1 2.1 0 0 0-.42.594q-.223.479-.223 1.1v.115q0 .705.293 1.26zm2.616-.293c.157-.191.28-.479.28-.967 0-.51-.13-.79-.276-.961l-.021-.026c-.082-.1-.232-.225-.67-.225a.87.87 0 0 0-.681.279l-.012.011c-.154.155-.274.38-.274.807v.115c0 .285.057.499.144.669a1.1 1.1 0 0 0 .367.405c.137.082.28.123.455.123.423 0 .59-.118.686-.23zm8.266-3.013q.345-.13.724-.14l.069-.002q.493 0 .642.099l.247-1.794q-.196-.099-.717-.099a2.3 2.3 0 0 0-.545.063 2 2 0 0 0-.411.148 2.2 2.2 0 0 0-.4.249 2.5 2.5 0 0 0-.485.499 2.7 2.7 0 0 0-.32.581l-.05.137v-1.48h-1.778v7.553h1.777v-3.884q0-.546.159-.943a1.5 1.5 0 0 1 .466-.636 2.5 2.5 0 0 1 .399-.253 2 2 0 0 1 .224-.099zm9.784 2.656.05-.922q0-1.743-.856-2.698-.838-.97-2.584-.97-1.119-.001-2.007.493a3.46 3.46 0 0 0-1.4 1.382q-.493.906-.493 2.106 0 1.07.428 1.975.428.89 1.332 1.432.906.526 2.255.526.973 0 1.668-.185l.044-.012.135-.04q.613-.184.984-.421l-.542-1.267q-.3.162-.642.274l-.297.087q-.51.131-1.3.131-.954 0-1.497-.444a1.6 1.6 0 0 1-.192-.193q-.366-.44-.512-1.234l-.004-.021zm-5.427-1.256-.003.022h3.752v-.138q-.011-.727-.288-1.118a1 1 0 0 0-.156-.176q-.46-.428-1.316-.428-.986 0-1.494.604-.379.45-.494 1.234zm-27.053 2.77V4.7h-1.86v12.095h5.333V15.15zm7.103-5.908v7.553h-1.843V9.242h1.843z'/%3E%3Cpath fill='%23fff' d='m19.63 11.151-.757-1.71-.345 1.71-1.12 5.644h-1.827L18.083 4.7h.197l3.325 6.533.988 2.19.988-2.19L26.839 4.7h.181l2.6 12.095h-1.81l-1.218-5.644-.362-1.71-.658 1.71-2.93 5.644h-.098l-2.913-5.644zm14.836 5.81q-1.02 0-1.893-.478a3.8 3.8 0 0 1-1.381-1.382q-.51-.906-.51-2.106 0-1.185.444-2.074a3.36 3.36 0 0 1 1.3-1.382q.839-.494 1.974-.494a3.3 3.3 0 0 1 1.234.231 3.3 3.3 0 0 1 .97.575q.396.33.527.659l.033-1.267h1.694v7.553H37.18l-.033-1.332q-.279.593-1.02 1.053a3.17 3.17 0 0 1-1.662.444zm.296-1.482q.938 0 1.58-.642.642-.66.642-1.711v-.115q0-.708-.296-1.267a2.2 2.2 0 0 0-.807-.872 2.1 2.1 0 0 0-1.119-.313q-1.053 0-1.629.692-.575.675-.575 1.76 0 1.103.559 1.795.577.675 1.645.675zm6.521-6.237h1.711v1.4q.906-1.597 2.83-1.597 1.596 0 2.584 1.02.988 1.005.988 2.914 0 1.185-.493 2.09a3.46 3.46 0 0 1-1.316 1.399 3.5 3.5 0 0 1-1.844.493q-.954 0-1.662-.329a2.67 2.67 0 0 1-1.086-.97l.017 5.134h-1.728zm4.048 6.22q1.07 0 1.645-.674.577-.69.576-1.762 0-1.119-.576-1.777-.558-.675-1.645-.675-.592 0-1.12.296-.51.28-.822.823-.296.527-.296 1.234v.115q0 .708.296 1.267.313.543.823.855.51.296 1.119.297z'/%3E%3Cpath fill='%23e1e3e9' d='M51.325 4.7h1.86v10.45h3.473v1.646h-5.333zm7.12 4.542h1.843v7.553h-1.843zm.905-1.415a1.16 1.16 0 0 1-.856-.346 1.17 1.17 0 0 1-.346-.856 1.05 1.05 0 0 1 .346-.79q.346-.329.856-.329.494 0 .839.33a1.05 1.05 0 0 1 .345.79 1.16 1.16 0 0 1-.345.855q-.33.346-.84.346zm7.875 9.133a3.17 3.17 0 0 1-1.662-.444q-.723-.46-1.004-1.053l-.033 1.332h-1.71V4.701h1.743v4.657l-.082 1.283q.279-.658 1.086-1.119a3.5 3.5 0 0 1 1.778-.477q1.119 0 1.942.51a3.24 3.24 0 0 1 1.283 1.4q.445.888.444 2.072 0 1.201-.526 2.09a3.5 3.5 0 0 1-1.382 1.366 3.8 3.8 0 0 1-1.876.477zm-.296-1.481q1.069 0 1.645-.675.577-.69.577-1.778 0-1.102-.577-1.776-.56-.691-1.645-.692a2.12 2.12 0 0 0-1.58.659q-.642.641-.642 1.694v.115q0 .71.296 1.267a2.4 2.4 0 0 0 .807.872 2.1 2.1 0 0 0 1.119.313zm5.927-6.237h1.777v1.481q.263-.757.856-1.217a2.14 2.14 0 0 1 1.349-.46q.527 0 .724.098l-.247 1.794q-.149-.099-.642-.099-.774 0-1.416.494-.626.493-.626 1.58v3.883h-1.777V9.242zm9.534 7.718q-1.35 0-2.255-.526-.904-.543-1.332-1.432a4.6 4.6 0 0 1-.428-1.975q0-1.2.493-2.106a3.46 3.46 0 0 1 1.4-1.382q.889-.495 2.007-.494 1.744 0 2.584.97.855.956.856 2.7 0 .444-.05.92h-5.43q.18 1.005.708 1.45.542.443 1.497.443.79 0 1.3-.131a4 4 0 0 0 .938-.362l.542 1.267q-.411.263-1.119.46-.708.198-1.711.197zm1.596-4.558q.016-1.02-.444-1.432-.46-.428-1.316-.428-1.728 0-1.991 1.86z'/%3E%3Cpath d='M5.074 15.948a.484.657 0 0 0-.486.659v1.84a.484.657 0 0 0 .486.659h4.101a.484.657 0 0 0 .486-.659v-1.84a.484.657 0 0 0-.486-.659zm3.56 1.16H5.617v.838h3.017z' style='fill:%23fff;fill-rule:evenodd;stroke-width:1.03600001'/%3E%3Cg style='stroke-width:1.12603545'%3E%3Cpath d='M-9.408-1.416c-3.833-.025-7.056 2.912-7.08 6.615-.02 3.08 1.653 4.832 3.107 6.268.903.892 1.721 1.74 2.32 2.902l-.525-.004c-.543-.003-.992.304-1.24.639a1.87 1.87 0 0 0-.362 1.121l-.011 1.877c-.003.402.104.787.347 1.125.244.338.688.653 1.23.656l4.142.028c.542.003.99-.306 1.238-.641a1.87 1.87 0 0 0 .363-1.121l.012-1.875a1.87 1.87 0 0 0-.348-1.127c-.243-.338-.688-.653-1.23-.656l-.518-.004c.597-1.145 1.425-1.983 2.348-2.87 1.473-1.414 3.18-3.149 3.2-6.226-.016-3.59-2.923-6.684-6.993-6.707m-.006 1.1v.002c3.274.02 5.92 2.532 5.9 5.6-.017 2.706-1.39 4.026-2.863 5.44-1.034.994-2.118 2.033-2.814 3.633-.018.041-.052.055-.075.065q-.013.004-.02.01a.34.34 0 0 1-.226.084.34.34 0 0 1-.224-.086l-.092-.077c-.699-1.615-1.768-2.669-2.781-3.67-1.454-1.435-2.797-2.762-2.78-5.478.02-3.067 2.7-5.545 5.975-5.523m-.02 2.826c-1.62-.01-2.944 1.315-2.955 2.96-.01 1.646 1.295 2.988 2.916 2.999h.002c1.621.01 2.943-1.316 2.953-2.961.011-1.646-1.294-2.988-2.916-2.998m-.005 1.1c1.017.006 1.829.83 1.822 1.89s-.83 1.874-1.848 1.867c-1.018-.006-1.829-.83-1.822-1.89s.83-1.874 1.848-1.868m-2.155 11.857 4.14.025c.271.002.49.305.487.676l-.013 1.875c-.003.37-.224.67-.495.668l-4.14-.025c-.27-.002-.487-.306-.485-.676l.012-1.875c.003-.37.224-.67.494-.668' style='color:%23000;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:%23000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:evenodd;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:%23000;solid-opacity:1;vector-effect:none;fill:%23000;fill-opacity:.4;fill-rule:evenodd;stroke:none;stroke-width:2.47727823;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto' transform='translate(15.553 2.85)scale(.88807)'/%3E%3Cpath d='M-9.415-.316C-12.69-.338-15.37 2.14-15.39 5.207c-.017 2.716 1.326 4.041 2.78 5.477 1.013 1 2.081 2.055 2.78 3.67l.092.076a.34.34 0 0 0 .225.086.34.34 0 0 0 .227-.083l.019-.01c.022-.009.057-.024.074-.064.697-1.6 1.78-2.64 2.814-3.634 1.473-1.414 2.847-2.733 2.864-5.44.02-3.067-2.627-5.58-5.901-5.601m-.057 8.784c1.621.011 2.944-1.315 2.955-2.96.01-1.646-1.295-2.988-2.916-2.999-1.622-.01-2.945 1.315-2.955 2.96s1.295 2.989 2.916 3' style='clip-rule:evenodd;fill:%23e1e3e9;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.47727823;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:.4' transform='translate(15.553 2.85)scale(.88807)'/%3E%3Cpath d='M-11.594 15.465c-.27-.002-.492.297-.494.668l-.012 1.876c-.003.371.214.673.485.675l4.14.027c.271.002.492-.298.495-.668l.012-1.877c.003-.37-.215-.672-.485-.674z' style='clip-rule:evenodd;fill:%23fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.47727823;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:.4' transform='translate(15.553 2.85)scale(.88807)'/%3E%3C/g%3E%3C/svg%3E")}}.maplibregl-ctrl.maplibregl-ctrl-attrib{background-color:#ffffff80;margin:0;padding:0 5px}@media screen{.maplibregl-ctrl-attrib.maplibregl-compact{background-color:#fff;border-radius:12px;box-sizing:content-box;color:#000;margin:10px;min-height:20px;padding:2px 24px 2px 0;position:relative}.maplibregl-ctrl-attrib.maplibregl-compact-show{padding:2px 28px 2px 8px;visibility:visible}.maplibregl-ctrl-bottom-left>.maplibregl-ctrl-attrib.maplibregl-compact-show,.maplibregl-ctrl-top-left>.maplibregl-ctrl-attrib.maplibregl-compact-show{border-radius:12px;padding:2px 8px 2px 28px}.maplibregl-ctrl-attrib.maplibregl-compact .maplibregl-ctrl-attrib-inner{display:none}.maplibregl-ctrl-attrib-button{background-color:#ffffff80;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill-rule='evenodd' viewBox='0 0 20 20'%3E%3Cpath d='M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0'/%3E%3C/svg%3E");border:0;border-radius:12px;box-sizing:border-box;cursor:pointer;display:none;height:24px;outline:none;position:absolute;right:0;top:0;width:24px}.maplibregl-ctrl-attrib summary.maplibregl-ctrl-attrib-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;list-style:none}.maplibregl-ctrl-attrib summary.maplibregl-ctrl-attrib-button::-webkit-details-marker{display:none}.maplibregl-ctrl-bottom-left .maplibregl-ctrl-attrib-button,.maplibregl-ctrl-top-left .maplibregl-ctrl-attrib-button{left:0}.maplibregl-ctrl-attrib.maplibregl-compact .maplibregl-ctrl-attrib-button,.maplibregl-ctrl-attrib.maplibregl-compact-show .maplibregl-ctrl-attrib-inner{display:block}.maplibregl-ctrl-attrib.maplibregl-compact-show .maplibregl-ctrl-attrib-button{background-color:#0000000d}.maplibregl-ctrl-bottom-right>.maplibregl-ctrl-attrib.maplibregl-compact:after{bottom:0;right:0}.maplibregl-ctrl-top-right>.maplibregl-ctrl-attrib.maplibregl-compact:after{right:0;top:0}.maplibregl-ctrl-top-left>.maplibregl-ctrl-attrib.maplibregl-compact:after{left:0;top:0}.maplibregl-ctrl-bottom-left>.maplibregl-ctrl-attrib.maplibregl-compact:after{bottom:0;left:0}}@media screen and (forced-colors:active){.maplibregl-ctrl-attrib.maplibregl-compact:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff' fill-rule='evenodd' viewBox='0 0 20 20'%3E%3Cpath d='M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0'/%3E%3C/svg%3E")}}@media screen and (forced-colors:active) and (prefers-color-scheme:light){.maplibregl-ctrl-attrib.maplibregl-compact:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill-rule='evenodd' viewBox='0 0 20 20'%3E%3Cpath d='M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0'/%3E%3C/svg%3E")}}.maplibregl-ctrl-attrib a{color:#000000bf;text-decoration:none}.maplibregl-ctrl-attrib a:hover{color:inherit;text-decoration:underline}.maplibregl-attrib-empty{display:none}.maplibregl-ctrl-scale{background-color:#ffffffbf;border:2px solid #333;border-top:#333;box-sizing:border-box;color:#333;font-size:10px;padding:0 5px}.maplibregl-popup{display:flex;left:0;pointer-events:none;position:absolute;top:0;will-change:transform}.maplibregl-popup-anchor-top,.maplibregl-popup-anchor-top-left,.maplibregl-popup-anchor-top-right{flex-direction:column}.maplibregl-popup-anchor-bottom,.maplibregl-popup-anchor-bottom-left,.maplibregl-popup-anchor-bottom-right{flex-direction:column-reverse}.maplibregl-popup-anchor-left{flex-direction:row}.maplibregl-popup-anchor-right{flex-direction:row-reverse}.maplibregl-popup-tip{border:10px solid transparent;height:0;width:0;z-index:1}.maplibregl-popup-anchor-top .maplibregl-popup-tip{align-self:center;border-bottom-color:#fff;border-top:none}.maplibregl-popup-anchor-top-left .maplibregl-popup-tip{align-self:flex-start;border-bottom-color:#fff;border-left:none;border-top:none}.maplibregl-popup-anchor-top-right .maplibregl-popup-tip{align-self:flex-end;border-bottom-color:#fff;border-right:none;border-top:none}.maplibregl-popup-anchor-bottom .maplibregl-popup-tip{align-self:center;border-bottom:none;border-top-color:#fff}.maplibregl-popup-anchor-bottom-left .maplibregl-popup-tip{align-self:flex-start;border-bottom:none;border-left:none;border-top-color:#fff}.maplibregl-popup-anchor-bottom-right .maplibregl-popup-tip{align-self:flex-end;border-bottom:none;border-right:none;border-top-color:#fff}.maplibregl-popup-anchor-left .maplibregl-popup-tip{align-self:center;border-left:none;border-right-color:#fff}.maplibregl-popup-anchor-right .maplibregl-popup-tip{align-self:center;border-left-color:#fff;border-right:none}.maplibregl-popup-close-button{background-color:transparent;border:0;border-radius:0 3px 0 0;cursor:pointer;position:absolute;right:0;top:0}.maplibregl-popup-close-button:hover{background-color:#0000000d}.maplibregl-popup-content{background:#fff;border-radius:3px;box-shadow:0 1px 2px #0000001a;padding:15px 10px;pointer-events:auto;position:relative}.maplibregl-popup-anchor-top-left .maplibregl-popup-content{border-top-left-radius:0}.maplibregl-popup-anchor-top-right .maplibregl-popup-content{border-top-right-radius:0}.maplibregl-popup-anchor-bottom-left .maplibregl-popup-content{border-bottom-left-radius:0}.maplibregl-popup-anchor-bottom-right .maplibregl-popup-content{border-bottom-right-radius:0}.maplibregl-popup-track-pointer{display:none}.maplibregl-popup-track-pointer *{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.maplibregl-map:hover .maplibregl-popup-track-pointer{display:flex}.maplibregl-map:active .maplibregl-popup-track-pointer{display:none}.maplibregl-marker{left:0;position:absolute;top:0;transition:opacity .2s;will-change:transform}.maplibregl-user-location-dot,.maplibregl-user-location-dot:before{background-color:#1da1f2;border-radius:50%;height:15px;width:15px}.maplibregl-user-location-dot:before{animation:maplibregl-user-location-dot-pulse 2s infinite;content:"";position:absolute}.maplibregl-user-location-dot:after{border:2px solid #fff;border-radius:50%;box-shadow:0 0 3px #00000059;box-sizing:border-box;content:"";height:19px;left:-2px;position:absolute;top:-2px;width:19px}@keyframes maplibregl-user-location-dot-pulse{0%{opacity:1;transform:scale(1)}70%{opacity:0;transform:scale(3)}to{opacity:0;transform:scale(1)}}.maplibregl-user-location-dot-stale{background-color:#aaa}.maplibregl-user-location-dot-stale:after{display:none}.maplibregl-user-location-accuracy-circle{background-color:#1da1f233;border-radius:100%;height:1px;width:1px}.maplibregl-crosshair,.maplibregl-crosshair .maplibregl-interactive,.maplibregl-crosshair .maplibregl-interactive:active{cursor:crosshair}.maplibregl-boxzoom{background:#fff;border:2px dotted #202020;height:0;left:0;opacity:.5;position:absolute;top:0;width:0}.maplibregl-cooperative-gesture-screen{align-items:center;background:#0006;color:#fff;display:flex;font-size:1.4em;top:0;right:0;bottom:0;left:0;justify-content:center;line-height:1.2;opacity:0;padding:1rem;pointer-events:none;position:absolute;transition:opacity 1s ease 1s;z-index:99999}.maplibregl-cooperative-gesture-screen.maplibregl-show{opacity:1;transition:opacity .05s}.maplibregl-cooperative-gesture-screen .maplibregl-mobile-message{display:none}@media (hover:none),(width <= 480px){.maplibregl-cooperative-gesture-screen .maplibregl-desktop-message{display:none}.maplibregl-cooperative-gesture-screen .maplibregl-mobile-message{display:block}}.maplibregl-pseudo-fullscreen{height:100%!important;left:0!important;position:fixed!important;top:0!important;width:100%!important;z-index:99999}x-map{display:block;width:100%;height:100%}x-map .map-container{width:100%;height:100%}x-map .map-container .maplibregl-popup-content{width:280px}x-map .map-container .maplibregl-popup-content .info{font-size:12px;line-height:1.45em}x-map .map-container .maplibregl-popup-content .info>*{display:flex;align-items:center;gap:.5em}x-map .map-container .maplibregl-popup-content .info .title{font-size:1.075em;font-weight:700;margin-bottom:.5em;color:var(--title-color, inherit)}x-map .map-container .maplibregl-popup-content .info .address{margin-bottom:1em}x-map .map-container .maplibregl-popup-content .info svg{color:var(--icon-color, inherit)}x-map .map-container .maplibregl-popup-content .info a{text-decoration:none}x-map .map-container .maplibregl-popup-content button{top:3px;right:3px}`)),document.head.appendChild(l)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import T from "https://cdn.skypack.dev/maplibre-gl";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const R = globalThis, W = R.ShadowRoot && (R.ShadyCSS === void 0 || R.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ot = Symbol(), J = /* @__PURE__ */ new WeakMap();
let ct = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== ot) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (W && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = J.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && J.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const pt = (r) => new ct(typeof r == "string" ? r : r + "", void 0, ot), dt = (r, t) => {
  if (W) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), i = R.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, r.appendChild(s);
  }
}, K = W ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return pt(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: ut, defineProperty: $t, getOwnPropertyDescriptor: _t, getOwnPropertyNames: mt, getOwnPropertySymbols: gt, getPrototypeOf: ft } = Object, m = globalThis, G = m.trustedTypes, At = G ? G.emptyScript : "", j = m.reactiveElementPolyfillSupport, E = (r, t) => r, z = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? At : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, q = (r, t) => !ut(r, t), Q = { attribute: !0, type: String, converter: z, reflect: !1, hasChanged: q };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), m.litPropertyMetadata ?? (m.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class v extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Q) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && $t(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: n } = _t(this.prototype, t) ?? { get() {
      return this[e];
    }, set(o) {
      this[e] = o;
    } };
    return { get() {
      return i == null ? void 0 : i.call(this);
    }, set(o) {
      const a = i == null ? void 0 : i.call(this);
      n.call(this, o), this.requestUpdate(t, a, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Q;
  }
  static _$Ei() {
    if (this.hasOwnProperty(E("elementProperties"))) return;
    const t = ft(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(E("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(E("properties"))) {
      const e = this.properties, s = [...mt(e), ...gt(e)];
      for (const i of s) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, i] of e) this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s) e.unshift(K(i));
    } else t !== void 0 && e.push(K(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return dt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) == null ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$EC(t, e) {
    var n;
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const o = (((n = s.converter) == null ? void 0 : n.toAttribute) !== void 0 ? s.converter : z).toAttribute(e, s.type);
      this._$Em = t, o == null ? this.removeAttribute(i) : this.setAttribute(i, o), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var n;
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const o = s.getPropertyOptions(i), a = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((n = o.converter) == null ? void 0 : n.fromAttribute) !== void 0 ? o.converter : z;
      this._$Em = i, this[i] = a.fromAttribute(e, o.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    if (t !== void 0) {
      if (s ?? (s = this.constructor.getPropertyOptions(t)), !(s.hasChanged ?? q)(this[t], e)) return;
      this.P(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, s) {
    this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, o] of this._$Ep) this[n] = o;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [n, o] of i) o.wrapped !== !0 || this._$AL.has(n) || this[n] === void 0 || this.P(n, this[n], o);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((i) => {
        var n;
        return (n = i.hostUpdate) == null ? void 0 : n.call(i);
      }), this.update(e)) : this._$EU();
    } catch (i) {
      throw t = !1, this._$EU(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var i;
      return (i = s.hostUpdated) == null ? void 0 : i.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
v.elementStyles = [], v.shadowRootOptions = { mode: "open" }, v[E("elementProperties")] = /* @__PURE__ */ new Map(), v[E("finalized")] = /* @__PURE__ */ new Map(), j == null || j({ ReactiveElement: v }), (m.reactiveElementVersions ?? (m.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const S = globalThis, k = S.trustedTypes, X = k ? k.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, nt = "$lit$", _ = `lit$${Math.random().toFixed(9).slice(2)}$`, ht = "?" + _, vt = `<${ht}>`, A = document, P = () => A.createComment(""), x = (r) => r === null || typeof r != "object" && typeof r != "function", F = Array.isArray, yt = (r) => F(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", D = `[ 	
\f\r]`, b = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Y = /-->/g, tt = />/g, g = RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, st = /"/g, at = /^(?:script|style|textarea|title)$/i, wt = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), bt = wt(1), y = Symbol.for("lit-noChange"), p = Symbol.for("lit-nothing"), it = /* @__PURE__ */ new WeakMap(), f = A.createTreeWalker(A, 129);
function lt(r, t) {
  if (!F(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return X !== void 0 ? X.createHTML(t) : t;
}
const Et = (r, t) => {
  const e = r.length - 1, s = [];
  let i, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = b;
  for (let a = 0; a < e; a++) {
    const h = r[a];
    let c, d, l = -1, u = 0;
    for (; u < h.length && (o.lastIndex = u, d = o.exec(h), d !== null); ) u = o.lastIndex, o === b ? d[1] === "!--" ? o = Y : d[1] !== void 0 ? o = tt : d[2] !== void 0 ? (at.test(d[2]) && (i = RegExp("</" + d[2], "g")), o = g) : d[3] !== void 0 && (o = g) : o === g ? d[0] === ">" ? (o = i ?? b, l = -1) : d[1] === void 0 ? l = -2 : (l = o.lastIndex - d[2].length, c = d[1], o = d[3] === void 0 ? g : d[3] === '"' ? st : et) : o === st || o === et ? o = g : o === Y || o === tt ? o = b : (o = g, i = void 0);
    const $ = o === g && r[a + 1].startsWith("/>") ? " " : "";
    n += o === b ? h + vt : l >= 0 ? (s.push(c), h.slice(0, l) + nt + h.slice(l) + _ + $) : h + _ + (l === -2 ? a : $);
  }
  return [lt(r, n + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class U {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let n = 0, o = 0;
    const a = t.length - 1, h = this.parts, [c, d] = Et(t, e);
    if (this.el = U.createElement(c, s), f.currentNode = this.el.content, e === 2 || e === 3) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (i = f.nextNode()) !== null && h.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const l of i.getAttributeNames()) if (l.endsWith(nt)) {
          const u = d[o++], $ = i.getAttribute(l).split(_), M = /([.?@])?(.*)/.exec(u);
          h.push({ type: 1, index: n, name: M[2], strings: $, ctor: M[1] === "." ? Ct : M[1] === "?" ? Pt : M[1] === "@" ? xt : L }), i.removeAttribute(l);
        } else l.startsWith(_) && (h.push({ type: 6, index: n }), i.removeAttribute(l));
        if (at.test(i.tagName)) {
          const l = i.textContent.split(_), u = l.length - 1;
          if (u > 0) {
            i.textContent = k ? k.emptyScript : "";
            for (let $ = 0; $ < u; $++) i.append(l[$], P()), f.nextNode(), h.push({ type: 2, index: ++n });
            i.append(l[u], P());
          }
        }
      } else if (i.nodeType === 8) if (i.data === ht) h.push({ type: 2, index: n });
      else {
        let l = -1;
        for (; (l = i.data.indexOf(_, l + 1)) !== -1; ) h.push({ type: 7, index: n }), l += _.length - 1;
      }
      n++;
    }
  }
  static createElement(t, e) {
    const s = A.createElement("template");
    return s.innerHTML = t, s;
  }
}
function w(r, t, e = r, s) {
  var o, a;
  if (t === y) return t;
  let i = s !== void 0 ? (o = e._$Co) == null ? void 0 : o[s] : e._$Cl;
  const n = x(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== n && ((a = i == null ? void 0 : i._$AO) == null || a.call(i, !1), n === void 0 ? i = void 0 : (i = new n(r), i._$AT(r, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = i : e._$Cl = i), i !== void 0 && (t = w(r, i._$AS(r, t.values), i, s)), t;
}
class St {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? A).importNode(e, !0);
    f.currentNode = i;
    let n = f.nextNode(), o = 0, a = 0, h = s[0];
    for (; h !== void 0; ) {
      if (o === h.index) {
        let c;
        h.type === 2 ? c = new H(n, n.nextSibling, this, t) : h.type === 1 ? c = new h.ctor(n, h.name, h.strings, this, t) : h.type === 6 && (c = new Ut(n, this, t)), this._$AV.push(c), h = s[++a];
      }
      o !== (h == null ? void 0 : h.index) && (n = f.nextNode(), o++);
    }
    return f.currentNode = A, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class H {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, s, i) {
    this.type = 2, this._$AH = p, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = w(this, t, e), x(t) ? t === p || t == null || t === "" ? (this._$AH !== p && this._$AR(), this._$AH = p) : t !== this._$AH && t !== y && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : yt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== p && x(this._$AH) ? this._$AA.nextSibling.data = t : this.T(A.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var n;
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = U.createElement(lt(s.h, s.h[0]), this.options)), s);
    if (((n = this._$AH) == null ? void 0 : n._$AD) === i) this._$AH.p(e);
    else {
      const o = new St(i, this), a = o.u(this.options);
      o.p(e), this.T(a), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = it.get(t.strings);
    return e === void 0 && it.set(t.strings, e = new U(t)), e;
  }
  k(t) {
    F(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const n of t) i === e.length ? e.push(s = new H(this.O(P()), this.O(P()), this, this.options)) : s = e[i], s._$AI(n), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class L {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, n) {
    this.type = 1, this._$AH = p, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = n, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = p;
  }
  _$AI(t, e = this, s, i) {
    const n = this.strings;
    let o = !1;
    if (n === void 0) t = w(this, t, e, 0), o = !x(t) || t !== this._$AH && t !== y, o && (this._$AH = t);
    else {
      const a = t;
      let h, c;
      for (t = n[0], h = 0; h < n.length - 1; h++) c = w(this, a[s + h], e, h), c === y && (c = this._$AH[h]), o || (o = !x(c) || c !== this._$AH[h]), c === p ? t = p : t !== p && (t += (c ?? "") + n[h + 1]), this._$AH[h] = c;
    }
    o && !i && this.j(t);
  }
  j(t) {
    t === p ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ct extends L {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === p ? void 0 : t;
  }
}
class Pt extends L {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== p);
  }
}
class xt extends L {
  constructor(t, e, s, i, n) {
    super(t, e, s, i, n), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = w(this, t, e, 0) ?? p) === y) return;
    const s = this._$AH, i = t === p && s !== p || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, n = t !== p && (s === p || i);
    i && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ut {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    w(this, t);
  }
}
const I = S.litHtmlPolyfillSupport;
I == null || I(U, H), (S.litHtmlVersions ?? (S.litHtmlVersions = [])).push("3.2.1");
const Ot = (r, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const n = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = i = new H(t.insertBefore(P(), n), n, void 0, e ?? {});
  }
  return i._$AI(r), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let C = class extends v {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Ot(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return y;
  }
};
var rt;
C._$litElement$ = !0, C.finalized = !0, (rt = globalThis.litElementHydrateSupport) == null || rt.call(globalThis, { LitElement: C });
const V = globalThis.litElementPolyfillSupport;
V == null || V({ LitElement: C });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ht = (r) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(r, t);
  }) : customElements.define(r, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Mt = { attribute: !0, type: String, converter: z, reflect: !1, hasChanged: q }, Tt = (r = Mt, t, e) => {
  const { kind: s, metadata: i } = e;
  let n = globalThis.litPropertyMetadata.get(i);
  if (n === void 0 && globalThis.litPropertyMetadata.set(i, n = /* @__PURE__ */ new Map()), n.set(e.name, r), s === "accessor") {
    const { name: o } = e;
    return { set(a) {
      const h = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(o, h, r);
    }, init(a) {
      return a !== void 0 && this.P(o, void 0, r), a;
    } };
  }
  if (s === "setter") {
    const { name: o } = e;
    return function(a) {
      const h = this[o];
      t.call(this, a), this.requestUpdate(o, h, r);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function Z(r) {
  return (t, e) => typeof e == "object" ? Tt(r, t, e) : ((s, i, n) => {
    const o = i.hasOwnProperty(n);
    return i.constructor.createProperty(n, o ? { ...s, wrapped: !0 } : s), o ? Object.getOwnPropertyDescriptor(i, n) : void 0;
  })(r, t, e);
}
const N = {
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" style="fill: currentColor;transform: ;msFilter:;"><path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path></svg>',
  email: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" style="fill: currentColor;transform: ;msFilter:;"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>',
  marker: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" style="fill: currentColor;transform: ;msFilter:;"><path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></svg>',
  car: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" style="fill: currentColor;transform: ;msFilter:;"><path d="m20.772 10.155-1.368-4.104A2.995 2.995 0 0 0 16.559 4H7.441a2.995 2.995 0 0 0-2.845 2.051l-1.368 4.104A2 2 0 0 0 2 12v5c0 .738.404 1.376 1 1.723V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h12v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.277A1.99 1.99 0 0 0 22 17v-5a2 2 0 0 0-1.228-1.845zM7.441 6h9.117c.431 0 .813.274.949.684L18.613 10H5.387l1.105-3.316A1 1 0 0 1 7.441 6zM5.5 16a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5.5 16zm13 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18.5 16z"></path></svg>'
};
var Nt = Object.defineProperty, Rt = Object.getOwnPropertyDescriptor, B = (r, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? Rt(t, e) : t, n = r.length - 1, o; n >= 0; n--)
    (o = r[n]) && (i = (s ? o(t, e, i) : o(i)) || i);
  return s && i && Nt(t, e, i), i;
};
let O = class extends C {
  constructor() {
    super(...arguments), this.lat = "13.926841663282733", this.lng = "100.52599680608748", this.zoom = 16;
  }
  init() {
    const r = [this.lng, this.lat];
    let t = this.renderRoot.querySelector(".map-container");
    this.map = new T.Map({
      style: "https://tiles.openfreemap.org/styles/bright",
      center: r,
      zoom: this.zoom,
      container: t
    }), this.map.scrollZoom.disable(), this.marker = new T.Marker({
      color: "red"
    }), this.map.on("load", () => {
      const e = new T.NavigationControl({ showCompass: !1 });
      this.map.addControl(e, "top-right"), this.marker.setLngLat(r), this.marker.addTo(this.map);
    });
  }
  setPopup(r) {
    if (!r) return;
    let t = new Array();
    t.push('<div class="info">'), t.push('<h4 class="title">' + (r.title ?? "ไอยารา ฟาร์มาซี") + "</h4>"), t.push('<p class="address">' + (r.address ?? "27/18 ต.บ้านใหม่ อ.ปากเกร็ด จ.นนทบุรี  11120") + "</p>"), r.tel && t.push('<p class="tel">' + N.phone + ' <a href="tel:' + r.tel + '" target="_blank">' + r.tel + "</a></p>"), r.email && t.push('<p class="email">' + N.email + ' <a href="mailto:' + r.email + '" target="_blank">' + r.email + "</a></p>"), t.push('<p class="location">' + N.marker + '<a href="https://www.google.com/maps?q=loc:' + this.lat + "," + this.lng + '" target="_blank">' + this.lat.substr(0, 9) + "," + this.lng.substr(0, 9) + "</a></p>"), t.push('<p class="direction">' + N.car + ' <a href="https://www.google.com/maps/dir/?api=1&destination=' + this.lat + "," + this.lng + '" target="_blank">วิธีการเดินทาง</a></p>'), t.push("</div>"), this.marker.setPopup(new T.Popup().setHTML(t.join("")));
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return bt`
                <div class="map-container"></div>
            `;
  }
  updated() {
    this.init();
  }
};
B([
  Z()
], O.prototype, "lat", 2);
B([
  Z()
], O.prototype, "lng", 2);
B([
  Z()
], O.prototype, "zoom", 2);
O = B([
  Ht("x-map")
], O);
export {
  O as TMap
};
