import PhotoSwipeComponent from './PhotoSwipe.vue'

let vm
function mount(vue) {
    if (vm) {
        return vm
    }
    vm = new (vue.extend(PhotoSwipeComponent))().$mount()
    document.body.appendChild(vm.$el)
    return vm
}
function getTarget(target, parent, srcname = '', deep = 0) {
    let i = 0
    const body = document.body
    if (target && 'getAttribute' in target) {
        while (i < deep && !target.getAttribute(srcname)) {
            target = target.parentNode
            if (
                !target ||
                !('getAttribute' in target) ||
                target === parent ||
                target === body
            ) {
                return
            }
            i += 1
        }
        if (target.getAttribute(srcname)) {
            return target
        }
    }
}

export default {
    install(vue, args = {}) {
        const photoswipe = args.photoswipe
        const ui = args.ui || false
        const globalOptions = args.options || {}
        const deep = args.deep || 0
        if (!photoswipe) {
            throw new Error('not found photoswipe')
        }
        vue.directive('previews', {
            bind(el, binding) {
                const { value, arg, modifiers } = binding
                const srcname = arg || 'data-src'
                const eventNames = modifiers ? Object.keys(modifiers) : []
                const options = value || {}
                if (!eventNames.length) {
                    eventNames.push('click')
                }
                const handler = (e) => {
                    const target = getTarget(e.target, el, srcname, deep)
                    if (!target) {
                        return
                    }

                    const swipe = mount(vue)
                    if (swipe._vm) {
                        return
                    }

                    const group = target.dataset.group
                    const condition =
                        `[${srcname}]` +
                        (group === void 0
                            ? ':not([data-group])'
                            : `[data-group="${group}"]`)
                    const lists = el.querySelectorAll(condition)
                    const index = Array.prototype.indexOf.call(lists, target)
                    const mergeOptions = Object.assign(
                        {},
                        globalOptions,
                        options,
                        {
                            index
                        }
                    )
                    swipe.open({
                        lists,
                        srcname,
                        ui,
                        photoswipe,
                        options: mergeOptions
                    })
                }

                eventNames.forEach((name) => {
                    el.addEventListener(name, handler)
                })
            }
        })
    }
}
