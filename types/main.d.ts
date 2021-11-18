export default class JStore<T = any> {
    private _fetch;
    private data;
    private cached;
    private fetching?;
    constructor(_fetch: () => Promise<any>);
    fetch(): Promise<T>;
    get(): Promise<T>;
}
