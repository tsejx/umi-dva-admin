import { extend } from 'umi-request';
import { formatMessage } from 'umi-plugin-react/locale';
import { notification } from 'antd';

interface ResponseError<D = any> extends Error {
    name: string;
    data: D;
    response: Response;
}

/**
 * 异常处理程序
 */
const errorHandler = (error: ResponseError) => {
    const { response = {} as Response } = error;
    const errorText = formatMessage({ id: `app.code.message.${response.status}` }) || response.statusText;
    const { status, url } = response;

    notification.error({
        message: `请求错误 ${status}: ${url}`,
        description: errorText,
    })
}

const request = extend({
    errorHandler, // 默认错误处理
    credentials: 'include', // 默认请求是否带上Cookie
});

export default request;
