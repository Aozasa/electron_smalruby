const { spawn } = require('child_process');
const div = document.getElementById('box11');
const p = document.createElement('p');
// パスをespの保存フォルダに変更する
// 環境変数が読み込まれないのでexport.shを実行する必要あり
const ret = spawn('cd', ['/home/user/esp/hello_world', '&&', '.', '&&',  '/home/user/esp/esp-idf/install.sh ', '&&', '.', '&&',  '/home/user/esp/esp-idf/export.sh ', '&&', 'make','clean'] ,{ shell: true}); 
ret.stderr.on('data', (err) => {
    console.log(err); 
    p.textContent += err;
    p.textContent += "<br>";
    div.innerHTML = p.textContent;  
})
ret.stdout.on('data', (data) => {
    p.textContent += data;
    p.textContent += "<br>";
    div.innerHTML = p.textContent;         
})

