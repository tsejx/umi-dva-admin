import Mock from 'mockjs';

export default {
  'GET /api/list/table': Mock.mock({
    'list|8-10': [
      {
        'id|1-999': 999,
        name: '@name',
        startAt: '@date',
        endAt: '@date',
        'progress|1-100': 100,
        'status|0-2': 2,
        'owner': {
          'id|100-999': 999,
          name: '@name',
          avatar: '@pick(["https://avatars0.githubusercontent.com/u/35128?s=64&v=4", "https://avatars3.githubusercontent.com/u/5359011?s=64&v=4", "https://avatars0.githubusercontent.com/u/3118295?s=64&v=4", "https://avatars3.githubusercontent.com/u/810438?s=64&v=4", "https://avatars0.githubusercontent.com/u/2698003?s=64&v=4"])'
        },
        'teammate|2-4': [
          {
            'id|100-999': 999,
            name: '@name',
            avatar:
              '@pick(["https://avatars0.githubusercontent.com/u/35128?s=64&v=4", "https://avatars3.githubusercontent.com/u/5359011?s=64&v=4", "https://avatars0.githubusercontent.com/u/3118295?s=64&v=4", "https://avatars3.githubusercontent.com/u/810438?s=64&v=4", "https://avatars0.githubusercontent.com/u/2698003?s=64&v=4"])',
          },
        ],
      },
    ],
  }),
};
