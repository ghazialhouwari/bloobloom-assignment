import { ref, onMounted, onUnmounted } from 'vue';

export function useTouch () {
    let isTouchDevice = ref<boolean>(false); 
    let isMobile = ref<boolean>(false); 

    function update () {
        isTouchDevice.value = isTouchEnabled();
        isMobile.value = isMdAndDown();
    }
    function isTouchEnabled (): boolean {
        return ('ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 ) || ( navigator.msMaxTouchPoints > 0);
    }
    function isMdAndDown (): boolean {
        return window.innerWidth < 768;
    }

    onMounted(() => {
        isTouchDevice.value = isTouchEnabled();
        isMobile.value = isMdAndDown();
        window.addEventListener('resize', update);
    });
    onUnmounted(() => {
        window.removeEventListener('resize', update);
    });

    return { isTouchDevice, isMobile };
}