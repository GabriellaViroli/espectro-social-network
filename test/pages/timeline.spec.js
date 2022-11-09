/**
 * @jest-environment jsdom
 */
import timeline from '../../src/pages/timeline/timeline.js';
import { redirect } from '../../src/redirect.js';

jest.mock('../../src/firebase/exports.js');
jest.mock('../../src/firebase/auth.js');
jest.mock('../../src/firebase/timeline.js');
jest.mock('../../src/redirect.js');

const awaitInAllPromisses = () => new Promise(process.nextTick);

describe('timeline', () => {
  timeline();
  it('should be a function', () => {
    expect(typeof timeline).toBe('function');
  });

  it('should return a div with a valid innerHTML', () => {
    const container = timeline();
    expect(container).toHaveProperty('innerHTML');
    expect(container.innerHTML.length).toBeGreaterThan(0);
    expect(typeof container.innerHTML).toBe('string');
  });

  it('test change of routes', async () => {
    const container = timeline();
    const button = container.querySelector('#logout-btn');
    const event = new Event('click');
    button.dispatchEvent(event);
    await awaitInAllPromisses();
    expect(redirect).toHaveBeenCalledWith('#login');
  });

  it('test the publishing event', async () => {
    const container = timeline();
    const button = container.querySelector('#publish-btn');
    const event = new Event('click');
    const textArea = container.querySelector('#post-publish');
    textArea.value = 'test';
    button.dispatchEvent(event);
    await awaitInAllPromisses();
    expect(textArea.value).toBe('');
  });
});
