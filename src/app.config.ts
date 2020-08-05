export default {
  pages: [
    'pages/index/index',
    'pages/hot/hot',
    'pages/nodes/nodes',
    'pages/thread/thread_details',
    'pages/node_detail/node_detail',
    'pages/user_threads/index',

  ],
  tabBar: {
    list: [
      {
        icon: '',
        pagePath: 'pages/index/index',
        text: '最新'
      }, {
        icon: '',
        pagePath: 'pages/hot/hot',
        text: '热门'
      }, {
        icon: '',
        pagePath: 'pages/nodes/nodes',
        text: '节点'
      }
    ],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    enablePullDownRefresh: true,
  }
}
