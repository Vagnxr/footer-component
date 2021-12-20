export interface IFooterData {
    data: IFooterLinks[];
    socialNetwork?: IFooterLinks[];
    others?: IFooterLinks[];
}

interface IFooterLinks {
    title: string
    links: IFooterItems[]
}

interface IFooterItems {
    description: string
    url: string
    src?: string
}

export interface IFooter {
    data: IFooterData
}