import React, { Component } from 'react';
import { Menus } from '../style';
import { connect } from 'react-redux';
import { setDistance} from '../store/actionCreate';


// 分类
class MenuN extends Component {
	state = {
		paixu: true,
		show: [false, false],
		downList: '',
		itemTitle: '全部分类',
		itemType: ['全部分类', '演唱会', '话剧歌剧', '音乐会', '曲苑杂坛', '舞蹈芭蕾', '体育比赛'
			, '儿童亲子', '展览休闲', '二次元', '旅游展览'],
		timeTitle: '全部时间',
		timeType: ['全部时间', '今天', '明天', '本周末', '一周内', '一月内']
	}
	chgShow(index) {
		let newShow = this.state.show;
		if (!index) {
			newShow[0] = !newShow[0];
			newShow[1] = false;
		} else {
			newShow[1] = !newShow[1];
			newShow[0] = false;
		}
		this.setState({
			show: newShow
		})
	}
	setTitle(arr) {
		if (!arr[0]) {
			this.setState({
				itemTitle: arr[1]
			})
		} else {
			this.setState({
				timeTitle: arr[1]
			})
		}
		this.chgShow(arr[0]);
	}
	useDistance = () => {
		this.setState({ paixu: false })
		this.props.setDistance();
		console.log(111)
	}	

	render() {
		return (
			<Menus>
				<ul className="typeList">
					<li onClick={this.chgShow.bind(this, 0)}>{this.state.itemTitle}</li>
					<li onClick={this.chgShow.bind(this, 1)}>{this.state.timeTitle}</li>
					<li style={{ color: this.state.paixu ? 'red' : '' }} onClick={() => { this.setState({ paixu: true }) }}>推荐排序</li>
					<li style={{ color: this.state.paixu ? '' : 'red' }} onClick={this.useDistance}>距离最近</li>
				</ul>
				<div className="content">
					<ul style={{ display: this.state.show[0] ? 'block' : 'none' }}>
						{
							this.state.itemType.map((item, index) => (
								<li key={index}
									style={{ color: item === this.state.itemTitle ? 'red' : '' }}
									onClick={this.setTitle.bind(this, [0, item])}>{item}</li>
							))
						}
					</ul>
					<ul style={{ display: this.state.show[1] ? 'block' : 'none' }}>
						{
							this.state.timeType.map((item, index) => (
								<li key={index}
									style={{ color: item === this.state.timeTitle ? 'red' : '' }}
									onClick={this.setTitle.bind(this, [1, item])}>{item}</li>
							))
						}
					</ul>
				</div>
			</Menus>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setDistance: () => {
			dispatch(setDistance())
		}
	}
}

export const MenuNav = connect(null, mapDispatchToProps)(MenuN);
