import { Rule } from 'antd/es/form';

export type ValidationRulesMap<T> = { [ P in keyof Partial<T> ]: Rule[] };
