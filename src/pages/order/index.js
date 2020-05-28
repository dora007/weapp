import Taro,{useEffect} from '@tarojs/taro';
import { View,Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.less';

const Order = props =>{
    const {order,loading} = props;
      useEffect(() => {
        console.log(props)
      }, [])
    return (
           <View className="order-page">
             <Text>正如你所见这是你的order页面</Text>
           </View>
           )
}
Order.config = {
  navigationBarTitleText: 'order'
}
//全局样式继承 你可以关掉
Order.options = {
  addGlobalClass: true
}
export default connect(
    ({
    order,
    loading
    })=>({
    order,
    loading
}))(Order)
