import { Renderer } from "marked";
import Replacer from "./replacer";

const replacers: Map<string, Replacer> = new Map();

export const createRenderer = (defaultRenderer: Renderer = new Renderer()) => ({
  code(code: string, language: string, isEscaped: boolean): string {
    return (
      replacers.get(language)?.(code) ??
      defaultRenderer.code(code, language, isEscaped)
    );
  },
});

export const addReplacer: Function = (language: string, replacer: Replacer) =>
  replacers.set(language, replacer);
