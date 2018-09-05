window.onload = function () {
  let arrLi = document.getElementsByTagName('li'),
      arrcheck = document.getElementsByClassName('check-box'),
      arrSub = document.getElementsByClassName('subtract'),
      arradd = document.getElementsByClassName('add'),
      goodsNum = document.getElementsByTagName('input'),
      arrpric = document.getElementsByClassName('good-price'),
      ogoodsSum = document.getElementsByClassName('goods-sum'),
      oSumNum = document.getElementById('sum-num'),
      oSumPri = document.getElementById('sum-price');

      for(let i=0; i<arrLi.length; i++){
        let price = arrpric[i].innerHTML.replace(/[^0-9]/ig,"");
        let num = 0;

        arrcheck[i].onclick = function(){
          arrcheck[i].classList.toggle('active');
        }

        arrSub[i].onclick = function(){
          num <= 0 ? num = 0:num--;
          goodsNum[i].value = num;
          ogoodsSum[i].innerHTML = '￥ ' + price*num/100 + '.00';
          total();
        }
        arradd[i].onclick = function(){
          num++;
          goodsNum[i].value = num;
          ogoodsSum[i].innerHTML = '￥ ' + price*num/100 + '.00';
          total();
        }
      }

      let total = function(){
        let sumNum = 0,
          sumPric = 0;
        for(let j=0; j<arrLi.length; j++){
          sumNum += parseInt(goodsNum[j].value);
          sumPric += parseInt(ogoodsSum[j].innerHTML.replace(/[^0-9]/ig,""));
        }
        oSumNum.innerHTML = sumNum;
        oSumPri.innerHTML = '￥ ' + sumPric/100 + '.00'
      };

}