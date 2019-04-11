var request = require('request');

describe('Test', () => {
  test('signIn', async () => {
  
    const body = {
      username: 'Nghĩa',
      password: 'abcdef',
      role: 'guest',
      email: 'nghia.hoangduc@gmail.com'
    };
    const response = await request.post("http://localhost:3000/api/singIn",body);
  
    expect(response).toBe({errorCode:0, errorMessage: '',result: body});
  });
});