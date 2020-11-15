// Code your solutions in this file

function countDown(x){
  let i=x; 
  while(i>0){
    console.log(i);
    i--;
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
}
writeCards(t,s);