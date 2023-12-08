//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
  easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
  duration: 3000,//時間指定(1000＝1秒)
  strokeWidth: 0.2,//進捗ゲージの太さ
  color: '#212121',//進捗ゲージのカラー
  trailWidth: 0.2,//ゲージベースの線の太さ
  trailColor: '#757575',//ゲージベースの線のカラー
  text: {//テキストの形状を直接指定				
    style: {//天地中央に配置
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '-30px 0 0 0',//バーより上に配置
      transform: 'translate(-50%,-50%)',
      'font-size': '1rem',
      color: '#212121',
    },
    autoStyleContainer: false //自動付与のスタイルを切る
  },
  step: function (state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
  }
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
  // $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});



//SVGアニメーションの描画
var stroke;
stroke = new Vivus('mask', {//アニメーションをするIDの指定
  start: 'manual',//自動再生をせずスタートをマニュアルに
  type: 'scenario-sync',// アニメーションのタイプを設定
  duration: 20,//アニメーションの時間設定。数字が小さくなるほど速い
  forceRender: false,//パスが更新された場合に再レンダリングさせない
  animTimingFunction: Vivus.EASE,//動きの加速減速設定
},
  function () {
    $("#mask").attr("class", "done");//描画が終わったらdoneというクラスを追加
  }
);

$(window).on('load', function () {
  $("#splash").delay(4000).fadeOut('slow');//ローディング画面を3秒（3000ms）待機してからフェイドアウト
  $("#splash_logo").delay(4000).fadeOut('slow');//ロゴを3秒（3000ms）待機してからフェイドアウト
  stroke.play();//SVGアニメーションの実行
});

$(function () {
  /*=================================================
  スムーススクロール
  ===================================================*/

  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    // urlが変化しないようにfalseを返す
    return false; 
  });
});

//アコーディオンをクリックした時の動作
$('.faq-title').on('click', function() {//タイトル要素をクリックしたら
	$('.faq-text').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
  var findElm = $(this).next(".faq-text");//タイトル直後のアコーディオンを行うエリアを取得
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去    
	}else{//それ以外は
		$('.close').removeClass('close'); //クラス名closeを全て除去した後
		$(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
		$(findElm).slideDown(500);//アコーディオンを開く
	}
});