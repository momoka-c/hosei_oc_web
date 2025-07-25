const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// スムーススクロール機能の追加
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // デフォルトのジャンプを止める

    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    // メニューを閉じる
    mobileMenu.classList.remove('open');
  });
});
const buttons = document.querySelectorAll('.tab-buttons button');
const panels = document.querySelectorAll('.tab-panel');
const section2 = document.getElementById('section2');

// 最初に「常時開催」ボタンをアクティブにする
document.querySelector('[data-tab="always"]').classList.add('active');

// 関数：高さを画像に合わせて更新
function adjustSectionHeight() {
  const activePanel = document.querySelector('.tab-panel.active');
  section2.style.height = activePanel.offsetHeight + 200 + 'px'; // 余白込み
}

// 初期表示時に高さ調整
window.addEventListener('load', adjustSectionHeight);

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.getAttribute('data-tab');

    // ボタンのアクティブ切り替え
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // パネルの切り替え
    panels.forEach(panel => {
      if (panel.id === `tab-${tab}`) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    // 高さの調整（遅延で少し待ってから）
    setTimeout(adjustSectionHeight, 100);
  });
});

const verticalButtons = document.querySelectorAll('.vertical-tab-buttons button');
const verticalPanels = document.querySelectorAll('.vertical-tab-content .tab-panel');

verticalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.getAttribute('data-tab');

    verticalButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    verticalPanels.forEach(panel => panel.classList.remove('active'));
    document.getElementById(`tab-${tab}`).classList.add('active');
  });
});
