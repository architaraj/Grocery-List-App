// ── Utilities ────────────────────────────────────────────────────────────
function toTitleCase(str) {
  const minors = new Set(['a','an','the','and','but','or','for','nor','on','at','to','by','in','of','up','as']);
  return str.trim().split(' ').map((w,i)=>{
    if(!w) return w;
    const l=w.toLowerCase();
    return (i!==0&&minors.has(l))?l:w.charAt(0).toUpperCase()+w.slice(1).toLowerCase();
  }).join(' ');
}

// ── Default categories ────────────────────────────────────────────────────
const DEFAULT_CATEGORIES = [
  {id:'fruits',    name:'Fruits',             emoji:'🍎'},
  {id:'vegetables',name:'Vegetables',          emoji:'🥦'},
  {id:'proteins',  name:'Proteins',            emoji:'🍗'},
  {id:'dairy',     name:'Dairy & Eggs',        emoji:'🥛'},
  {id:'breads',    name:'Breads & Carbs',      emoji:'🍞'},
  {id:'frozen',    name:'Frozen',              emoji:'🧊'},
  {id:'beverages', name:'Beverages',           emoji:'🧃'},
  {id:'sauces',    name:'Sauces & Condiments', emoji:'🫙'},
  {id:'snacks',    name:'Snacks & Sweets',     emoji:'🍫'},
  {id:'herbs',     name:'Herbs & Spices',      emoji:'🌿'},
  {id:'household', name:'Household & Care',    emoji:'🧴'},
  {id:'misc',      name:'Miscellaneous',       emoji:'🛒'},
];

// ── Item DB ───────────────────────────────────────────────────────────────
const ITEM_DB = [
  {name:'Apple',emoji:'🍎',cat:'fruits'},{name:'Avocado',emoji:'🥑',cat:'fruits'},
  {name:'Banana',emoji:'🍌',cat:'fruits'},{name:'Blueberries',emoji:'🫐',cat:'fruits'},
  {name:'Cherries',emoji:'🍒',cat:'fruits'},{name:'Clementines',emoji:'🍊',cat:'fruits'},
  {name:'Coconut',emoji:'🥥',cat:'fruits'},{name:'Grapes',emoji:'🍇',cat:'fruits'},
  {name:'Grapefruit',emoji:'🍊',cat:'fruits'},{name:'Kiwi',emoji:'🥝',cat:'fruits'},
  {name:'Lemon',emoji:'🍋',cat:'fruits'},{name:'Lime',emoji:'🍋',cat:'fruits'},
  {name:'Mango',emoji:'🥭',cat:'fruits'},{name:'Melon',emoji:'🍈',cat:'fruits'},
  {name:'Nectarine',emoji:'🍑',cat:'fruits'},{name:'Orange',emoji:'🍊',cat:'fruits'},
  {name:'Papaya',emoji:'🥭',cat:'fruits'},{name:'Peach',emoji:'🍑',cat:'fruits'},
  {name:'Pear',emoji:'🍐',cat:'fruits'},{name:'Pineapple',emoji:'🍍',cat:'fruits'},
  {name:'Plum',emoji:'🍑',cat:'fruits'},{name:'Pomegranate',emoji:'🍎',cat:'fruits'},
  {name:'Raspberries',emoji:'🍓',cat:'fruits'},{name:'Strawberries',emoji:'🍓',cat:'fruits'},
  {name:'Watermelon',emoji:'🍉',cat:'fruits'},
  {name:'Artichoke',emoji:'🥦',cat:'vegetables'},{name:'Asparagus',emoji:'🥦',cat:'vegetables'},
  {name:'Beetroot',emoji:'🥗',cat:'vegetables'},{name:'Bell Pepper',emoji:'🫑',cat:'vegetables'},
  {name:'Bok Choy',emoji:'🥬',cat:'vegetables'},{name:'Broccoli',emoji:'🥦',cat:'vegetables'},
  {name:'Brussels Sprouts',emoji:'🥦',cat:'vegetables'},{name:'Butternut Squash',emoji:'🎃',cat:'vegetables'},
  {name:'Cabbage',emoji:'🥬',cat:'vegetables'},{name:'Carrot',emoji:'🥕',cat:'vegetables'},
  {name:'Cauliflower',emoji:'🥦',cat:'vegetables'},{name:'Celery',emoji:'🥬',cat:'vegetables'},
  {name:'Corn',emoji:'🌽',cat:'vegetables'},{name:'Courgette',emoji:'🥒',cat:'vegetables'},
  {name:'Cucumber',emoji:'🥒',cat:'vegetables'},{name:'Eggplant',emoji:'🍆',cat:'vegetables'},
  {name:'Garlic',emoji:'🧄',cat:'vegetables'},{name:'Ginger',emoji:'🫚',cat:'vegetables'},
  {name:'Green Beans',emoji:'🫛',cat:'vegetables'},{name:'Jalapeño',emoji:'🫑',cat:'vegetables'},
  {name:'Kale',emoji:'🥬',cat:'vegetables'},{name:'Leek',emoji:'🥬',cat:'vegetables'},
  {name:'Lettuce',emoji:'🥬',cat:'vegetables'},{name:'Mushroom',emoji:'🍄',cat:'vegetables'},
  {name:'Onion',emoji:'🧅',cat:'vegetables'},{name:'Parsnip',emoji:'🥕',cat:'vegetables'},
  {name:'Peas',emoji:'🫛',cat:'vegetables'},{name:'Potato',emoji:'🥔',cat:'vegetables'},
  {name:'Pumpkin',emoji:'🎃',cat:'vegetables'},{name:'Radish',emoji:'🥕',cat:'vegetables'},
  {name:'Shallot',emoji:'🧅',cat:'vegetables'},{name:'Spinach',emoji:'🥬',cat:'vegetables'},
  {name:'Spring Onion',emoji:'🥬',cat:'vegetables'},{name:'Sweet Potato',emoji:'🍠',cat:'vegetables'},
  {name:'Tomato',emoji:'🍅',cat:'vegetables'},{name:'Turnip',emoji:'🥕',cat:'vegetables'},
  {name:'Zucchini',emoji:'🥒',cat:'vegetables'},
  {name:'Bacon',emoji:'🥓',cat:'proteins'},{name:'Beef Mince',emoji:'🥩',cat:'proteins'},
  {name:'Chicken Breast',emoji:'🍗',cat:'proteins'},{name:'Chicken Thighs',emoji:'🍗',cat:'proteins'},
  {name:'Chorizo',emoji:'🥓',cat:'proteins'},{name:'Cod',emoji:'🐟',cat:'proteins'},
  {name:'Crab',emoji:'🦀',cat:'proteins'},{name:'Duck Breast',emoji:'🍗',cat:'proteins'},
  {name:'Eggs',emoji:'🥚',cat:'proteins'},{name:'Ground Beef',emoji:'🥩',cat:'proteins'},
  {name:'Ham',emoji:'🥓',cat:'proteins'},{name:'Lamb Chops',emoji:'🥩',cat:'proteins'},
  {name:'Lobster',emoji:'🦞',cat:'proteins'},{name:'Pork Belly',emoji:'🥓',cat:'proteins'},
  {name:'Pork Chop',emoji:'🥩',cat:'proteins'},{name:'Prawns',emoji:'🦐',cat:'proteins'},
  {name:'Salmon',emoji:'🐟',cat:'proteins'},{name:'Sardines',emoji:'🐟',cat:'proteins'},
  {name:'Sausages',emoji:'🌭',cat:'proteins'},{name:'Scallops',emoji:'🦪',cat:'proteins'},
  {name:'Shrimp',emoji:'🦐',cat:'proteins'},{name:'Steak',emoji:'🥩',cat:'proteins'},
  {name:'Tempeh',emoji:'🫘',cat:'proteins'},{name:'Tofu',emoji:'🫘',cat:'proteins'},
  {name:'Tuna',emoji:'🐟',cat:'proteins'},{name:'Turkey',emoji:'🦃',cat:'proteins'},
  {name:'Butter',emoji:'🧈',cat:'dairy'},{name:'Cheddar',emoji:'🧀',cat:'dairy'},
  {name:'Cheese',emoji:'🧀',cat:'dairy'},{name:'Cream',emoji:'🥛',cat:'dairy'},
  {name:'Cream Cheese',emoji:'🧀',cat:'dairy'},{name:'Feta',emoji:'🧀',cat:'dairy'},
  {name:'Greek Yogurt',emoji:'🥛',cat:'dairy'},{name:'Milk',emoji:'🥛',cat:'dairy'},
  {name:'Mozzarella',emoji:'🧀',cat:'dairy'},{name:'Oat Milk',emoji:'🥛',cat:'dairy'},
  {name:'Parmesan',emoji:'🧀',cat:'dairy'},{name:'Ricotta',emoji:'🧀',cat:'dairy'},
  {name:'Sour Cream',emoji:'🥛',cat:'dairy'},{name:'Yogurt',emoji:'🥛',cat:'dairy'},
  {name:'Bagel',emoji:'🥯',cat:'breads'},{name:'Baguette',emoji:'🥖',cat:'breads'},
  {name:'Bread',emoji:'🍞',cat:'breads'},{name:'Brown Rice',emoji:'🍚',cat:'breads'},
  {name:'Cereal',emoji:'🥣',cat:'breads'},{name:'Crackers',emoji:'🍘',cat:'breads'},
  {name:'Croissant',emoji:'🥐',cat:'breads'},{name:'Flour',emoji:'🌾',cat:'breads'},
  {name:'Granola',emoji:'🥣',cat:'breads'},{name:'Noodles',emoji:'🍜',cat:'breads'},
  {name:'Oats',emoji:'🥣',cat:'breads'},{name:'Pasta',emoji:'🍝',cat:'breads'},
  {name:'Pita Bread',emoji:'🫓',cat:'breads'},{name:'Quinoa',emoji:'🌾',cat:'breads'},
  {name:'Rice',emoji:'🍚',cat:'breads'},{name:'Sourdough',emoji:'🍞',cat:'breads'},
  {name:'Tortilla',emoji:'🫓',cat:'breads'},{name:'White Rice',emoji:'🍚',cat:'breads'},
  {name:'Frozen Berries',emoji:'🫐',cat:'frozen'},{name:'Frozen Broccoli',emoji:'🥦',cat:'frozen'},
  {name:'Frozen Peas',emoji:'🫛',cat:'frozen'},{name:'Frozen Pizza',emoji:'🍕',cat:'frozen'},
  {name:'Ice',emoji:'🧊',cat:'frozen'},{name:'Ice Cream',emoji:'🍦',cat:'frozen'},{name:'Sorbet',emoji:'🍧',cat:'frozen'},
  {name:'Beer',emoji:'🍺',cat:'beverages'},{name:'Coconut Water',emoji:'🥥',cat:'beverages'},
  {name:'Coffee',emoji:'☕',cat:'beverages'},{name:'Energy Drink',emoji:'🥤',cat:'beverages'},
  {name:'Espresso',emoji:'☕',cat:'beverages'},{name:'Juice',emoji:'🧃',cat:'beverages'},
  {name:'Kombucha',emoji:'🧃',cat:'beverages'},{name:'Lemonade',emoji:'🍋',cat:'beverages'},
  {name:'Matcha',emoji:'🍵',cat:'beverages'},{name:'Milk Tea',emoji:'🧋',cat:'beverages'},
  {name:'Orange Juice',emoji:'🍊',cat:'beverages'},{name:'Sparkling Water',emoji:'💧',cat:'beverages'},
  {name:'Tea',emoji:'🍵',cat:'beverages'},{name:'Water',emoji:'💧',cat:'beverages'},{name:'Wine',emoji:'🍷',cat:'beverages'},
  {name:'BBQ Sauce',emoji:'🍖',cat:'sauces'},{name:'Fish Sauce',emoji:'🫙',cat:'sauces'},
  {name:'Honey',emoji:'🍯',cat:'sauces'},{name:'Hot Sauce',emoji:'🌶️',cat:'sauces'},
  {name:'Hummus',emoji:'🫘',cat:'sauces'},{name:'Ketchup',emoji:'🍅',cat:'sauces'},
  {name:'Maple Syrup',emoji:'🍯',cat:'sauces'},{name:'Mayonnaise',emoji:'🫙',cat:'sauces'},
  {name:'Mustard',emoji:'🌭',cat:'sauces'},{name:'Olive Oil',emoji:'🫒',cat:'sauces'},
  {name:'Pasta Sauce',emoji:'🍅',cat:'sauces'},{name:'Peanut Butter',emoji:'🥜',cat:'sauces'},
  {name:'Pesto',emoji:'🌿',cat:'sauces'},{name:'Salsa',emoji:'🍅',cat:'sauces'},
  {name:'Soy Sauce',emoji:'🫙',cat:'sauces'},{name:'Sriracha',emoji:'🌶️',cat:'sauces'},
  {name:'Tahini',emoji:'🫙',cat:'sauces'},{name:'Vinegar',emoji:'🫙',cat:'sauces'},
  {name:'Almonds',emoji:'🥜',cat:'snacks'},{name:'Candy',emoji:'🍬',cat:'snacks'},
  {name:'Cashews',emoji:'🥜',cat:'snacks'},{name:'Chips',emoji:'🥔',cat:'snacks'},
  {name:'Chocolate',emoji:'🍫',cat:'snacks'},{name:'Dark Chocolate',emoji:'🍫',cat:'snacks'},
  {name:'Dried Mango',emoji:'🥭',cat:'snacks'},{name:'Gummy Bears',emoji:'🐻',cat:'snacks'},
  {name:'Nuts',emoji:'🥜',cat:'snacks'},{name:'Peanuts',emoji:'🥜',cat:'snacks'},
  {name:'Popcorn',emoji:'🍿',cat:'snacks'},{name:'Pretzels',emoji:'🥨',cat:'snacks'},
  {name:'Protein Bar',emoji:'🍫',cat:'snacks'},{name:'Rice Cakes',emoji:'🍘',cat:'snacks'},
  {name:'Trail Mix',emoji:'🥜',cat:'snacks'},{name:'Walnuts',emoji:'🥜',cat:'snacks'},
  {name:'Basil',emoji:'🌿',cat:'herbs'},{name:'Bay Leaves',emoji:'🌿',cat:'herbs'},
  {name:'Black Pepper',emoji:'🫙',cat:'herbs'},{name:'Cardamom',emoji:'🌿',cat:'herbs'},
  {name:'Chili Flakes',emoji:'🌶️',cat:'herbs'},{name:'Chili Powder',emoji:'🌶️',cat:'herbs'},
  {name:'Cinnamon',emoji:'🌿',cat:'herbs'},{name:'Coriander',emoji:'🌿',cat:'herbs'},
  {name:'Cumin',emoji:'🌿',cat:'herbs'},{name:'Dill',emoji:'🌿',cat:'herbs'},
  {name:'Garam Masala',emoji:'🌶️',cat:'herbs'},{name:'Mint',emoji:'🌿',cat:'herbs'},
  {name:'Nutmeg',emoji:'🌿',cat:'herbs'},{name:'Oregano',emoji:'🌿',cat:'herbs'},
  {name:'Paprika',emoji:'🌶️',cat:'herbs'},{name:'Parsley',emoji:'🌿',cat:'herbs'},
  {name:'Rosemary',emoji:'🌿',cat:'herbs'},{name:'Salt',emoji:'🧂',cat:'herbs'},
  {name:'Thyme',emoji:'🌿',cat:'herbs'},{name:'Turmeric',emoji:'🌿',cat:'herbs'},{name:'Vanilla',emoji:'🌿',cat:'herbs'},
  {name:'Conditioner',emoji:'🧴',cat:'household'},{name:'Dish Soap',emoji:'🧼',cat:'household'},
  {name:'Dishwasher Tabs',emoji:'🧼',cat:'household'},{name:'Hand Soap',emoji:'🧼',cat:'household'},
  {name:'Laundry Detergent',emoji:'🧺',cat:'household'},{name:'Paper Towels',emoji:'🧻',cat:'household'},
  {name:'Shampoo',emoji:'🧴',cat:'household'},{name:'Sponge',emoji:'🧽',cat:'household'},
  {name:'Toilet Paper',emoji:'🧻',cat:'household'},{name:'Toothpaste',emoji:'🪥',cat:'household'},
  {name:'Trash Bags',emoji:'🗑️',cat:'household'},
  {name:'Atta',emoji:'🌾',cat:'misc'},{name:'Basmati Rice',emoji:'🍚',cat:'misc'},
  {name:'Besan',emoji:'🌾',cat:'misc'},{name:'Chapati',emoji:'🫓',cat:'misc'},
  {name:'Chickpeas',emoji:'🫘',cat:'misc'},{name:'Chutney',emoji:'🫙',cat:'misc'},
  {name:'Coconut Milk',emoji:'🥥',cat:'misc'},{name:'Curry Leaves',emoji:'🌿',cat:'misc'},
  {name:'Ghee',emoji:'🧈',cat:'misc'},{name:'Idli Batter',emoji:'🫙',cat:'misc'},
  {name:'Lentils',emoji:'🫘',cat:'misc'},{name:'Mustard Seeds',emoji:'🌿',cat:'misc'},
  {name:'Naan',emoji:'🫓',cat:'misc'},{name:'Paneer',emoji:'🧀',cat:'misc'},
  {name:'Tamarind',emoji:'🌿',cat:'misc'},
];

const itemByName={};
ITEM_DB.forEach(i=>{itemByName[i.name.toLowerCase()]=i;});
function lookupItem(raw){const l=raw.toLowerCase().trim();if(itemByName[l])return itemByName[l];for(const[k,v]of Object.entries(itemByName)){if(k.includes(l)||l.includes(k))return v;}return null;}

// ── State ─────────────────────────────────────────────────────────────────
let items=[];
let categories=JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
let collapsedCats=new Set();
let doneDividerCollapsed={};
let currentView='grouped';
let pendingCatItem=null;

function getCat(id){return categories.find(c=>c.id===id);}

function loadState(){
  try{
    const hash=window.location.hash;
    if(hash.startsWith('#share=')){
      try{
        const decoded=JSON.parse(decodeURIComponent(atob(hash.slice(7))));
        if(decoded.items){items=decoded.items;if(decoded.categories)categories=decoded.categories;saveState();window.location.hash='';showToast('Shared list loaded! 🛒');return;}
      }catch(e){}
    }
    const s=localStorage.getItem('cartly_v5');
    if(!s)return;
    const p=JSON.parse(s);
    items=p.items||[];
    categories=p.categories||JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
    collapsedCats=new Set(p.collapsedCats||[]);
    doneDividerCollapsed=p.doneDividerCollapsed||{};
    currentView=p.currentView||'grouped';
  }catch(e){}
}
function saveState(){
  localStorage.setItem('cartly_v5',JSON.stringify({items,categories,collapsedCats:[...collapsedCats],doneDividerCollapsed,currentView}));
}

// ── Item actions ──────────────────────────────────────────────────────────
function addItem(name,catOverride){
  const display=toTitleCase(name.trim());
  if(!display)return false;
  const existing=items.find(i=>i.name.toLowerCase()===display.toLowerCase());
  if(existing){highlightItem(existing.id);showToast(`"${display}" is already on your list`);return false;}
  const match=lookupItem(display);
  const emoji=match?match.emoji:(getCat(catOverride||'misc')?.emoji||'🛒');
  const cat=catOverride||(match?match.cat:'misc');
  items.push({id:Date.now()+Math.random(),name:display,emoji,cat,checked:false,qty:1});
  saveState();render();showToast(`Added ${emoji} ${display}`);
  return true;
}
function deleteItem(id){items=items.filter(i=>i.id!==id);saveState();render();}
function toggleItem(id){const it=items.find(i=>i.id===id);if(it)it.checked=!it.checked;saveState();render();}
function changeQty(id,delta){const it=items.find(i=>i.id===id);if(!it)return;it.qty=Math.max(1,(it.qty||1)+delta);saveState();const el=document.querySelector(`.qty-num[data-id="${id}"]`);if(el)el.textContent=it.qty;}
function uncheckAll(){items.forEach(i=>i.checked=false);saveState();render();showToast('List reset — ready for your next trip 🛒');}
function moveItemToCat(itemId,catId){const it=items.find(i=>i.id===itemId);if(it){it.cat=catId;saveState();render();showToast(`Moved to ${getCat(catId)?.name}`);}}
function clearAllItems(){if(!items.length)return;items=[];saveState();render();showToast('List cleared 🗑');}

function highlightItem(id){
  const it=items.find(i=>i.id===id);if(!it)return;
  if(collapsedCats.has(it.cat))collapsedCats.delete(it.cat);
  if(it.checked)doneDividerCollapsed[it.cat]=false;
  saveState();render();
  requestAnimationFrame(()=>{
    const el=document.querySelector(`[data-item-id="${id}"]`);
    if(el){el.scrollIntoView({behavior:'smooth',block:'center'});el.classList.add('highlight-pulse');setTimeout(()=>el.classList.remove('highlight-pulse'),1400);}
  });
}

// ── Emoji change ──────────────────────────────────────────────────────────
let emojiTargetId = null;

function openEmojiPicker(id) {
  emojiTargetId = id;
  // Use a hidden input with emoji keyboard to capture emoji input
  // Works natively on iOS (emoji keyboard) and desktop (system emoji picker or paste)
  const proxy = document.getElementById('emojiInputProxy');
  proxy.value = '';
  proxy.style.cssText = 'position:fixed;bottom:50%;left:50%;opacity:0;width:40px;height:40px;font-size:24px;border:none;background:transparent;z-index:1000;';
  proxy.focus();
  // Show a brief toast hint
  showToast('Type or paste an emoji for this item');
}

document.getElementById('emojiInputProxy').addEventListener('input', function(e) {
  const val = this.value;
  if (!val || !emojiTargetId) return;
  // Extract first emoji character(s) — grab the first grapheme cluster that is emoji-like
  const emojiMatch = [...val].find(ch => ch.codePointAt(0) > 127);
  if (emojiMatch) {
    const it = items.find(i => i.id === emojiTargetId);
    if (it) {
      it.emoji = emojiMatch;
      saveState();
      // Update just the emoji span without full re-render for smoothness
      const span = document.querySelector(`.item-emoji[data-id="${emojiTargetId}"]`);
      if (span) span.textContent = emojiMatch;
    }
  }
  this.value = '';
  this.style.cssText = 'position:fixed;opacity:0;width:1px;height:1px;pointer-events:none;';
  emojiTargetId = null;
});

document.getElementById('emojiInputProxy').addEventListener('blur', function() {
  this.style.cssText = 'position:fixed;opacity:0;width:1px;height:1px;pointer-events:none;';
});

// ── Category actions ──────────────────────────────────────────────────────
function addCategory(name){const id='cat_'+Date.now();categories.push({id,name:toTitleCase(name),emoji:'📋'});saveState();render();return id;}
function deleteCategory(id){items.forEach(i=>{if(i.cat===id)i.cat='misc';});categories=categories.filter(c=>c.id!==id);saveState();render();showToast('Category removed — items moved to Miscellaneous');}
function toggleCat(id){if(collapsedCats.has(id))collapsedCats.delete(id);else collapsedCats.add(id);saveState();render();}
function toggleDoneDivider(catId){doneDividerCollapsed[catId]=!doneDividerCollapsed[catId];saveState();render();}
function setView(v){currentView=v;saveState();renderStatsBar();render();}

// ── Render stats bar ──────────────────────────────────────────────────────
function renderStatsBar(){
  const active=items.filter(i=>!i.checked);
  const done=items.filter(i=>i.checked);
  document.getElementById('statsBar').innerHTML = `
    ${items.length ? `<div class="stat-pill"><span>${active.length}</span> remaining</div>` : ''}
    ${done.length ? `<div class="stat-pill"><span>${done.length}</span> done</div>` : ''}
    <div class="stats-spacer"></div>
    <div class="view-toggle">
      <button class="view-btn${currentView==='grouped'?' active':''}" id="viewGrouped" onclick="setView('grouped')">⊞ Grouped</button>
      <button class="view-btn${currentView==='flat'?' active':''}" id="viewFlat" onclick="setView('flat')">≡ List</button>
    </div>
    <button class="btn-icon" onclick="openShareModal()" title="Share list">⬆</button>
  `;
}

// ── Main render ───────────────────────────────────────────────────────────
function render(){
  renderStatsBar();
  const container=document.getElementById('listContainer');
  const hasItems=items.length>0;
  const hasCustomCats=categories.some(c=>!DEFAULT_CATEGORIES.find(d=>d.id===c.id));

  if(!hasItems&&!hasCustomCats){
    container.innerHTML=`<div class="empty-state"><div class="empty-icon">🛒</div><p>Your list is empty</p><small>Start typing above to add your first item</small></div>`;
    return;
  }
  currentView==='flat'?renderFlat(container):renderGrouped(container);
  attachSwipe();attachCheckTouch();attachDrag();attachTouchDrag();
}

// ── Grouped ───────────────────────────────────────────────────────────────
function renderGrouped(container){
  const catMap={};
  items.forEach(it=>{(catMap[it.cat]=catMap[it.cat]||[]).push(it);});
  let html='';
  categories.forEach(cat=>{
    const catItems=catMap[cat.id]||[];
    const isDefault=DEFAULT_CATEGORIES.some(d=>d.id===cat.id);
    if(catItems.length===0&&isDefault)return;
    const activeItems=catItems.filter(i=>!i.checked).sort((a,b)=>a.name.localeCompare(b.name));
    const doneItems=catItems.filter(i=>i.checked).sort((a,b)=>a.name.localeCompare(b.name));
    const collapsed=collapsedCats.has(cat.id);
    const doneCol=doneDividerCollapsed[cat.id];
    const isCustom=!DEFAULT_CATEGORIES.some(d=>d.id===cat.id);
    html+=`<div class="cat-section${collapsed?' collapsed':''}" data-cat="${cat.id}"
      ondragover="onCatDragOver(event,'${cat.id}')"
      ondragleave="onCatDragLeave(event,'${cat.id}')"
      ondrop="onCatDrop(event,'${cat.id}')">
      <div class="cat-header">
        <div class="cat-name-wrap" onclick="toggleCat('${cat.id}')">
          <span class="cat-name" onclick="event.stopPropagation();startRename('${cat.id}',this)">${cat.name}</span>
        </div>
        <span class="cat-count">${catItems.length}</span>
        ${isCustom?`<button class="cat-del-btn" onclick="event.stopPropagation();deleteCategory('${cat.id}')">×</button>`:''}
        <span class="cat-chevron" onclick="toggleCat('${cat.id}')">▾</span>
      </div>
      <div class="cat-items">
        ${catItems.length===0?`<div style="padding:14px 16px;font-size:13px;color:var(--text3);text-align:center;">Empty — drag items here or add above</div>`:''}
        ${activeItems.map(it=>renderItemRow(it,false)).join('')}
        ${doneItems.length?`
          <div class="cat-done-divider${doneCol?' done-div-collapsed':''}" onclick="toggleDoneDivider('${cat.id}')">
            <span class="cat-done-label">✓ Done (${doneItems.length})</span>
            <span class="cat-done-chevron">▾</span>
          </div>
          <div class="cat-done-items">
            ${doneItems.map(it=>renderItemRow(it,false)).join('')}
          </div>`:''}
      </div>
    </div>`;
  });
  // + Add Category button at bottom
  html+=`<button class="add-cat-btn" onclick="openAddCatModal()">＋ Add Category</button>`;
  if(items.length>0){html+=`<button class="clear-list-btn" onclick="clearAllItems()">🗑 Clear List</button>`;}
  container.innerHTML=html||`<div class="empty-state"><div class="empty-icon">🛒</div><p>Your list is empty</p><small>Start typing above to add your first item</small></div>`;
}

// ── Flat ──────────────────────────────────────────────────────────────────
function renderFlat(container){
  const active=items.filter(i=>!i.checked).sort((a,b)=>a.name.localeCompare(b.name));
  const done=items.filter(i=>i.checked).sort((a,b)=>a.name.localeCompare(b.name));
  let html='';
  if(active.length){
    html+=`<div class="flat-section">
      <div class="flat-section-header"><span class="flat-section-title">All Items</span><span class="flat-section-count">${active.length}</span></div>
      ${active.map(it=>renderItemRow(it,true)).join('')}
    </div>`;
  }
  if(done.length){
    html+=`<div class="flat-section">
      <div class="flat-section-header"><span class="flat-section-title">✓ Done</span><span class="flat-section-count">${done.length}</span></div>
      ${done.map(it=>renderItemRow(it,true)).join('')}
    </div>`;
  }
  if(items.length>0){html+=`<button class="clear-list-btn" onclick="clearAllItems()">🗑 Clear List</button>`;}
  container.innerHTML=html||`<div class="empty-state"><div class="empty-icon">🛒</div><p>Your list is empty</p><small>Start typing above to add your first item</small></div>`;
}

// ── Item row ──────────────────────────────────────────────────────────────
function renderItemRow(it,showCatPill){
  const qty=it.qty||1;
  const catName=showCatPill?(getCat(it.cat)?.name||'Misc'):'';
  return `<div class="list-item${it.checked?' checked':''}" data-item-id="${it.id}" data-id="${it.id}" draggable="true">
    <div class="item-del-bg" id="delbg_${it.id}">🗑 Delete</div>
    <div class="item-inner" id="inner_${it.id}">
      <div class="drag-handle">⠿</div>
      <div class="item-check" onclick="toggleItem(${it.id})"><span class="check-mark">✓</span></div>
      <span class="item-emoji" data-id="${it.id}" onclick="openEmojiPicker(${it.id})" title="Tap to change emoji">${it.emoji}</span>
      <span class="item-name">${it.name}</span>
      ${showCatPill?`<span class="item-cat-pill">${catName}</span>`:''}
      <div class="qty-control" onclick="event.stopPropagation()">
        <button class="qty-btn qty-minus" onclick="changeQty(${it.id},-1)">−</button>
        <span class="qty-num" data-id="${it.id}">${qty}</span>
        <button class="qty-btn qty-plus" onclick="changeQty(${it.id},1)">+</button>
      </div>
      <button class="item-del-btn" onclick="deleteItem(${it.id})">×</button>
    </div>
  </div>`;
}

// ── Inline rename ─────────────────────────────────────────────────────────
function startRename(catId,el){const cat=getCat(catId);if(!cat)return;const inp=document.createElement('input');inp.className='cat-name-input';inp.value=cat.name;inp.onclick=e=>e.stopPropagation();inp.onkeydown=e=>{if(e.key==='Enter')finishRename(catId,inp.value);if(e.key==='Escape')render();e.stopPropagation();};inp.onblur=()=>finishRename(catId,inp.value);el.parentNode.replaceChild(inp,el);inp.focus();inp.select();}
function finishRename(catId,val){if(val.trim()){const c=getCat(catId);if(c){c.name=toTitleCase(val.trim());saveState();}}render();}

// ── Touch drag (mobile category move) ────────────────────────────────────
function attachTouchDrag(){
  if(!window.matchMedia('(pointer:coarse)').matches)return;
  let ghostEl=null,activeDragId=null,lastTouch=null;
  document.querySelectorAll('.drag-handle').forEach(handle=>{
    const itemEl=handle.closest('.list-item');
    if(!itemEl)return;
    const id=Number(itemEl.dataset.id);
    handle.addEventListener('touchstart',e=>{
      e.stopPropagation(); // prevent swipe-to-delete from setting sw=true
      activeDragId=id;lastTouch=e.touches[0];
      const it=items.find(i=>i.id===id);
      ghostEl=document.createElement('div');ghostEl.className='drag-ghost';
      ghostEl.innerHTML=`<span>${it?.emoji||'🛒'}</span><span>${it?.name||''}</span>`;
      ghostEl.style.cssText=`top:${lastTouch.clientY-20}px;left:${lastTouch.clientX-20}px;`;
      document.body.appendChild(ghostEl);
      itemEl.classList.add('dragging');
    },{passive:true});
    handle.addEventListener('touchmove',e=>{
      if(!activeDragId)return;
      e.preventDefault(); // suppress page scroll; works because touch-action:none on handle
      lastTouch=e.touches[0];
      ghostEl.style.top=(lastTouch.clientY-20)+'px';
      ghostEl.style.left=(lastTouch.clientX-20)+'px';
      ghostEl.style.display='none';
      const under=document.elementFromPoint(lastTouch.clientX,lastTouch.clientY);
      ghostEl.style.display='';
      const catSec=under?.closest('.cat-section');
      document.querySelectorAll('.cat-section').forEach(s=>s.classList.remove('drag-over'));
      if(catSec)catSec.classList.add('drag-over');
    },{passive:false});
    handle.addEventListener('touchend',()=>{
      if(!activeDragId)return;
      if(lastTouch){
        ghostEl.style.display='none';
        const under=document.elementFromPoint(lastTouch.clientX,lastTouch.clientY);
        ghostEl.style.display='';
        const catSec=under?.closest('.cat-section');
        if(catSec){const catId=catSec.dataset.cat;const it=items.find(i=>i.id===activeDragId);if(it&&it.cat!==catId)moveItemToCat(activeDragId,catId);}
      }
      ghostEl.remove();ghostEl=null;
      document.querySelectorAll('.cat-section').forEach(s=>s.classList.remove('drag-over'));
      document.querySelectorAll('.list-item.dragging').forEach(el=>el.classList.remove('dragging'));
      activeDragId=null;lastTouch=null;
    });
  });
}

// ── Drag & drop ───────────────────────────────────────────────────────────
let dragId=null,dragGhost=null;
function attachDrag(){
  document.querySelectorAll('.list-item[draggable]').forEach(el=>{
    el.addEventListener('dragstart',e=>{
      dragId=Number(el.dataset.id);el.classList.add('dragging');
      const it=items.find(i=>i.id===dragId);
      dragGhost=document.createElement('div');dragGhost.className='drag-ghost';
      dragGhost.innerHTML=`<span>${it?.emoji||'🛒'}</span><span>${it?.name||''}</span>`;
      dragGhost.style.cssText='top:-200px;left:-200px;';document.body.appendChild(dragGhost);
      e.dataTransfer.setDragImage(dragGhost,0,0);e.dataTransfer.effectAllowed='move';
    });
    el.addEventListener('dragend',()=>{
      el.classList.remove('dragging');
      if(dragGhost){dragGhost.remove();dragGhost=null;}
      document.querySelectorAll('.cat-section').forEach(s=>s.classList.remove('drag-over'));
    });
  });
}
function onCatDragOver(e,catId){e.preventDefault();e.dataTransfer.dropEffect='move';document.querySelectorAll('.cat-section').forEach(s=>s.classList.remove('drag-over'));e.currentTarget.classList.add('drag-over');}
function onCatDragLeave(e){if(!e.currentTarget.contains(e.relatedTarget))e.currentTarget.classList.remove('drag-over');}
function onCatDrop(e,catId){e.preventDefault();e.currentTarget.classList.remove('drag-over');if(dragId){const it=items.find(i=>i.id===dragId);if(it&&it.cat!==catId)moveItemToCat(dragId,catId);dragId=null;}}

// ── Swipe to delete ───────────────────────────────────────────────────────
function attachSwipe(){
  if(!window.matchMedia('(pointer:coarse)').matches)return;
  document.querySelectorAll('.list-item').forEach(el=>{
    let sx=0,cx=0,sw=false;const id=Number(el.dataset.id);
    const inner=document.getElementById('inner_'+id);const delbg=document.getElementById('delbg_'+id);
    if(!inner||!delbg)return;
    el.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;sw=true;},{passive:true});
    el.addEventListener('touchmove',e=>{if(!sw)return;cx=e.touches[0].clientX-sx;if(cx<0){inner.style.transform=`translateX(${Math.max(cx,-80)}px)`;delbg.classList.toggle('visible',cx<-30);}},{passive:true});
    el.addEventListener('touchend',()=>{if(cx<-60)deleteItem(id);else{inner.style.transform='';delbg.classList.remove('visible');}sw=false;cx=0;});
  });
}

// ── Touch: immediate checkbox response ───────────────────────────────────
function attachCheckTouch(){
  if(!window.matchMedia('(pointer:coarse)').matches)return;
  document.querySelectorAll('.item-check').forEach(el=>{
    const id=Number(el.closest('.list-item')?.dataset.id);
    if(!id)return;
    el.addEventListener('touchend',e=>{
      e.preventDefault();   // cancel synthetic click — prevents double-toggle
      e.stopPropagation();  // prevent swipe touchend from also running
      toggleItem(id);
    },{passive:false});
  });
}

// ── Input & suggestions ───────────────────────────────────────────────────
const inputEl=document.getElementById('addInput');
const sugsEl=document.getElementById('suggestions');
const alreadyBadge=document.getElementById('alreadyBadge');
function addFromInput(){const val=inputEl.value.trim();if(!val)return;if(addItem(val)){inputEl.value='';hideSugs();updateInputState('');}}
inputEl.addEventListener('keydown',e=>{if(e.key==='Enter')addFromInput();if(e.key==='Escape'){hideSugs();inputEl.blur();}});
inputEl.addEventListener('input',()=>{const q=inputEl.value.trim();updateInputState(q);renderSugs(q);});
function updateInputState(q){if(!q){inputEl.classList.remove('already-exists');alreadyBadge.classList.remove('show');return;}const exists=items.some(i=>i.name.toLowerCase()===toTitleCase(q).toLowerCase());inputEl.classList.toggle('already-exists',exists);alreadyBadge.classList.toggle('show',exists);}
function renderSugs(q){if(!q){hideSugs();return;}const lower=q.toLowerCase();const onList=new Set(items.map(i=>i.name.toLowerCase()));const catNames={};categories.forEach(c=>catNames[c.id]=c.name);const matches=ITEM_DB.filter(i=>i.name.toLowerCase().includes(lower)).slice(0,8);if(!matches.length){hideSugs();return;}sugsEl.innerHTML=matches.map(m=>{const onL=onList.has(m.name.toLowerCase());return`<div class="sug-item" onclick="selectSug('${m.name}')"><span class="sug-emoji">${m.emoji}</span><span>${m.name}</span>${onL?`<span class="sug-on-list">✓ On list</span>`:`<span class="sug-cat">${catNames[m.cat]||''}</span>`}</div>`;}).join('');sugsEl.classList.add('open');}
function selectSug(name){if(addItem(name)){inputEl.value='';hideSugs();updateInputState('');}else{hideSugs();inputEl.value='';updateInputState('');}}
function hideSugs(){sugsEl.classList.remove('open');sugsEl.innerHTML='';}
document.addEventListener('click',e=>{if(!e.target.closest('.add-input-wrap'))hideSugs();});

// ── Category picker ───────────────────────────────────────────────────────
function openCatPicker(itemId){pendingCatItem=itemId;const it=items.find(i=>i.id===itemId);document.getElementById('catPickerGrid').innerHTML=categories.map(c=>`<div class="cat-opt${it?.cat===c.id?' selected':''}" onclick="pickCat('${c.id}')"><span>${c.emoji}</span><span>${c.name}</span></div>`).join('');document.getElementById('catPickerOverlay').classList.add('open');}
function pickCat(catId){if(pendingCatItem)moveItemToCat(pendingCatItem,catId);closeCatPicker();}
function closeCatPicker(e){if(!e||e.target===document.getElementById('catPickerOverlay')){document.getElementById('catPickerOverlay').classList.remove('open');pendingCatItem=null;}}

// ── Add category modal ────────────────────────────────────────────────────
function openAddCatModal(){document.getElementById('newCatName').value='';document.getElementById('addCatOverlay').classList.add('open');setTimeout(()=>document.getElementById('newCatName').focus(),150);}
function confirmAddCategory(){
  const name=document.getElementById('newCatName').value.trim();
  if(!name){document.getElementById('newCatName').focus();return;}
  const tc=toTitleCase(name);
  const existing=categories.find(c=>c.name.toLowerCase()===tc.toLowerCase());
  if(existing){
    closeAddCatModal();showToast(`"${tc}" already exists`);
    requestAnimationFrame(()=>{const el=document.querySelector(`[data-cat="${existing.id}"]`);if(el){el.scrollIntoView({behavior:'smooth',block:'center'});el.classList.add('cat-highlight-pulse');setTimeout(()=>el.classList.remove('cat-highlight-pulse'),1600);}});
    return;
  }
  addCategory(tc);closeAddCatModal();showToast(`"${tc}" category added`);
}
function closeAddCatModal(e){if(!e||e.target===document.getElementById('addCatOverlay'))document.getElementById('addCatOverlay').classList.remove('open');}
document.getElementById('newCatName').addEventListener('keydown',e=>{if(e.key==='Enter')confirmAddCategory();});

// ── Share ─────────────────────────────────────────────────────────────────
function buildShareUrl(){const payload={items,categories};const encoded=btoa(encodeURIComponent(JSON.stringify(payload)));return`${window.location.href.split('#')[0]}#share=${encoded}`;}
function buildShareText(){
  const active=items.filter(i=>!i.checked).sort((a,b)=>a.name.localeCompare(b.name));
  const done=items.filter(i=>i.checked).sort((a,b)=>a.name.localeCompare(b.name));
  let txt='🛒 Cartly Grocery List\n'+'─'.repeat(28)+'\n\n';
  const catMap={};active.forEach(it=>{(catMap[it.cat]=catMap[it.cat]||[]).push(it);});
  categories.forEach(cat=>{const its=catMap[cat.id];if(!its||!its.length)return;txt+=`${cat.name.toUpperCase()}\n`;its.forEach(it=>{txt+=`  ${it.emoji} ${it.name}${it.qty>1?` ×${it.qty}`:''}\n`;});txt+='\n';});
  if(done.length){txt+='DONE ✓\n';done.forEach(it=>{txt+=`  ✓ ${it.name}\n`;});}
  return txt.trim();
}
function openShareModal(){
  const url=buildShareUrl();
  document.getElementById('shareUrlBox').textContent=url;
  document.getElementById('shareTextBox').textContent=buildShareText();
  document.getElementById('shareLinkBtn').textContent='Copy Link';document.getElementById('shareLinkBtn').classList.remove('copied');
  document.getElementById('shareTextBtn').textContent='Copy Text';document.getElementById('shareTextBtn').classList.remove('copied');
  document.getElementById('shareOverlay').classList.add('open');
}
function closeShareModal(e){if(!e||e.target===document.getElementById('shareOverlay'))document.getElementById('shareOverlay').classList.remove('open');}
function copyShareLink(){const url=buildShareUrl();navigator.clipboard.writeText(url).then(()=>{const btn=document.getElementById('shareLinkBtn');btn.textContent='✓ Copied!';btn.classList.add('copied');showToast('Link copied to clipboard');setTimeout(()=>{btn.textContent='Copy Link';btn.classList.remove('copied');},2500);}).catch(()=>{const ta=document.createElement('textarea');ta.value=url;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);showToast('Link copied!');});}
function copyShareText(){const txt=buildShareText();navigator.clipboard.writeText(txt).then(()=>{const btn=document.getElementById('shareTextBtn');btn.textContent='✓ Copied!';btn.classList.add('copied');showToast('List text copied');setTimeout(()=>{btn.textContent='Copy Text';btn.classList.remove('copied');},2500);}).catch(()=>{const ta=document.createElement('textarea');ta.value=txt;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);showToast('Copied!');});}

// ── Toast ─────────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2400);}

// ── Init ──────────────────────────────────────────────────────────────────
loadState();
render();
