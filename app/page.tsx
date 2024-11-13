import HashTags from "@/components/HashTags";
import Profiles from "@/components/Profiles";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <div id="top" className="container">
        <div className="content">
          <div className="header centering">
            <img
              src="img/top.png"
              width="240px"
              height="240px"
              alt="吾味人美のアイコン"
              title="吾味人美のアイコン"
              loading="lazy"
            />
          </div>
        </div>

        <div className="menu">
          <a href="#about">ABOUT</a>
          <a href="#profile">PROFILE</a>
          <a href="#goods">GOODS</a>
          <a href="#guideline">GUIDELINE</a>
          <a href="#qa">Q&A</a>
          <a href="#link">LINK</a>
        </div>

        <div className="content">
          <h2 id="about">ABOUT</h2>
          <p className="heading">吾味人美について</p>
          <p className="text dropcap">
            頑張らない程度に頑張るがモットーのVtuberことバーチャルインターネットラクガキマンです。
            「（制作コストが）安い、（見終わるのが）早い、（ぼちぼち）面白い」を第一として動画制作などをしながらYouTubeやTwitterなどで活動しています。
            <br />
            楽しいことが大好きなので、一杯楽しいことをやっていけたらなと思っています。
          </p>
        </div>

        <div className="content centering">
          <iframe
            id="youtube"
            width="100%"
            height="400"
            frameBorder={0}
            src="https://www.youtube.com/embed/XYEUOaZPpGY?playsinline=1"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="content">
          <h2 id="profile">
            <span>PROFILE</span>
          </h2>
          <Profiles />
        </div>

        <div className="content">
          <div className="f-box">
            <div className="centering">
              <a
                href="img/design.jpg"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src="img/design_t.jpg"
                  width="215px"
                  height="300px"
                  alt="吾味人美の設定画"
                  title="吾味人美の設定画"
                  loading="lazy"
                />
              </a>
              <span className="tip top">吾味人美の設定画です。</span>
            </div>
            <div className="centering">
              <a
                href="img/design2.jpg"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src="img/design2_t.jpg"
                  width="357px"
                  height="300px"
                  alt="吾味人美の設定画"
                  title="吾味人美の設定画"
                  loading="lazy"
                />
              </a>
              <span className="tip top">
                <b>
                  <a
                    href="https://x.com/gomihitomi/status/1489221949993926656"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="purple"
                  >
                    新衣装企画
                  </a>
                </b>
                で否羽ゆきさんの物を採用させて頂きました。
              </span>
            </div>
          </div>
          <div className="f-box">
            <div className="centering">
              <img
                className="photo"
                src="img/model.png"
                width="295px"
                height="300px"
                alt="3Dの吾味人美と2Dの吾味人美"
                title="3Dの吾味人美と2Dの吾味人美"
                loading="lazy"
              />
              <span className="tip top">
                3Dは
                <b>
                  <a
                    href="https://sushi-tabetai.wixsite.com/sushiwotaberuhibi"
                    className="purple"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    すしぽもる
                  </a>
                </b>
                さんに作って頂きました。
              </span>
            </div>
          </div>
        </div>

        <div className="content">
          <h2 id="goods">GOODS</h2>
          <div className="goods-row">
            <div className="goods-col">
              <a
                href="https://gomihitomi.booth.pm/items/1447118"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className="radius-img"
                  src="img/goods/01_t.jpg"
                  width="96px"
                  height="96px"
                  alt="吾味人美のアクリル板"
                  title="吾味人美のアクリル板"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="goods-col">
              <a
                href="https://gomihitomi.booth.pm/items/1447153"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className="radius-img"
                  src="img/goods/02_t.jpg"
                  width="96px"
                  height="96px"
                  alt="デカ吾味人美Tシャツ"
                  title="デカ吾味人美Tシャツ"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="goods-col">
              <a
                href="https://gomihitomi.booth.pm/items/1447163"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className="radius-img"
                  src="img/goods/03_t.jpg"
                  width="96px"
                  height="96px"
                  alt="チビ吾味人美Tシャツ"
                  title="チビ吾味人美Tシャツ"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="goods-col">
              <a
                href="https://gomihitomi.booth.pm/items/1447181"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className="radius-img"
                  src="img/goods/04_t.jpg"
                  width="96px"
                  height="96px"
                  alt="吾味人美x4サコッシュ"
                  title="吾味人美x4サコッシュ"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="goods-col">
              <a
                href="https://gomihitomi.booth.pm/items/1447200"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className="radius-img"
                  src="img/goods/05_t.jpg"
                  width="96px"
                  height="96px"
                  alt="吾味人美おでかけアクリルキーホルダー"
                  title="吾味人美おでかけアクリルキーホルダー"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="goods-col">
              <a
                href="https://suzuri.jp/gomihitomi/12459557/water-glass/m/clear"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className="radius-img"
                  src="img/goods/06_t.jpg"
                  width="96px"
                  height="96px"
                  alt="夏の吾味人美グラス"
                  title="夏の吾味人美グラス"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="goods-col">
              <a
                href="https://suzuri.jp/gomihitomi/12459557/long-sized-water-glass/l/clear"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className="radius-img"
                  src="img/goods/07_t.jpg"
                  width="96px"
                  height="96px"
                  alt="夏の吾味人美ロンググラス"
                  title="夏の吾味人美ロンググラス"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="content">
          <h2>LINEスタンプ</h2>
          <div className="f-box">
            <div className="centering">
              <a
                href="https://store.line.me/stickershop/product/12294605"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src="img/line.png"
                  width="200px"
                  height="172px"
                  alt="吾味人美のLINEスタンプ"
                  title="吾味人美のLINEスタンプ"
                  loading="lazy"
                />
              </a>
              <span className="tip top">吾味人美の便利スタンプ</span>
            </div>
          </div>
        </div>

        <div className="content">
          <h2 id="guideline">
            <span>GUIDELINE</span>
          </h2>
          <p className="heading">二次創作・二次使用について</p>
          <p className="text dropcap">
            基本的に吾味人美は皆さんに楽しんで欲しいというスタンスで活動をしています！
            その為、下記ガイドラインを守って頂ければ好きなように二次創作・二次使用をして頂いて構いません。
          </p>

          <div className="f-box">
            <div className="qa-box">
              <h3>◯ OK</h3>
              <ul>
                <li>
                  <b>吾味人美の二次創作をすること</b>
                </li>
                <ol>
                  <li>
                    Twitterに投稿する場合は
                    <a
                      href="https://twitter.com/hashtag/%E3%81%94%E3%81%BF%E3%81%82%E3%83%BC%E3%81%A8?f=tweets&vertical=default&src=hash"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      #ごみあーと
                    </a>
                    を付けてくれると嬉しいです。
                  </li>
                  <li>
                    営利目的でない非商用利用の場合、特に許可は必要ありません。
                  </li>
                </ol>
                <li>
                  <b>吾味人美の絵・動画を二次使用をすること</b>
                </li>
                <ol>
                  <li>吾味人美の創作物全てが対象となります。</li>
                  <li>
                    営利目的でない非商用利用の場合、特に許可は必要ありません。
                  </li>
                </ol>
              </ul>
            </div>
            <div className="qa-box">
              <h3>✖ NG</h3>
              <ul>
                <li>
                  <b>下記の用途で利用すること</b>
                </li>
                <ol>
                  <li>営利目的（商用）での利用</li>
                  <li>なりすまし、著作者を偽るような内容</li>
                  <li>第三者に不快感を与えるような内容</li>
                  <li>第三者の権利、利益を侵害するような内容</li>
                  <li>特定の思想、団体を支援するような内容</li>
                  <li>その他、吾味人美が不適切と判断する内容</li>
                </ol>
              </ul>
            </div>
          </div>
          <div className="attention">
            ※当ガイドラインは予告なく変更することがありますので予めご了承ください。
          </div>
        </div>

        <div className="content">
          <h2 id="qa">
            <span>Q&A</span>
          </h2>
          <p className="heading">誕生日とかデビュー日は無いんですか？</p>
          <p className="text dropcap">
            僕が誕生日やデビュー日の度にイベントを用意するのが無理すぎたので消失しました。誕生日は5/3で、デビュー日は2018/10/18です。皆さんがこの日に併せて何かをして頂く分には自由にして頂いて大丈夫です。
          </p>
          <p className="heading">
            性的・暴力表現を含む絵を描いてもいいですか？
          </p>
          <p className="text dropcap">
            好きに描いてください。R18絵の場合は
            <a
              href="https://twitter.com/hashtag/%E3%81%94%E3%81%BF%E3%81%88%E3%81%A1%E3%81%82%E3%83%BC%E3%81%A8?f=tweets&vertical=default&src=hash"
              target="_blank"
              rel="noreferrer noopener"
            >
              #ごみえちあーと
            </a>
            を使ってください。R18絵を投稿して貰ってもRTはしないけど許してネ。
          </p>
          <p className="heading">
            エゴサーチがエグすぎる・呟きたいけど反応はされたくないです
          </p>
          <p className="text dropcap">
            ツイートに反応しないで欲しい旨が記述してあったり、gmhtmなどの検索避けがされていた場合は見つけても反応しませんので、お手数おかけしますがご利用ください。
            <br />
            ただし、ファンアートなどの場合は無条件で反応することがあります。
          </p>
          <p className="heading">吾味人美が作った物を使って何かを作りたい</p>
          <p className="text dropcap">
            好きに使ってください。規約を守って頂ければ特に許可の類は必要としません。
            <br />
            僕が作ってない創作物（ファンアートなど）に関してはこの限りではありません。
          </p>
          <p className="heading">
            吾味人美(人妻)とか吾味人見とか吾味人巳って何ですか？
          </p>
          <p className="text centering">
            <img
              className="photo"
              src="img/diagram2.png"
              width="720px"
              height="300px"
              alt="吾味人美の相関図"
              title="吾味人美の相関図"
              loading="lazy"
            />
          </p>
          <p className="heading">
            上記以外でたまに出てくるキャラクター達は何ですか？
          </p>
          <p className="text dropcap">
            吾味人美と同じ世界線を生きるバーチャルインターネットラクガキマン達ですが、基本的に知らない人です。
            <a
              href="https://gomihitomi.github.io/vwiki/"
              target="_blank"
              rel="noreferrer noopener"
            >
              バーチャルインターネットラクガキマンwiki
            </a>
            にちょっとだけ情報が載ってるかも知れません。
          </p>
          <p className="heading">吾味人美（偽物）ってアカウントは何ですか？</p>
          <p className="text dropcap">
            裏アカウントです。基本的に趣味の話とかをする時に動かしてます。もっと動かしてない
            <a
              href="https://bsky.app/profile/gomihitomi.bsky.social"
              target="_blank"
              rel="noreferrer noopener"
            >
              Blueskyアカウント
            </a>
            もあります。
          </p>
          <p className="heading">昔、ラジオやってませんでした？</p>
          <p className="text dropcap">
            吾味人美の酔いどれラジオという基本的にお酒を飲んで一人で喋るだけのラジオをやってました。詳細は
            <a
              href="https://gomihitomi.github.io/yoidore/"
              target="_blank"
              rel="noreferrer noopener"
            >
              吾味人美の酔いどれラジオ
            </a>
            を見てください。
          </p>
          <p className="heading">ハッシュタグいっぱいあるの何？</p>
          <p className="text dropcap">
            気が向いたら増やしてるだけでなので、無限に増え続けます。
          </p>
          <HashTags />
        </div>

        <div className="content">
          <h2 id="link">
            <span>LINK</span>
          </h2>
          <div className="f-box">
            <div className="link-box">
              <b>作ったゲームとか</b>
              <div className="link-group">
                <a
                  href="https://gomihitomi.github.io/inu-runner/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  INU-RUNNER
                </a>
                <a
                  href="https://gomihitomi.github.io/unchi-card-generator/link"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  自作カードゲーム（UnrealCharacterIdentity）
                </a>
                <a
                  href="https://gomihitosi.github.io/nanchattehakusura/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  なんちゃってはくすら
                </a>
                <a
                  href="https://gomihitosi.github.io/gomiquiz/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  吾味人美クイズ
                </a>
                <a
                  href="https://gomihitosi.github.io/factory/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  ペットボトル工場
                </a>
                <a
                  href="https://gomihitosi.github.io/oruyanke/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  おるやんけタイピング
                </a>
              </div>
            </div>
            <div className="link-box">
              <b>作ったソフトとか</b>
              <div className="link-group">
                <a
                  href="https://github.com/gomihitosi/va-split/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  VA-Split
                </a>
                <a
                  href="https://gomihitosi.github.io/dis/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  webカメラを減色する奴
                </a>
                <a
                  href="https://gomihitosi.github.io/jimakukun/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  字幕クン
                </a>
                <a
                  href="https://gomihitosi.github.io/dojou/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  ド嬢の一冊
                </a>
                <a
                  href="https://gomihitosi.github.io/coupling/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  カップリングジェネレータ
                </a>
              </div>
            </div>
          </div>
          <div className="f-box">
            <div className="link-box">
              <b>吾味人志</b>
              <div className="link-group">
                <a
                  href="https://twitter.com/gomihitosi"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Twitter
                </a>
                <a
                  href="https://pixiv.me/gomihitosi"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  pixiv
                </a>
                <a
                  href="https://github.com/gomihitosi"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub
                </a>
                <a
                  href="https://gomihitosi.hatenablog.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  ブログ
                </a>
              </div>
            </div>
            <div className="link-box">
              <b>吾味人美</b>
              <div className="link-group">
                <a
                  href="https://twitter.com/gomihitomi"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Twitter
                </a>
                <a
                  href="https://x.com/gomihitomi_fake"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Twitter(サブ)
                </a>
                <a
                  href="https://x.com/gomihitomi_fake"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  BlueSky(サブのサブ)
                </a>
                <a
                  href="https://www.youtube.com/@gomihitomi"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  YouTube
                </a>
                <a
                  href="https://www.youtube.com/@gomihitomi_fake"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  YouTube(サブ)
                </a>
                <a
                  href="https://www.twitch.tv/gomihitomi"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Twitch
                </a>
                <a
                  href="https://pixiv.me/gomihitomi"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  pixiv
                </a>
                <a
                  href="https://gomihitomi.booth.pm"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  booth
                </a>
                <a
                  href="https://suzuri.jp/gomihitomi"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  SUZURI
                </a>
                <a
                  href="https://skeb.jp/@gomihitomi"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Skeb
                </a>
                <a
                  href="https://gomilog.vercel.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  ブログ1（GOMILOG）
                </a>
                <a
                  href="https://gomihitomi.github.io/boyaki/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  ブログ2（吾味人美のぼやき）
                </a>
                <a
                  href="https://gomihitomi.github.io/vwiki/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  バーチャルインターネットラクガキマンwiki
                </a>
                <a
                  href="https://gomihitomi.github.io/yasero/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  #痩せろ吾味人美
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
