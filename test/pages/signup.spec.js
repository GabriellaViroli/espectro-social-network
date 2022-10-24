/**
 * @jest-environment jsdom
 */
import { newUser, loginGoogle } from '../../src/firebase/auth.js';
import signup from '../../src/pages/signup/signup.js';
import { redirect } from '../../src/routes.js';


jest.mock('../../src/firebase/exports.js');
jest.mock('../../src/firebase/auth.js');
jest.mock('../../src/routes.js');

afterEach(() => {
  redirect.mockClear();

  // jest.clearAllMocks();
});

const awaitInAllPromisses = () => new Promise(process.nextTick);

describe('signup', () => {
  it('should be a function', () => {
    expect(typeof signup).toBe('function');
  });

  it('should return a div with a valid innerHTML', () => {
    const container = signup();
    expect(container).toHaveProperty('innerHTML');
    expect(container.innerHTML.length).toBeGreaterThan(0);
    expect(typeof container.innerHTML).toBe('string');
  });

  it('test submit input', async () => {
    const container = signup();
    const inputName = container.querySelector('#name-signup');
    const inputEmail = container.querySelector('#signup-email');
    const inputPassword = container.querySelector('#signup-password');
    inputName.value = 'gabriela';
    inputEmail.value = 'teste@teste.com';
    inputPassword.value = '123456';
    const form = container.querySelector('.form-signup');
    const event = new Event('submit');
    form.dispatchEvent(event);
    await awaitInAllPromisses();
    await awaitInAllPromisses();
    expect(newUser).toHaveBeenCalledTimes(1);
    // expect(redirect).toHaveBeenCalledWith('#timeline');
    // expect(redirect).toHaveBeenCalledTimes(1);
  });

  it('test click input', async () => {
    const container = signup();
    const btnGoogle = container.querySelector('.btn-google-signup');
    const event = new Event('click');
    btnGoogle.dispatchEvent(event);
    await awaitInAllPromisses();
    expect(loginGoogle).toHaveBeenCalledTimes(1);
    expect(redirect).toHaveBeenCalledWith('#timeline');
    expect(redirect).toHaveBeenCalledTimes(1);
  });
});
