// mouse.js
import { ref, onMounted, onUnmounted } from 'vue'

// by convention, composable function names start with "use"
export function useWindowScroll() {
    const scrollY = ref<number>(0);

    function update():void {
        scrollY.value = window.scrollY;
    }

    // debonce window scroll to enhance performance
    function debounce<T extends Function>(cb: T, wait = 20) {
        let h = 0;
        let callable = (...args: any) => {
            clearTimeout(h);
            h = setTimeout(() => cb(...args), wait);
        };
        return <T>(<any>callable);
    }

    onMounted(() => {
        update();
        window.addEventListener('scroll', debounce(update, 100));
    })
    onUnmounted(() => window.removeEventListener('scroll', update))

    return { scrollY };
}