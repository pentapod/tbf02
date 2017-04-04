import React from 'react';
import Isvg from 'react-inlinesvg';
import {ShareButtons, ShareCounts, generateShareIcon} from 'react-share';

import Body from './../components/body';
import button from './../components/lib/button';

const globalColors = {
  primary: '#e57d85',
  bg: '#f7eaeb',
};

const bodyProps = {
  siteName: '技術書典2新刊「チートシート・チートシート」 .∵. pentapod',
  title: '技術書典2新刊「チートシート・チートシート」 .∵. pentapod',
  description: 'Web開発のお供に！ 技術書典2新刊「チートシート・チートシート」',
  url: 'https://pentapod.github.io/tbf02',
  image: 'https://pentapod.github.io/tbf02/static/og.png',
  favicon: 'https://pentapod.github.io/tbf02/static/favicon.png',
  fbAppId: '513983385471617',
};
const shareText = bodyProps.description + ' ' + bodyProps.url;

const urls = {
  catalog: 'https://techbookfest.org/event/tbf02/circle/5730602795925504',
  booth: '',
  twitterShare: 'https://twitter.com/intent/tweet'
    + `?text=${encodeURIComponent(shareText)}`,
  facebookShare: 'https://www.facebook.com/dialog/feed'
    + `?app_id=${encodeURIComponent(bodyProps.fbAppId)}`
    + `&display=popup&caption=${encodeURIComponent(bodyProps.description)}`
    + `&link=${encodeURIComponent(bodyProps.url)}`
    + `&redirect_uri=${encodeURIComponent('https://www.facebook.com/')}`,
  hatebuShare: `http://b.hatena.ne.jp/entry/${bodyProps.url}`,
};


const {FacebookShareButton, TwitterShareButton} = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    this.setState({
      loaded: true,
    });
  }

  render() {
    return (
      <Body {...bodyProps}>
        <div id="global" className={this.state.loaded? 'loaded' : 'loading'}>
          <header>
            <img src="static/divider-bottom.svg" className="divider-bottom" />
            <img src="static/cover.png" className="cover" />

            <div className="title-container">
              <div className="title">
                Cheatsheet Cheatsheet
                <img src="static/title.svg" />
              </div>

              <div className="brand-container">
                <a href="https://pentapod.github.io">
                  <div className="logo"
                        style={{ width: 25 }}
                        >
                    <Isvg src='/static/logo.svg'></Isvg>
                  </div>
                  <div className="brand"
                        style={{ width: 100 }}
                        >
                    <Isvg src='/static/brand.svg'>pentapod</Isvg>
                  </div>
                </a>
              </div>
            </div>

            <div className="credit">
              Illust:&nbsp;
              <a href="https://twitter.com/AzukiLib">小枝あずき</a>
            </div>

            <div className="container">
              <div className="badge">
                技術書典2<br/>新刊
              </div>
              <div className="buttons">
                <TwitterShareButton
                  url={bodyProps.url}
                  title={bodyProps.description}
                  className="tw-share">
                  <TwitterIcon size={48} round />
                </TwitterShareButton>
                <FacebookShareButton
                  url={bodyProps.url}
                  title={bodyProps.title}
                  description={bodyProps.description}
                  picture={bodyProps.image}
                  className="fb-share">
                  <FacebookIcon size={48} round />
                </FacebookShareButton>
              </div>
              <section className="lead">
                「チートシート・チートシート」はReactやDocker等、Web開発の分野でよく用いられる様々なライブラリについて、
                コマンドや使い方をぎゅぎゅっと見開きページにまとめた技術系合同誌です。
                ふと忘れてしまいがちなコマンドやTipsをささっと調べたり、便利な機能を俯瞰するのにきっと役立ちます。
                Web開発のお供に、あなたも1冊いかがですか？
              </section>
            </div>
          </header>

          <section className="detail">
            <div className="container">
              <div className="toc">
                <h3><center>掲載コンテンツ</center></h3>
                <dl>
                  <div className="content">
                    <dt><h3>html5</h3></dt>
                    <dd>
                      written by&nbsp;
                      <a href="https://twitter.com/spring_raining">緑豆はるさめ</a>
                    </dd>
                  </div>
                  <div className="content">
                    <dt><h3>CSSでアニメーションするやつ</h3></dt>
                    <dd>
                      written by&nbsp;
                      <a href="https://twitter.com/spring_raining">緑豆はるさめ</a>
                    </dd>
                  </div>
                  <div className="content">
                    <dt><h3>npm チートシート</h3></dt>
                    <dd>
                      written by&nbsp;
                      <a href="https://twitter.com/susisu2413">すしす</a>
                    </dd>
                  </div>
                  <div className="content">
                    <dt><h3>Vue.js technical note</h3></dt>
                    <dd>
                      written by&nbsp;
                      <a href="https://twitter.com/potato4d">Potato4d</a>
                    </dd>
                  </div>
                  <div className="content">
                    <dt><h3>React</h3></dt>
                    <dd>
                      written by&nbsp;
                      <a href="https://twitter.com/spring_raining">緑豆はるさめ</a>
                    </dd>
                  </div>
                  <div className="content">
                    <dt><h3>Font Awesome</h3></dt>
                    <dd>
                      written by&nbsp;
                      <a href="https://twitter.com/kamijin_fanta">カミジン</a>
                    </dd>
                  </div>
                  <div className="content">
                    <dt><h3>Docker++</h3></dt>
                    <dd>
                      written by&nbsp;
                      <a href="https://twitter.com/amaya382">amaya</a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <section className="spec">
            <div className="sample"></div>
            <div className="container">
              <table>
                <tbody>
                  <tr>
                    <th>タイトル</th>
                    <td>
                      チートシート・チートシート<br/>
                      ISDN 278-4-510121-01-8
                    </td>
                  </tr>
                  <tr>
                    <th>頒布場所</th>
                    <td>
                      <a href="https://techbookfest.org/event/tbf02">技術書典 2</a><br/>
                      2017年4月9日(日) 11:00〜17:00 at&nbsp;
                      <a href="https://www.google.co.jp/maps/place/%E3%82%A2%E3%82%AD%E3%83%90%E3%83%BB%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2/@35.700523,139.7703178,17z/data=!3m1!4b1!4m5!3m4!1s0x60188c1d85c37633:0x2a3129fcbd041f96!8m2!3d35.700523!4d139.7725065">アキバ・スクエア</a><br/>
                      <strong>え-02</strong>
                      <a href={urls.catalog} className="btn" {...button.small(globalColors.primary)}>カタログを見る</a><br/>
                    </td>
                  </tr>
                  <tr>
                    <th>頒布価格</th>
                    <td>
                      B5冊子版&nbsp;<strong>¥500</strong><br/>
                      電子版&nbsp;<strong>¥300</strong>
                      {/* <a href={urls.booth} className="btn" {...button.small(globalColors.primary)}>電子版を購入</a> */}<br/>
                      冊子版購入者は電子版が<strong>¥0!!!</strong>
                      {/* <a href={urls.booth} className="btn" {...button.small(globalColors.primary)}>特典をダウンロード</a> */}
                    </td>
                  </tr>
                  <tr>
                    <th>仕様</th>
                    <td>B5 モノクロ 20ページ</td>
                  </tr>
                </tbody>
              </table>

              <div className="react-native">
                <a href="https://pentapod.github.io/c90"><img src="static/react-native-cover.png" /></a>
                <div className="description">
                  コミックマーケット90で頒布した<br/>
                  「<a href="https://pentapod.github.io/c90">はじめる React Native</a>」も頒布予定<br/>
                  頒布価格&nbsp;<strong><s>¥1000</s>→¥500</strong>
                </div>
              </div>
            </div>
          </section>

          <section className="share">
            <div className="container">
              <h3><center>このページを共有</center></h3>
              <div className="buttons">
                <a href={urls.catalog} {...button.inverse('#4caf50', '#319235')}>技術書典カタログでお気に入りに追加</a>
                <a href={urls.twitterShare} {...button.inverse('#55acee', '#3b8dcc')}>Twitterでツイート</a>
                <a href={urls.facebookShare} {...button.inverse('#365899', '#1b386f')}>Facebookでシェア</a>
                <a href={urls.hatebuShare} {...button.inverse('#008fde', '#006fad')}>はてなブックマークに登録</a>
              </div>
            </div>
          </section>

          <footer>
            <div className="brand-container">
              <a href="https://pentapod.github.io">
                <div className="logo"
                      style={{ width: 25 }}
                      >
                  <Isvg src='/static/logo.svg'></Isvg>
                </div>
                <div className="brand"
                      style={{ width: 100 }}
                      >
                  <Isvg src='/static/brand.svg'>pentapod</Isvg>
                </div>
              </a>
            </div>
          </footer>
        </div>

        <style jsx global>{`
          @font-face {
            font-family: "NotoSansCJKjp-Jxck";
            font-style: normal;
            font-weight: 400;
            src: local("NotoSansCJKjp-Bold.otf"),
                local("NotoSansJP-Bold.otf"),
                url("static/fonts/NotoSansCJKjp-Jxck-Regular.woff") format("woff");
          }

          @font-face {
            font-family: "NotoSansCJKjp-Jxck";
            font-style: normal;
            font-weight: 700;
            src: local("NotoSansCJKjp-Bold.otf"),
                local("NotoSansJP-Bold.otf"),
                url("static/fonts/NotoSansCJKjp-Jxck-Bold.woff") format("woff");
          }
          body {
            color: #555;
            background-color: #fff;
            font-size: 16px;
            font-family: "Noto Sans","Noto Sans CJK JP","NotoSansCJKjp-Jxck",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
            font-weight: 400;
            word-spacing: 0.2em;
            line-height: 1.8;
          }
          @media (max-width: 767px) {
            body {
              font-size: 13px;
            }
          }
          p {
            margin: 1em 0;
          }
          a {
            color: #2192b7;
          }
          a:hover {
            color: #1e86a8;
          }
          section {
            position: relative;
          }
          h1, h2, h3 {
            margin: 0;
          }
          h1  { font-size: 2.0em; }
          h2  { font-size: 1.6em; }
          h3  { font-size: 1.3em; }
          ul, ol {
            padding-left: 1em;
          }

          #global {
            transition: opacity 1s;
            opacity: 0;
          }
          #global.loaded {
            opacity: 1;
          }

          header .tw-share, header .fb-share {
            display: inline-block;
            cursor: pointer;
            margin-left: 18px;
          }
        `}</style>

        <style jsx>{`
          .container {
            max-width: 920px;
            margin: 0 auto;
            padding: 0 20px;
          }
          header {
            position: relative;
            width: 100vw;
            height: 800px;
            overflow: hidden;
            background: url("static/cherry.jpg");
            background-position: center;
            background-size: cover;
          }
          header .divider-bottom {
            position: absolute;
            bottom: 0;
            min-width: 1500px;
          }
          header img.cover {
            position: absolute;
            right: 65vw;
            height: 920px;
          }
          header .title-container {
            position: absolute;
            left: 35vw;
            top: 60px;
            margin-left: 30px;
          }
          header .title {
            width: 350px;
            font-size: 0;
            background-color: rgba(193, 44, 64, 0.58);
          }
          header .brand-container {
            margin-top: 20px;
          }
          header .credit {
            position: absolute;
            bottom: 10px;
            left: 35vw;
            margin-left: -80px;
          }
          header .container {
            position: absolute;
            bottom: 100px;
            left: 0;
            right: 0;
          }
          header .badge {
            margin: 0 0 18px auto;
            width: 120px;
            height: 120px;
            padding-top: 25px;
            border-radius: 60px;
            box-sizing: border-box;
            text-align: center;
            font-size: 20px;
            font-weight: 700;
            color: #ffffff;
            background-color: ${globalColors.primary};
          }
          header .buttons {
            margin: 0 0 18px auto;
            text-align: right;
          }
          header .lead {
            margin: 0 0 0 auto;
            max-width: 550px;
            background-color: rgba(255, 255, 255, 0.5);
          }
          @media (max-width: 767px) {
            header {
              height: 580px;
            }
            header .title-container {
              left: 30vw;
              margin: 0;
            }
            header .title {
              width: 250px;
            }
            header .credit {
              margin-left: -30px;
            }
            header .container {
              bottom: 36px;
            }
            header .lead {
              max-width: 380px;
            }
          }
          @media (max-width: 500px) {
            header img.cover {
              left: -8vw;
              right: inherit;
              height: 600px;
              bottom: -100px;
            }
            header .title-container {
              left: inherit;
              right: 20px;
              top: 15px;
            }
            header .title {
              width: 200px;
            }
            header .badge {
              width: 90px;
              height: 90px;
              font-size: 16px;
              padding-top: 20px;
            }
            header .lead {
              max-width: 320px;
            }
          }

          section.detail {
            padding: 36px 0;
            background-color: ${globalColors.bg};
            overflow: hidden;
          }
          .toc dl {
            column-count: 2;
            column-gap: 40px;
          }
          @media (max-width: 767px) {
            .toc dl {
              column-count: 1;
            }
          }
          .toc .content {
            display: inline-block;
            width: 100%;
            margin: 12px 0;
          }
          .toc dt {
            line-height: 26px;
          }
          .toc dt h3 {
            font-size: 24px;
          }
          .toc dd {
            text-align: right;
          }
          @media (max-width: 500px) {
            .toc dt h3 {
              font-size: 20px;
            }
          }

          section.spec {
            padding: 36px 0;
            overflow: hidden;
          }
          .sample {
            position: absolute;
            z-index: -100;
            top: 35px;
            right: 0;
            width: 40%;
            overflow: hidden;
          }
          @keyframes sample-h500 {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-1666px, 0, 0); }
          }
          @keyframes sample-h300 {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-999px, 0, 0); }
          }
          .sample:before {
            content: " ";
            display: block;
            height: 500px;
            width: 10000px;
            background-image: url(static/sample.jpg);
            background-size: contain;
            animation: sample-h500 30s linear infinite;
          }
          .spec tr {
            margin: 10px 0;
          }
          .spec th {
            font-weight: inherit;
            text-align: inherit;
            width: 110px;
          }
          .spec td {
            line-height: 30px;
            padding: 12px;
          }
          .spec strong {
            font-size: 24px;
            font-weight: 700;
          }
          .spec .btn {
            margin: 0 1em;
          }
          .react-native {
            display: flex;
            padding: 20px;
            width: 420px;
            color: #ffffff;
            background-color: #57A7BF;
            border-radius: 2px;
          }
          .react-native a {
            color: #ffffff;
          }
          .react-native img {
            height: 105px;
            margin-right: 20px;
          }
          .react-native .description {
            flex-grow: 1;
          }
          @media (max-width: 767px) {
            .sample {
              position: relative;
              top: 0;
              width: 100%;
              padding: 1.5em 0;
            }
            .sample:before {
              height: 300px;
              animation: sample-h500 30s linear infinite;
            }
            .spec th {
              width: 60px;
            }
            .react-native {
              margin-left: -20px;
              width: 100%;
              border-radius: 0;
            }
          }
          @media (min-width: 768px) {
            .sample:after {
              content: " ";
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              width: 20%;
              height: 500px;
              background: linear-gradient(90deg,#ffffff 0,rgba(255,255,255,0) 100%);
            }
          }

          section.share {
            padding: 36px 0;
            background-color: ${globalColors.bg};
            overflow: hidden;
          }
          .share .buttons {
            display: flex;
            margin: 0 -10px;
          }
          .share .buttons > * {
            flex-grow: 1;
            margin: 10px;
          }
          @media (max-width: 767px) {
            .share .buttons {
              flex-direction: column;
            }
            .share .buttons > * {
              margin: 10px 10vw;
            }
          }

          footer {
            padding: 36px 0;
            overflow: hidden;
          }
          footer .brand-container {
            text-align: center;
          }
          .logo, .brand {
            display: inline-block;
            margin-left: auto;
            padding-right: 1em;
          }
        `}</style>
      </Body>
    );
  }
}
