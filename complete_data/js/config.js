//パラメータ取得
const getParam = ((name, url) => {
	if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
})

// 音声設定
const setSpeech = (() => {
	return new Promise(
		function (resolve, reject) {
			let synth = window.speechSynthesis;
			let id;
			id = setInterval(() => {
				if (synth.getVoices().length !== 0) {
					resolve(synth.getVoices());
					clearInterval(id);
				}
			}, 10);
		}
	)
})

let uttr = new SpeechSynthesisUtterance()
uttr.lang = 'en-US';
uttr.pitch = 1.7;
uttr.rate = 0.7;
setSpeech().then((voices) => {
	uttr.voice = voices[33];
});





//ランク
const getRank = (() => {
	if(checks.length >= 10) return '小忍者';
	if(checks.length >= 50) return '中忍者';
	if(checks.length >= 100) return '大忍者';
	return '見習い';
});






// チェックされた問題を取得
let checks = [];
if( localStorage.getItem('check') ) {
	checks = localStorage.getItem('check').split(',').map((elem) => {
		return Number(elem);
	});
}















