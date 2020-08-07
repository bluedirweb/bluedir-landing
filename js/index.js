var doc, bod, htm;
addEventListener('load', function(){
  doc = document; bod = doc.body; htm = doc.documentElement;
  addEventListener('scroll', function(){
    doc.querySelector('header').style.backgroundColor = htm.scrollTop > 300 ? '#00a2c7' : 'transparent';
    document.querySelector('header').style.transition = "all 2s";
  });
});