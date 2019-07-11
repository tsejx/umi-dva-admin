declare module '*.less';
declare module '*.svg';

declare module 'umi-plugin-react/locale' {
    export default interface MessageDescriptor {
        id: string;
    }
}