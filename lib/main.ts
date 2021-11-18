// js store
export default class JStore<T = any> {
  private data: T | null = null
  private cached = false
  private fetching?: Promise<T>
  constructor(
    private _fetch: () => Promise<any>
  ) {}

  // 获取实时数据
  async fetch() {
    if (this.fetching) {
      return this.fetching
    }
    this.fetching = this._fetch()
    const data = await this.fetching
    this.data = data
    this.cached = true
    this.fetching = undefined
  }
  
  // 获取缓存的数据
  async get() {
    if (this.cached) {
      return this.data
    } else {
      return this.fetch()
    }
  }

}
