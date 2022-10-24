export function sayHi() {
    console.log("hi");
}

export function lazyLoading() {
    import("./utlis").then(({ sayWord }) => {
        sayWord();
    });
}
