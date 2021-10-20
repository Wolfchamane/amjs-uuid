/**
 * Creates an unique V4 string
 * @return {String} Unique identifier string
 */
module.exports = () =>
{
    let seed = Date.now();
    if (window)
    {
        if (window.performance && window.performance.now instanceof Function)
        {
            seed += window.performance.now();
        }
    }

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c =>
    {
        const r = (seed + Math.random() * 16) % 16 | 0;
        seed = Math.floor(seed / 16);

        return (c === 'x' ? r : r & (0x3 | 0x8)).toString(16);
    });
};
