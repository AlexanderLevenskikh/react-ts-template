import { IMap } from 'root/shared/types/iMap';

type Key = string | number;

type Proxify<T> = {
    [P in keyof T]: T[P];
};

export function createFakeDataProxyWithLogging<T extends IMap<any>>(proxyObject: T): Proxify<T> {
    let result = proxyObject;

    try {
        result = new Proxy<T>(proxyObject, {
            set(target: T, prop: Key, value: any, receiver: any) {
                // @ts-ignore
                target[ prop ] = value;
                console.log(
                    `%cfakeDB %c${ prop }`,
                    `color: yellow; margin-left: 5px`,
                    'text-decoration: underline; font-weight: 600; margin-left: 2px',
                    'changed',
                    'data:',
                    target,
                );
                console.groupEnd();
                return true;
            },
        });
    } catch (e) {
        console.error('fakeDB: can\'t use proxy');
    }
    return result;
}
