// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import ResizeObserver from 'resize-observer-polyfill';

import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

global.ResizeObserver = ResizeObserver;
// @ts-expect-error - this is a hack to get around the fact that jsdom doesn't support canvas
window.URL.createObjectURL = () => {};
// @ts-expect-error - this is a hack to get around the fact that jsdom doesn't support canvas
window.HTMLCanvasElement.prototype.getContext = () => {};

Range.prototype.getBoundingClientRect = () => ({
  x: 0,
  y: 0,
  toJSON: () => null,
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
});

Range.prototype.getClientRects = () => ({
  item: () => null,
  length: 0,
  [Symbol.iterator]: vi.fn(),
});
