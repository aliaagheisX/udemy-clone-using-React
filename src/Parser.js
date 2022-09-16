const Parser = (url) => {
    const re = {};
    url.split(',').forEach((sec) => {
        const sp = sec.split(';');
        const url = sp[0].replace(/<(.*)>/, '$1').trim();
        const name = sp[1].replace(/rel="(.*)"/, '$1').trim();
        re[name] = url;
    })
    return re;
}
export default Parser;