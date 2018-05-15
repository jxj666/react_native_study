import React from 'react';
import {
  View,
  Text, Image,
  Dimensions,
  StyleSheet,
  DeviceEventEmitter,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { getUserInfo } from '../../common/js/cache';
import Header from '../header/header';

const deviceWidth = Dimensions.get('window').width;

const CSS = StyleSheet.create({
  avatarWrapper: {
	position: 'absolute',
	top: 50,
	left: deviceWidth / 2 - 35,
	zIndex: 100,
	alignItems: 'center'
  },
  avatar: {
	width: 70,
	height: 70,
	borderWidth: 1.5,
	borderColor: '#fff',
	borderRadius: 35
  },
  loginBtn: {
	marginTop: 10,
	width: 60,
	height: 15,
	textAlign: 'center',
	borderWidth: 1,
	borderColor: '#333',
	fontSize: 10,
	borderRadius: 3
  },
  iconContainer: {
	position: 'absolute',
	left: '20%',
	right: 0,
	bottom: 0,
	flexDirection: 'row',
	width: deviceWidth
  },
  iconWrapper: {
	width: 120,
	height: 35,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: 3,
	backgroundColor: '#fff'
  },
  icon: {
	width: 20,
	height: 20
  },
  serviceWrapper: {
	marginTop: 10,
	flexDirection: 'column',
	height: 120
  },
  serviceContainer: {
	flex: 4,
	flexDirection: 'row'
  },
  serviceItem: {
	flex: 1,
	height: 60,
	alignItems: 'center',
	justifyContent: 'center',
	borderRightColor: '#ddd',
	borderRightWidth: .5,
	borderBottomColor: '#ddd',
	borderBottomWidth: .5,
	backgroundColor: '#fff'
  },
  servieText: {
	fontSize: 12
  },
  phoneContainer: {
  	marginTop:30,
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center'
  },
  phone: {
	fontSize: 12,
	color: '#13227a'
  },
  userText:{
  	fontSize:20,
  	marginTop:20,
	height:30,
	lineHeight:30,
	color:'#13227a',
	marginBottom: 20,
  }, userInfoText:{
  	fontSize:16,
	height:25,
	lineHeight:25,
	color:'#13227a',
  }
});

class Personal extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
	  userInfo: {
	  },
	};
  }

  componentDidMount() {
	const that = this;

	this._listener1 = DeviceEventEmitter.addListener('login', function (params) {
	  console.log('login event');
	  console.log(params);
	  that.setState({
		userInfo: params.userInfo
	  });
	});
	this._listener2 = DeviceEventEmitter.addListener('logout', function () {
	  console.log('logut event');
	  that.setState({
		userInfo: null
	  });
	});
	getUserInfo().then((info) => {
	  console.log(info);
	  this.setState({
		userInfo: JSON.parse(info)
	  });
	});
  }

  componentWillUnmount() {
	this._listener1.remove();
	this._listener2.remove();
  }

  render() {
	return (
		<View style={ { flex: 1 } }>
		<Header />
		  <View>
			{ this.renderLoginEle() }
		  </View>
		  <View style={ CSS.phoneContainer }>
			<Text style={ CSS.phone }>
			  客服电话 : 
			  <Text style={ CSS.phone }>1709263003</Text>
			</Text>
		  </View>
		</View>
	);
  }


  renderLoginEle = () => {
	if (1) {
	  return (
		  <View style={ CSS.avatarWrapper }>
			<Image source={ { uri: `https://jxj322991.github.io/2018imgs/img/png/01.png` } } style={ CSS.avatar }/>
			<Text style={CSS.userText}>异阳</Text>
			<Text style={CSS.userInfoText}>男</Text>
			<Text style={CSS.userInfoText}>超级会员</Text>
		  </View>
	  );
	} 
  }
}


module.exports = Personal;