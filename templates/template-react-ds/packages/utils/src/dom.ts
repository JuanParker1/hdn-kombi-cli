import { Booleanish } from '.';

export const dataAttr = (condition: boolean | undefined) => (condition ? '' : undefined) as Booleanish;

export const ariaAttr = (condition: boolean | undefined) => (condition ? true : undefined);
