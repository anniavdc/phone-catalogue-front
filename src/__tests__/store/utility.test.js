import { updateObject } from './../../store/utility';

const oldObject = {
    name: 'Jane',
    surname: 'Doe',
    age: 'unknown'
}
describe('utility tests', () => {
    it('returns same object with modified properties', () => {
        expect(updateObject(oldObject, { age: 36 })).toMatchObject({
            name: 'Jane',
            surname: 'Doe',
            age: 36
        });
    });
});
