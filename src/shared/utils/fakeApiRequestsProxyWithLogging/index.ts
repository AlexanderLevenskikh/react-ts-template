export function proxifyFakeApiRequestsWithLogging<T extends Object>(fakeApiPartInstance: T) {
    let proxifiedAPI = fakeApiPartInstance;

    try {
        proxifiedAPI = new Proxy(fakeApiPartInstance, {
            get(target: T, property: string): any {
                const apiRefStyle = `color: orange; margin-left: 50px; font-weight: 600`;
                const apiMethodStyle = `font-weight: normal`;
                const apiOptionsStyle = `color: gray; margin-left: 50px`;

                let method = Reflect.get(target, property);
                if (!method) {
                    return () => null;
                }

                const methodName = target.constructor.name;
                const formattedMethodName = methodName.replace(/FakeApi/, '').toLowerCase();

                return async function (...methodCallArgs: any[]) {
                    let methodCallResponse = Reflect.apply(method, fakeApiPartInstance, methodCallArgs);

                    methodCallResponse.then((response: any) => {
                        console.groupCollapsed(`%cfakeApi %c${ formattedMethodName }/${ property }`,
                            apiRefStyle, apiMethodStyle,
                        );

                        if (methodCallArgs && methodCallArgs.length > 0) {
                            console.log(`%carguments:`,
                                apiOptionsStyle,
                            );
                            methodCallArgs.forEach(arg => {
                                console.log(arg);
                            });
                        }

                        console.log(`%cresponse:`,
                            apiOptionsStyle,
                        );
                        console.log(response);
                        console.groupEnd();
                    });
                    return methodCallResponse;
                };

            },
        });
    } catch (e) {
        console.error('fakeAPI: can\'t proxify');
    }

    return proxifiedAPI;
}
