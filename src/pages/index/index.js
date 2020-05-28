import Taro, { useEffect } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.less';

const Index = props => {
  const { home, loading } = props;
  useEffect(() => {
    console.log(props, home.keai)
  }, [])
  return (
    <View className="index-page">
      <Text>首页</Text>
    </View>
  )
}
Index.config = {
  navigationBarTitleText: 'index'
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
