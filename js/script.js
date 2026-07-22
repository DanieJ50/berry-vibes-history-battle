const Q=[
["Paleoindians","Indigenous America","Which term describes the earliest known inhabitants of the Americas, often associated with Ice Age migration and large-game hunting?","Paleoindians belong to the earliest widely recognized period of human settlement in the Americas."],
["Archaic People","Indigenous America","Which people adapted to warmer post-Ice Age climates by using broader food sources and more regional lifestyles?","Archaic communities gathered many foods, hunted smaller animals, and developed regional ways of life."],
["Hohokam/Anasazi","Indigenous America","Which paired term connects desert irrigation canals with pueblos and cliff dwellings in the Southwest?","The Hohokam are known for irrigation; Ancestral Puebloans are known for pueblos and cliff dwellings."],
["Cahokia","Bold-Term Boss","Which large Mississippian city near present-day St. Louis featured huge earthen mounds and wide trade networks?","Cahokia demonstrates the size and complexity of pre-Columbian urban society in North America.",true],
["The Taíno","Indigenous America","Which Caribbean Indigenous people encountered Columbus and suffered catastrophic losses from disease, violence, and forced labor?","The Taíno lived across parts of the Caribbean at the time of Spanish arrival."],
["The Aztecs","Indigenous America","Which tribute empire was centered at Tenochtitlan before its defeat by Cortés, Indigenous allies, and disease?","The Aztec Empire controlled a broad tribute network from Tenochtitlan."],
["Cabeza de Vaca","Spanish Exploration","Which Spanish shipwreck survivor traveled through the Gulf Coast and Southwest and later wrote about the Indigenous peoples he encountered?","Cabeza de Vaca's account described the region and encouraged later exploration."],
["Pueblo Revolt","Resistance","Which 1680 uprising drove Spanish colonists out of New Mexico for about twelve years?","The Pueblo Revolt was one of the most successful Indigenous rebellions against European colonial rule."],
["Indentured Servitude","Labor Systems","Which labor system exchanged several years of work for passage, food, and shelter?","Indentured servitude was temporary contract labor, especially important in the early Chesapeake."],
["Bacon's Rebellion","Colonial Conflict","Which 1676 Virginia uprising exposed class tensions, frontier conflict, and anger toward Governor William Berkeley?","Bacon's Rebellion involved land, Native policy, political exclusion, and class resentment."],
["Anne Hutchinson","Bold-Term Boss","Which Puritan dissenter challenged Massachusetts religious authorities and was banished?","Anne Hutchinson challenged Puritan leadership and expectations placed on women.",true],
["Pequot War","Native–Colonial Wars","Which 1636–1638 conflict included the English-led attack at Mystic and devastated Pequot political power?","The Pequot War strengthened English expansion in southern New England."],
["Beaver Wars","Bold-Term Boss","Which conflicts involved the Iroquois Confederacy, neighboring Native peoples, the fur trade, and European firearms?","The Beaver Wars grew from competition over trade, territory, alliances, and European goods.",true],
["Praying Towns","Religion","What were Puritan-supervised communities created for Native converts to Christianity?","Praying Towns combined conversion with pressure toward English cultural practices."],
["King Philip's War","Native–Colonial Wars","Which devastating 1675–1676 New England conflict was led by Native forces associated with Metacom?","English colonists called Metacom King Philip. The war greatly weakened Native power in southern New England."],
["Columbian Exchange","Atlantic World","What term describes the movement of plants, animals, diseases, people, and ideas between the Eastern and Western Hemispheres?","The Columbian Exchange transformed diets, environments, economies, and populations."],
["New Amsterdam","Colonial Settlements","Which Dutch settlement on Manhattan became New York after England seized it in 1664?","New Amsterdam was a diverse commercial center in New Netherland."],
["William Penn","Colonial Settlements","Which Quaker founded Pennsylvania and promoted religious toleration?","William Penn established Pennsylvania as a proprietary colony associated with Quaker ideals."],
["Olaudah Equiano","Slavery and Abolition","Which formerly enslaved writer described enslavement and the Middle Passage in a famous autobiography?","Olaudah Equiano became an influential voice in the abolitionist movement."],
["Stono Rebellion","Slavery and Resistance","Which 1739 South Carolina slave uprising moved toward Spanish Florida in search of freedom?","The Stono Rebellion led South Carolina to impose harsher restrictions."],
["Task System/Gang System","Bold-Term Boss","Which paired term contrasts assigned daily work with continuous group labor under close supervision?","The task system assigned set work; the gang system organized continuous supervised labor.",true],
["San Diego de Alcalá","Spanish Colonization","Which mission, founded in 1769, was the first Spanish mission established in California?","San Diego de Alcalá represented Spain's effort to claim California and extend missionary control."],
["French and Indian War","Imperial Wars","Which 1754–1763 conflict ended with Britain defeating France in North America and taking on heavy war debt?","The French and Indian War was the North American theater of the global Seven Years' War."],
["Pontiac's Rebellion","Resistance","Which 1763 Indigenous uprising challenged British policies in the Great Lakes and Ohio Valley?","Pontiac's Rebellion followed Britain's victory over France and reflected anger at new British policies."],
["Proclamation of 1763","Road to Revolution","Which British order attempted to restrict colonial settlement west of the Appalachian Mountains?","Britain hoped to reduce costly frontier warfare, but many colonists resented the restriction."],
["Great Awakening","Religion","Which revival movement of the 1730s and 1740s emphasized emotional preaching and personal conversion?","The Great Awakening challenged established religious authority and encouraged denominational growth."],
["Baptists","Religion","Which Protestant group emphasized believer's baptism, personal conversion, and religious liberty?","Baptists expanded during and after the Great Awakening."],
["Comanches","Great Plains","Which equestrian people became a major southern Great Plains power through horses, trade, warfare, and raiding?","Comanche power reshaped politics and exchange across the southern Plains."],
["Boston Massacre","Road to Revolution","Which 1770 confrontation became Patriot propaganda after British soldiers killed five colonists?","The Boston Massacre intensified anti-British feeling and became powerful propaganda."],
["Boston Tea Party","Road to Revolution","Which 1773 protest involved colonists dumping British tea into Boston Harbor?","Britain answered the Boston Tea Party with the Coercive, or Intolerable, Acts."]
].map(([answer,category,question,explanation,boss=false])=>({answer,category,question,explanation,boss}));

const EVENTS=[
{id:"pequot",year:1636,label:"Pequot War begins"},
{id:"amsterdam",year:1664,label:"England seizes New Amsterdam"},
{id:"king",year:1675,label:"King Philip's War begins"},
{id:"bacon",year:1676,label:"Bacon's Rebellion"},
{id:"pueblo",year:1680,label:"Pueblo Revolt"},
{id:"stono",year:1739,label:"Stono Rebellion"},
{id:"french",year:1754,label:"French and Indian War begins"},
{id:"pontiac",year:1763,label:"Pontiac's Rebellion"},
{id:"massacre",year:1770,label:"Boston Massacre"},
{id:"tea",year:1773,label:"Boston Tea Party"}
];

const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const screens={home:$("#homeScreen"),battle:$("#battleScreen"),results:$("#resultsScreen"),timeline:$("#timelineScreen")};
const el={
best:$("#bestScore"),score:$("#score"),streak:$("#streak"),counter:$("#counter"),timer:$("#timer"),
shieldText:$("#shieldText"),heroBar:$("#heroBar"),enemyText:$("#enemyText"),enemyBar:$("#enemyBar"),
progress:$("#progressBar"),category:$("#category"),question:$("#question"),answers:$("#answers"),
feedback:$("#feedback"),burst:$("#burst"),next:$("#next"),resultEmoji:$("#resultEmoji"),
resultTitle:$("#resultTitle"),resultMessage:$("#resultMessage"),finalScore:$("#finalScore"),
accuracy:$("#accuracy"),bestStreak:$("#bestStreak"),reviewBox:$("#reviewBox"),
reviewTerms:$("#reviewTerms"),retry:$("#retry"),timelineList:$("#timelineList"),
puzzleScore:$("#puzzleScore"),puzzleMessage:$("#puzzleMessage")
};

const state={mode:"warmup",list:[],index:0,score:0,streak:0,bestStreak:0,shields:3,missed:[],locked:false,burst:false,seconds:null,timerId:null,timeline:[]};
let best=Number(localStorage.getItem("berryHistoryBest")||0); el.best.textContent=best;

function shuffle(a){
  const x=[...a];
  for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]]}
  return x;
}
function show(name){Object.entries(screens).forEach(([k,v])=>v.classList.toggle("active",k===name));scrollTo({top:0,behavior:"smooth"})}
function stopTimer(){clearInterval(state.timerId);state.timerId=null}
function formatTime(s){return `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`}
function startTimer(){
  stopTimer();
  if(state.seconds===null){el.timer.textContent="∞";return}
  el.timer.textContent=formatTime(state.seconds);
  state.timerId=setInterval(()=>{state.seconds--;el.timer.textContent=formatTime(Math.max(0,state.seconds));if(state.seconds<=0)finish(true)},1000);
}
function pick(mode){
  const all=shuffle(Q);
  if(mode==="warmup")return all.slice(0,10);
  if(mode==="exam")return all.slice(0,25);
  if(mode==="boss")return shuffle(Q.filter(q=>q.boss));
  return all;
}
function start(mode){
  Object.assign(state,{mode,list:pick(mode),index:0,score:0,streak:0,bestStreak:0,shields:3,missed:[],locked:false,burst:false,seconds:mode==="exam"?1800:null});
  show("battle");startTimer();renderQuestion();
}
function update(){
  const total=state.list.length,left=Math.max(0,total-state.index);
  el.score.textContent=state.score;el.streak.textContent=`${state.streak} 🔥`;
  el.counter.textContent=`${Math.min(state.index+1,total)}/${total}`;
  el.shieldText.textContent=`${state.shields}/3`;el.heroBar.style.width=`${state.shields/3*100}%`;
  el.enemyText.textContent=left;el.enemyBar.style.width=`${left/total*100}%`;
  el.progress.style.width=`${state.index/total*100}%`;
  el.burst.disabled=!state.burst||state.locked;
}
function optionsFor(q){
  return shuffle([q.answer,...shuffle(Q.filter(x=>x.answer!==q.answer).map(x=>x.answer)).slice(0,3)]);
}
function renderQuestion(){
  state.locked=false;el.feedback.hidden=true;el.next.hidden=true;el.answers.innerHTML="";
  const q=state.list[state.index];el.category.textContent=q.boss?`👑 ${q.category}`:q.category;el.question.textContent=q.question;
  optionsFor(q).forEach((answer,i)=>{
    const b=document.createElement("button");b.className="answer";b.type="button";b.dataset.answer=answer;
    b.textContent=`${String.fromCharCode(65+i)}. ${answer}`;b.addEventListener("click",()=>answerQuestion(b,q));el.answers.appendChild(b);
  });
  update();
}
function answerQuestion(button,q){
  if(state.locked)return;state.locked=true;
  const correct=button.dataset.answer===q.answer;
  $$(".answer").forEach(b=>{b.disabled=true;if(b.dataset.answer===q.answer)b.classList.add("correct")});
  if(correct){
    state.streak++;state.bestStreak=Math.max(state.bestStreak,state.streak);state.score+=100+Math.max(0,state.streak-1)*20;
    if(state.streak%3===0)state.burst=true;
    el.feedback.innerHTML=`<b>🍓 Critical hit!</b><br>${q.explanation}`;
  }else{
    button.classList.add("wrong");state.streak=0;state.shields=Math.max(0,state.shields-1);
    if(!state.missed.includes(q.answer))state.missed.push(q.answer);
    el.feedback.innerHTML=`<b>📚 Study shield used!</b><br>The answer is <b>${q.answer}</b>. ${q.explanation}`;
  }
  el.feedback.hidden=false;el.next.hidden=false;update();
}
function next(){
  state.index++;if(state.index>=state.list.length)finish(false);else renderQuestion();
}
function useBurst(){
  if(!state.burst||state.locked)return;
  const q=state.list[state.index];
  shuffle($$(".answer").filter(b=>b.dataset.answer!==q.answer&&!b.disabled)).slice(0,2).forEach(b=>{b.disabled=true;b.classList.add("removed")});
  state.burst=false;update();
}
function finish(timedOut){
  stopTimer();
  const answered=timedOut?state.index:state.list.length;
  const correct=Math.max(0,answered-state.missed.length);
  const accuracy=answered?Math.round(correct/answered*100):0;
  if(state.score>best){best=state.score;localStorage.setItem("berryHistoryBest",best);el.best.textContent=best}
  if(timedOut){el.resultEmoji.textContent="⏰";el.resultTitle.textContent="Time's Up, Scholar!";el.resultMessage.textContent="The timer ended, but every missed term is now a map for your next review round."}
  else if(accuracy>=88){el.resultEmoji.textContent="🏆";el.resultTitle.textContent="Berry Scholar Victory!";el.resultMessage.textContent="You absolutely folded the History Gremlin. Your recall is exam-day ready."}
  else if(accuracy>=70){el.resultEmoji.textContent="🍓";el.resultTitle.textContent="Strong Berry Battle!";el.resultMessage.textContent="Review the highlighted terms and run one more round."}
  else{el.resultEmoji.textContent="🌱";el.resultTitle.textContent="Training Arc Unlocked!";el.resultMessage.textContent="No panic. Review the missed terms, then come back stronger."}
  el.finalScore.textContent=state.score;el.accuracy.textContent=`${accuracy}%`;el.bestStreak.textContent=state.bestStreak;el.reviewTerms.innerHTML="";
  el.reviewBox.hidden=state.missed.length===0;
  state.missed.forEach(term=>{const s=document.createElement("span");s.textContent=term;el.reviewTerms.appendChild(s)});
  show("results");
}
function home(){stopTimer();show("home")}
function startTimeline(){state.timeline=shuffle(EVENTS);el.puzzleMessage.textContent="Arrange every tile, then check your quilt.";el.puzzleScore.textContent="0 / 10";renderTimeline();show("timeline")}
function renderTimeline(){
  el.timelineList.innerHTML="";
  state.timeline.forEach((event,index)=>{
    const li=document.createElement("li");li.className="tile";li.draggable=true;li.dataset.id=event.id;
    li.innerHTML=`<span class="tile-num">${index+1}</span><span><b>${event.label}</b><small>${event.year}</small></span><span class="tile-actions"><button aria-label="Move up">↑</button><button aria-label="Move down">↓</button></span>`;
    const [up,down]=li.querySelectorAll("button");up.addEventListener("click",()=>move(index,-1));down.addEventListener("click",()=>move(index,1));
    li.addEventListener("dragstart",()=>li.classList.add("dragging"));li.addEventListener("dragend",()=>li.classList.remove("dragging"));
    li.addEventListener("dragover",e=>e.preventDefault());li.addEventListener("drop",e=>{
      e.preventDefault();const dragged=el.timelineList.querySelector(".dragging");if(!dragged||dragged===li)return;
      const from=state.timeline.findIndex(x=>x.id===dragged.dataset.id),to=state.timeline.findIndex(x=>x.id===li.dataset.id);
      const [moved]=state.timeline.splice(from,1);state.timeline.splice(to,0,moved);renderTimeline();
    });
    el.timelineList.appendChild(li);
  });
}
function move(index,dir){const to=index+dir;if(to<0||to>=state.timeline.length)return;[state.timeline[index],state.timeline[to]]=[state.timeline[to],state.timeline[index]];renderTimeline()}
function ordered(){return [...EVENTS].sort((a,b)=>a.year-b.year)}
function correctCount(){const order=ordered();return state.timeline.reduce((n,x,i)=>n+(x.id===order[i].id?1:0),0)}
function checkTimeline(){
  const score=correctCount();el.puzzleScore.textContent=`${score} / 10`;
  el.puzzleMessage.innerHTML=score===10?"<b>🧁 Quilt complete!</b><br>The History Gremlin has been academically demolished.":`<b>🍓 ${score} of 10 positions are correct.</b><br>Use the years to adjust the remaining tiles.`;
}
function hint(){
  const order=ordered(),wrong=state.timeline.findIndex((x,i)=>x.id!==order[i].id);if(wrong===-1){checkTimeline();return}
  const from=state.timeline.findIndex(x=>x.id===order[wrong].id),[moved]=state.timeline.splice(from,1);state.timeline.splice(wrong,0,moved);renderTimeline();
  el.puzzleScore.textContent=`${correctCount()} / 10`;el.puzzleMessage.textContent=`💡 Hint placed tile ${wrong+1} correctly.`;
}

$$("[data-mode]").forEach(b=>b.addEventListener("click",()=>start(b.dataset.mode)));
$$("[data-home]").forEach(b=>b.addEventListener("click",home));
$("#timelineStart").addEventListener("click",startTimeline);
el.next.addEventListener("click",next);el.burst.addEventListener("click",useBurst);el.retry.addEventListener("click",()=>start(state.mode));
$("#checkTimeline").addEventListener("click",checkTimeline);$("#hintTimeline").addEventListener("click",hint);
$("#shuffleTimeline").addEventListener("click",()=>{state.timeline=shuffle(EVENTS);renderTimeline();el.puzzleScore.textContent="0 / 10";el.puzzleMessage.textContent="🔀 Shuffled! Rebuild the timeline."});
addEventListener("beforeunload",stopTimer);
