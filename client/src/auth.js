import Controller from './controller';

const controller = new Controller('https://sendit-courier.herokuapp.com/api/v1');

const token = localStorage.getItem('token');
const method = {
  method: 'POST',
  headers: {
    Accept: 'text/plain, application/json, */*',
    'Content-type': 'application/json',
    'x-access-token': token,
  },
};

export default async () => {
  try {
    const data = await controller.post('/auth', method);
    console.log(data);
    // eslint-disable-next-line quotes
    if (data.auth === "false") {
      return 'Failed';
    } if (data.auth === 'true') {
      localStorage.setItem('token', data.token);
    }
    if (data.user.userRole === 'User') {
      return 'User';
    } return 'Admin';
  } catch (err) {
    if (err) {
      return 'Failed';
    }
  }
};
