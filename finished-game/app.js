const furniture = [
  {id:'sofa',name:'Cozy sofa',type:'sofa',color:'#e98983',cat:'seats'},
  {id:'mint-sofa',name:'Mint sofa',type:'sofa',color:'#87c9b4',cat:'seats'},
  {id:'sofa-blue',name:'Moon sofa',type:'sofa-blue',color:'#78a9d0',cat:'seats'},
  {id:'sofa-floral',name:'Floral loveseat',type:'sofa-floral',color:'#e98983',cat:'seats'},
  {id:'chair-shell',name:'Shell chair',type:'chair-shell',color:'#c3a4df',cat:'seats'},
  {id:'chair-bean',name:'Flower beanbag',type:'chair-bean',color:'#efbd5f',cat:'seats'},
  {id:'chair-wing',name:'Reading chair',type:'chair-wing',color:'#ef9fa5',cat:'seats'},
  {id:'chair-wood',name:'Heart chair',type:'chair-wood',color:'#e9aa55',cat:'seats'},
  {id:'chair-swivel',name:'Star desk chair',type:'chair-swivel',color:'#6dbcf0',cat:'seats'},
  {id:'bed',name:'Cloud bed',type:'bed',color:'#c3a4df',cat:'beds'},
  {id:'sun-bed',name:'Sunny bed',type:'bed',color:'#efbd5f',cat:'beds'},
  {id:'bed-canopy',name:'Canopy bed',type:'bed-canopy',color:'#e98983',cat:'beds'},
  {id:'bed-modern',name:'Modern bed',type:'bed-modern',color:'#78a9d0',cat:'beds'},
  {id:'table',name:'Round table',type:'table',color:'#d78f69',cat:'tables'},
  {id:'table-desk',name:'Writing desk',type:'table-desk',color:'#87c9b4',cat:'tables'},
  {id:'table-coffee',name:'Cloud table',type:'table-coffee',color:'#e98983',cat:'tables'},
  {id:'lamp',name:'Happy lamp',type:'lamp',color:'#f1c85e',cat:'decor'},
  {id:'plant',name:'Leafy pal',type:'plant',color:'#70b78b',cat:'decor'},
  {id:'rug',name:'Soft rug',type:'rug',color:'#d69abd',cat:'decor'},
  {id:'rug-small',name:'Small round rug',type:'rug-small',color:'#e98983',cat:'decor'},
  {id:'rug-medium',name:'Medium oval rug',type:'rug-medium',color:'#c3a4df',cat:'decor'},
  {id:'rug-large',name:'Large area rug',type:'rug-large',color:'#78a9d0',cat:'decor'},
  {id:'poster',name:'Heart print',type:'poster',color:'#ed918a',cat:'decor'},
  {id:'books-stack',name:'Book stack',type:'books-stack',color:'#efbd5f',cat:'decor'},
  {id:'books-basket',name:'Book basket',type:'books-basket',color:'#d78f69',cat:'decor'},
  {id:'toy-bear',name:'Teddy bear',type:'toy-bear',color:'#e98983',cat:'decor'},
  {id:'toy-blocks',name:'Block wagon',type:'toy-blocks',color:'#78a9d0',cat:'decor'},
  {id:'kucci',name:'Kucci',type:'kucci',color:'#8bc7b1',cat:'friends'},
  {id:'tucci',name:'Tucci',type:'tucci',color:'#b69bd8',cat:'friends'},
  {id:'cat',name:'Mochi cat',type:'cat',color:'#f0ba82',cat:'pets'},
  {id:'dog',name:'Bori puppy',type:'dog',color:'#e4c48f',cat:'pets'},
  {id:'rabbit',name:'Bunny',type:'rabbit',color:'#eee5df',cat:'pets'},
  {id:'turtle',name:'Turtle',type:'turtle',color:'#8fb18a',cat:'pets'}
  ,{id:'curtain-sheer',name:'Sheer curtains',type:'curtain-sheer',color:'#f2dfcf',cat:'windows'}
  ,{id:'curtain-scallop',name:'Star curtains',type:'curtain-scallop',color:'#c3a4df',cat:'windows'}
  ,{id:'blind-roman',name:'Roman blind',type:'blind-roman',color:'#87c9b4',cat:'windows'}
];
const categories=[['all','✦'],['seats','🛋️'],['beds','🛏️'],['tables','🪑'],['decor','🌿'],['windows','🪟'],['friends','☺'],['pets','🐾']];
const colors=['#e98983','#87c9b4','#c3a4df','#efbd5f','#78a9d0','#d69abd'];
const makerTypes=['sofa','bed','table','lamp','rug','poster'];
const room=document.querySelector('#room'), placedLayer=document.querySelector('#placedItems');
const defaultState=()=>({items:[],scene:'city',time:'day',photo:null,roomName:'My Happy Room',wallColor:'#fff1e6',wallPattern:'none'});
let state=defaultState();
let history=[],selected=null,activeCat='all',maker={type:'sofa',color:colors[0]};
const artTypes=new Set(['sofa','bed','table','lamp','plant','rug','poster','cat','dog','rabbit','turtle','sofa-blue','sofa-floral','bed-canopy','bed-modern','table-desk','table-coffee','chair-shell','chair-bean','chair-wing','chair-wood','chair-swivel','rug-small','rug-medium','rug-large','curtain-sheer','curtain-scallop','blind-roman','books-stack','books-basket','toy-bear','toy-blocks']);
const artBaseColors={sofa:'#e98983','sofa-blue':'#78a9d0','sofa-floral':'#e98983',bed:'#c3a4df','bed-canopy':'#e98983','bed-modern':'#78a9d0',table:'#d78f69','table-desk':'#87c9b4','table-coffee':'#e98983',lamp:'#f1c85e',plant:'#70b78b',rug:'#d69abd','rug-small':'#e98983','rug-medium':'#c3a4df','rug-large':'#78a9d0',poster:'#ed918a','chair-shell':'#c3a4df','chair-bean':'#efbd5f','chair-wing':'#ef9fa5','chair-wood':'#e9aa55','chair-swivel':'#6dbcf0','curtain-sheer':'#f2dfcf','curtain-scallop':'#c3a4df','blind-roman':'#87c9b4','books-stack':'#efbd5f','books-basket':'#d78f69','toy-bear':'#e98983','toy-blocks':'#78a9d0',cat:'#f0ba82',dog:'#e4c48f',rabbit:'#eee5df',turtle:'#8fb18a'};
const profileTypes={sofa:new Set(['sofa','sofa-blue','sofa-floral']),chair:new Set(['chair-shell','chair-bean','chair-wing','chair-wood','chair-swivel']),bed:new Set(['bed','bed-canopy','bed-modern']),table:new Set(['table','table-desk','table-coffee']),flat:new Set(['rug','rug-small','rug-medium','rug-large'])};
const characterDefaults={eyes:'round',brows:'soft',nose:'dot',ears:'round',mouth:'smile',hair:'original',eyeColor:'#4a2d2a',browColor:'#5b352c',hairColor:'#5b352c',season:'spring',outfit:'play',shoes:'sneakers'};
const safeHex=(value,fallback)=>/^#[0-9a-f]{6}$/i.test(value||'')?value:fallback;
function profileFor(type){for(const [profile,set] of Object.entries(profileTypes))if(set.has(type))return profile;return 'simple'}

function characterLayers(type,look={}){const style={...characterDefaults,...look};return `<span class="character-look eyes-${style.eyes} brows-${style.brows} nose-${style.nose} ears-${style.ears} mouth-${style.mouth} hair-${style.hair} season-${style.season} outfit-${style.outfit} shoes-${style.shoes}" style="--eye:${safeHex(style.eyeColor,characterDefaults.eyeColor)};--brow:${safeHex(style.browColor,characterDefaults.browColor)};--hair:${safeHex(style.hairColor,characterDefaults.hairColor)}"><i class="hair-tint"></i><i class="hair-extra"></i><i class="ear left"></i><i class="ear right"></i><i class="brow left"></i><i class="brow right"></i><i class="eye left"></i><i class="eye right"></i><i class="nose"></i><i class="mouth"></i><i class="outfit-tint"></i><i class="shoe-tint"></i><b class="season-mark"></b></span>`}
function furnitureHTML(type,color,facing='front',look={}){
  const source=facing==='front'?`assets/art/${type}.webp`:`assets/art/directions/${type}-${facing}.webp`;
  const profile=profileFor(type),direction=`dir-${facing} profile-${profile}`;
  if(type==='kucci'||type==='tucci') return `<div class="furniture art character-art ${type} ${direction}" style="--character-mask:url('${source}')"><img src="${source}" alt="" draggable="false">${characterLayers(type,look)}</div>`;
  if(artTypes.has(type)){const tinted=artBaseColors[type]&&color!==artBaseColors[type];return `<div class="furniture art ${type} ${direction} ${tinted?'tinted':''}" style="--tint-color:${safeHex(color,artBaseColors[type]||'#e98983')};--mask-image:url('${source}')"><img src="${source}" alt="" draggable="false"><span class="art-tint"></span></div>`}
  return `<div class="furniture ${type}" style="--item-color:${color}"></div>`;
}
function renderCatalog(){
  document.querySelector('#categories').innerHTML=categories.map(([id,icon])=>`<button class="category ${id===activeCat?'active':''}" data-cat="${id}" role="tab" aria-label="${id}" aria-selected="${id===activeCat}">${icon}</button>`).join('');
  const list=activeCat==='all'?furniture:furniture.filter(x=>x.cat===activeCat);
  document.querySelector('#catalogItems').innerHTML=list.map(x=>`<button class="catalog-item" data-add="${x.id}"><div class="catalog-thumb">${furnitureHTML(x.type,x.color)}</div><small>${x.name}</small></button>`).join('');
}
function snapshot(){history.push(JSON.stringify(state));if(history.length>30)history.shift()}
function save(){state.roomName=document.querySelector('#roomName').value;try{localStorage.setItem('kucci-tucci-room',JSON.stringify(state));toast('Room saved ♥')}catch(e){toast('Could not save this room')};}
function snapshotAssetKey(src){const match=String(src).replace(/\\/g,'/').match(/assets\/art\/[^?#]+\.(?:webp|png)/i);return match?match[0]:String(src)}
function loadImage(src){return new Promise((resolve,reject)=>{const img=new Image(),key=snapshotAssetKey(src),embedded=window.KUCCI_SNAPSHOT_ASSETS,safeSrc=embedded&&embedded[key]?embedded[key]:src;img.onload=()=>resolve(img);img.onerror=()=>reject(new Error(`Could not load ${key}`));img.src=safeSrc})}
function drawCover(ctx,img,w,h){const scale=Math.max(w/img.width,h/img.height),dw=img.width*scale,dh=img.height*scale;ctx.drawImage(img,(w-dw)/2,(h-dh)/2,dw,dh)}
async function drawWallFinish(ctx,w,h){if(state.photo)return;const panels=[[0,0,.285,.66],[.715,0,.285,.66],[.285,0,.43,.105],[.285,.525,.43,.135]];ctx.save();ctx.globalAlpha=.26;ctx.fillStyle=safeHex(state.wallColor,'#fff1e6');panels.forEach(([x,y,pw,ph])=>ctx.fillRect(x*w,y*h,pw*w,ph*h));if(state.wallPattern&&state.wallPattern!=='none'){const image=await loadImage(`assets/art/walls/pattern-${state.wallPattern}.png`),pattern=ctx.createPattern(image,'repeat');if(pattern){ctx.globalAlpha=.36;ctx.fillStyle=pattern;panels.forEach(([x,y,pw,ph])=>ctx.fillRect(x*w,y*h,pw*w,ph*h))}}ctx.restore()}
function drawCharacterSnapshot(ctx,item,w,h){const look={...characterDefaults,...item.look};ctx.save();ctx.globalCompositeOperation='source-atop';ctx.globalAlpha=.55;ctx.fillStyle=safeHex(look.hairColor,characterDefaults.hairColor);ctx.fillRect(0,0,w,h*.29);const seasonColors={spring:'#87c9b4',summer:'#f2c75d',fall:'#d78657',winter:'#83b9dc'},shoeColors={spring:'#ef9ba0',summer:'#78a9d0',fall:'#865c47',winter:'#b89bdd'};ctx.fillStyle=seasonColors[look.season]||seasonColors.spring;ctx.fillRect(0,h*.24,w,h*.54);ctx.fillStyle=shoeColors[look.season]||shoeColors.spring;ctx.fillRect(0,h*.8,w,h*.2);ctx.restore();ctx.save();const eyeY=h*(item.type==='tucci'?.17:.15);ctx.fillStyle=safeHex(look.eyeColor,characterDefaults.eyeColor);for(const x of [.43,.62]){ctx.beginPath();ctx.ellipse(w*x,eyeY,w*.034,h*.018,0,0,Math.PI*2);ctx.fill()}ctx.strokeStyle=safeHex(look.browColor,characterDefaults.browColor);ctx.lineWidth=Math.max(1,w*.012);for(const x of [.43,.62]){ctx.beginPath();ctx.arc(w*x,eyeY-h*.035,w*.045,Math.PI,Math.PI*2);ctx.stroke()}ctx.strokeStyle='#b95659';ctx.lineWidth=Math.max(1,w*.012);ctx.beginPath();ctx.arc(w*.525,h*(item.type==='tucci'?.215:.195),w*.055,0,Math.PI);ctx.stroke();ctx.restore()}
let snapshotInProgress=false;
async function exportRoomImage(){
  if(snapshotInProgress)return toast('Your snapshot is already being prepared');snapshotInProgress=true;
  const snapshotButtons=[document.querySelector('#exportBtn'),document.querySelector('#snapshotBtn')];snapshotButtons.forEach(button=>button.disabled=true);
  playFx('camera');selected=null;renderPlaced();showSelection();toast('Preparing your snapshot…');
  try{
    const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');canvas.width=1680;canvas.height=945;
    const suffix=state.time==='night'?'-night':'';const bgSrc=state.photo||`assets/art/room-${state.scene||'city'}${suffix}.webp`;drawCover(ctx,await loadImage(bgSrc),canvas.width,canvas.height);await drawWallFinish(ctx,canvas.width,canvas.height);
    const roomRect=room.getBoundingClientRect(),scaleX=canvas.width/roomRect.width,scaleY=canvas.height/roomRect.height;
    for(const item of [...state.items].sort((a,b)=>a.z-b.z)){
      const el=placedLayer.querySelector(`[data-uid="${item.uid}"]`),sprite=el?.querySelector('img');if(!el||!sprite)continue;
      const img=await loadImage(sprite.src),boxW=el.offsetWidth*scaleX*(item.scale||1),boxH=el.offsetHeight*scaleY*(item.scale||1),fit=Math.min(boxW/img.width,boxH/img.height),w=img.width*fit,h=img.height*fit;
      const objectCanvas=document.createElement('canvas'),objectCtx=objectCanvas.getContext('2d');objectCanvas.width=Math.max(1,Math.ceil(w));objectCanvas.height=Math.max(1,Math.ceil(h));objectCtx.drawImage(img,0,0,objectCanvas.width,objectCanvas.height);if(artBaseColors[item.type]&&item.color!==artBaseColors[item.type]){objectCtx.globalCompositeOperation='source-atop';objectCtx.globalAlpha=.52;objectCtx.fillStyle=safeHex(item.color,artBaseColors[item.type]);objectCtx.fillRect(0,0,objectCanvas.width,objectCanvas.height);objectCtx.globalCompositeOperation='source-over';objectCtx.globalAlpha=1}if(item.type==='kucci'||item.type==='tucci')drawCharacterSnapshot(objectCtx,item,objectCanvas.width,objectCanvas.height);ctx.save();ctx.translate(item.x/100*canvas.width,item.y/100*canvas.height);ctx.rotate((item.rotation||0)*Math.PI/180);try{ctx.filter=getComputedStyle(sprite).filter}catch(error){}ctx.drawImage(objectCanvas,-w/2,-h/2,w,h);ctx.restore();
    }
    const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
    if(!blob)throw new Error('PNG creation failed');
    const link=document.createElement('a'),name=(state.roomName||'kucci-tucci-room').replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,'').toLowerCase();
    link.href=URL.createObjectURL(blob);link.download=(name||'kucci-tucci-room')+'.png';link.hidden=true;document.body.appendChild(link);link.click();link.remove();
    setTimeout(()=>URL.revokeObjectURL(link.href),4000);toast('Snapshot saved as a PNG!');
  }catch(error){console.error('Snapshot export failed:',error);toast('Could not create the snapshot')}
  finally{snapshotInProgress=false;snapshotButtons.forEach(button=>button.disabled=false)}
}
function load(){try{const x=JSON.parse(localStorage.getItem('kucci-tucci-room'));if(x&&Array.isArray(x.items))state={...state,...x,scene:x.scene||'city',time:x.time||'day'}}catch(e){}document.querySelector('#roomName').value=state.roomName||'My Happy Room';applyRoom();}
function applyRoom(){room.className=`room scene-${state.scene||'city'} time-${state.time||'day'}`;const bg=document.querySelector('#roomBg');if(state.photo){bg.style.backgroundImage=`url(${state.photo})`;bg.classList.add('photo-mode')}else{bg.style.backgroundImage='';bg.classList.remove('photo-mode')}const finish=document.querySelector('#wallFinish');finish.style.setProperty('--wall-color',safeHex(state.wallColor,'#fff1e6'));finish.style.setProperty('--wall-pattern',state.wallPattern&&state.wallPattern!=='none'?`url('assets/art/walls/pattern-${state.wallPattern}.png')`:'none');finish.hidden=Boolean(state.photo);document.querySelectorAll('.scene-option').forEach(el=>el.classList.toggle('active',el.dataset.scene===state.scene));const timeBtn=document.querySelector('#timeBtn');timeBtn.innerHTML=state.time==='day'?'🌙 <span>Night</span>':'☀️ <span>Day</span>';timeBtn.setAttribute('aria-label',state.time==='day'?'Switch to night':'Switch to day');renderPlaced();}
function addItem(base,x=50,y=62){snapshot();const item={...base,uid:Date.now()+'-'+Math.random().toString(16).slice(2),x,y,rotation:0,facing:'front',z:state.items.length+1,scale:1};state.items.push(item);selected=item.uid;controlManual=false;renderPlaced();showSelection();playFx('create');toast(`${item.name} added`)}
function renderPlaced(){placedLayer.innerHTML=state.items.map(item=>`<div class="placed type-${item.type} facing-${item.facing||'front'} profile-${profileFor(item.type)} ${artTypes.has(item.type)||item.type==='kucci'||item.type==='tucci'?'illustrated':''} ${item.uid===selected?'selected':''}" data-uid="${item.uid}" style="left:${item.x}%;top:${item.y}%;z-index:${item.z};transform:translate(-50%,-50%) rotate(${item.rotation||0}deg) scale(${item.scale||1})" aria-label="${item.name}" tabindex="0">${furnitureHTML(item.type,item.color,item.facing||'front',item.look)}</div>`).join('');document.querySelector('#dropHint').classList.toggle('hide',state.items.length>0);}
function getSelected(){return state.items.find(x=>x.uid===selected)}
function showSelection(){const item=getSelected(),bar=document.querySelector('#selectionBar');bar.hidden=!item;if(item){document.querySelector('#selectedName').textContent=item.name;positionSelectionBar()}}
function select(uid){if(uid!==selected)controlManual=false;selected=uid;placedLayer.querySelectorAll('.placed').forEach(el=>el.classList.toggle('selected',el.dataset.uid===uid));showSelection()}
function clearSelection(){if(!selected)return;selected=null;controlManual=false;placedLayer.querySelectorAll('.placed').forEach(el=>el.classList.remove('selected'));showSelection()}
function modify(action){const item=getSelected();if(!item)return;if(action==='customize'){openCustomizer(item);return}snapshot();if(action==='delete'){playFx('trash');state.items=state.items.filter(x=>x.uid!==selected);selected=null}else if(action==='duplicate'){playFx('copy');addItem({...item,uid:undefined},Math.min(92,item.x+5),Math.min(91,item.y+5));return}else if(action==='rotate'){playFx('rotate');item.rotation=(item.rotation+15)%360}else if(action==='rotate-left'){playFx('rotate');item.rotation=(item.rotation-15+360)%360}else if(action==='smaller'){playFx('resize-down');item.scale=Math.max(.35,Math.round(((item.scale||1)-.1)*10)/10)}else if(action==='larger'){playFx('resize-up');item.scale=Math.min(2.5,Math.round(((item.scale||1)+.1)*10)/10)}else if(action==='face-west'){playFx('direction');item.facing='west'}else if(action==='face-east'){playFx('direction');item.facing='east'}else if(action==='face-forward'){playFx('direction');item.facing='front'}else if(action==='front'){playFx('layer');item.z=Math.max(0,...state.items.map(x=>x.z))+1}else if(action==='back'){playFx('layer');item.z=Math.min(...state.items.map(x=>x.z))-1}renderPlaced();showSelection();}
function openModal(id){document.querySelector('#'+id).classList.add('open')}
function closeModal(id){document.querySelector('#'+id).classList.remove('open')}
let toastTimer;function toast(msg){const el=document.querySelector('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),1800)}
const selectionBar=document.querySelector('#selectionBar');let controlManual=false,controlDrag=null;
function positionSelectionBar(){if(controlManual||!selected||selectionBar.hidden)return;requestAnimationFrame(()=>{const target=placedLayer.querySelector(`[data-uid="${selected}"]`);if(!target||selectionBar.hidden)return;const rect=target.getBoundingClientRect(),barRect=selectionBar.getBoundingClientRect(),margin=8;let left=rect.left+rect.width/2-barRect.width/2,top=rect.bottom+9;left=Math.max(margin,Math.min(window.innerWidth-barRect.width-margin,left));if(top+barRect.height>window.innerHeight-margin)top=Math.max(margin,rect.top-barRect.height-9);selectionBar.style.left=left+'px';selectionBar.style.top=top+'px'})}
document.querySelector('#selectedName').addEventListener('pointerdown',e=>{e.preventDefault();e.currentTarget.setPointerCapture(e.pointerId);const rect=selectionBar.getBoundingClientRect();controlManual=true;controlDrag={id:e.pointerId,dx:e.clientX-rect.left,dy:e.clientY-rect.top}});
document.querySelector('#selectedName').addEventListener('pointermove',e=>{if(!controlDrag||controlDrag.id!==e.pointerId)return;const rect=selectionBar.getBoundingClientRect(),left=Math.max(6,Math.min(window.innerWidth-rect.width-6,e.clientX-controlDrag.dx)),top=Math.max(6,Math.min(window.innerHeight-rect.height-6,e.clientY-controlDrag.dy));selectionBar.style.left=left+'px';selectionBar.style.top=top+'px'});
function finishControlDrag(e){if(controlDrag&&controlDrag.id===e.pointerId)controlDrag=null}
document.querySelector('#selectedName').addEventListener('pointerup',finishControlDrag);document.querySelector('#selectedName').addEventListener('pointercancel',finishControlDrag);
window.addEventListener('resize',()=>{controlManual=false;positionSelectionBar()});

document.addEventListener('click',e=>{
  const cat=e.target.closest('[data-cat]');if(cat){activeCat=cat.dataset.cat;renderCatalog();return}
  const add=e.target.closest('[data-add]');if(add){addItem(furniture.find(x=>x.id===add.dataset.add));return}
  const placed=e.target.closest('.placed');if(placed){select(placed.dataset.uid);return}
  const close=e.target.closest('[data-close]');if(close){closeModal(close.dataset.close);return}
  const action=e.target.closest('[data-action]');if(action){modify(action.dataset.action);return}
  const type=e.target.closest('[data-maker-type]');if(type){maker.type=type.dataset.makerType;renderMaker();return}
  const color=e.target.closest('[data-maker-color]');if(color){maker.color=color.dataset.makerColor;renderMaker();return}
  const wallColor=e.target.closest('[data-wall-color]');if(wallColor){snapshot();state.wallColor=wallColor.dataset.wallColor;applyRoom();renderWallStudio();playFx('style');return}
  const wallPattern=e.target.closest('[data-wall-pattern]');if(wallPattern){snapshot();state.wallPattern=wallPattern.dataset.wallPattern;applyRoom();renderWallStudio();playFx('style');return}
  const objectColor=e.target.closest('[data-object-color]');if(objectColor){pendingObjectColor=objectColor.dataset.objectColor;document.querySelectorAll('[data-object-color]').forEach(button=>button.classList.toggle('active',button.dataset.objectColor===pendingObjectColor));playFx('style');return}
  const scene=e.target.closest('[data-scene]');if(scene){chooseScene(scene.dataset.scene);return}
  if(e.target===room){selected=null;renderPlaced();showSelection()}
});
document.addEventListener('pointerdown',e=>{if(!e.target.closest('.placed,#selectionBar,#customizeModal'))clearSelection()},{capture:true});

let drag=null;
room.addEventListener('pointerdown',e=>{const el=e.target.closest('.placed');if(!el)return;e.preventDefault();select(el.dataset.uid);snapshot();el.setPointerCapture(e.pointerId);el.classList.add('dragging');selectionBar.hidden=true;drag={uid:el.dataset.uid,id:e.pointerId,el};playFx('pickup')});
room.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;e.preventDefault();const rect=room.getBoundingClientRect(),item=state.items.find(x=>x.uid===drag.uid);if(!item)return;item.x=Math.max(3,Math.min(97,(e.clientX-rect.left)/rect.width*100));item.y=Math.max(8,Math.min(94,(e.clientY-rect.top)/rect.height*100));drag.el.style.left=item.x+'%';drag.el.style.top=item.y+'%'});
function finishDrag(e){if(!drag||e.pointerId!==drag.id)return;drag.el.classList.remove('dragging');drag=null;renderPlaced();showSelection();playFx('drop')}
room.addEventListener('pointerup',finishDrag);room.addEventListener('pointercancel',finishDrag);
document.addEventListener('keydown',e=>{const item=getSelected();if(!item)return;if(['Delete','Backspace'].includes(e.key)){e.preventDefault();modify('delete')}const moves={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]};if(moves[e.key]){e.preventDefault();snapshot();item.x+=moves[e.key][0];item.y+=moves[e.key][1];renderPlaced()}});

document.querySelector('#playBtn').addEventListener('click',()=>{closeModal('welcome');const audioStart=startAudio();if(audioStart&&typeof audioStart.catch==='function')audioStart.catch(()=>{})});
document.querySelector('#homeBtn').onclick=()=>openModal('welcome');
document.querySelector('#makerBtn').onclick=()=>{renderMaker();openModal('makerModal')};
document.querySelector('#catalogToggle').onclick=()=>{const panel=document.querySelector('.catalog'),collapsed=panel.classList.toggle('catalog-collapsed'),button=document.querySelector('#catalogToggle');button.textContent=collapsed?'›':'‹';button.setAttribute('aria-expanded',String(!collapsed));button.setAttribute('aria-label',collapsed?'Open furniture catalog':'Close furniture catalog');toast(collapsed?'Catalog hidden':'Catalog opened')};
document.querySelector('#photoBtn').onclick=()=>openModal('photoModal');
document.querySelector('#sceneBtn').onclick=()=>{playFx('scene');openModal('sceneModal')};
document.querySelector('#timeBtn').onclick=toggleTime;
document.querySelector('#wallBtn').onclick=()=>{renderWallStudio();openModal('wallModal');playFx('style')};
document.querySelector('#choosePhotoBtn').onclick=()=>document.querySelector('#photoInput').click();
document.querySelector('#photoInput').onchange=e=>{const file=e.target.files[0];if(!file)return;if(!file.type.startsWith('image/'))return toast('Please choose an image');const reader=new FileReader();reader.onload=()=>{const img=new Image();img.onload=()=>{const canvas=document.createElement('canvas'),max=1400,scale=Math.min(1,max/img.width);canvas.width=Math.round(img.width*scale);canvas.height=Math.round(img.height*scale);canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);snapshot();state.photo=canvas.toDataURL('image/jpeg',.82);applyRoom();closeModal('photoModal');toast('Your room is ready to decorate!')};img.src=reader.result};reader.readAsDataURL(file)};
document.querySelector('#removePhotoBtn').onclick=()=>{snapshot();state.photo=null;applyRoom();closeModal('photoModal');toast('Illustrated room restored')};
document.querySelector('#saveBtn').onclick=save;
document.querySelector('#exportBtn').onclick=exportRoomImage;
document.querySelector('#soundBtn').onclick=toggleAudio;
document.querySelector('#undoBtn').onclick=()=>{if(!history.length)return toast('Nothing to undo');state=JSON.parse(history.pop());selected=null;applyRoom();showSelection()};
document.querySelector('#clearBtn').onclick=()=>{playFx('trash');if(!state.items.length)return toast('The room is already clear');snapshot();state.items=[];selected=null;renderPlaced();showSelection();toast('Room cleared')};
document.querySelector('#resetBtn').onclick=()=>{playFx('trash');if(!window.confirm('Reset everything to the original empty City room?'))return;snapshot();state=defaultState();selected=null;document.querySelector('#roomName').value=state.roomName;try{localStorage.removeItem('kucci-tucci-room')}catch(error){}applyRoom();setMusicScene('city');showSelection();toast('Original empty room restored')};
function chooseScene(scene){snapshot();state.scene=scene;state.photo=null;applyRoom();setMusicScene(scene);closeModal('sceneModal');playFx('scene');toast(`${scene[0].toUpperCase()+scene.slice(1)} room selected`)}
function toggleTime(){if(state.photo)return toast('Choose an illustrated scene to change time');snapshot();state.time=state.time==='day'?'night':'day';applyRoom();setMusicScene(state.scene);playFx('time');toast(state.time==='day'?'Good morning!':'Cozy night mode')}
document.querySelector('#snapshotBtn').onclick=exportRoomImage;
document.querySelector('#createBtn').onclick=()=>{const name=document.querySelector('#makerName').value.trim()||'My creation';addItem({id:'custom',name,type:maker.type,color:maker.color,cat:'custom'});closeModal('makerModal')};
function renderMaker(){document.querySelector('#makerPreview').innerHTML=furnitureHTML(maker.type,maker.color);document.querySelector('#makerTypes').innerHTML=makerTypes.map(t=>`<button class="type-option ${t===maker.type?'active':''}" data-maker-type="${t}">${t}</button>`).join('');document.querySelector('#makerColors').innerHTML=colors.map(c=>`<button class="swatch ${c===maker.color?'active':''}" style="background:${c}" data-maker-color="${c}" aria-label="Choose color ${c}"></button>`).join('')}

const wallColorChoices=['#fff1e6','#f6dfdc','#e1f1e8','#e9e1f5','#dfeef5','#f5edcf'];
const wallPatterns=[['none','Plain'],['stars','Stars'],['flowers','Flowers'],['arches','Arches']];
function renderWallStudio(){document.querySelector('#wallColors').innerHTML=wallColorChoices.map(color=>`<button class="swatch ${state.wallColor===color?'active':''}" style="background:${color}" data-wall-color="${color}" aria-label="Wall color ${color}"></button>`).join('');document.querySelector('#wallPatterns').innerHTML=wallPatterns.map(([id,label])=>`<button class="pattern-option ${state.wallPattern===id?'active':''}" data-wall-pattern="${id}">${id==='none'?'<span class="plain-pattern">Plain</span>':`<img src="assets/art/walls/pattern-${id}.png" alt="">`}<strong>${label}</strong></button>`).join('')}
let pendingObjectColor=colors[0];
const characterFields={eyes:'charEyes',brows:'charBrows',nose:'charNose',ears:'charEars',mouth:'charMouth',hair:'charHair',eyeColor:'charEyeColor',browColor:'charBrowColor',hairColor:'charHairColor',season:'charSeason',outfit:'charOutfit',shoes:'charShoes'};
function openCustomizer(item){const character=item.type==='kucci'||item.type==='tucci';document.querySelector('#customizeTitle').textContent=character?`Customize ${item.name}`:`Recolor ${item.name}`;document.querySelector('#objectStylePanel').hidden=character;document.querySelector('#characterStylePanel').hidden=!character;if(character){const look={...characterDefaults,...item.look};Object.entries(characterFields).forEach(([key,id])=>document.querySelector('#'+id).value=look[key])}else{pendingObjectColor=item.color;document.querySelector('#objectColors').innerHTML=colors.map(color=>`<button class="swatch ${color===pendingObjectColor?'active':''}" style="background:${color}" data-object-color="${color}" aria-label="Choose exact color ${color}"></button>`).join('')}openModal('customizeModal');playFx('style')}
document.querySelector('#applyCustomizeBtn').onclick=()=>{const item=getSelected();if(!item)return closeModal('customizeModal');snapshot();if(item.type==='kucci'||item.type==='tucci'){item.look={};Object.entries(characterFields).forEach(([key,id])=>item.look[key]=document.querySelector('#'+id).value);toast(`${item.name}'s new look is ready!`)}else{item.color=pendingObjectColor;toast(`${item.name} recolored`)}renderPlaced();showSelection();closeModal('customizeModal');playFx('create')};

// Resizable desktop catalog. The item list itself always remains scrollable.
const resizeHandle=document.querySelector('#catalogResize');let catalogDrag=null;
resizeHandle.addEventListener('pointerdown',e=>{e.preventDefault();resizeHandle.setPointerCapture(e.pointerId);resizeHandle.classList.add('dragging');catalogDrag=e.pointerId});
resizeHandle.addEventListener('pointermove',e=>{if(catalogDrag!==e.pointerId)return;const width=Math.max(190,Math.min(440,e.clientX));document.documentElement.style.setProperty('--catalog-width',width+'px')});
function finishCatalogResize(e){if(catalogDrag!==e.pointerId)return;catalogDrag=null;resizeHandle.classList.remove('dragging');const width=getComputedStyle(document.documentElement).getPropertyValue('--catalog-width').trim();try{localStorage.setItem('kucci-tucci-catalog-width',width)}catch(error){}}
resizeHandle.addEventListener('pointerup',finishCatalogResize);resizeHandle.addEventListener('pointercancel',finishCatalogResize);
try{const savedWidth=localStorage.getItem('kucci-tucci-catalog-width');if(savedWidth)document.documentElement.style.setProperty('--catalog-width',savedWidth)}catch(error){}

// Four original cute/chill arrangements generated with Web Audio; no music downloads.
const musicScenes={
  city:{tempo:340,type:'triangle',notes:[261.63,329.63,392,493.88,440,392,329.63,293.66],night:[261.63,311.13,392,349.23,293.66,261.63,246.94,293.66],bass:[130.81,146.83],label:'City lo-fi'},
  suburban:{tempo:390,type:'sine',notes:[392,440,523.25,659.25,587.33,523.25,440,392],night:[261.63,329.63,392,329.63,293.66,261.63,220,246.94],bass:[130.81,174.61],label:'Suburban daydream'},
  coastal:{tempo:460,type:'sine',notes:[329.63,392,493.88,587.33,493.88,392,349.23,392],night:[220,261.63,329.63,392,329.63,293.66,261.63,246.94],bass:[110,130.81],label:'Coastal breeze'},
  desert:{tempo:420,type:'triangle',notes:[293.66,349.23,440,523.25,440,392,349.23,329.63],night:[220,261.63,329.63,349.23,293.66,261.63,220,196],bass:[110,146.83],label:'Desert kalimba'}
};
let audioCtx,masterGain,musicGain,audioOn=false,musicTimer=null,musicIndex=0,musicScene='city';
function ensureAudio(){if(audioCtx)return;const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;audioCtx=new AC();masterGain=audioCtx.createGain();masterGain.gain.value=.62;masterGain.connect(audioCtx.destination);musicGain=audioCtx.createGain();musicGain.gain.value=.32;const filter=audioCtx.createBiquadFilter();filter.type='lowpass';filter.frequency.value=1800;musicGain.connect(filter).connect(masterGain)}
function musicTone(freq,duration=.45,volume=.045,type='sine',delay=0){if(!audioCtx||audioCtx.state!=='running')return;const osc=audioCtx.createOscillator(),gain=audioCtx.createGain(),now=audioCtx.currentTime+delay;osc.type=type;osc.frequency.value=freq;gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(volume,now+.025);gain.gain.exponentialRampToValueAtTime(.0001,now+duration);osc.connect(gain).connect(musicGain);osc.start(now);osc.stop(now+duration+.03)}
function musicStep(){if(!audioCtx||audioCtx.state!=='running')return;const song=musicScenes[musicScene],isNight=state.time==='night',notes=isNight?song.night:song.notes,step=musicIndex%notes.length,tempo=isNight?song.tempo*1.55:song.tempo;musicTone(notes[step],tempo/1000*.92,isNight?.045:.075,isNight?'sine':song.type);if(step%4===0)musicTone(song.bass[(musicIndex/4)%2|0],tempo/1000*3.3,isNight?.024:.038,'sine');if(!isNight&&(step===3||step===7))musicTone(notes[step]*2,tempo/1000*1.5,.022,'sine',.09);musicIndex++}
function startSequencer(){clearInterval(musicTimer);musicStep();const song=musicScenes[musicScene],tempo=state.time==='night'?song.tempo*1.55:song.tempo;musicTimer=setInterval(musicStep,tempo)}
function setMusicScene(scene){musicScene=musicScenes[scene]?scene:'city';musicIndex=0;if(audioCtx)startSequencer();const btn=document.querySelector('#soundBtn'),period=state.time==='night'?'calm night':'cheerful day';btn.title=audioOn?`${musicScenes[musicScene].label} — ${period}`:'Sound off'}
async function startAudio(){ensureAudio();if(!audioCtx)return;await audioCtx.resume();audioOn=true;setMusicScene(state.scene||'city');updateSoundButton();playFx('create')}
async function toggleAudio(){ensureAudio();if(!audioCtx)return;if(audioCtx.state==='running'){await audioCtx.suspend();audioOn=false}else{await audioCtx.resume();audioOn=true;setMusicScene(state.scene||'city');playFx('click')}updateSoundButton()}
function updateSoundButton(){const btn=document.querySelector('#soundBtn'),period=state.time==='night'?'calm night':'cheerful day';btn.textContent=audioOn?'♫':'♪×';btn.setAttribute('aria-label',audioOn?'Turn sound off':'Turn sound on');btn.title=audioOn?`${musicScenes[musicScene].label} — ${period}`:'Sound off'}
function tone(freq,start,duration,volume=.1,type='sine',endFreq=freq){if(!audioCtx||audioCtx.state!=='running')return;const osc=audioCtx.createOscillator(),gain=audioCtx.createGain(),now=audioCtx.currentTime+start;osc.type=type;osc.frequency.setValueAtTime(freq,now);osc.frequency.exponentialRampToValueAtTime(Math.max(30,endFreq),now+duration);gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(volume,now+.012);gain.gain.exponentialRampToValueAtTime(.0001,now+duration);osc.connect(gain).connect(masterGain);osc.start(now);osc.stop(now+duration+.02)}
function noiseBurst(start=.0,duration=.08,volume=.05,cutoff=1800){
  if(!audioCtx||!masterGain)return;const frames=Math.max(1,Math.floor(audioCtx.sampleRate*duration)),buffer=audioCtx.createBuffer(1,frames,audioCtx.sampleRate),data=buffer.getChannelData(0);for(let i=0;i<frames;i++)data[i]=(Math.random()*2-1)*(1-i/frames);
  const source=audioCtx.createBufferSource(),filter=audioCtx.createBiquadFilter(),gain=audioCtx.createGain(),now=audioCtx.currentTime+start;filter.type='lowpass';filter.frequency.value=cutoff;gain.gain.setValueAtTime(volume,now);gain.gain.exponentialRampToValueAtTime(.0001,now+duration);source.buffer=buffer;source.connect(filter).connect(gain).connect(masterGain);source.start(now);
}
function playFx(kind){
  if(!audioCtx||audioCtx.state!=='running')return;
  if(kind==='click')tone(510,0,.055,.055,'sine',640);
  if(kind==='pickup')tone(250,0,.13,.07,'triangle',430);
  if(kind==='drop')tone(330,0,.15,.085,'sine',145);
  if(kind==='create'){tone(523,0,.15,.075);tone(659,.09,.17,.065);tone(784,.18,.24,.06)}
  if(kind==='rotate'){tone(390,0,.09,.045,'triangle',560);tone(560,.07,.08,.035,'triangle',450)}
  if(kind==='direction'){tone(330,0,.075,.045,'sine',440);tone(440,.06,.085,.04,'sine',520)}
  if(kind==='resize-down'){tone(520,0,.08,.04,'sine',360);tone(400,.055,.08,.035,'triangle',310)}
  if(kind==='resize-up'){tone(360,0,.08,.04,'sine',520);tone(500,.055,.08,.035,'triangle',650)}
  if(kind==='style'){tone(480,0,.08,.04,'sine',620);tone(720,.06,.12,.035,'sine',840)}
  if(kind==='layer'){tone(280,0,.075,.04,'triangle',350);tone(420,.055,.075,.035,'triangle',490)}
  if(kind==='copy'){tone(520,0,.07,.04,'sine',620);tone(660,.055,.1,.045,'sine',780)}
  if(kind==='scene'){tone(392,0,.12,.04,'triangle',523);tone(659,.09,.16,.035,'sine',784)}
  if(kind==='time'){tone(440,0,.17,.045,'sine',state.time==='night'?262:659);tone(state.time==='night'?330:523,.11,.2,.035,'sine',state.time==='night'?220:784)}
  if(kind==='trash'){noiseBurst(0,.2,.075,950);tone(220,0,.2,.05,'square',82);tone(150,.08,.18,.04,'triangle',55)}
  if(kind==='camera'){noiseBurst(0,.055,.11,4200);tone(1250,0,.035,.06,'square',760);noiseBurst(.075,.09,.075,2500);tone(520,.07,.07,.045,'triangle',270)}
}
document.addEventListener('click',e=>{if(e.target.closest('button')&&!e.target.closest('#playBtn,#soundBtn,#sceneBtn,#timeBtn,#wallBtn,#clearBtn,#resetBtn,#snapshotBtn,#exportBtn,[data-action],[data-scene],[data-wall-color],[data-wall-pattern],[data-object-color]'))playFx('click')},{capture:true});
window.addEventListener('beforeunload',save);renderCatalog();load();if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
