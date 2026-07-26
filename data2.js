// ============================================================
// Summer Goals — drill content (verbs, dialogues, readings, sentences)
// ============================================================
const DRILL = {};

// ---------- VERBS: présent forms, participle, auxiliary ----------
// order: je, tu, il/elle, nous, vous, ils/elles
DRILL.verbs = [
{v:"être",e:"to be",bn:"হওয়া",p:["suis","es","est","sommes","êtes","sont"],pp:"été",aux:"avoir",imp:"ét",irr:1,w:1},
{v:"avoir",e:"to have",bn:"থাকা",p:["ai","as","a","avons","avez","ont"],pp:"eu",aux:"avoir",irr:1,w:1},
{v:"aller",e:"to go",bn:"যাওয়া",p:["vais","vas","va","allons","allez","vont"],pp:"allé",aux:"être",irr:1,w:1},
{v:"faire",e:"to do / make",bn:"করা",p:["fais","fais","fait","faisons","faites","font"],pp:"fait",aux:"avoir",irr:1,w:1},
{v:"parler",e:"to speak",bn:"কথা বলা",p:["parle","parles","parle","parlons","parlez","parlent"],pp:"parlé",aux:"avoir",w:2},
{v:"habiter",e:"to live",bn:"বাস করা",p:["habite","habites","habite","habitons","habitez","habitent"],pp:"habité",aux:"avoir",w:2},
{v:"travailler",e:"to work",bn:"কাজ করা",p:["travaille","travailles","travaille","travaillons","travaillez","travaillent"],pp:"travaillé",aux:"avoir",w:2},
{v:"aimer",e:"to like / love",bn:"পছন্দ করা",p:["aime","aimes","aime","aimons","aimez","aiment"],pp:"aimé",aux:"avoir",w:2},
{v:"regarder",e:"to watch",bn:"দেখা",p:["regarde","regardes","regarde","regardons","regardez","regardent"],pp:"regardé",aux:"avoir",w:2},
{v:"écouter",e:"to listen",bn:"শোনা",p:["écoute","écoutes","écoute","écoutons","écoutez","écoutent"],pp:"écouté",aux:"avoir",w:2},
{v:"jouer",e:"to play",bn:"খেলা",p:["joue","joues","joue","jouons","jouez","jouent"],pp:"joué",aux:"avoir",w:2},
{v:"manger",e:"to eat",bn:"খাওয়া",p:["mange","manges","mange","mangeons","mangez","mangent"],pp:"mangé",aux:"avoir",w:2},
{v:"acheter",e:"to buy",bn:"কেনা",p:["achète","achètes","achète","achetons","achetez","achètent"],pp:"acheté",aux:"avoir",w:2},
{v:"prendre",e:"to take",bn:"নেওয়া",p:["prends","prends","prend","prenons","prenez","prennent"],pp:"pris",aux:"avoir",irr:1,w:2},
{v:"vouloir",e:"to want",bn:"চাওয়া",p:["veux","veux","veut","voulons","voulez","veulent"],pp:"voulu",aux:"avoir",irr:1,w:2},
{v:"pouvoir",e:"can / to be able",bn:"পারা",p:["peux","peux","peut","pouvons","pouvez","peuvent"],pp:"pu",aux:"avoir",irr:1,w:2},
{v:"devoir",e:"must / to have to",bn:"করতে হওয়া",p:["dois","dois","doit","devons","devez","doivent"],pp:"dû",aux:"avoir",irr:1,w:2},
{v:"boire",e:"to drink",bn:"পান করা",p:["bois","bois","boit","buvons","buvez","boivent"],pp:"bu",aux:"avoir",irr:1,w:2},
{v:"finir",e:"to finish",bn:"শেষ করা",p:["finis","finis","finit","finissons","finissez","finissent"],pp:"fini",aux:"avoir",w:3},
{v:"choisir",e:"to choose",bn:"বেছে নেওয়া",p:["choisis","choisis","choisit","choisissons","choisissez","choisissent"],pp:"choisi",aux:"avoir",w:3},
{v:"attendre",e:"to wait",bn:"অপেক্ষা করা",p:["attends","attends","attend","attendons","attendez","attendent"],pp:"attendu",aux:"avoir",w:3},
{v:"venir",e:"to come",bn:"আসা",p:["viens","viens","vient","venons","venez","viennent"],pp:"venu",aux:"être",irr:1,w:3},
{v:"partir",e:"to leave",bn:"চলে যাওয়া",p:["pars","pars","part","partons","partez","partent"],pp:"parti",aux:"être",irr:1,w:3},
{v:"sortir",e:"to go out",bn:"বাইরে যাওয়া",p:["sors","sors","sort","sortons","sortez","sortent"],pp:"sorti",aux:"être",irr:1,w:3},
{v:"arriver",e:"to arrive",bn:"পৌঁছানো",p:["arrive","arrives","arrive","arrivons","arrivez","arrivent"],pp:"arrivé",aux:"être",w:3},
{v:"rester",e:"to stay",bn:"থাকা",p:["reste","restes","reste","restons","restez","restent"],pp:"resté",aux:"être",w:3},
{v:"dormir",e:"to sleep",bn:"ঘুমানো",p:["dors","dors","dort","dormons","dormez","dorment"],pp:"dormi",aux:"avoir",irr:1,w:3},
{v:"lire",e:"to read",bn:"পড়া",p:["lis","lis","lit","lisons","lisez","lisent"],pp:"lu",aux:"avoir",irr:1,w:3},
{v:"écrire",e:"to write",bn:"লেখা",p:["écris","écris","écrit","écrivons","écrivez","écrivent"],pp:"écrit",aux:"avoir",irr:1,w:3},
{v:"voir",e:"to see",bn:"দেখা",p:["vois","vois","voit","voyons","voyez","voient"],pp:"vu",aux:"avoir",irr:1,w:3},
{v:"dire",e:"to say",bn:"বলা",p:["dis","dis","dit","disons","dites","disent"],pp:"dit",aux:"avoir",irr:1,w:3},
{v:"savoir",e:"to know (facts)",bn:"জানা",p:["sais","sais","sait","savons","savez","savent"],pp:"su",aux:"avoir",irr:1,w:3},
{v:"connaître",e:"to know (people)",bn:"চেনা",p:["connais","connais","connaît","connaissons","connaissez","connaissent"],pp:"connu",aux:"avoir",irr:1,w:3},
{v:"mettre",e:"to put",bn:"রাখা",p:["mets","mets","met","mettons","mettez","mettent"],pp:"mis",aux:"avoir",irr:1,w:4},
{v:"apprendre",e:"to learn",bn:"শেখা",p:["apprends","apprends","apprend","apprenons","apprenez","apprennent"],pp:"appris",aux:"avoir",irr:1,w:4},
{v:"comprendre",e:"to understand",bn:"বোঝা",p:["comprends","comprends","comprend","comprenons","comprenez","comprennent"],pp:"compris",aux:"avoir",irr:1,w:4}
];
DRILL.pronouns = ["je","tu","il","nous","vous","ils"];
DRILL.pronounsBn = ["আমি","তুমি","সে","আমরা","আপনি/তোমরা","তারা"];

// ---------- SENTENCE BUILDER ----------
DRILL.sentences = [
{f:"Je m'appelle Psy.",e:"My name is Psy.",bn:"আমার নাম সাই।",w:1},
{f:"Je viens du Bangladesh.",e:"I come from Bangladesh.",bn:"আমি বাংলাদেশ থেকে এসেছি।",w:1},
{f:"Comment tu t'appelles ?",e:"What's your name?",bn:"তোমার নাম কী?",w:1},
{f:"Je ne comprends pas.",e:"I don't understand.",bn:"আমি বুঝি না।",w:1,note:"Negation wraps the verb: ne + VERB + pas"},
{f:"Où est la gare ?",e:"Where is the station?",bn:"স্টেশন কোথায়?",w:1},
{f:"J'ai vingt ans.",e:"I am twenty years old.",bn:"আমার বয়স বিশ।",w:1,note:"Age uses avoir, never être"},
{f:"Il est trois heures.",e:"It is three o'clock.",bn:"তিনটা বাজে।",w:1},
{f:"Nous sommes étudiants.",e:"We are students.",bn:"আমরা ছাত্র।",w:1},
{f:"Est-ce que tu parles anglais ?",e:"Do you speak English?",bn:"তুমি কি ইংরেজি বলো?",w:1},
{f:"Je ne sais pas où il est.",e:"I don't know where he is.",bn:"সে কোথায় আমি জানি না।",w:1},
{f:"Je voudrais un café, s'il vous plaît.",e:"I'd like a coffee, please.",bn:"একটা কফি চাই, প্লিজ।",w:2},
{f:"Il y a un marché près d'ici.",e:"There's a market near here.",bn:"এখানে কাছেই একটা বাজার আছে।",w:2},
{f:"Je vais manger au restaurant.",e:"I'm going to eat at the restaurant.",bn:"আমি রেস্তোরাঁয় খেতে যাচ্ছি।",w:2,note:"Near future = aller + infinitive"},
{f:"Ma sœur habite à Paris.",e:"My sister lives in Paris.",bn:"আমার বোন প্যারিসে থাকে।",w:2},
{f:"C'est une petite maison blanche.",e:"It's a small white house.",bn:"এটা একটা ছোট সাদা বাড়ি।",w:2,note:"petite goes before, blanche after — colours follow the noun"},
{f:"Je n'aime pas le fromage.",e:"I don't like cheese.",bn:"আমি পনির পছন্দ করি না।",w:2},
{f:"Tu peux m'aider, s'il te plaît ?",e:"Can you help me, please?",bn:"তুমি আমাকে সাহায্য করতে পারো?",w:2},
{f:"Nous allons au cinéma ce soir.",e:"We're going to the cinema tonight.",bn:"আজ সন্ধ্যায় আমরা সিনেমায় যাচ্ছি।",w:2},
{f:"Combien coûte ce livre ?",e:"How much does this book cost?",bn:"এই বইটার দাম কত?",w:2},
{f:"Elle a deux frères et une sœur.",e:"She has two brothers and one sister.",bn:"তার দুই ভাই ও এক বোন।",w:2},
{f:"Le train part à huit heures.",e:"The train leaves at eight.",bn:"ট্রেন আটটায় ছাড়ে।",w:2},
{f:"Je dois travailler demain matin.",e:"I have to work tomorrow morning.",bn:"আগামীকাল সকালে আমাকে কাজ করতে হবে।",w:2},
{f:"Hier j'ai mangé au restaurant.",e:"Yesterday I ate at the restaurant.",bn:"গতকাল আমি রেস্তোরাঁয় খেয়েছি।",w:3,note:"Time word first, then avoir + participle"},
{f:"Je suis allé au marché.",e:"I went to the market.",bn:"আমি বাজারে গিয়েছিলাম।",w:3,note:"aller takes être in the past"},
{f:"Ce matin je me suis levé tôt.",e:"This morning I got up early.",bn:"আজ সকালে আমি তাড়াতাড়ি উঠেছি।",w:3},
{f:"Qu'est-ce que tu as fait hier ?",e:"What did you do yesterday?",bn:"গতকাল তুমি কী করেছিলে?",w:3},
{f:"Je n'ai pas encore fini.",e:"I haven't finished yet.",bn:"আমি এখনো শেষ করিনি।",w:3,note:"Negation wraps the auxiliary: n'ai pas fini"},
{f:"Il a plu toute la journée.",e:"It rained all day.",bn:"সারাদিন বৃষ্টি হয়েছে।",w:3},
{f:"Nous avons regardé un film français.",e:"We watched a French film.",bn:"আমরা একটা ফরাসি সিনেমা দেখেছি।",w:3},
{f:"Elle est partie il y a deux jours.",e:"She left two days ago.",bn:"সে দুই দিন আগে চলে গেছে।",w:3},
{f:"D'abord j'ai étudié, ensuite j'ai joué.",e:"First I studied, then I played.",bn:"প্রথমে পড়েছি, তারপর খেলেছি।",w:3},
{f:"Je me suis couché à minuit.",e:"I went to bed at midnight.",bn:"আমি মাঝরাতে ঘুমাতে গিয়েছি।",w:3},
{f:"Le week-end dernier nous sommes restés à la maison.",e:"Last weekend we stayed home.",bn:"গত উইকএন্ডে আমরা বাড়িতে ছিলাম।",w:3},
{f:"Je n'ai rien fait aujourd'hui.",e:"I did nothing today.",bn:"আজ আমি কিছুই করিনি।",w:3},
{f:"À mon avis, c'est une bonne idée.",e:"In my opinion, it's a good idea.",bn:"আমার মতে, এটা ভালো আইডিয়া।",w:4},
{f:"Je pense que le français est plus facile qu'avant.",e:"I think French is easier than before.",bn:"আমার মনে হয় ফরাসি আগের চেয়ে সহজ।",w:4},
{f:"Le train est plus rapide que le bus.",e:"The train is faster than the bus.",bn:"ট্রেন বাসের চেয়ে দ্রুত।",w:4},
{f:"L'année prochaine j'aimerais visiter la France.",e:"Next year I'd like to visit France.",bn:"আগামী বছর আমি ফ্রান্স দেখতে চাই।",w:4},
{f:"Je ne suis pas d'accord avec toi.",e:"I don't agree with you.",bn:"আমি তোমার সাথে একমত নই।",w:4},
{f:"En fait, j'ai commencé il y a un mois.",e:"Actually, I started a month ago.",bn:"আসলে, আমি এক মাস আগে শুরু করেছি।",w:4},
{f:"Si tu veux, on peut parler en français.",e:"If you want, we can speak in French.",bn:"চাইলে আমরা ফরাসিতে কথা বলতে পারি।",w:4},
{f:"C'est le meilleur restaurant de la ville.",e:"It's the best restaurant in town.",bn:"এটা শহরের সেরা রেস্তোরাঁ।",w:4},
{f:"J'espère que tu vas bien.",e:"I hope you're doing well.",bn:"আশা করি তুমি ভালো আছো।",w:4},
{f:"Je parle mieux qu'avant, peu à peu.",e:"I speak better than before, little by little.",bn:"আমি আগের চেয়ে ভালো বলি, ধীরে ধীরে।",w:4},
{f:"Cependant, c'est encore difficile pour moi.",e:"However, it's still difficult for me.",bn:"তবে, এটা আমার জন্য এখনো কঠিন।",w:4}
];

// ---------- INTERACTIVE DIALOGUES ----------
// s: "them" = they speak · "you" = your line (choices)
DRILL.dialogues = [
{id:"cafe",t:"Au café",e:"At the café",w:2,setting:"You walk into a Paris café at 9am.",
 steps:[
  {s:"them",f:"Bonjour ! Qu'est-ce que je vous sers ?",e:"Hello! What can I get you?",bn:"হ্যালো! কী দেব আপনাকে?"},
  {s:"you",opts:[
    {f:"Je voudrais un café, s'il vous plaît.",e:"I'd like a coffee, please.",ok:1,why:"Perfect — 'je voudrais' is the polite standard."},
    {f:"Je veux café.",e:"I want coffee.",ok:0,why:"Too blunt, and it's missing the article: 'un café'."},
    {f:"Donnez-moi le café.",e:"Give me the coffee.",ok:0,why:"Grammatical but rude in a café."}]},
  {s:"them",f:"Très bien. Avec du lait ?",e:"Very good. With milk?",bn:"ঠিক আছে। দুধ দিয়ে?"},
  {s:"you",opts:[
    {f:"Non merci, sans lait.",e:"No thanks, without milk.",ok:1,why:"Clean and natural."},
    {f:"Non, je n'ai pas lait.",e:"No, I don't have milk.",ok:0,why:"That means you don't own milk — and needs 'de' after a negative."}]},
  {s:"them",f:"C'est deux euros cinquante.",e:"That's two euros fifty.",bn:"দুই ইউরো পঞ্চাশ।"},
  {s:"you",opts:[
    {f:"Voilà. Merci beaucoup !",e:"Here you go. Thank you!",ok:1,why:"'Voilà' when handing something over — very French."},
    {f:"Ici est l'argent.",e:"Here is the money.",ok:0,why:"Word-for-word from English; French says 'voilà'."}]},
  {s:"them",f:"Merci, bonne journée !",e:"Thanks, have a good day!",bn:"ধন্যবাদ, শুভ দিন!"}
 ]},
{id:"direction",t:"Demander son chemin",e:"Asking for directions",w:2,setting:"You're lost and stop a passer-by.",
 steps:[
  {s:"you",opts:[
    {f:"Excusez-moi, où est la gare ?",e:"Excuse me, where is the station?",ok:1,why:"Always open with 'excusez-moi' — it's expected."},
    {f:"Gare ?",e:"Station?",ok:0,why:"Understandable but abrupt."}]},
  {s:"them",f:"La gare ? Allez tout droit, puis tournez à gauche.",e:"The station? Go straight, then turn left.",bn:"স্টেশন? সোজা যান, তারপর বাঁয়ে ঘুরুন।"},
  {s:"you",opts:[
    {f:"Pardon, pouvez-vous parler plus lentement ?",e:"Sorry, can you speak more slowly?",ok:1,why:"The single most useful sentence you own."},
    {f:"Je comprends pas rien.",e:"I don't understand nothing.",ok:0,why:"Double negative — it's 'je ne comprends rien'."}]},
  {s:"them",f:"Bien sûr. Tout droit… et à gauche. C'est à cinq minutes.",e:"Of course. Straight… and left. It's five minutes away.",bn:"অবশ্যই। সোজা… তারপর বাঁয়ে। পাঁচ মিনিটের পথ।"},
  {s:"you",opts:[
    {f:"C'est loin d'ici ?",e:"Is it far from here?",ok:1,why:"Good follow-up question."},
    {f:"Il est loin ?",e:"Is he far?",ok:0,why:"'il' refers to a person here; use 'c'est'."}]},
  {s:"them",f:"Non, c'est tout près. Bonne route !",e:"No, it's very close. Safe travels!",bn:"না, খুব কাছেই। ভালো থাকুন!"}
 ]},
{id:"resto",t:"Au restaurant",e:"At the restaurant",w:2,setting:"Dinner for two, you're ordering.",
 steps:[
  {s:"them",f:"Bonsoir. Vous avez une réservation ?",e:"Good evening. Do you have a reservation?",bn:"শুভ সন্ধ্যা। রিজার্ভেশন আছে?"},
  {s:"you",opts:[
    {f:"Non, avez-vous une table pour deux ?",e:"No, do you have a table for two?",ok:1,why:"Exactly right."},
    {f:"Non, je veux table deux.",e:"No, I want table two.",ok:0,why:"Missing articles — 'une table pour deux'."}]},
  {s:"them",f:"Oui, suivez-moi. Voici la carte.",e:"Yes, follow me. Here's the menu.",bn:"হ্যাঁ, আমার সাথে আসুন। এই যে মেনু।"},
  {s:"you",opts:[
    {f:"Je vais prendre le poulet avec du riz.",e:"I'll have the chicken with rice.",ok:1,why:"'je vais prendre' is what French people actually say when ordering."},
    {f:"Je mange le poulet.",e:"I eat the chicken.",ok:0,why:"Present tense sounds like a statement of habit, not an order."}]},
  {s:"them",f:"Et comme boisson ?",e:"And to drink?",bn:"আর পানীয়?"},
  {s:"you",opts:[
    {f:"Une carafe d'eau, s'il vous plaît.",e:"A carafe of water, please.",ok:1,why:"Free tap water in France — always ordered this way."},
    {f:"Water, please.",e:"(English)",ok:0,why:"You've got this — say it in French."}]},
  {s:"them",f:"Parfait. Bon appétit !",e:"Perfect. Enjoy your meal!",bn:"চমৎকার। খাওয়া উপভোগ করুন!"},
  {s:"you",opts:[
    {f:"L'addition, s'il vous plaît.",e:"The bill, please.",ok:1,why:"Note: l'addition (not 'le bill')."},
    {f:"Le papier de l'argent ?",e:"The money paper?",ok:0,why:"Not a thing — it's 'l'addition'."}]}
 ]},
{id:"meet",t:"Faire connaissance",e:"Meeting someone new",w:2,setting:"A classmate introduces themselves.",
 steps:[
  {s:"them",f:"Salut ! Moi c'est Camille. Et toi ?",e:"Hi! I'm Camille. And you?",bn:"হাই! আমি ক্যামিল। আর তুমি?"},
  {s:"you",opts:[
    {f:"Moi c'est Psy. Enchanté !",e:"I'm Psy. Nice to meet you!",ok:1,why:"Mirrors her register perfectly — casual and warm."},
    {f:"Je suis Psy nom.",e:"I am Psy name.",ok:0,why:"Mixing two structures. Use 'je m'appelle' or 'moi c'est'."}]},
  {s:"them",f:"Tu viens d'où ?",e:"Where are you from?",bn:"তুমি কোথা থেকে?"},
  {s:"you",opts:[
    {f:"Je viens du Bangladesh.",e:"I come from Bangladesh.",ok:1,why:"de + le = du. Bangladesh is masculine."},
    {f:"Je viens de Bangladesh.",e:"—",ok:0,why:"Almost! Masculine countries take 'du': du Bangladesh."}]},
  {s:"them",f:"Super ! Et qu'est-ce que tu fais dans la vie ?",e:"Cool! And what do you do?",bn:"বাহ! আর তুমি কী করো?"},
  {s:"you",opts:[
    {f:"Je suis étudiant et j'apprends le français.",e:"I'm a student and I'm learning French.",ok:1,why:"Note: no 'un' before a job in French."},
    {f:"Je suis un étudiant.",e:"I am a student.",ok:0,why:"Drop the article: 'je suis étudiant'."}]},
  {s:"them",f:"Ça se voit, tu parles déjà bien !",e:"It shows, you already speak well!",bn:"বোঝা যাচ্ছে, তুমি এখনই ভালো বলো!"}
 ]},
{id:"shop",t:"Faire les courses",e:"Shopping",w:2,setting:"At a clothes shop.",
 steps:[
  {s:"them",f:"Bonjour, je peux vous aider ?",e:"Hello, can I help you?",bn:"হ্যালো, সাহায্য করতে পারি?"},
  {s:"you",opts:[
    {f:"Oui, je cherche une chemise bleue.",e:"Yes, I'm looking for a blue shirt.",ok:1,why:"Colour after the noun, agreeing with it: chemise → bleue."},
    {f:"Oui, je cherche une bleue chemise.",e:"—",ok:0,why:"Colours go AFTER the noun in French."}]},
  {s:"them",f:"Quelle taille ?",e:"What size?",bn:"কোন সাইজ?"},
  {s:"you",opts:[
    {f:"Taille M, je pense.",e:"Size M, I think.",ok:1,why:"Simple and natural."},
    {f:"Je suis M.",e:"I am M.",ok:0,why:"You're not a size — say 'je fais du M' or 'taille M'."}]},
  {s:"them",f:"Voilà. Elle coûte trente euros.",e:"Here. It costs thirty euros.",bn:"এই যে। দাম ত্রিশ ইউরো।"},
  {s:"you",opts:[
    {f:"C'est un peu cher. Vous avez moins cher ?",e:"That's a bit expensive. Do you have cheaper?",ok:1,why:"Polite hedging with 'un peu' — very French."},
    {f:"Trop cher ! Non !",e:"Too expensive! No!",ok:0,why:"Understandable, but blunt."}]},
  {s:"them",f:"Oui, celle-ci est à vingt euros.",e:"Yes, this one is twenty euros.",bn:"হ্যাঁ, এটা বিশ ইউরো।"}
 ]},
{id:"weekend",t:"Ton week-end",e:"Your weekend (past tense)",w:3,setting:"Monday. A friend asks about your weekend.",
 steps:[
  {s:"them",f:"Alors, qu'est-ce que tu as fait ce week-end ?",e:"So, what did you do this weekend?",bn:"তো, এই উইকএন্ডে কী করলে?"},
  {s:"you",opts:[
    {f:"J'ai joué aux jeux vidéo et j'ai étudié le français.",e:"I played video games and studied French.",ok:1,why:"Two clean passé composé verbs with avoir."},
    {f:"Je joue et j'étudie hier.",e:"—",ok:0,why:"Present tense with a past time word. Use j'ai joué / j'ai étudié."}]},
  {s:"them",f:"Ah bon ? Tu es sorti aussi ?",e:"Oh really? Did you go out too?",bn:"তাই? বাইরেও গিয়েছিলে?"},
  {s:"you",opts:[
    {f:"Oui, je suis allé au marché samedi matin.",e:"Yes, I went to the market Saturday morning.",ok:1,why:"aller → être + allé. Correct."},
    {f:"Oui, j'ai allé au marché.",e:"—",ok:0,why:"aller always takes être: je suis allé."}]},
  {s:"them",f:"Et tu as acheté quelque chose ?",e:"And did you buy something?",bn:"কিছু কিনেছিলে?"},
  {s:"you",opts:[
    {f:"J'ai acheté des fruits et du pain.",e:"I bought fruit and bread.",ok:1,why:"Partitive articles des/du used correctly."},
    {f:"J'ai acheté fruits et pain.",e:"—",ok:0,why:"French needs the article: des fruits, du pain."}]},
  {s:"them",f:"Pas mal ! Moi, je n'ai rien fait du tout.",e:"Not bad! Me, I did nothing at all.",bn:"খারাপ না! আমি তো কিছুই করিনি।"}
 ]},
{id:"doctor",t:"Chez le médecin",e:"At the doctor",w:3,setting:"You're not feeling well.",
 steps:[
  {s:"them",f:"Bonjour, qu'est-ce qui ne va pas ?",e:"Hello, what's wrong?",bn:"হ্যালো, কী সমস্যা?"},
  {s:"you",opts:[
    {f:"J'ai mal à la tête depuis deux jours.",e:"I've had a headache for two days.",ok:1,why:"'avoir mal à' + body part. 'depuis' = for/since."},
    {f:"Ma tête est malade.",e:"My head is sick.",ok:0,why:"French says 'j'ai mal à la tête'."}]},
  {s:"them",f:"Vous avez de la fièvre ?",e:"Do you have a fever?",bn:"জ্বর আছে?"},
  {s:"you",opts:[
    {f:"Non, mais je suis très fatigué.",e:"No, but I'm very tired.",ok:1,why:"Correct — tiredness uses être."},
    {f:"Non, mais j'ai très fatigué.",e:"—",ok:0,why:"fatigué is an adjective: je SUIS fatigué."}]},
  {s:"them",f:"Bon. Reposez-vous et buvez beaucoup d'eau.",e:"Alright. Rest and drink lots of water.",bn:"ঠিক আছে। বিশ্রাম নিন আর প্রচুর পানি খান।"},
  {s:"you",opts:[
    {f:"D'accord, merci docteur.",e:"Okay, thank you doctor.",ok:1,why:"Just right."},
    {f:"Oui je fais.",e:"Yes I do.",ok:0,why:"Not idiomatic — 'd'accord' covers it."}]}
 ]},
{id:"opinion",t:"Donner ton avis",e:"Giving your opinion",w:4,setting:"A friend asks what you think about learning languages.",
 steps:[
  {s:"them",f:"Tu penses que le français est difficile ?",e:"Do you think French is difficult?",bn:"তোমার কি মনে হয় ফরাসি কঠিন?"},
  {s:"you",opts:[
    {f:"Je pense que c'est difficile au début, mais ça devient plus facile.",e:"I think it's hard at first, but it gets easier.",ok:1,why:"'je pense que' + a contrast with 'mais' — A2 level speech."},
    {f:"Difficile oui.",e:"Difficult yes.",ok:0,why:"True, but you can build a real sentence now."}]},
  {s:"them",f:"Et l'anglais, c'est plus facile que le français ?",e:"And English, is it easier than French?",bn:"আর ইংরেজি কি ফরাসির চেয়ে সহজ?"},
  {s:"you",opts:[
    {f:"À mon avis, l'anglais est plus facile que le français.",e:"In my opinion, English is easier than French.",ok:1,why:"plus … que comparison, correctly built."},
    {f:"À mon avis, l'anglais est plus facile de le français.",e:"—",ok:0,why:"Comparisons use 'que', not 'de'."}]},
  {s:"them",f:"Pourquoi tu apprends le français, en fait ?",e:"Why are you learning French, actually?",bn:"আসলে তুমি কেন ফরাসি শিখছ?"},
  {s:"you",opts:[
    {f:"Parce que j'aimerais voyager en France l'année prochaine.",e:"Because I'd like to travel to France next year.",ok:1,why:"'parce que' + conditional wish — exactly A2."},
    {f:"Parce que je veux France.",e:"—",ok:0,why:"Needs a verb: voyager en France / aller en France."}]},
  {s:"them",f:"Génial ! Tu vas y arriver, c'est sûr.",e:"Great! You'll get there, for sure.",bn:"দারুণ! তুমি পারবে, নিশ্চিত।"}
 ]}
];

// ---------- GRADED READING ----------
DRILL.readings = [
{id:"r1",w:1,t:"Bonjour !",e:"Hello!",
 text:"Bonjour ! Je m'appelle Psy. J'ai vingt ans et je viens du Bangladesh. J'habite à Dhaka avec ma famille. J'ai un frère et une sœur. Je suis étudiant. J'aime les jeux vidéo et la musique. Maintenant, j'apprends le français et la langue des signes. C'est difficile, mais c'est très intéressant !",
 en:"Hello! My name is Psy. I'm twenty and I come from Bangladesh. I live in Dhaka with my family. I have one brother and one sister. I'm a student. I like video games and music. Right now, I'm learning French and sign language. It's difficult, but it's very interesting!",
 bn:"হ্যালো! আমার নাম সাই। আমার বয়স বিশ এবং আমি বাংলাদেশ থেকে এসেছি। আমি পরিবারের সাথে ঢাকায় থাকি। আমার এক ভাই ও এক বোন আছে। আমি ছাত্র। আমি ভিডিও গেম ও গান পছন্দ করি। এখন আমি ফরাসি ও ইশারা ভাষা শিখছি। এটা কঠিন, কিন্তু খুব আকর্ষণীয়!",
 q:[{q:"Psy a combien de frères et sœurs ?",o:["Un frère et une sœur","Deux frères","Trois sœurs"],a:0},
    {q:"Qu'est-ce qu'il apprend ?",o:["L'anglais","Le français et la langue des signes","La musique"],a:1}]},
{id:"r2",w:2,t:"Une journée normale",e:"A normal day",
 text:"Le matin, je me lève à sept heures. Je prends un café et je mange du pain avec du fromage. Ensuite, j'étudie le français pendant deux heures. À midi, je mange du riz avec du poulet. L'après-midi, je travaille sur mon projet. Le soir, je joue aux jeux vidéo avec mes amis. Je me couche vers minuit.",
 en:"In the morning, I get up at seven. I have a coffee and eat bread with cheese. Then I study French for two hours. At noon, I eat rice with chicken. In the afternoon, I work on my project. In the evening, I play video games with my friends. I go to bed around midnight.",
 bn:"সকালে আমি সাতটায় উঠি। কফি খাই আর পনির দিয়ে রুটি খাই। তারপর দুই ঘণ্টা ফরাসি পড়ি। দুপুরে মুরগি দিয়ে ভাত খাই। বিকেলে আমার প্রজেক্টে কাজ করি। সন্ধ্যায় বন্ধুদের সাথে ভিডিও গেম খেলি। মাঝরাতের দিকে ঘুমাতে যাই।",
 q:[{q:"Il se lève à quelle heure ?",o:["Six heures","Sept heures","Huit heures"],a:1},
    {q:"Qu'est-ce qu'il mange à midi ?",o:["Du pain","Du riz avec du poulet","Du fromage"],a:1}]},
{id:"r3",w:2,t:"Ma ville",e:"My city",
 text:"J'habite dans une grande ville. Il y a beaucoup de gens, de voitures et de magasins. Près de ma maison, il y a un marché et une petite école. J'aime le marché parce que les fruits sont frais et pas chers. Il y a aussi un parc avec des arbres et des fleurs. Le week-end, je vais au parc avec ma famille.",
 en:"I live in a big city. There are lots of people, cars and shops. Near my house there's a market and a small school. I like the market because the fruit is fresh and cheap. There's also a park with trees and flowers. On weekends I go to the park with my family.",
 bn:"আমি একটা বড় শহরে থাকি। এখানে অনেক মানুষ, গাড়ি আর দোকান আছে। আমার বাড়ির কাছে একটা বাজার ও একটা ছোট স্কুল আছে। বাজার আমার ভালো লাগে কারণ ফল তাজা আর সস্তা। গাছ আর ফুলসহ একটা পার্কও আছে। উইকএন্ডে পরিবারের সাথে পার্কে যাই।",
 q:[{q:"Pourquoi il aime le marché ?",o:["C'est grand","Les fruits sont frais et pas chers","C'est près du parc"],a:1}]},
{id:"r4",w:3,t:"Mon week-end",e:"My weekend",
 text:"Samedi dernier, je me suis levé tard, vers dix heures. J'ai pris mon petit-déjeuner et j'ai regardé une vidéo en français. Après, je suis allé au marché avec ma mère. Nous avons acheté des légumes et du poisson. L'après-midi, j'ai travaillé sur mon jeu vidéo pendant trois heures. Le soir, mes amis sont venus chez moi et nous avons joué ensemble. C'était une très bonne journée.",
 en:"Last Saturday I got up late, around ten. I had breakfast and watched a video in French. Afterwards, I went to the market with my mother. We bought vegetables and fish. In the afternoon, I worked on my video game for three hours. In the evening, my friends came to my place and we played together. It was a really good day.",
 bn:"গত শনিবার আমি দেরিতে, দশটার দিকে উঠেছি। নাস্তা করেছি আর ফরাসিতে একটা ভিডিও দেখেছি। এরপর মায়ের সাথে বাজারে গিয়েছি। আমরা সবজি ও মাছ কিনেছি। বিকেলে তিন ঘণ্টা আমার ভিডিও গেমে কাজ করেছি। সন্ধ্যায় বন্ধুরা আমার বাসায় এসেছে আর আমরা একসাথে খেলেছি। দিনটা খুব ভালো ছিল।",
 q:[{q:"Avec qui est-il allé au marché ?",o:["Avec ses amis","Avec sa mère","Tout seul"],a:1},
    {q:"Quel verbe utilise être au passé ici ?",o:["j'ai pris","je suis allé","j'ai acheté"],a:1}]},
{id:"r5",w:3,t:"Une lettre à un ami",e:"A letter to a friend",
 text:"Salut Camille ! Comment ça va ? Moi, ça va bien. Cette semaine, j'ai beaucoup étudié. Lundi, j'ai appris le passé composé — c'était difficile au début ! Mardi et mercredi, j'ai écouté des vidéos en français. Hier, j'ai parlé avec un ami français pendant vingt minutes. Je n'ai pas tout compris, mais il a dit que je parle bien. Et toi, qu'est-ce que tu as fait cette semaine ? À bientôt, Psy",
 en:"Hi Camille! How are you? I'm doing well. This week I studied a lot. On Monday I learned the passé composé — it was hard at first! Tuesday and Wednesday I listened to videos in French. Yesterday I spoke with a French friend for twenty minutes. I didn't understand everything, but he said I speak well. And you, what did you do this week? See you soon, Psy",
 bn:"হাই ক্যামিল! কেমন আছো? আমি ভালো আছি। এই সপ্তাহে অনেক পড়েছি। সোমবার passé composé শিখেছি — শুরুতে কঠিন ছিল! মঙ্গল ও বুধবার ফরাসি ভিডিও শুনেছি। গতকাল এক ফরাসি বন্ধুর সাথে বিশ মিনিট কথা বলেছি। সব বুঝিনি, কিন্তু সে বলেছে আমি ভালো বলি। আর তুমি, এই সপ্তাহে কী করলে? শীঘ্রই দেখা হবে, সাই",
 q:[{q:"Combien de temps a-t-il parlé avec son ami ?",o:["Dix minutes","Vingt minutes","Une heure"],a:1}]},
{id:"r6",w:4,t:"Pourquoi j'apprends les langues",e:"Why I learn languages",
 text:"À mon avis, apprendre une langue, c'est comme apprendre à jouer d'un instrument : au début c'est lent, mais peu à peu ça devient naturel. Je pense que le français est plus difficile que l'anglais, surtout la prononciation. Cependant, j'aime beaucoup les sons du français. J'apprends aussi la langue des signes américaine, qui est très différente : on parle avec les mains et le visage. L'année prochaine, j'aimerais parler avec des gens en France et rencontrer la communauté sourde. C'est un grand objectif, mais je vais essayer.",
 en:"In my opinion, learning a language is like learning an instrument: at first it's slow, but little by little it becomes natural. I think French is harder than English, especially the pronunciation. However, I really like the sounds of French. I'm also learning American Sign Language, which is very different: you speak with your hands and face. Next year, I'd like to talk with people in France and meet the Deaf community. It's a big goal, but I'm going to try.",
 bn:"আমার মতে, ভাষা শেখা অনেকটা বাদ্যযন্ত্র শেখার মতো: শুরুতে ধীর, কিন্তু ধীরে ধীরে স্বাভাবিক হয়ে যায়। আমার মনে হয় ফরাসি ইংরেজির চেয়ে কঠিন, বিশেষ করে উচ্চারণ। তবে ফরাসির শব্দগুলো আমার খুব ভালো লাগে। আমি আমেরিকান ইশারা ভাষাও শিখছি, যা খুব আলাদা: হাত ও মুখ দিয়ে কথা বলা হয়। আগামী বছর আমি ফ্রান্সের মানুষের সাথে কথা বলতে ও বধির সম্প্রদায়ের সাথে পরিচিত হতে চাই। এটা বড় লক্ষ্য, কিন্তু আমি চেষ্টা করব।",
 q:[{q:"À quoi compare-t-il l'apprentissage d'une langue ?",o:["À un jeu vidéo","À un instrument de musique","À un voyage"],a:1},
    {q:"Qu'est-ce qu'il trouve difficile en français ?",o:["La prononciation","Les nombres","Les couleurs"],a:0}]},
{id:"r7",w:4,t:"Un mois plus tard",e:"One month later",
 text:"Il y a un mois, je ne parlais pas français du tout. Je connaissais seulement « bonjour » et « merci ». Aujourd'hui, je peux me présenter, commander au restaurant, demander mon chemin et raconter ma journée au passé. Bien sûr, je fais encore beaucoup d'erreurs et je ne comprends pas tout quand les gens parlent vite. Mais quand même, c'est un début. Le mois prochain, je vais continuer : plus de conversations, plus de lecture, et peut-être un film français sans sous-titres. Peu à peu !",
 en:"A month ago, I didn't speak French at all. I only knew 'hello' and 'thank you'. Today, I can introduce myself, order at a restaurant, ask for directions and tell my day in the past tense. Of course, I still make a lot of mistakes and I don't understand everything when people speak fast. But still, it's a start. Next month I'll continue: more conversations, more reading, and maybe a French film without subtitles. Little by little!",
 bn:"এক মাস আগে আমি একদমই ফরাসি বলতাম না। শুধু 'bonjour' আর 'merci' জানতাম। আজ আমি নিজের পরিচয় দিতে, রেস্তোরাঁয় অর্ডার করতে, রাস্তা জিজ্ঞেস করতে আর অতীতে দিনের গল্প বলতে পারি। অবশ্যই এখনো অনেক ভুল করি আর দ্রুত বললে সব বুঝি না। তবুও, এটা একটা শুরু। আগামী মাসে চালিয়ে যাব: আরও কথা, আরও পড়া, হয়তো সাবটাইটেল ছাড়া একটা ফরাসি সিনেমা। ধীরে ধীরে!",
 q:[{q:"Qu'est-ce qu'il savait dire il y a un mois ?",o:["Rien du tout","Bonjour et merci","Toutes les bases"],a:1}]}
];

// ---------- ASL: word-order (gloss) practice ----------
DRILL.aslGloss = [
{en:"I am going to the store.",gloss:["STORE","I","GO"],why:"ASL is topic-comment: set the place first, then the action."},
{en:"What is your name?",gloss:["YOUR","NAME","WHAT"],why:"Wh-word goes at the END, with eyebrows DOWN."},
{en:"Yesterday I went to school.",gloss:["YESTERDAY","SCHOOL","I","GO"],why:"Time first — that replaces past-tense marking."},
{en:"She is happy.",gloss:["SHE","HAPPY"],why:"There is no sign for 'is'. Point + adjective."},
{en:"Do you like coffee?",gloss:["COFFEE","YOU","LIKE"],why:"Yes/no question = same order, eyebrows UP."},
{en:"My mother is deaf.",gloss:["MY","MOTHER","DEAF"],why:"No 'to be' verb in ASL."},
{en:"I don't understand.",gloss:["I","UNDERSTAND","NOT"],why:"Negation typically follows the verb, with a head shake."},
{en:"Where is the bathroom?",gloss:["BATHROOM","WHERE"],why:"Topic first, wh-word last."},
{en:"Tomorrow I will study ASL.",gloss:["TOMORROW","ASL","I","STUDY"],why:"Time → topic → subject → verb."},
{en:"I have two brothers.",gloss:["BROTHER","TWO","I","HAVE"],why:"Number follows the noun it counts."},
{en:"Do you want to eat?",gloss:["EAT","YOU","WANT"],why:"Topic first; raise eyebrows for the question."},
{en:"My name is Psy.",gloss:["MY","NAME","P-S-Y"],why:"Names are fingerspelled."}
];

// ---------- extra glossary: every remaining word in the readings/dialogues ----------
DRILL.extraGloss = {
"ami":["friend (m.)","বন্ধু"],"amis":["friends","বন্ধুরা"],"américaine":["American (f.)","আমেরিকান"],
"avis":["opinion","মতামত"],"bientôt":["soon","শীঘ্রই"],"bonne":["good (f.)","ভালো"],
"c'était":["it was","এটা ছিল"],"chemin":["way / path","পথ"],"chers":["dear / expensive (pl.)","প্রিয়/দামি"],
"commander":["to order","অর্ডার করা"],"comme":["like / as","মতো"],"communauté":["community","সম্প্রদায়"],
"composé":["compound (as in passé composé)","যৌগিক"],"connaissais":["knew (imparfait of connaître)","জানতাম"],
"continuer":["to continue","চালিয়ে যাওয়া"],"conversations":["conversations","কথোপকথন"],
"couche":["go to bed (se coucher)","ঘুমাতে যাওয়া"],"lève":["get up (se lever)","ওঠা"],
"levé":["got up (participle)","উঠেছি"],"d'erreurs":["of mistakes","ভুলের"],"erreurs":["mistakes","ভুল"],
"demander":["to ask (for)","জিজ্ঞেস করা"],"dernier":["last","গত"],"dernière":["last (f.)","গত"],
"deux":["two","দুই"],"trois":["three","তিন"],"sept":["seven","সাত"],
"devient":["becomes","হয়ে যায়"],"différente":["different (f.)","আলাদা"],"début":["beginning","শুরু"],
"ensemble":["together","একসাথে"],"essayer":["to try","চেষ্টা করা"],"frais":["fresh","তাজা"],
"grand":["big / tall","বড়"],"grande":["big (f.)","বড়"],"petite":["small (f.)","ছোট"],
"instrument":["instrument","বাদ্যযন্ত্র"],"j'aimerais":["I would like","আমি চাইব"],
"j'étudie":["I study","আমি পড়ি"],"étudié":["studied","পড়েছি"],"jeu":["game","খেলা"],
"journée":["day (the whole day)","সারাদিন"],"l'année":["the year","বছর"],"lecture":["reading","পড়া"],
"lent":["slow","ধীর"],"m'appelle":["am called (s'appeler)","আমার নাম"],"merci":["thank you","ধন্যবাদ"],
"midi":["noon","দুপুর"],"minuit":["midnight","মাঝরাত"],"minutes":["minutes","মিনিট"],
"moi":["me","আমি/আমাকে"],"toi":["you","তুমি/তোমাকে"],"mois":["month","মাস"],
"même":["same / even","একই/এমনকি"],"naturel":["natural","স্বাভাবিক"],"objectif":["goal","লক্ষ্য"],
"parc":["park","পার্ক"],"parce":["because (parce que)","কারণ"],"parlais":["spoke (imparfait)","বলতাম"],
"passé":["past","অতীত"],"pense":["think (penser)","ভাবি"],"prochain":["next","আগামী"],
"prochaine":["next (f.)","আগামী"],"prononciation":["pronunciation","উচ্চারণ"],
"présenter":["to introduce","পরিচয় দেওয়া"],"près":["near","কাছে"],"raconter":["to tell / narrate","গল্প বলা"],
"rencontrer":["to meet","দেখা করা"],"seulement":["only","শুধু"],"sourde":["Deaf (f.)","বধির"],
"sous-titres":["subtitles","সাবটাইটেল"],"surtout":["especially","বিশেষ করে"],"tard":["late","দেরিতে"],
"vidéo":["video","ভিডিও"],"vidéos":["videos","ভিডিও"],"visage":["face","মুখ"],"vite":["fast","দ্রুত"],
"ça":["that / it","এটা"],"encore":["still / again","এখনো/আবার"],"qu'est-ce":["what (question)","কী"],
"quand":["when","কখন"],"suivez":["follow (suivre)","অনুসরণ করুন"],"voici":["here is","এই যে"],
"voilà":["there you go","এই নিন"],"carte":["menu / card / map","মেনু"],"boisson":["drink","পানীয়"],
"carafe":["carafe / jug","জগ"],"taille":["size","সাইজ"],"celle-ci":["this one (f.)","এটা"],
"fièvre":["fever","জ্বর"],"reposez":["rest (se reposer)","বিশ্রাম নিন"],"buvez":["drink (imperative)","পান করুন"],
"tournez":["turn (imperative)","ঘুরুন"],"allez":["go (imperative / vous form)","যান"],
"sers":["serve (servir)","পরিবেশন করা"],"réservation":["reservation","রিজার্ভেশন"],
"génial":["great / awesome","দারুণ"],"super":["great","দারুণ"],"pardon":["sorry / excuse me","দুঃখিত"],
"lentement":["slowly","ধীরে"],"cherche":["look for (chercher)","খুঁজছি"],"coûte":["costs (coûter)","দাম"],
"euros":["euros","ইউরো"],"vingt":["twenty","বিশ"],"trente":["thirty","ত্রিশ"],
"appétit":["appetite (bon appétit!)","খিদে"],"addition":["the bill","বিল"],"route":["road (bonne route!)","পথ"],
"salut":["hi / bye","হাই"],"enchanté":["nice to meet you","পরিচিত হয়ে ভালো লাগলো"],
"étudiant":["student","ছাত্র"],"vie":["life","জীবন"],"fait":["does / did (faire)","করে/করেছে"],
"acheté":["bought","কিনেছি"],"venus":["came (pl.)","এসেছে"],"resté":["stayed","থেকেছি"],
"restés":["stayed (pl.)","থেকেছি"],"allé":["went","গিয়েছি"],"allés":["went (pl.)","গিয়েছি"],
"pris":["took","নিয়েছি"],"regardé":["watched","দেখেছি"],"joué":["played","খেলেছি"],
"appris":["learned","শিখেছি"],"écouté":["listened","শুনেছি"],"parlé":["spoke","বলেছি"],
"compris":["understood","বুঝেছি"],"travaillé":["worked","কাজ করেছি"],"mangé":["ate","খেয়েছি"],
"plu":["rained (pleuvoir)","বৃষ্টি হয়েছে"],"dit":["said","বলেছে"],"arriver":["to arrive / to manage","পৌঁছানো"],
"sûr":["sure (bien sûr = of course)","নিশ্চিত"],"tout":["all / everything","সব"],"toute":["all (f.)","সব"],
"beaucoup":["a lot","অনেক"],"quelque":["some","কিছু"],"chose":["thing","জিনিস"],
"petit-déjeuner":["breakfast","সকালের নাস্তা"],"après":["after","পরে"],"avant":["before","আগে"],
"heures":["hours / o'clock","ঘণ্টা"],"semaine":["week","সপ্তাহ"],"matin":["morning","সকাল"],
"soir":["evening","সন্ধ্যা"],"samedi":["Saturday","শনিবার"],"lundi":["Monday","সোমবার"],
"mardi":["Tuesday","মঙ্গলবার"],"mercredi":["Wednesday","বুধবার"],"hier":["yesterday","গতকাল"],
"aujourd'hui":["today","আজ"],"maintenant":["now","এখন"]
};

// ---------- tricky gender pairs worth drilling ----------
DRILL.trickyGender = [
["le problème","masculine despite the -e ending"],["le programme","masculine (-me words from Greek)"],
["la photo","feminine (short for photographie)"],["le musée","masculine despite -ée"],
["l'eau","FEMININE — la belle eau"],["le livre","masculine (la livre = a pound!)"],
["la main","feminine"],["le magasin","masculine"],["la fin","feminine"],
["le silence","masculine"],["la nation","feminine (-tion is always feminine)"],
["le fromage","masculine (-age is usually masculine)"],["la page","FEMININE — exception to -age"],
["la plage","FEMININE — another -age exception"],["le voyage","masculine"],
["la voiture","feminine"],["le travail","masculine"],["la santé","feminine (-té is feminine)"],
["le café","masculine (-é is usually masculine)"],["la clé","FEMININE — exception"]
];
