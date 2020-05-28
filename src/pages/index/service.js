import Request from '../../utils/request';

export const getUserName = (data) => {
  return Request({
    url: '路径',
    method: 'POST',
    data,
  });
};
