export const getProxyValue = (proxy: any): any => {
    return JSON.parse(JSON.stringify(proxy));
}