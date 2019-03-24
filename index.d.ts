import { PluginObject, VueConstructor } from 'vue'
import PhotoSwipe from 'photoswipe'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'

declare namespace VPreviews {
    export interface Options {
        photoswipe: any,
        ui?: any
        deep?: number
        options?: PhotoSwipeUI_Default.Options
    }
}

declare interface VPreviews {
    install: (
        vue: VueConstructor,
        args?: VPreviews.Options
    ) => void
}

declare const VPreviews: VPreviews
export as namespace VPreviews
export = VPreviews
