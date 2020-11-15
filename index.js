// Code your solutions in this file

function countDown(x){
  
  while(x>=0){
    console.log(x);
    x--;
  }
}
countDown(11);

// Code your solutions in this file
const t = ['Lisa', 'Kaitlin', 'Jan'];
const s = 'surprise';

function writeCards(w,z){
  for(let i=0; i<w.length;i++){
    console.log('Thank you, '+w[i]+', for the wonderful '+z+' gift!')
  }
  return w;
}
writeCards(t,s);