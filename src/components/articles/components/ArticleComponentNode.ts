export default interface ArticleComponentNode {
    useHtml: boolean
    type: string
    text: string
    html: string
    subContent: ArticleComponentNode[]
}
