import Taro, { useEffect } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.less';
import { AtButton, AtTabBar } from 'taro-ui'

const Index = props => {
  const { home, loading } = props;

  useEffect(() => {
    console.log(props, home.name)
  }, [])


  //按钮点击效果
  const clickButton = () => {
    console.log("aa")
  }


  return (
    <View className="index-page">
      {/* <AtButton type='primary' onClick={() => clickButton()}>按钮文案</AtButton> */}
      <AtTabBar
        fixed
        tabList={[
          { title: '首页', iconType: 'home', },
          { title: '订单', iconType: 'menu' },
          { title: '我的', iconType: 'user', }
        ]}
      // onClick={this.handleClick.bind(this)}
      // current={this.state.current}
      />
    </View>
  )
}
Index.config = {
  navigationBarTitleText: '首页' //顶部标题
}
//全局样式继承 你可以关掉
Index.options = {
  addGlobalClass: true
}

//链接model
export default connect(
  ({
    home,
    loading
  }) => ({
    home,
    loading
  }))(Index)
