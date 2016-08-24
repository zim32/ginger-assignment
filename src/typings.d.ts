// Typings reference file, see links for more information
// https://github.com/typings/typings
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

/// <reference path="../typings/index.d.ts" />
declare var require: {
    <T>(path: string): any;
    (paths: string[], callback: (...modules: any[]) => void): any;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};
declare var module: { id: string };
