import React, { Component } from 'react';
import { AddressWarp, LocationWarp, SortTitleWarp, CityWarp, HotCityWarp, AllCityWarp, CityBlock, EveryCityBlock } from './style';
import * as actions from './store/actionCreates';
import { connect } from 'react-redux';

class Address extends Component {
  componentDidMount() {
    this.props.handleCityData()
  }
  setCityId=(id)=>{
    this.props.handleCityId(id);
    this.props.history.goBack();
  }
  render() {
    return (
      <AddressWarp>
        <LocationWarp>
          <SortTitleWarp>定位城市</SortTitleWarp>
          <CityWarp>
            <span className="cityBlock">定位失败</span>
          </CityWarp>
        </LocationWarp>
        <HotCityWarp>
          <SortTitleWarp>热门城市/区域</SortTitleWarp>
          <CityWarp>
            {
              this.props.hotCityList.map(item => {
                return ( 
                <span 
                  key={item.damaiId} 
                  className="cityBlock"
                  onClick={ this.setCityId.bind(this,item.damaiId)}
                  >{item.name}</span>
                )
              })
            }

          </CityWarp>
        </HotCityWarp>
        <AllCityWarp>
          {
            this.props.cityList.map(item => {
              return (
                <CityBlock key={item.prefix} >
                  <SortTitleWarp>{item.prefix.toUpperCase()}</SortTitleWarp>
                  <EveryCityBlock>
                      {
                        item.cities.map(city=>{
                          return ( 
                          <li 
                            key={city.damaiId}      className="everyCity"
                            onClick={ this.setCityId.bind(this,city.damaiId)}
                            >
                            {city.name}
                          </li>
                          )
                        })
                      }
                   
                  </EveryCityBlock>
                </CityBlock>
              )
            })
          }

        </AllCityWarp>
      </AddressWarp>
    )
  }
}
export default connect(
  ({ address }) => {
    return ({
      cityList: address.cityList,
      hotCityList: address.hotCityList
    })
  },
  dispatch => ({
    handleCityData() {
      dispatch(actions.asyncCityList())
    },
    handleCityId(id){
      dispatch(actions.chgCityId(id))
    }
  })
)(Address);
