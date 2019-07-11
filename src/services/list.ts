import request from '@/utils/request';

export async function createIterator(): Promise<any> {
    return request('/api/list/table')
}
