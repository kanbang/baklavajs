// @ts-ignore
import { App } from "vue";

import Editor from "./components/Editor.vue";

// @ts-ignore
import vueClickOutsideElement from 'vue-click-outside-element'

const Baklava = {
    install(app: App): void {
        app.component("baklava-editor", Editor);
        app.use(vueClickOutsideElement)
    }
};


export const BaklavaVuePlugin = Baklava;
