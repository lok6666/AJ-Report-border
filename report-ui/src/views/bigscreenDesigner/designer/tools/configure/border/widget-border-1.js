/*
 * @Descripttion: 边框1
 * @version:
 * @Author: shixiznhe
 * @Date:
 * @LastEditors: shixinzhe
 */
export const widgetBorder1 = {
    code: 'widgetBorder1',
    type: 'border',
    tabName: '边框',
    label: '1#边框',
    icon: 'iconicon_tubiao_bingtu',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '1#边框',
        },
        {
          type: 'vue-color',
          label: '背景颜色',
          name: 'background',
          required: false,
          placeholder: '',
          value: '#000'
        },
        [
          {
            name: '基础设置',
            list: [
              {
                type: 'vue-color',
                label: '边框颜色1',
                name: 'colorLeft',
                required: false,
                placeholder: '',
                value: '#4fd2dd'
              },
              {
                type: 'vue-color',
                label: '边框颜色2',
                name: 'colorRight',
                required: false,
                placeholder: '',
                value: '#235fa7'
              }
            ]
          }
        ],
      ],
      // 坐标
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: '',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: '',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 400,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 300,
        },
      ],
    }
  }
  