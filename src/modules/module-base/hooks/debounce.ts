export const debounce = (timer = 1000) =>
    new Promise((resolve) => {
        setTimeout(() => resolve(true), timer);
    });
