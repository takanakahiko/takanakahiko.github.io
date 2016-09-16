$(document).ready(function(){

	console.log("hoge");

    // オプション
    var wrap = $("#body-wrap");
    var menu = $("#your-left-side");
    var openClass = 'open';
    
    // メニュー制御定義↓ここから
    // スライド幅。メニューの幅は%指定でもpx指定でも動きます
    var menuWidth = menu.outerWidth() + 'px';
    // スライドの戻り幅、マイナス方向
    var menuWidthMinus = '-' + menuWidth;
    
    // オーバーレイ生成
    // HTMLに直に書いてもいいです。そのときはラッパーの子要素としてください。
    wrap.append(
        $('<div class="menu-layer"></div>')
    );
    // オーバーレイ定義
    var overlay = $('.menu-layer');
    // オーバーレイ制御
    // スマホの場合clickイベントは反応が遅いため、touchstartイベントでオーバーレイのタッチと同時にメニューを閉じ始めるようにしています
    overlay.bind('click touchstart',
        function() {
            event.preventDefault();
            menuClose();
        }
     );
     
    // メニューを開く関数
    function menuOpen() {
        // メニュー開閉の判定に使うopenクラスをメニュータグに追加
        menu.addClass(openClass);
        // オーバーレイ表示
        overlay.show();
        // 開くときはメニュー表示⇒コンテンツ⇒メニューの順に実行
        menu.css('display', 'block');
        // animate関数を使ってスライド動作を実行
        wrap.animate({'left':menuWidth}, 'slow');
        menu.animate({'left':'0'}, 'slow');
    }
    
    // メニューを閉じる関数
    function menuClose() {
        // メニュー開閉の判定に使うopenクラスをメニュータグから削除
        menu.removeClass(openClass);
        // オーバーレイ非表示
        overlay.hide();
        // 閉じるときはコンテンツ⇒メニュー⇒メニュー非表示の順に実行
        // 閉じ切る前にメニューが消えてしまうため、メニュー非表示はメニューを動かすanimate関数のコールバックで実行
        wrap.animate({'left':'0'}, 'slow');
        menu.animate(
            {'left':menuWidthMinus},
            'slow', 'swing',
            function(){ 
                menu.css('display', 'none');
            }
        );
    }
    // メニュー制御定義↑ここまで
    
    // メニュー開閉（バーガーアイコン）
    $("#left-open a").click(function(){
        // 開閉状態を示すクラスをtoggleClassで切り替えて開閉どちらを行うか判定
        menu.toggleClass(openClass);
        if(menu.hasClass(openClass)) {
            menuOpen();
        } else {
            menuClose();
        }
    });
    
    // メニュー内の自分を閉じるボタン
    $("#your-lnav-close a").click(function(){
        menuClose();
    });
});