// ============================================================
//  BAR SHEET — APP
//  Reads from data.js and builds the card UI dynamically.
//  You shouldn't need to touch this file often.
// ============================================================

function buildHealthBar(priority) {
  const segs = [1, 2, 3].map(i => {
    const seg = document.createElement('div');
    seg.className = 'seg';
    return seg;
  });
  const hbar = document.createElement('div');
  hbar.className = 'hbar';
  segs.forEach(s => hbar.appendChild(s));
  return hbar;
}

function buildItemRow(item) {
  const row = document.createElement('div');
  row.className = `item-row p${item.priority}`;

  const name = document.createElement('span');
  name.className = 'item-name';
  name.textContent = item.name;

  row.appendChild(name);
  row.appendChild(buildHealthBar(item.priority));
  return row;
}

function buildCategoryCard(category) {
  const card = document.createElement('div');
  card.className = `cat-card ${category.color}`;

  const head = document.createElement('div');
  head.className = 'cat-head';
  head.innerHTML = `<span class="cat-emoji">${category.emoji}</span><span class="cat-title">${category.name}</span>`;

  card.appendChild(head);
  category.items.forEach(item => card.appendChild(buildItemRow(item)));
  return card;
}

function buildLegend() {
  const configs = [
    { priority: 1, label: 'Low',    color: 'var(--c1)' },
    { priority: 2, label: 'Medium', color: 'var(--c2)' },
    { priority: 3, label: 'High',   color: 'var(--c3)' },
  ];

  const legend = document.getElementById('legend');

  configs.forEach(({ priority, label, color }) => {
    const leg = document.createElement('div');
    leg.className = 'leg';

    const bar = document.createElement('div');
    bar.className = 'leg-bar';

    for (let i = 1; i <= 3; i++) {
      const lb = document.createElement('div');
      lb.className = 'lb';
      if (i >= (4 - priority)) {
        lb.style.background = color;
        lb.style.boxShadow = `0 0 5px ${color}`;
      }
      bar.appendChild(lb);
    }

    leg.appendChild(bar);
    leg.appendChild(document.createTextNode(label));
    legend.appendChild(leg);
  });
}

function init() {
  buildLegend();
  const main = document.getElementById('main');
  categories.forEach(cat => main.appendChild(buildCategoryCard(cat)));
}

document.addEventListener('DOMContentLoaded', init);
