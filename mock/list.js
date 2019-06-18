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
      },
    ],
  }),
};
