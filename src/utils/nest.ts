export function nest(items, id = null, link = 'parentId') {
    return items.filter(item => item[link] === id).map(item => ({ ...item, children: nest(items, item.id) }))
}
