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

// 最初に「常時開催」ボタンをアクティブにする
document.querySelector('[data-tab="always"]').classList.add('active');

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
  });
});
