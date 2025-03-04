import '@testing-library/jest-dom';
import 'whatwg-fetch'; 
import { server } from '../mocks/server';
import { TextEncoder, TextDecoder } from 'util';

(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

