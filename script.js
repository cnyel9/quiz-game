const _0x5ba227=_0x5f10;(function(_0x32e670,_0x272dd1){const _0x253857=_0x5f10,_0x23dcb2=_0x32e670();while(!![]){try{const _0x2f4918=parseInt(_0x253857(0x146))/0x1*(-parseInt(_0x253857(0x13b))/0x2)+-parseInt(_0x253857(0x148))/0x3+-parseInt(_0x253857(0x147))/0x4*(-parseInt(_0x253857(0x17b))/0x5)+-parseInt(_0x253857(0x127))/0x6*(parseInt(_0x253857(0x13e))/0x7)+-parseInt(_0x253857(0x15a))/0x8*(parseInt(_0x253857(0x140))/0x9)+-parseInt(_0x253857(0x13a))/0xa+parseInt(_0x253857(0x132))/0xb;if(_0x2f4918===_0x272dd1)break;else _0x23dcb2['push'](_0x23dcb2['shift']());}catch(_0x170812){_0x23dcb2['push'](_0x23dcb2['shift']());}}}(_0x3148,0x2f58a));function _0x5f10(_0x28429c,_0x46301c){const _0x3148a2=_0x3148();return _0x5f10=function(_0x5f1044,_0x15ba87){_0x5f1044=_0x5f1044-0x11b;let _0x20800b=_0x3148a2[_0x5f1044];return _0x20800b;},_0x5f10(_0x28429c,_0x46301c);}class QuizGame{constructor(){const _0x1d7093=_0x5f10;this['totalQuestions']=0x0,this[_0x1d7093(0x125)]=0x0,this[_0x1d7093(0x13f)]=0x0,this['allQuestions']=[],this[_0x1d7093(0x167)]=[],this['totalScore']=0x0;}async['initializeQuiz'](_0x4668f1=null){const _0x3cb9b8=_0x5f10;try{this[_0x3cb9b8(0x13d)]=await localforage['getItem'](_0x3cb9b8(0x13d))||0x0;if(_0x4668f1){const _0xb494d5=quizData[_0x3cb9b8(0x128)](_0x298632=>_0x298632[_0x3cb9b8(0x176)]===_0x4668f1);this[_0x3cb9b8(0x180)]=_0xb494d5?_0xb494d5[_0x3cb9b8(0x121)]:[];}else this[_0x3cb9b8(0x180)]=quizData[_0x3cb9b8(0x14b)](_0x423a4f=>_0x423a4f[_0x3cb9b8(0x121)]);this['selectedQuestions']=this[_0x3cb9b8(0x168)](this[_0x3cb9b8(0x180)])['slice'](0x0,0xa),this[_0x3cb9b8(0x15d)]=this[_0x3cb9b8(0x167)][_0x3cb9b8(0x16d)],this[_0x3cb9b8(0x13f)]=0x0,this[_0x3cb9b8(0x125)]=0x0,this['updateQuestionProgress'](),this[_0x3cb9b8(0x126)]();}catch(_0x3820d7){console[_0x3cb9b8(0x152)](_0x3cb9b8(0x172),_0x3820d7),alert(_0x3cb9b8(0x14c));}}[_0x5ba227(0x168)](_0x2af630){const _0x50e4ae=_0x5ba227;return _0x2af630['sort'](()=>Math[_0x50e4ae(0x16b)]()-0.5);}['updateQuestionProgress'](){const _0x4e8311=_0x5ba227,_0x46e8dc=document[_0x4e8311(0x177)](_0x4e8311(0x17d));_0x46e8dc&&(_0x46e8dc[_0x4e8311(0x11f)]=_0x4e8311(0x162)+(this[_0x4e8311(0x125)]+0x1)+'\x20dari\x20'+this[_0x4e8311(0x15d)]);}['loadQuiz'](){const _0x35575b=_0x5ba227,_0x41407b=document['getElementById']('question'),_0x15db6a=document[_0x35575b(0x177)](_0x35575b(0x178));if(this['currentQuiz']>=this[_0x35575b(0x15d)]){this[_0x35575b(0x138)]();return;}const _0x49e22e=this['selectedQuestions'][this['currentQuiz']];_0x41407b['innerText']=_0x49e22e[_0x35575b(0x163)],_0x15db6a[_0x35575b(0x131)]='',this[_0x35575b(0x168)](_0x49e22e[_0x35575b(0x178)])[_0x35575b(0x14e)](_0x3ff513=>{const _0x2f3db1=_0x35575b,_0x39f629=document[_0x2f3db1(0x157)](_0x2f3db1(0x130));_0x39f629[_0x2f3db1(0x11f)]=_0x3ff513,_0x39f629[_0x2f3db1(0x129)]['add']('w-full','py-3','rounded-lg',_0x2f3db1(0x12d),_0x2f3db1(0x11e),'hover:bg-purple-200',_0x2f3db1(0x161),_0x2f3db1(0x12f),_0x2f3db1(0x175),_0x2f3db1(0x145)),_0x39f629['addEventListener'](_0x2f3db1(0x16c),()=>this[_0x2f3db1(0x133)](_0x3ff513)),_0x15db6a['appendChild'](_0x39f629);}),this['updateQuestionProgress']();}async[_0x5ba227(0x133)](_0x17aa9a){const _0x5a576a=_0x5ba227,_0x5de423=this[_0x5a576a(0x167)][this[_0x5a576a(0x125)]];_0x17aa9a===_0x5de423[_0x5a576a(0x16a)]&&this[_0x5a576a(0x13f)]++,this[_0x5a576a(0x125)]++,this[_0x5a576a(0x125)]<this[_0x5a576a(0x15d)]?this[_0x5a576a(0x126)]():await this[_0x5a576a(0x138)]();}async[_0x5ba227(0x138)](){const _0x10c367=_0x5ba227;try{this[_0x10c367(0x13d)]+=this['score'],await localforage[_0x10c367(0x16f)](_0x10c367(0x13d),this[_0x10c367(0x13d)]),await this[_0x10c367(0x14f)](this[_0x10c367(0x13f)]),window[_0x10c367(0x134)]['href']='result.html?score='+this[_0x10c367(0x13f)]+'&totalQuestions='+this[_0x10c367(0x15d)]+_0x10c367(0x170)+this[_0x10c367(0x13d)];}catch(_0x932d40){console['error'](_0x10c367(0x151),_0x932d40),alert(_0x10c367(0x142));}}async[_0x5ba227(0x166)](){const _0x4abbdc=_0x5ba227;let _0x44804d=await localforage['getItem'](_0x4abbdc(0x135));return!_0x44804d&&(_0x44804d=this[_0x4abbdc(0x15f)](),await localforage[_0x4abbdc(0x16f)]('deviceId',_0x44804d)),_0x44804d;}[_0x5ba227(0x15f)](){const _0xfbe233=_0x5ba227;return _0xfbe233(0x14d)+Math[_0xfbe233(0x16b)]()[_0xfbe233(0x120)](0x24)[_0xfbe233(0x160)](0x2,0x9);}async[_0x5ba227(0x14f)](_0x3dc3ec){const _0xe3504e=_0x5ba227;try{const _0x172053=await localforage['getItem'](_0xe3504e(0x136))||_0xe3504e(0x154),_0x4f6720=await this['getUniqueDeviceId'](),_0x779c05=await localforage[_0xe3504e(0x158)](_0xe3504e(0x171))||_0xe3504e(0x179);let _0x2dc411=await localforage[_0xe3504e(0x158)]('leaderboard')||[];const _0x1a069b=_0x2dc411[_0xe3504e(0x13c)](_0x4d8374=>_0x4d8374[_0xe3504e(0x155)]===_0x172053&&_0x4d8374[_0xe3504e(0x135)]===_0x4f6720);if(_0x1a069b!==-0x1){const _0x2d058a=_0x2dc411[_0x1a069b];_0x2dc411[_0x1a069b]={'name':_0x172053,'deviceId':_0x4f6720,'score':_0x3dc3ec,'totalScore':(_0x2d058a[_0xe3504e(0x13d)]||0x0)+_0x3dc3ec,'date':new Date()[_0xe3504e(0x141)](),'profileImage':_0x779c05,'quizCount':(_0x2d058a[_0xe3504e(0x17f)]||0x0)+0x1,'bestScore':Math['max'](_0x2d058a['bestScore']||0x0,_0x3dc3ec)};}else _0x2dc411[_0xe3504e(0x17a)]({'name':_0x172053,'deviceId':_0x4f6720,'score':_0x3dc3ec,'totalScore':_0x3dc3ec,'date':new Date()[_0xe3504e(0x141)](),'profileImage':_0x779c05,'quizCount':0x1,'bestScore':_0x3dc3ec});_0x2dc411[_0xe3504e(0x159)]((_0x13c135,_0x4ff16c)=>_0x4ff16c['totalScore']-_0x13c135[_0xe3504e(0x13d)]),_0x2dc411=_0x2dc411[_0xe3504e(0x165)](0x0,0xa),await localforage[_0xe3504e(0x16f)](_0xe3504e(0x169),_0x2dc411);}catch(_0x4b975b){console[_0xe3504e(0x152)](_0xe3504e(0x164),_0x4b975b);throw _0x4b975b;}}['getQuizCategories'](){const _0x480223=_0x5ba227;return quizData[_0x480223(0x149)](_0x2fd3f2=>_0x2fd3f2[_0x480223(0x176)]);}}function logout(){const _0x8b55aa=_0x5ba227;localforage['removeItem'](_0x8b55aa(0x136))[_0x8b55aa(0x122)](()=>{const _0x761bc5=_0x8b55aa;window[_0x761bc5(0x134)]['href']=_0x761bc5(0x11c);});}document['addEventListener'](_0x5ba227(0x11b),()=>{const _0x227182=_0x5ba227;if(document[_0x227182(0x177)]('question')&&document[_0x227182(0x177)](_0x227182(0x178))){const _0xd8c8f5=new QuizGame(),_0x46cab9=new URLSearchParams(window[_0x227182(0x134)]['search']),_0x3a6e0e=_0x46cab9['get'](_0x227182(0x176));_0x3a6e0e?_0xd8c8f5[_0x227182(0x139)](_0x3a6e0e):_0xd8c8f5[_0x227182(0x139)]();}});function _0x3148(){const _0xa9752=['193784nPtPkk','href','addEventListener','totalQuestions','Cukup\x20Baik\x20😊','generateUniqueId','substr','mb-2','Pertanyaan\x20','question','Gagal\x20menyimpan\x20skor','slice','getUniqueDeviceId','selectedQuestions','shuffleQuestions','leaderboard','correct','random','click','length','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-6\x20flex\x20justify-center\x20space-x-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22quiz.html\x22\x20class=\x22bg-purple-500\x20text-white\x20py-3\x20px-6\x20rounded-lg\x20hover:bg-purple-600\x20transition\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Main\x20Lagi\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22leaderboard.html\x22\x20class=\x22bg-green-500\x20text-white\x20py-3\x20px-6\x20rounded-lg\x20hover:bg-green-600\x20transition\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Lihat\x20Peringkat\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20','setItem','&totalScore=','profileImage','Gagal\x20menginisialisasi\x20quiz:','text-white','search','duration-300','category','getElementById','options','https://via.placeholder.com/50?text=Profil','push','232085iRKFwu','get','question-progress','Bagus!\x20👍','quizCount','allQuestions','DOMContentLoaded','index.html','hover:bg-purple-600','text-purple-700','innerText','toString','questions','then','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-4\x20text-gray-600\x22>Total\x20Skor\x20Anda:\x20','quiz-result','currentQuiz','loadQuiz','6NQzISs','find','classList','quiz.html?category=','bg-purple-500','quiz-categories','bg-purple-100','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-lg\x20mb-4\x22>Persentase:\x20','transition','button','innerHTML','11564377GjDIwV','selectOption','location','deviceId','username','getQuizCategories','finishQuiz','initializeQuiz','885380MjtrjL','34GUByOY','findIndex','totalScore','1900990iOrRYr','score','45JNLjic','toLocaleDateString','Terjadi\x20kesalahan\x20saat\x20menyimpan\x20skor.','%</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-2xl\x20font-semibold\x20text-green-600\x22>','Luar\x20Biasa!\x20🏆','ease-in-out','8924oSnAsQ','4Bnpkbb','812589WPrbHH','map','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22text-3xl\x20font-bold\x20text-purple-600\x20mb-4\x22>Hasil\x20Quiz</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bg-white\x20rounded-xl\x20shadow-lg\x20p-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-xl\x20mb-2\x22>Skor:\x20','flatMap','Terjadi\x20kesalahan\x20saat\x20mempersiapkan\x20kuis.','device_','forEach','saveOrUpdateScore','Ayo\x20Belajar\x20Lagi\x20💪','Gagal\x20menyelesaikan\x20quiz:','error','block','Pemain\x20Misterius','name','round','createElement','getItem','sort'];_0x3148=function(){return _0xa9752;};return _0x3148();}function displayQuizCategories(){const _0x2bbbad=_0x5ba227,_0x48155f=new QuizGame(),_0x333d40=document[_0x2bbbad(0x177)](_0x2bbbad(0x12c));if(_0x333d40){const _0xda6f69=_0x48155f[_0x2bbbad(0x137)]();_0xda6f69['forEach'](_0x25a8e3=>{const _0x480730=_0x2bbbad,_0x4be11a=document[_0x480730(0x157)]('a');_0x4be11a[_0x480730(0x15b)]=_0x480730(0x12a)+_0x25a8e3,_0x4be11a[_0x480730(0x129)]['add'](_0x480730(0x153),_0x480730(0x12b),_0x480730(0x173),'py-3','px-6','rounded-lg','text-center','mb-4',_0x480730(0x11d),_0x480730(0x12f),'duration-300'),_0x4be11a['textContent']=_0x25a8e3,_0x333d40['appendChild'](_0x4be11a);});}}function displayQuizResult(){const _0x254e8b=_0x5ba227,_0x1f1137=new URLSearchParams(window['location'][_0x254e8b(0x174)]),_0x3ae15f=_0x1f1137['get'](_0x254e8b(0x13f)),_0x2c915b=_0x1f1137[_0x254e8b(0x17c)](_0x254e8b(0x15d)),_0x5d79cd=_0x1f1137['get']('totalScore'),_0x1c351c=document[_0x254e8b(0x177)](_0x254e8b(0x124));if(_0x1c351c){const _0x1994c1=Math[_0x254e8b(0x156)](_0x3ae15f/_0x2c915b*0x64);let _0x3e3d52='';if(_0x1994c1>=0x50)_0x3e3d52=_0x254e8b(0x144);else{if(_0x1994c1>=0x3c)_0x3e3d52=_0x254e8b(0x17e);else _0x1994c1>=0x28?_0x3e3d52=_0x254e8b(0x15e):_0x3e3d52=_0x254e8b(0x150);}_0x1c351c[_0x254e8b(0x131)]=_0x254e8b(0x14a)+_0x3ae15f+'\x20/\x20'+_0x2c915b+_0x254e8b(0x12e)+_0x1994c1+_0x254e8b(0x143)+_0x3e3d52+_0x254e8b(0x123)+_0x5d79cd+_0x254e8b(0x16e);}}document[_0x5ba227(0x15c)](_0x5ba227(0x11b),()=>{const _0x2a5075=_0x5ba227;document[_0x2a5075(0x177)]('quiz-categories')&&displayQuizCategories(),document[_0x2a5075(0x177)](_0x2a5075(0x124))&&displayQuizResult();});
