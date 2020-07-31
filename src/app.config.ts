export default {
  pages: [
    'pages/index/index',
    'pages/thread/thread_details',
    'pages/hot/hot',
    'pages/node_detail/node_detail',
    'pages/nodes/nodes'

  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '最新'
      }, {
        pagePath: 'pages/hot/hot',
        text: '热门'
      }, {
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
    navigationBarTextStyle: 'black'
  }
}
