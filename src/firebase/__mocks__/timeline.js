export const readOnePost = jest.fn(() => Promise.resolve({
  id: 'JLUCCN25xycIoJAlG4pb',
  publishDate: '2022-11-08T13:01:46.032Z',
  likes: [],
  editDate: '2022-11-08T13:01:46.032Z',
  userName: 'Usuário Teste',
  message: 'Mensagem Teste',
  userId: 'uid',
  image: '',
  answers: [],
}));

export const readAllPosts = jest.fn(() => Promise.resolve([{
  id: 'JLUCCN25xycIoJAlG4pb',
  publishDate: '2022-11-08T13:01:46.032Z',
  likes: [],
  editDate: '2022-11-08T13:01:46.032Z',
  userName: 'Usuário Teste',
  message: 'Mensagem Teste',
  userId: 'uid',
  image: '',
  answers: [],
}]));

export const newPost = jest.fn(() => Promise.resolve({
  id: 'JLUCCN25xycIoJAlG4pb',
  publishDate: '2022-11-08T13:01:46.032Z',
  likes: [],
  editDate: '2022-11-08T13:01:46.032Z',
  userName: 'Usuário Teste',
  message: 'Mensagem Teste',
  userId: 'ZyKzh8VWoSPwbaSQkRljUlKBqpC2',
  image: '',
  answers: [],
}));

export const deletePost = jest.fn(() => Promise.resolve({}));
export const updatePost = jest.fn(() => Promise.resolve({}));
export const likePost = jest.fn();
export const deslikePost = jest.fn();
