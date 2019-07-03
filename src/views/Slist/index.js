import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SlistBox, BgBox, BgPic, MainBox, HeadBox, PageTitle, MiddleSelect, BottmDetail } from './style';
import { Icon } from 'antd';

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1272983_uk1e3s8tthq.js'
})

class Slist extends Component {
  nav = [
    { id: 1, name: '全部' },
    { id: 2, name: '歌手' },
    { id: 3, name: '演员' },
    { id: 4, name: '演奏家' },
    { id: 5, name: '编剧导演' },
    { id: 6, name: '其他' },
  ]

  render() {
    return (
      <SlistBox>
        <BgBox>
          <BgPic />
        </BgBox>
        <MainBox>
          <HeadBox>
            <PageTitle>
              <span className='abc'>大咖在大麦</span>
              <div className="search">
                <input className="texInput" type="text" placeholder="搜大咖" style={{ paddingLeft: '1rem', color: '#111' }} />
                <MyIcon type="icon-fangdajing" style={{ position: "absolute", top: "25%", left: '73%', fontSize: '.4rem', color: '#111' }} />
              </div>
            </PageTitle>
            <div className="bottomTitle">
              <span className="introduce">目前共229位大咖有上架演出</span>
              <span className="myFollow">我的关注
                <MyIcon type="icon-arrow-right" />
              </span>
            </div>
          </HeadBox>
          <MiddleSelect>
            <ul className="navBox">
              {
                this.nav.map(item => {
                  return <li key={item.id} className="navLi">{item.name}</li>
                })
              }

            </ul>
          </MiddleSelect>
          <BottmDetail>
            <div className="detailBox">
              <div className="infoBox">
                <div className="singerName">
                  <div className="singerInfo">
                    <div className="littlePic"></div>
                    <div className="littleName">
                      <span className="singer-name">周杰伦</span>
                      <span className="singer-tag">歌手</span>  <br />
                      <span className="singer-fans">157.1万粉丝</span>
                    </div>
                  </div>
                  <div className="follow">
                    <MyIcon type="icon-iconjia" />
                    关注</div>
                </div>
                <div className="performList">
                  <div className="perform-list">
                    <div className="perform-cell">
                      <p className="perform-title">2019超级巨星演唱会黄石站</p>
                      <p className="perform-address">
                        <span className="perform-address-info">黄石 / 2019.07.28 周日 19:30 / 黄石奥体中心体育场</span>
                      </p>
                    </div>
                    <div className="perform-cell">
                      <p className="perform-title">2019超级巨星演唱会黄石站</p>
                      <p className="perform-address">
                        <span className="perform-address-info">黄石 / 2019.07.28 周日 19:30 / 黄石奥体中心体育场</span>
                      </p>
                    </div>
                  </div>
                  <div className="perform-list-more">
                    共5个演出
                      <MyIcon type="icon-arrow-down" style={{ marginLeft: '.2rem' }} />
                  </div>
                </div>
              </div>
              <div className="infoBox">
                <div className="singerName">
                  <div className="singerInfo">
                    <div className="littlePic"></div>
                    <div className="littleName">
                      <span className="singer-name">周杰伦</span>
                      <span className="singer-tag">歌手</span>  <br />
                      <span className="singer-fans">157.1万粉丝</span>
                    </div>
                  </div>
                  <div className="follow">
                    <MyIcon type="icon-iconjia" />
                    关注</div>
                </div>
                <div className="performList">
                  <div className="perform-list">
                    <div className="perform-cell">
                      <p className="perform-title">2019超级巨星演唱会黄石站</p>
                      <p className="perform-address">
                        <span className="perform-address-info">黄石 / 2019.07.28 周日 19:30 / 黄石奥体中心体育场</span>
                      </p>
                    </div>
                    <div className="perform-cell">
                      <p className="perform-title">2019超级巨星演唱会黄石站</p>
                      <p className="perform-address">
                        <span className="perform-address-info">黄石 / 2019.07.28 周日 19:30 / 黄石奥体中心体育场</span>
                      </p>
                    </div>
                  </div>
                  <div className="perform-list-more">
                    共5个演出
                      <MyIcon type="icon-arrow-down" style={{ marginLeft: '.2rem' }} />
                  </div>
                </div>
              </div>
              <div className="infoBox">
                <div className="singerName">
                  <div className="singerInfo">
                    <div className="littlePic"></div>
                    <div className="littleName">
                      <span className="singer-name">周杰伦</span>
                      <span className="singer-tag">歌手</span>  <br />
                      <span className="singer-fans">157.1万粉丝</span>
                    </div>
                  </div>
                  <div className="follow">
                    <MyIcon type="icon-iconjia" />
                    关注</div>
                </div>
                <div className="performList">
                  <div className="perform-list">
                    <div className="perform-cell">
                      <p className="perform-title">2019超级巨星演唱会黄石站</p>
                      <p className="perform-address">
                        <span className="perform-address-info">黄石 / 2019.07.28 周日 19:30 / 黄石奥体中心体育场</span>
                      </p>
                    </div>
                    <div className="perform-cell">
                      <p className="perform-title">2019超级巨星演唱会黄石站</p>
                      <p className="perform-address">
                        <span className="perform-address-info">黄石 / 2019.07.28 周日 19:30 / 黄石奥体中心体育场</span>
                      </p>
                    </div>
                  </div>
                  <div className="perform-list-more">
                    共5个演出
                      <MyIcon type="icon-arrow-down" style={{ marginLeft: '.2rem' }} />
                  </div>
                </div>
              </div>
              <div className="infoBox">
                <div className="singerName">
                  <div className="singerInfo">
                    <div className="littlePic"></div>
                    <div className="littleName">
                      <span className="singer-name">周杰伦</span>
                      <span className="singer-tag">歌手</span>  <br />
                      <span className="singer-fans">157.1万粉丝</span>
                    </div>
                  </div>
                  <div className="follow">
                    <MyIcon type="icon-iconjia" />
                    关注</div>
                </div>
                <div className="performList">
                  <div className="perform-list">
                    <div className="perform-cell">
                      <p className="perform-title">2019超级巨星演唱会黄石站</p>
                      <p className="perform-address">
                        <span className="perform-address-info">黄石 / 2019.07.28 周日 19:30 / 黄石奥体中心体育场</span>
                      </p>
                    </div>
                    <div className="perform-cell">
                      <p className="perform-title">2019超级巨星演唱会黄石站</p>
                      <p className="perform-address">
                        <span className="perform-address-info">黄石 / 2019.07.28 周日 19:30 / 黄石奥体中心体育场</span>
                      </p>
                    </div>
                  </div>
                  <div className="perform-list-more">
                    共5个演出
                      <MyIcon type="icon-arrow-down" style={{ marginLeft: '.2rem' }} />
                  </div>
                </div>
              </div>
              <div className="infoBox">
                <div className="singerName">
                  <div className="singerInfo">
                    <div className="littlePic"></div>
                    <div className="littleName">
                      <span className="singer-name">周杰伦</span>
                      <span className="singer-tag">歌手</span>  <br />
                      <span className="singer-fans">157.1万粉丝</span>
                    </div>
                  </div>
                  <div className="follow">
                    <MyIcon type="icon-iconjia" />
                    关注</div>
                </div>
                <div className="performList">
                  <div className="perform-list">
                    <div className="perform-cell">
                      <p className="perform-title">2019超级巨星演唱会黄石站</p>
                      <p className="perform-address">
                        <span className="perform-address-info">黄石 / 2019.07.28 周日 19:30 / 黄石奥体中心体育场</span>
                      </p>
                    </div>
                    <div className="perform-cell">
                      <p className="perform-title">2019超级巨星演唱会黄石站</p>
                      <p className="perform-address">
                        <span className="perform-address-info">黄石 / 2019.07.28 周日 19:30 / 黄石奥体中心体育场</span>
                      </p>
                    </div>
                  </div>
                  <div className="perform-list-more">
                    共5个演出
                      <MyIcon type="icon-arrow-down" style={{ marginLeft: '.2rem' }} />
                  </div>
                </div>
              </div>
              <div className="infoBox">
                <div className="singerName">
                  <div className="singerInfo">
                    <div className="littlePic"></div>
                    <div className="littleName">
                      <span className="singer-name">周杰伦</span>
                      <span className="singer-tag">歌手</span>  <br />
                      <span className="singer-fans">157.1万粉丝</span>
                    </div>
                  </div>
                  <div className="follow">
                    <MyIcon type="icon-iconjia" />
                    关注</div>
                </div>
                <div className="performList">
                  <div className="perform-list">
                    <div className="perform-cell">
                      <p className="perform-title">2019超级巨星演唱会黄石站</p>
                      <p className="perform-address">
                        <span className="perform-address-info">黄石 / 2019.07.28 周日 19:30 / 黄石奥体中心体育场</span>
                      </p>
                    </div>
                    <div className="perform-cell">
                      <p className="perform-title">2019超级巨星演唱会黄石站</p>
                      <p className="perform-address">
                        <span className="perform-address-info">黄石 / 2019.07.28 周日 19:30 / 黄石奥体中心体育场</span>
                      </p>
                    </div>
                  </div>
                  <div className="perform-list-more">
                    共5个演出
                      <MyIcon type="icon-arrow-down" style={{ marginLeft: '.2rem' }} />
                  </div>
                </div>
              </div>
            </div>
          </BottmDetail>
        </MainBox>
      </SlistBox>
    )
  }

}

export default connect()(Slist)

