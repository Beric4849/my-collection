const PALETTES = {
  plant: [
    { name: 'Background', hex: '#FFFFFF' },
    { name: 'Dark Green', hex: '#2D5A27' },
    { name: 'Main Green', hex: '#4CAF50' },
    { name: 'Soft Green', hex: '#81C784' },
    { name: 'Light Brown', hex: '#8D6E63' },
    { name: 'Dark Brown', hex: '#5D4037' }
  ],
  cat: [
    { name: 'Background', hex: '#FFFFFF' },
    { name: 'Orange', hex: '#FF9800' },
    { name: 'Yellow Orange', hex: '#FFB74D' },
    { name: 'Pink', hex: '#F48FB1' },
    { name: 'Black', hex: '#212121' },
    { name: 'Red', hex: '#E53935' }
  ],
  house: [
    { name: 'Background', hex: '#FFFFFF' },
    { name: 'Red', hex: '#E53935' },
    { name: 'Cream', hex: '#FFF8E1' },
    { name: 'Wood Brown', hex: '#6D4C41' },
    { name: 'Light Blue', hex: '#81D4FA' },
    { name: 'Green', hex: '#66BB6A' }
  ],
  duck: [
    { name: 'Background', hex: '#FFFFFF' },
    { name: 'Yellow', hex: '#FDD835' },
    { name: 'Shadow Yellow', hex: '#F57F17' },
    { name: 'Orange', hex: '#FB8C00' },
    { name: 'Black', hex: '#212121' },
    { name: 'Blue', hex: '#4FC3F7' }
  ]
};

const ARTWORKS = [
  {
    id: 0,
    title: 'Sprout Pot',
    size: 16,
    paletteKey: 'plant',
    gridMap: [
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,
      0,0,0,0,0,1,2,2,2,1,0,0,0,0,0,0,
      0,0,0,0,1,2,3,3,2,2,1,0,0,0,0,0,
      0,0,0,1,2,3,3,3,2,2,2,1,0,0,0,0,
      0,0,1,2,3,3,3,2,2,2,2,2,1,0,0,0,
      0,1,2,3,3,2,2,2,2,2,2,2,2,1,0,0,
      0,1,2,2,2,2,2,1,1,2,2,2,2,1,0,0,
      0,0,1,1,2,2,1,0,0,1,2,2,1,0,0,0,
      0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,
      0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,
      0,0,0,5,4,4,4,4,4,4,4,4,5,0,0,0,
      0,0,0,0,5,4,4,4,4,4,4,5,0,0,0,0,
      0,0,0,0,5,4,4,4,4,4,4,5,0,0,0,0,
      0,0,0,0,0,5,5,5,5,5,5,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ]
  },
  {
    id: 1,
    title: 'Cozy Kitten',
    size: 16,
    paletteKey: 'cat',
    gridMap: [
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,
      0,1,3,1,0,0,0,0,0,0,1,3,1,0,0,0,
      0,1,3,3,1,0,0,0,0,1,3,3,1,0,0,0,
      0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
      0,1,2,2,1,1,1,1,1,1,2,2,1,0,0,0,
      0,1,2,4,1,1,1,1,1,1,4,2,1,0,0,0,
      0,1,1,1,1,1,3,3,1,1,1,1,1,0,0,0,
      0,0,1,1,1,3,3,3,3,1,1,1,0,0,0,0,
      0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,
      0,0,5,5,5,5,5,5,5,5,5,5,0,0,0,0,
      0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,
      0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
      0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
      0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ]
  },
  {
    id: 2,
    title: 'Tiny House',
    size: 16,
    paletteKey: 'house',
    gridMap: [
      0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,
      0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,
      0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,
      0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,
      0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,
      0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
      0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0,
      0,0,0,2,4,4,2,2,2,4,4,2,2,0,0,0,
      0,0,0,2,4,4,2,2,2,4,4,2,2,0,0,0,
      0,0,0,2,2,2,2,3,3,2,2,2,2,0,0,0,
      0,0,0,2,2,2,2,3,3,2,2,2,2,0,0,0,
      0,0,0,2,2,2,2,3,3,2,2,2,2,0,0,0,
      0,0,5,5,5,5,5,5,5,5,5,5,5,5,0,0,
      0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ]
  },
  {
    id: 3,
    title: 'Rubber Duck',
    size: 16,
    paletteKey: 'duck',
    gridMap: [
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,
      0,0,0,1,1,1,4,1,1,1,0,0,0,0,0,0,
      0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,
      0,0,3,3,3,1,1,1,1,0,0,0,0,0,0,0,
      0,0,0,3,3,3,1,1,1,1,1,0,0,0,0,0,
      0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,
      0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
      0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
      0,1,1,2,2,1,1,1,1,1,1,1,1,1,0,0,
      0,1,2,2,2,2,1,1,1,1,1,1,1,1,0,0,
      0,0,1,2,2,1,1,1,1,1,1,1,1,0,0,0,
      0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,
      0,0,5,5,5,5,5,5,5,5,5,5,5,5,0,0,
      0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ]
  }
];

let userProgress = {};
ARTWORKS.forEach(art => {
  userProgress[art.id] = new Array(art.gridMap.length).fill(null);
});

let currentArtId = 0;
let activeColorIndex = 1;
let zoomScale = 1.0;
let isAudioOn = false;
let showGridLines = true;
let isEraserActive = false;

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  if (screenId === 'grid-screen') {
    renderCollectionGrid();
  }
}

function renderCollectionGrid() {
  const container = document.getElementById('grid-container');
  container.innerHTML = '';

  ARTWORKS.forEach(art => {
    const progress = userProgress[art.id];
    const filledCount = progress.filter(c => c !== null).length;
    const targetCount = art.gridMap.filter(val => val !== 0).length;
    const isComplete = filledCount >= targetCount;
    const percent = Math.min(100, Math.round((filledCount / targetCount) * 100));

    const card = document.createElement('div');
    card.className = `card ${isComplete ? 'complete' : ''}`;
    card.onclick = () => startColoring(art.id);

    const previewBox = document.createElement('div');
    previewBox.className = 'card-preview-box';

    const miniCanvas = document.createElement('div');
    miniCanvas.style.display = 'grid';
    miniCanvas.style.gridTemplateColumns = `repeat(${art.size}, 1fr)`;
    miniCanvas.style.width = '100px';
    miniCanvas.style.height = '100px';

    const palette = PALETTES[art.paletteKey];

    art.gridMap.forEach((targetVal, idx) => {
      const p = document.createElement('div');
      const userColor = progress[idx];

      if (userColor) {
        p.style.backgroundColor = userColor;
      } else if (isComplete) {
        p.style.backgroundColor = targetVal === 0 ? '#FFFFFF' : palette[targetVal].hex;
      } else {
        p.style.backgroundColor = targetVal === 0 ? '#FFFFFF' : '#E0E8DF';
      }
      miniCanvas.appendChild(p);
    });

    previewBox.appendChild(miniCanvas);

    if (isComplete) {
      const badge = document.createElement('div');
      badge.className = 'badge-completed';
      badge.innerText = 'COMPLETE';
      card.appendChild(badge);
    }

    const title = document.createElement('div');
    title.className = 'card-title';
    title.innerText = art.title;

    const status = document.createElement('div');
    status.className = 'card-status';
    status.innerText = isComplete ? '✨ View Masterpiece' : `${percent}% Painted`;

    card.appendChild(previewBox);
    card.appendChild(title);
    card.appendChild(status);

    container.appendChild(card);
  });
}

function startColoring(artId) {
  currentArtId = artId;
  const art = ARTWORKS[artId];
  const palette = PALETTES[art.paletteKey];

  document.getElementById('art-title').innerText = art.title;
  zoomScale = 1.0;
  updateZoomTransform();

  renderReferencePreviews(art);
  setupPalette(palette);
  setupPixelBoard(art);

  updateProgressUI();
  showScreen('coloring-screen');
}

function renderReferencePreviews(art) {
  const palette = PALETTES[art.paletteKey];

  const createRefGrid = () => {
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = `repeat(${art.size}, 1fr)`;
    grid.style.width = '100%';
    grid.style.height = '100%';

    art.gridMap.forEach(val => {
      const p = document.createElement('div');
      p.style.backgroundColor = val === 0 ? '#FFFFFF' : palette[val].hex;
      grid.appendChild(p);
    });
    return grid;
  };

  const thumbBox = document.getElementById('ref-thumbnail-box');
  thumbBox.innerHTML = '';
  thumbBox.appendChild(createRefGrid());

  const modalBox = document.getElementById('modal-ref-preview');
  modalBox.innerHTML = '';
  modalBox.appendChild(createRefGrid());
}

function setupPalette(palette) {
  const container = document.getElementById('color-swatches');
  container.innerHTML = '';

  activeColorIndex = 1;
  isEraserActive = false; // 리셋 시 지우개 해제
  const eraserBtn = document.getElementById('eraser-btn');
  if (eraserBtn) eraserBtn.classList.remove('active');

  document.getElementById('color-name').innerText = palette[1].name;

  for (let i = 1; i < palette.length; i++) {
    const colorObj = palette[i];
    const swatch = document.createElement('div');
    swatch.className = `swatch ${i === 1 ? 'active' : ''}`;
    swatch.style.backgroundColor = colorObj.hex;

    swatch.onclick = () => {
      // 색상 선택 시 지우개 모드 해제
      isEraserActive = false;
      if (eraserBtn) eraserBtn.classList.remove('active');

      activeColorIndex = i;
      document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      document.getElementById('color-name').innerText = colorObj.name;
    };

    container.appendChild(swatch);
  }
}

function setupPixelBoard(art) {
  const board = document.getElementById('pixel-board');
  board.innerHTML = '';

  if (!showGridLines) {
    board.classList.add('hide-grid');
  } else {
    board.classList.remove('hide-grid');
  }

  const boardSize = 280;
  board.style.width = `${boardSize}px`;
  board.style.height = `${boardSize}px`;
  board.style.gridTemplateColumns = `repeat(${art.size}, 1fr)`;

  const progress = userProgress[art.id];
  const palette = PALETTES[art.paletteKey];

  art.gridMap.forEach((targetVal, idx) => {
    const cell = document.createElement('div');
    cell.className = 'pixel-cell';

    if (progress[idx]) {
      cell.style.backgroundColor = progress[idx];
    } else if (targetVal !== 0) {
      cell.classList.add('target-guide');
    }

cell.onclick = () => {
  if (targetVal !== 0) {
    if (isEraserActive) {
      // [지우개 모드] 색상 및 데이터 삭제, 점 가이드 복구
      cell.style.backgroundColor = '';
      cell.classList.add('target-guide');
      progress[idx] = null;
    } else {
      // [색칠 모드] 선택된 색상 칠하기
      const selectedColor = palette[activeColorIndex].hex;
      cell.style.backgroundColor = selectedColor;
      cell.classList.remove('target-guide');
      progress[idx] = selectedColor;
    }
    checkProgress();
  }
};

    board.appendChild(cell);
  });
}

function adjustZoom(delta) {
  zoomScale = Math.min(2.5, Math.max(0.75, zoomScale + delta));
  updateZoomTransform();
}

function resetZoom() {
  zoomScale = 1.0;
  updateZoomTransform();
}

function updateZoomTransform() {
  const layer = document.getElementById('zoom-layer');
  layer.style.transform = `scale(${zoomScale})`;
  document.getElementById('zoom-text').innerText = `${Math.round(zoomScale * 100)}%`;
}

function openRefModal() {
  document.getElementById('ref-modal').classList.add('active');
}
function closeRefModal() {
  document.getElementById('ref-modal').classList.remove('active');
}

/* Settings Menu Functions */
function openSettingsModal() {
  document.getElementById('settings-modal').classList.add('active');
}
function closeSettingsModal() {
  document.getElementById('settings-modal').classList.remove('active');
}

// 1. 첫 화면 클릭 시 오디오 자동 재생 (브라우저 정책 대응)
document.addEventListener('click', function startBgmOnFirstClick() {
  const bgm = document.getElementById('bgm-player');
  if (bgm && isAudioOn && bgm.paused) {
    bgm.play().catch(() => {});
  }
  // 한 번 실행 후 이벤트 제거
  document.removeEventListener('click', startBgmOnFirstClick);
});

// 2. 기존 toggleAudio 함수를 음악 재생/일시정지로 수정
function toggleAudio() {
  isAudioOn = !isAudioOn;
  const bgm = document.getElementById('bgm-player');
  const mainAudioBtn = document.getElementById('audio-toggle-btn');
  const settingSoundBtn = document.getElementById('setting-sound-btn');

  if (isAudioOn) {
    if (bgm) bgm.play();
    if (mainAudioBtn) mainAudioBtn.innerText = '🔊';
    if (settingSoundBtn) {
      settingSoundBtn.innerText = 'ON';
      settingSoundBtn.className = 'toggle-btn';
    }
  } else {
    if (bgm) bgm.pause();
    if (mainAudioBtn) mainAudioBtn.innerText = '🔇';
    if (settingSoundBtn) {
      settingSoundBtn.innerText = 'OFF';
      settingSoundBtn.className = 'toggle-btn off';
    }
  }
}

function toggleGridLines() {
  showGridLines = !showGridLines;
  const gridBtn = document.getElementById('setting-grid-btn');
  gridBtn.innerText = showGridLines ? 'ON' : 'OFF';
  gridBtn.className = `toggle-btn ${showGridLines ? '' : 'off'}`;

  const board = document.getElementById('pixel-board');
  if (board) {
    if (showGridLines) board.classList.remove('hide-grid');
    else board.classList.add('hide-grid');
  }
}

function toggleEraser() {
  isEraserActive = !isEraserActive;
  const eraserBtn = document.getElementById('eraser-btn');
  
  if (isEraserActive) {
    eraserBtn.classList.add('active');
    document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
    document.getElementById('color-name').innerText = 'Eraser Selected';
  } else {
    eraserBtn.classList.remove('active');
    const swatches = document.querySelectorAll('.swatch');
    if (swatches[activeColorIndex - 1]) {
      swatches[activeColorIndex - 1].classList.add('active');
    }
    const art = ARTWORKS[currentArtId];
    document.getElementById('color-name').innerText = PALETTES[art.paletteKey][activeColorIndex].name;
  }
}

function resetAllProgress() {
  if (confirm('모든 채색 데이터를 초기화하시겠습니까?')) {
    ARTWORKS.forEach(art => {
      userProgress[art.id] = new Array(art.gridMap.length).fill(null);
    });
    renderCollectionGrid();
    closeSettingsModal();
    showScreen('grid-screen');
  }
}

function checkProgress() {
  const art = ARTWORKS[currentArtId];
  const progress = userProgress[art.id];

  let targetCount = 0;
  let filledCount = 0;

  art.gridMap.forEach((targetVal, idx) => {
    if (targetVal !== 0) {
      targetCount++;
      if (progress[idx] !== null) filledCount++;
    }
  });

  const percent = Math.min(100, Math.round((filledCount / targetCount) * 100));
  document.getElementById('progress-text').innerText = `${percent}% Completed`;

  if (filledCount >= targetCount) {
    setTimeout(() => finishArtwork(), 250);
  }
}

function updateProgressUI() {
  checkProgress();
}

function finishArtwork() {
  const art = ARTWORKS[currentArtId];
  const palette = PALETTES[art.paletteKey];
  const progress = userProgress[art.id];

  const box = document.getElementById('finish-preview-box');
  box.innerHTML = '';

  const finalGrid = document.createElement('div');
  finalGrid.style.display = 'grid';
  finalGrid.style.gridTemplateColumns = `repeat(${art.size}, 1fr)`;
  finalGrid.style.width = '180px';
  finalGrid.style.height = '180px';
  finalGrid.style.borderRadius = '8px';
  finalGrid.style.overflow = 'hidden';
  finalGrid.style.border = '2px solid var(--text-primary)';

  art.gridMap.forEach((targetVal, idx) => {
    const p = document.createElement('div');
    p.style.backgroundColor = progress[idx] || (targetVal === 0 ? '#FFFFFF' : palette[targetVal].hex);
    finalGrid.appendChild(p);
  });

  box.appendChild(finalGrid);
  showScreen('finish-screen');
}

renderCollectionGrid();

function endSession() {
  if (confirm('세션을 종료하고 처음 화면으로 돌아가시겠습니까?')) {
    showScreen('welcome-screen');
  }
}

