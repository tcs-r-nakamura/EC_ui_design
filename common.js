// わくわくEC ヘルプセンター 共通スクリプト

function toggleCard(id) {
  const card = document.getElementById(id);
  const header = card.querySelector('.feature-card-header');
  card.classList.toggle('open');
  header.setAttribute('aria-expanded', card.classList.contains('open') ? 'true' : 'false');
}

function switchRole(role) {
  document.querySelectorAll('.role-card').forEach(function (c) {
    c.classList.remove('active');
    c.setAttribute('aria-selected', 'false');
  });
  var activeCard = document.querySelector('.role-card-' + role);
  activeCard.classList.add('active');
  activeCard.setAttribute('aria-selected', 'true');
  document.querySelectorAll('.role-panel').forEach(function (p) { p.classList.remove('active'); });
  document.getElementById('panel-' + role).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
  // role="button" 要素のキーボード操作対応（Enter/Space）
  document.querySelectorAll('[role="button"]').forEach(function (el) {
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click();
      }
    });
  });

  // sidebar-item のクリック時に .active クラスを切り替え
  document.querySelectorAll('.sidebar-box').forEach(function (box) {
    box.querySelectorAll('.sidebar-item').forEach(function (item) {
      item.addEventListener('click', function () {
        box.querySelectorAll('.sidebar-item').forEach(function (i) { i.classList.remove('active'); });
        item.classList.add('active');
      });
    });
  });
});
