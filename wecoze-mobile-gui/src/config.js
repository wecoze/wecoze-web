import defaultIcon from './assets/icon_tabbar.png'

const config = {
  requestHost: '', // 请求地址
  requestUrls: {},
  /**
   * UI 界面配置项
   * @param id 项id，唯一
   * @param name tab 项关联的 noticeCounts 字段名
   */
  UI: {
    /**
     * 设置底部 tab
     */
    tabBar: [
      {
        id: 'messages',
        name: 'messages',
        icon: defaultIcon
      }, {
        id: 'addresses',
        icon: defaultIcon
      }, {
        id: 'settings',
        name: 'option',
        icon: defaultIcon
      }],
    optionList: [
      {
        id: 'group1',
        items: [
          {
            id: 'aboutUs',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII='
          },
          {
            id: 'option',
            name: 'options',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII='
          }
        ]
      },
      {
        id: 'group2',
        items: [
          {
            id: 'changeEn'
          },
          {
            id: 'changeCn'
          }
        ]
      }
    ]
  }
}
export default config
