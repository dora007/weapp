import Taro, { useEffect, useState } from '@tarojs/taro';
import { View, Text, Swiper, SwiperItem } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.less';
import { AtButton, AtTabBar, AtSearchBar, AtNavBar } from 'taro-ui'

const Index = props => {
  const { home, loading } = props;
  const { value, setValue } = useState()

  useEffect(() => {
    console.log(props, home.name)
  }, [])


  //按钮点击效果
  const clickButton = () => {
    console.log("aa")
  }

  const onChange = (value) => {
    console.log(value)
  }

  const onActionClick = () => {
    console.log("开始搜索")
  }

  const handleClick = (value) => {
    console.log(value)
    switch (value) {
      case 0:
        Taro.redirectTo({ url: '/pages/index/index' })
        break;
      case 1:
        console.log("aaa")
        Taro.redirectTo({ url: '/pages/order/index' })
        break;
      case 2: break
    }
  }


  return (
    <View className="index-page">
      <AtSearchBar
        value={value}
        onChange={onChange}
        onActionClick={onActionClick}
      />
      {/* <AtButton type='primary' onClick={() => clickButton()}>按钮文案</AtButton> */}
      {/* <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <View className='demo-text-1'>
            <Image src='https://storage.360buyimg.com/mtd/home/111543234387022.jpg' width="1000px"></Image>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>2</View>
        </SwiperItem>
      </Swiper> */}
      <AtTabBar
        fixed
        tabList={[
          { title: '首页', iconType: 'home', },
          { title: '订单', iconType: 'menu' },
          { title: '个人中心', iconType: 'user', }
        ]}
        onClick={handleClick}
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
