import {PHOTOS as P} from './images';
export const NAV=[['Story','story'],['Collection','collection'],['Gallery','gallery'],['Membership','membership'],['Contact','contact']];
export const STORY=[
 {n:'01',title:'Begin with a bottle',detail:'For unhurried evenings',copy:'A thoughtful collection for lingering dinners, spirited conversation and the occasions that deserve a little more care.',photo:P.moody,pos:'50% 40%'},
 {n:'02',title:'A place in Enugu',detail:'250 Ogui Road · Enugu',copy:'Step inside, explore the collection and find a new favourite. Wine Cave is a place to make a little more room for the moment.',photo:P.rack,pos:'30% 50%'},
 {n:'03',title:'Chosen together',detail:'A recommendation, made personal',copy:'Tell us what you enjoy, or what is on the table. Our team will help you find a bottle to suit your taste and occasion.',photo:P.glass,pos:'50% 50%'},
 {n:'04',title:'Take the evening with you',detail:'Open daily',copy:'Discover a bottle to open tonight, bring to the table or save for the moment still to come. We look forward to welcoming you.',photo:P.moody,pos:'50% 80%'}];
export const WINES=[
 {id:'w1',n:'01',cat:'Red',name:'Casillero del Diablo Cabernet Sauvignon',note:'Blackcurrant, ripe plum and a touch of spice, with a smooth finish.',price:28500,photo:P.glass,pos:'50% 50%'},
 {id:'w2',n:'02',cat:'White',name:'Oyster Bay Sauvignon Blanc',note:'Bright citrus and tropical fruit with a crisp, refreshing finish.',price:42000,photo:P.rack,pos:'20% 50%'},
 {id:'w3',n:'03',cat:'Rosé',name:'Whispering Angel Côtes de Provence Rosé',note:'Delicate red berries, citrus and a dry, elegant finish.',price:68000,photo:P.moody,pos:'50% 30%'},
 {id:'w4',n:'04',cat:'Sparkling',name:'Martini Asti Spumante',note:'Lightly sparkling with fragrant peach, grape and honey notes.',price:34000,photo:P.rack,pos:'80% 50%'}];
export const GALLERY=[[P.moody,'50% 50%','4/5'],[P.rack,'30% 50%','1/1'],[P.glass,'50% 40%','3/4'],[P.rack,'80% 60%','5/4'],[P.moody,'50% 90%','4/5'],[P.glass,'20% 50%','1/1']];
export const naira=n=>'₦'+n.toLocaleString('en-NG');
