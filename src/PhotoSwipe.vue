<script>
export default {
    data() {
        return { show: false, timer: 0, vm: null }
    },

    methods: {
        open(options) {
            if (!options.lists.length || this.vm) {
                return
            }
            if (this.timer) {
                clearTimeout(this.timer)
                this.timer = 0
            }
            this.show = true
            this.$nextTick(() => {
                this.init(options)
            })
        },
        init({ lists, srcname, ui, photoswipe, options }) {
            /* 将Nodelist<Element>处理成PhotoSwipe需要的对象列表 */
            const items = Array.prototype.map
                .call(lists, (item) => {
                    return item.dataset.html
                        ? {
                              html: item.dataset.html
                          }
                        : {
                              src: item.getAttribute(srcname),
                              msrc:
                                  item.dataset.msrc ||
                                  item.getAttribute(srcname),
                              w: Number(
                                  item.dataset.w || item.offsetWidth || 0
                              ),
                              h: Number(
                                  item.dataset.h || item.offsetHeight || 0
                              ),
                              title: item.dataset.title || ''
                          }
                })
                .filter((item) => {
                    return item.src || item.html
                })
            const mergeOptions = Object.assign(
                {
                    history: false,
                    getThumbBoundsFn(index) {
                        /* 获取目标位置 用于打开和关闭时的图片特效 */
                        const thumbnail = lists[index]
                        const pageYScroll =
                            window.pageYOffset ||
                            document.documentElement.scrollTop
                        const rect = thumbnail.getBoundingClientRect()
                        return {
                            x: rect.left,
                            y: rect.top + pageYScroll,
                            w: rect.width
                        }
                    }
                },
                options
            )

            /* 实例化 */
            this.vm = new photoswipe(this.$refs.pswp, ui, items, mergeOptions)

            /* 获取图片真实长宽 */
            this.vm.listen('imageLoadComplete', (i, item) => {
                const img = new Image()
                img.src = item.src
                img.onload = () => {
                    item.w = img.width
                    item.h = img.height
                    this.vm.updateSize(true)
                }
            })

            /* 10秒后销毁dom */
            this.vm.listen('close', () => {
                this.vm = null
                this.timer = setTimeout(() => {
                    this.show = false
                }, 10000)
            })

            /* 显示 */
            this.vm.init()
        }
    }
}
</script>

<template>
    <!-- Root element of PhotoSwipe. Must have class pswp. -->
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true" ref="pswp" v-if="show">
        <!-- Background of PhotoSwipe.
        It's a separate element as animating opacity is faster than rgba().-->
        <div class="pswp__bg"></div>

        <!-- Slides wrapper with overflow:hidden. -->
        <div class="pswp__scroll-wrap">
            <!-- Container that holds slides.
            PhotoSwipe keeps only 3 of them in the DOM to save memory.
            Don't modify these 3 pswp__item elements, data is added later on.-->
            <div class="pswp__container">
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
            </div>

            <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
            <div class="pswp__ui pswp__ui--hidden">
                <div class="pswp__top-bar">
                    <!--  Controls are self-explanatory. Order can be changed. -->

                    <div class="pswp__counter"></div>

                    <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                    <button class="pswp__button pswp__button--share" title="Share"></button>

                    <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                    <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                    <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->
                    <!-- element will get class pswp__preloader--active when preloader is running -->
                    <div class="pswp__preloader">
                        <div class="pswp__preloader__icn">
                            <div class="pswp__preloader__cut">
                                <div class="pswp__preloader__donut"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div class="pswp__share-tooltip"></div>
                </div>

                <button
                    class="pswp__button pswp__button--arrow--left"
                    title="Previous (arrow left)"
                ></button>

                <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>

                <div class="pswp__caption">
                    <div class="pswp__caption__center"></div>
                </div>
            </div>
        </div>
    </div>
</template>
