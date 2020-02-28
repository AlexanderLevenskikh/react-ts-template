import { GetFieldDecoratorOptions } from "antd/es/form/Form";

export type ValidationRulesMap<T> = { [ P in keyof Partial<T> ]: GetFieldDecoratorOptions };
