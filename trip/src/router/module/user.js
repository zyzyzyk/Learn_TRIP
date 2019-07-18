const tripUser = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/user/login'),
    meta: {
      title: '登陆'
    }
  }
]
export default tripUser;